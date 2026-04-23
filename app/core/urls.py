from django.urls import path

from core.views import (
    account_page,
    add_car_details_page,
    attendant_dashboard,
    dispenser_page,
    fuel_quantity_page,
    landing_page,
    login_page,
    logout_page,
    manager_dashboard,
    news_page,
    order_page,
    payment_callback,
    payment_page,
    price_tracker_page,
    promotions_page,
    qr_scan_page,
    select_station_view,
    station_detail_page,
    stations_page,
)


app_name = "core"

urlpatterns = [
    path("", landing_page, name="landing"),
    path("mobile/login/", login_page, name="login"),
    path("mobile/account/", account_page, name="account"),
    path("mobile/news/", news_page, name="news"),
    path("mobile/promotions/", promotions_page, name="promotions"),
    path("mobile/order/", order_page, name="order"),
    path("mobile/car-details/", add_car_details_page, name="car-details"),
    path("mobile/dispenser/", dispenser_page, name="dispenser"),
    path("mobile/fuel-quantity/", fuel_quantity_page, name="fuel-quantity"),
    path("mobile/payment/", payment_page, name="payment"),
    path("mobile/logout/", logout_page, name="logout"),
    path("prices/", price_tracker_page, name="prices"),
    path("prices/stations/", stations_page, name="stations"),
    path("select-station/<int:station_id>/", select_station_view, name="select-station"),
    path("stations/<int:station_id>/", station_detail_page, name="station-detail"),
    path("dashboard/attendant/", attendant_dashboard, name="attendant-dashboard"),
    path("dashboard/manager/", manager_dashboard, name="manager-dashboard"),
    path("qr/<str:qr_code>/", qr_scan_page, name="qr-scan"),
    path("payment/callback/", payment_callback, name="payment-callback"),
]
