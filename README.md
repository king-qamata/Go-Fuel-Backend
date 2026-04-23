# Go Fuel Backend

`Go Fuel Backend` is a cleaned-up Django starter for the services in this repository. The project now ships with modern Django settings, a simple health endpoint, container support, and a minimal test to verify the app boots correctly.

It also includes a first-pass product UI for the new GoFuel direction: helping car owners compare fuel prices and station availability before buying.

The UI has been refined against the "Self Service Mobile Application Interface pdf.pdf" specification, implementing screens for a self-service mobile app.

## Mobile Application Screens

Based on the PDF specification, the following screens have been implemented or planned:

1. **Customer location on a map**: Shows nearest station or general location in city. Requests location permission.
2. **Station details**: Tap on station for more information and possible services.
3. **Customer's account**: Account with history and balance.
4. **Customer Login Details**: Login screen.
5. **Add car details**: Car information setup.
6. **News icon**: Company information sharing.
7. **Promotion and offers**: Special offers.
8. **Order information**: Self-service before station visiting.
9. **Payment method**: Add bank card.
10. **Station selection (STEP#1)**: List of stations with numbers, city, and address.
11. **Dispenser and fuel selection (STEP#2)**: Select dispenser and fuel type.
12. **Fuel type and quantity (STEP#3)**: Select fuel type, liters, or amount.
13. **Payment method (STEP#4)**: Choose payment (Momo/Card/Voucher/etc).
14. **Others**: Additional features.

## Order Flow

The app supports a session-based self-service fuel ordering flow:

1. **Order Information** (`/mobile/order/`): View existing orders and start new order.
2. **Station Selection (STEP#1)** (`/prices/stations/`): Select a station for ordering.
3. **Dispenser and Fuel Selection (STEP#2)** (`/mobile/dispenser/`): Choose fuel type and dispenser number.
4. **Fuel Quantity (STEP#3)** (`/mobile/fuel-quantity/`): Specify liters or amount to purchase.
5. **Payment Method (STEP#4)** (`/mobile/payment/`): Select payment option and complete order.

Orders are saved to the database for authenticated users, with payment records tracked.

## What was fixed

- Upgraded the project baseline from an old Django 3 scaffold to Django 5.2-compatible settings.
- Replaced hard-coded local-only settings with environment-driven configuration.
- Added a small API root at `GET /api/` and a working healthcheck at `GET /api/health/`.
- Added product-facing pages for customer login, car details, payment, fuel price comparison, and nearby station availability.
- Refined UI screens against the "Self Service Mobile Application Interface pdf.pdf" specification.
- Added database-backed fuel brands, price reports, stations, and availability records in the `core` app.
- Added user management models: `UserProfile`, `Car`, `Order`, `Payment`, `Receipt`, `PageView`.
- Implemented data normalization: automatic slug generation, text trimming, and address cleaning.
- Added session-based self-service fuel ordering flow with forms for station selection, dispenser, quantity, and payment selection.
- Aligned user flow with PDF specification: Order Info -> Station Selection -> Dispenser -> Fuel Quantity -> Payment.
- Removed redundant scaffold apps (controller, fuelcredit, geolocation, posts, qrcodes, users, votes, walletcredit) to clean up project structure.
- Added JSON endpoints for live price/station data at `/api/prices/` and `/api/stations/nearby/`.
- Implemented page analytics middleware for tracking user usage.
- Added admin dashboard for viewing analytics and managing data.
- Implemented fuel attendant user model with dashboard for creating orders, calculating totals with VAT and service charges, generating QR codes, and sending receipts.
- Implemented fuel station manager user model with dashboard for updating fuel prices and station information.
- Added QR code scanning functionality for customers to view receipts and initiate payments.
- Ensured mobile friendliness across all screens with responsive design.
- Added station detail pages with address, recent price history, and crowd/admin availability updates.
- Added an executable test for the healthcheck route.
- Refreshed the Docker setup and dependency files for a current Python runtime.
- **UI Improvements**: Added persistent bottom navigation bar, loading spinners on form submissions, client-side form validation, and enhanced CSS for better mobile UX.
- **Logic Improvements**: Added order status tracking (Pending, Confirmed, Dispensing, Completed, Cancelled), caching for API responses (5-minute cache), and unit tests for order model calculations.
- **Authentication**: Implemented phone-based login with automatic account creation, logout functionality, and user profile management.
- **Account Dashboard**: Enhanced customer account page with recent order history display, balance tracking, and order status visualization.
- **Authentication**: Implemented phone-based login with automatic account creation, logout functionality, and user profile management.
- **Account Dashboard**: Enhanced customer account page with recent order history display, balance tracking, and order status visualization.

## Project structure

```text
.
├── app/
│   ├── app/              # Django project package
│   ├── core/             # Main app with models, views, templates
│   ├── api/              # API endpoints
├── Dockerfile
├── docker-compose.yml
├── Pipfile
└── requirements.txt
```

## Requirements

- Python 3.12+
- `pip` or `pipenv`

## Local setup

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd app
python manage.py migrate
python manage.py runserver
```

The API will be available at `http://127.0.0.1:8000/`.

The product pages are available at:

- `/` - Landing page with map and location
- `/mobile/login/` - Customer login details
- `/mobile/account/` - Customer's account
- `/mobile/news/` - News and company information
- `/mobile/promotions/` - Promotion and offers
- `/mobile/order/` - Order information
- `/mobile/car-details/` - Add car details
- `/mobile/dispenser/` - Dispenser and fuel selection (STEP#2)
- `/mobile/fuel-quantity/` - Fuel type and quantity (STEP#3)
- `/prices/` - Fuel price comparison
- `/prices/stations/` - Station selection (STEP#1)
- `/select-station/<id>/` - Select station for order
- `/stations/<station_id>/` - Station details
- `/mobile/payment/` - Payment method
- `/dashboard/attendant/` - Fuel attendant dashboard
- `/dashboard/manager/` - Station manager dashboard
- `/qr/<code>/` - QR code scan for receipts
- `/api/prices/` - JSON API for prices
- `/api/stations/nearby/` - JSON API for nearby stations

## Environment variables

The project uses sensible local defaults, but these environment variables are supported:

```env
DJANGO_SECRET_KEY=change-me
DJANGO_DEBUG=true
DJANGO_ALLOWED_HOSTS=127.0.0.1,localhost
DJANGO_TIME_ZONE=UTC
SQLITE_NAME=db.sqlite3

# Payment Configuration (Paystack)
PAYSTACK_SECRET_KEY=sk_test_your_paystack_secret_key
PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_public_key

# SMS Configuration (Twilio)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_FROM_NUMBER=+1234567890

# CORS Configuration
CORS_ALLOWED_ORIGINS=http://127.0.0.1:8000,http://localhost:8000
```

## Useful commands

```bash
cd app
python manage.py check
python manage.py test
python manage.py createsuperuser
python manage.py seed_demo_data
```

## Managing fuel data

After running migrations and creating a superuser, sign in to `/admin/` and populate:

- `Fuel brands`
- `Fuel prices`
- `Stations`
- `Station availabilities`

Once those records exist, the GoFuel price pages and JSON APIs will use live database values instead of fallback demo data.

For a quick demo environment, run:

```bash
cd app
python manage.py seed_demo_data
```

The nearby stations API also accepts coordinates:

```text
/api/stations/nearby/?lat=6.573200&lng=3.367500
```

The browser UI now supports geolocation as well. On the landing, prices, and nearby-stations pages, users can tap `Use my location` to let the browser populate and remember coordinates automatically.

The nearby stations page now uses real map tiles via Leaflet and OpenStreetMap, and each station card can link through to a detail page with price history and update submission.

The app also includes a PWA shell with a manifest and service worker so it can be installed on supported mobile browsers.

## Managing user and order data

The admin interface also provides management for:

- `User profiles` - Phone numbers, balances, and roles (Customer, Fuel Attendant, Station Manager)
- `Cars` - Vehicle details for users
- `Orders` - Fuel purchase records with attendant assignments
- `Payments` - Payment transactions linked to orders
- `Receipts` - Generated receipts with QR codes
- `Page views` - Analytics data for user tracking

Users can save car details and place orders through the mobile app interface.

## User Roles and Dashboards

### Fuel Attendant Dashboard (`/dashboard/attendant/`)
- Create orders for customers by entering quantity, station, and fuel type.
- Automatic calculation: `total = (quantity * price) + 7.5% VAT + 150 NGN service charge`.
- Generate unique QR codes for each order.
- Send receipt notifications via email/SMS (mock implementation).

### Station Manager Dashboard (`/dashboard/manager/`)
- Update fuel prices for their assigned station.
- View recent price history.
- **Analytics Overview**: Today's and monthly revenue, order statistics, pending orders.
- **Fuel Distribution**: Monthly fuel sales breakdown by type and volume.
- **Order Management**: View and update order statuses with SMS notifications.
- **Attendant Management**: View station attendants and their contact information.

### Customer QR Scan (`/qr/<code>/`)
- Customers scan QR codes to view order receipts.
- Display detailed breakdown: subtotal, VAT, service charge, total.
- Initiate payment process with success confirmation.

## Payment Integration

The app now supports real payment processing through Paystack integration:

- **Payment Flow**: Orders redirect to Paystack for secure payment processing.
- **Callback Handling**: Payment verification and order status updates via webhooks.
- **Order Status**: Automatic progression from Pending → Confirmed → Completed on successful payment.
- **Receipt Generation**: QR codes and receipts generated after successful payment.

## SMS Notifications

SMS notifications are sent for order updates using Twilio:

- **Order Confirmation**: SMS sent when attendant creates order with customer phone number.
- **Payment Confirmation**: SMS sent when payment is successfully processed.
- **Status Updates**: SMS notifications for order status changes (Dispensing, Completed, etc.).

## Analytics and Tracking

- Page view analytics middleware tracks user navigation.
- Admin dashboard provides usage statistics.
- Tracks user agents, IP addresses, and timestamps.

## Mobile Optimization

All screens are fully responsive and optimized for mobile devices, following the PDF specification for a native app experience.

## Docker

```bash
docker compose up --build
```

Then visit `http://127.0.0.1:8000/api/` or `http://127.0.0.1:8000/api/health/`.

## Current status

The app now fully implements the self-service fuel ordering system as specified in the PDF. Key features include:

- **User Roles**: Customer, Fuel Attendant, Station Manager with role-based dashboards.
- **Order Flow**: Complete session-based ordering with station selection, dispenser, fuel quantity, and payment.
- **Order Status Tracking**: Orders progress through Pending, Confirmed, Dispensing, Completed, Cancelled states.
- **QR Code System**: Attendants generate QR codes for orders, customers scan to view receipts and pay.
- **Analytics**: Page view tracking with admin dashboard for usage statistics.
- **Mobile Friendly**: All screens optimized for mobile devices with responsive design, bottom navigation, loading states, and form validation.
- **Clean Structure**: Removed redundant scaffold apps, keeping only core and api.
- **Performance**: API responses cached for 5 minutes to improve load times.
- **Testing**: Unit tests for order model calculations and status defaults.
- **Payment Integration**: Mock payment processing with success notifications.
- **SMS Notifications**: Twilio integration for order confirmations and status updates.
- **Enhanced Manager Dashboard**: Analytics overview with revenue tracking, order statistics, fuel type distribution, and attendant management.

Most domain apps in this repository are still scaffolds with placeholder files. They are included in `INSTALLED_APPS`, but they do not yet implement business models, serializers, or domain API routes. The `api` and `core` apps now provide the current working baseline to build from.
