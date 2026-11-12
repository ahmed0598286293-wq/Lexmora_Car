# LEXMORA 3D Studio Upgrade

- Replaced the 2D Canvas image configurator with a Three.js WebGL scene.
- Added locally generated 3D vehicle meshes and configurable body paint, wheel finish, and trim.
- Added continuous idle rotation, pointer drag rotation, double-click view reset, and zoom controls.
- Kept the existing HTML/CSS/vanilla-JavaScript project structure and customer pages.
- Vehicle models are generated procedurally in `configurator.js`; no vehicle images are loaded from external websites.
- Three.js is currently loaded as an ES module from jsDelivr. The car geometry and all customization logic remain in the project.
- Added a small Windows `start-local.bat` launcher for static preview.

- Added a frontend-only shopping cart for sale and rental listings with rental duration selection.
- Added demo order confirmation, order/payment history records, and client dashboard summaries using LocalStorage only.
- Added a seller request flow and a dedicated “My Listings” client page. Seller submissions remain private local demo requests and are not publicly published.
- No backend, database, API, real booking, or payment processing has been added.
