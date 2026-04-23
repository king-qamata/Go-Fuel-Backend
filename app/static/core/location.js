(function () {
    const storageKey = "gofuel:last-location";
    const triggerSelector = "[data-geolocate-trigger]";
    const statusSelector = "[data-geolocate-status]";
    const linkSelector = "[data-location-link]";
    const pillSelector = "[data-location-pill]";
    const cardSelector = "[data-station-card]";
    const stationListSelector = "[data-stations-list]";
    const mapSelector = "[data-station-map]";

    let mapInstance = null;
    let markerLayer = null;

    function readStoredLocation() {
        try {
            const raw = window.localStorage.getItem(storageKey);
            if (!raw) {
                return null;
            }
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed.lat !== "number" || typeof parsed.lng !== "number") {
                return null;
            }
            return parsed;
        } catch (error) {
            return null;
        }
    }

    function writeStoredLocation(location) {
        try {
            window.localStorage.setItem(storageKey, JSON.stringify(location));
        } catch (error) {
            return;
        }
    }

    function readJsonScript(id) {
        const node = document.getElementById(id);
        if (!node) {
            return null;
        }
        try {
            return JSON.parse(node.textContent);
        } catch (error) {
            return null;
        }
    }

    function formatCoordinate(value) {
        return Number(value).toFixed(6);
    }

    function updateLinks(location) {
        document.querySelectorAll(linkSelector).forEach((link) => {
            const url = new URL(link.href, window.location.origin);
            url.searchParams.set("lat", formatCoordinate(location.lat));
            url.searchParams.set("lng", formatCoordinate(location.lng));
            link.href = url.toString();
        });
    }

    function updatePills(location) {
        document.querySelectorAll(pillSelector).forEach((pill) => {
            if (pill.textContent.includes("Viewing nearby results around")) {
                pill.textContent = "Viewing nearby results around " +
                    formatCoordinate(location.lat) + ", " + formatCoordinate(location.lng);
                return;
            }
            pill.textContent = "Using location " +
                formatCoordinate(location.lat) + ", " + formatCoordinate(location.lng);
        });
    }

    function updateStatus(message, isError) {
        document.querySelectorAll(statusSelector).forEach((node) => {
            node.textContent = message;
            node.classList.toggle("is-error", Boolean(isError));
        });
    }

    function createStationCard(station, detailed) {
        const article = document.createElement("article");
        article.className = "station-card " + station.status_tone + (detailed ? " detailed" : "");
        article.setAttribute("data-station-card", "");

        if (detailed) {
            const title = station.detail_url
                ? `<h2><a href="${station.detail_url}">${station.name}</a></h2>`
                : `<h2>${station.name}</h2>`;
            article.innerHTML = `
                <div class="station-meta">
                    <p class="card-label">${station.distance}</p>
                    ${title}
                    <p class="station-address">${station.latitude}, ${station.longitude}</p>
                    <p>${station.inventory_note}</p>
                </div>
                <div class="station-status">
                    <p class="station-price">${station.price}</p>
                    <strong>${station.availability}</strong>
                </div>
            `;
            return article;
        }

        article.innerHTML = `
            <div>
                <h3>${station.name}</h3>
                <p>${station.distance} away</p>
            </div>
            <div>
                <p class="station-price">${station.price}</p>
                <p>${station.availability}</p>
            </div>
        `;

        if (!station.detail_url) {
            return article;
        }

        const link = document.createElement("a");
        link.className = "station-card-link";
        link.href = station.detail_url;
        link.appendChild(article);
        return link;
    }

    function updateStationCards(stations) {
        const explicitList = document.querySelector(stationListSelector);
        const fallbackList = document.querySelector(".station-list");
        const list = explicitList || fallbackList;

        if (!list || !Array.isArray(stations) || stations.length === 0) {
            return;
        }

        const detailed = list.classList.contains("full-width");
        list.querySelectorAll(cardSelector).forEach((card) => card.remove());
        list.querySelectorAll(".station-card-link").forEach((card) => card.remove());
        stations.forEach((station) => {
            list.appendChild(createStationCard(station, detailed));
        });
    }

    function ensureLeafletMap(userLocation) {
        const mapElement = document.querySelector(mapSelector);
        if (!mapElement || !window.L) {
            return null;
        }

        if (!mapInstance) {
            mapInstance = window.L.map(mapElement).setView([userLocation.lat, userLocation.lng], 13);
            window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapInstance);
        }

        if (!markerLayer) {
            markerLayer = window.L.layerGroup().addTo(mapInstance);
        }

        return mapInstance;
    }

    function collectInitialStations() {
        const detailData = readJsonScript("station-detail-map-data");
        if (detailData) {
            return [detailData];
        }
        const stationsData = readJsonScript("stations-map-data");
        if (Array.isArray(stationsData)) {
            return stationsData;
        }
        return [];
    }

    function updateMapMarkers(stations, userLocation) {
        if (!Array.isArray(stations) || stations.length === 0) {
            return;
        }

        const map = ensureLeafletMap(userLocation);
        if (!map || !markerLayer) {
            return;
        }

        markerLayer.clearLayers();
        const bounds = [];
        window.L.circleMarker([userLocation.lat, userLocation.lng], {
            radius: 8,
            color: "#1d4ed8",
            fillColor: "#1d4ed8",
            fillOpacity: 1,
        })
            .bindPopup("Your location")
            .addTo(markerLayer);
        bounds.push([userLocation.lat, userLocation.lng]);

        const colors = {
            available: "#0b6e4f",
            warning: "#b26a00",
            empty: "#b42318",
        };

        stations.forEach((station, index) => {
            const lat = Number(station.latitude);
            const lng = Number(station.longitude);
            if (Number.isNaN(lat) || Number.isNaN(lng)) {
                return;
            }

            window.L.circleMarker([lat, lng], {
                radius: 10,
                color: colors[station.status_tone] || colors.available,
                fillColor: colors[station.status_tone] || colors.available,
                fillOpacity: 0.92,
            })
                .bindPopup(
                    `<strong>${index + 1}. ${station.name}</strong><br>${station.price}<br>${station.availability}`
                )
                .addTo(markerLayer);
            bounds.push([lat, lng]);
        });

        if (bounds.length === 1) {
            map.setView(bounds[0], 14);
        } else {
            map.fitBounds(bounds, {padding: [30, 30]});
        }
    }

    function fetchStations(location) {
        const apiRoot = document.body.dataset.stationsApi;
        if (!apiRoot) {
            return Promise.resolve();
        }

        const url = new URL(apiRoot, window.location.origin);
        url.searchParams.set("lat", formatCoordinate(location.lat));
        url.searchParams.set("lng", formatCoordinate(location.lng));

        return window.fetch(url.toString(), {
            headers: {"X-Requested-With": "XMLHttpRequest"},
        })
            .then((response) => response.ok ? response.json() : null)
            .then((payload) => {
                if (payload && payload.stations) {
                    updateStationCards(payload.stations);
                    updateMapMarkers(payload.stations, {
                        lat: Number(payload.requested_location.latitude),
                        lng: Number(payload.requested_location.longitude),
                    });
                }
            })
            .catch(() => {
                updateStatus(
                    "Location was found, but nearby stations could not be refreshed right now.",
                    true,
                );
            });
    }

    function applyLocation(location) {
        updateLinks(location);
        updatePills(location);
        updateStatus(
            "Using your browser location to personalize nearby fuel stations.",
            false,
        );
        fetchStations(location);
    }

    function requestLocation() {
        if (!("geolocation" in navigator)) {
            updateStatus("This browser does not support location access.", true);
            return;
        }

        updateStatus("Requesting your location...", false);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                writeStoredLocation(location);
                applyLocation(location);

                if (window.location.pathname.includes("/prices/stations/")) {
                    const currentUrl = new URL(window.location.href);
                    currentUrl.searchParams.set("lat", formatCoordinate(location.lat));
                    currentUrl.searchParams.set("lng", formatCoordinate(location.lng));
                    window.location.replace(currentUrl.toString());
                }
            },
            () => {
                updateStatus(
                    "Location access was denied, so GoFuel is still using the default nearby area.",
                    true,
                );
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 300000,
            },
        );
    }

    document.addEventListener("DOMContentLoaded", function () {
        const initialMap = document.querySelector(mapSelector);
        if (initialMap) {
            const userLocation = {
                lat: Number(initialMap.dataset.userLat),
                lng: Number(initialMap.dataset.userLng),
            };
            updateMapMarkers(collectInitialStations(), userLocation);
        }

        const savedLocation = readStoredLocation();
        if (savedLocation) {
            applyLocation(savedLocation);
        }

        document.querySelectorAll(triggerSelector).forEach((trigger) => {
            trigger.addEventListener("click", requestLocation);
        });
    });
})();
