# LEXMORA — Premium 3D Automotive Template

A premium static automotive website template featuring an interactive **Three.js 3D Vehicle Studio**, customer shopping experience, rental management, and seller dashboard.

---

## 1. Getting Started

### Requirements
- Visual Studio Code with Live Server, or
- Python installed on Windows for the local launcher.

### Run the Project

**Option 1 — VS Code Live Server**
1. Open the project folder in VS Code.
2. Open `index.html`.
3. Select **Open with Live Server**.

**Option 2 — Windows**
1. Double-click `start-local.bat`.
2. The launcher starts a local static server.
3. Open the following address:

`http://localhost:8000`

---

## 2. Interactive 3D Vehicle Studio

The template includes six locally generated procedural 3D vehicle models:

- BMW M5
- Mercedes C 200
- Kia Sportage
- Toyota Corolla
- Audi A6
- Hyundai Tucson

### Customization Features
- Real-time vehicle body paint selection.
- Custom wheel finish.
- Custom trim finish.
- Interactive drag-to-rotate controls.
- Automatic rotation when idle.
- Double-click to reset the camera view.
- Zoom controls.
- Save vehicle configurations.
- Copy shareable configuration links.

### 3D Rendering Technology

Vehicle meshes are generated locally using `configurator.js`.

No vehicle photographs or external 3D model files are required.

Three.js is imported from jsDelivr as the rendering library.

**Offline Support**

For completely offline operation:
1. Place a local copy of `three.module.js` inside `assets/js/`.
2. Update the import statement at the top of `configurator.js` to:

`./assets/js/three.module.js`

---

## 3. Customer & Seller Experience

The template includes customer shopping, rental management, and seller listing interfaces.

### Vehicle Shopping
- Vehicle cards with purchase and rental options.
- Add to Cart functionality.
- Book Rental functionality.
- Vehicle selection and cart management.

### Shopping Cart — `cart.html`
- View selected vehicles.
- Edit rental duration.
- Remove items.
- Demo order confirmation.

### Customer Dashboard — `dashboard.html`

Displays:
- Purchase history.
- Rental history.
- Seller listing requests.
- Payment records.
- Favorite vehicles.

### My Listings — `my-listings.html`

Allows customers to:
- Submit vehicles for sale.
- Submit vehicles for rent.
- View submitted listing requests.
- Track review status.

### Demo Transactions

The checkout system uses LocalStorage to save sample orders and non-payment records.

Important:
- No real credit card charges are processed.
- No real vehicle reservations are created.
- Seller submissions are marked as awaiting review.
- Submitted vehicles are not automatically published to a public inventory.

---

## 4. Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive layouts |
| Vanilla JavaScript | Application functionality |
| JavaScript ES Modules | Modular architecture |
| Three.js | Interactive 3D vehicle rendering |
| LocalStorage | Local configuration and demo data persistence |

---

## 5. Architecture & Limitations

This project is a **frontend-only static template**.

It does not currently include:

- Backend application.
- REST API.
- MySQL database.
- Real authentication system.
- Real payment gateway.
- Server-side order processing.
- Public vehicle inventory management.

Vehicle inventory and account pages currently use frontend demo content.

LocalStorage is used for storing demo configurations, shopping cart data, and sample customer activities.

---

## 6. Project Overview

**LEXMORA — Premium 3D Automotive Template** combines a luxury automotive presentation with interactive 3D customization and frontend shopping experiences.

The template is designed as a foundation for future integration with a backend application, database, authentication system, and real payment services.