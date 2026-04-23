from core.services import FALLBACK_STATIONS, get_nearby_station_cards, get_station_card_by_id


def order_flow_context(request):
    order = request.session.get("go_fuel_order", {})
    station_card = None
    if order.get("station_id"):
        station_card = get_station_card_by_id(order["station_id"])

    return {
        "go_fuel_order": order,
        "go_fuel_order_station": station_card,
        "go_fuel_order_stations": get_nearby_station_cards(limit=4) or FALLBACK_STATIONS,
    }
