# 🛒 One Cart

**One Cart** is a Chrome Extension and Web Dashboard that allows users to save products from any e-commerce website into a single centralized wishlist.

Instead of maintaining separate wishlists across Amazon, Jumia, AliExpress, Temu, and hundreds of online stores, One Cart lets users save products from anywhere on the web and manage them from one place.

---

## 🚀 Features

### Chrome Extension

* Detect products directly from e-commerce websites
* Extract:

  * Product title
  * Product price
  * Product image
  * Product URL
  * Website source
* Save products with one click

### Dashboard

* View all saved products
* Search and organize products
* Open original product pages
* Delete products
* Centralized shopping management

---

## 🏗️ Architecture

```text
Chrome Extension
        │
        ▼
Node.js + Express API
        │
        ▼
      MongoDB
        │
        ▼
React Dashboard
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Browser Extension

* Chrome Extension Manifest V3
* Chrome Scripting API
* Content Extraction Logic

---

## 📂 Project Structure

```text
one-cart/

├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── extension/
│   ├── manifest.json
│   ├── popup.html
│   └── popup.js
│
└── README.md
```

---

## ⚡ Installation

### Clone Repository

```bash
git clone https://github.com/LIANN-DARDS900/one-cart.git
cd one-cart
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Chrome Extension

1. Open Chrome
2. Navigate to:

```text
chrome://extensions
```

3. Enable Developer Mode
4. Click **Load unpacked**
5. Select the `extension` folder

---

## 🎯 Roadmap

### MVP

* [x] Product detection
* [x] Product saving
* [x] Dashboard
* [x] MongoDB integration

### Next Features

* [ ] User authentication
* [ ] Product categories
* [ ] Product search
* [ ] Price history tracking
* [ ] Price drop alerts
* [ ] Product comparison
* [ ] Shared wishlists
* [ ] Multi-browser support

---

## 🌍 Vision

One Cart aims to become the universal shopping companion for the web.

Save products from any website, organize everything in one place, compare prices, track changes, and make smarter purchasing decisions.

---

## 📄 License

MIT License
