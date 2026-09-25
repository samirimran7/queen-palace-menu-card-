# Queen Palace Restaurant - Mobile Menu Website

A mobile-first restaurant menu website with instant search, sticky category navigation, customer reviews, WhatsApp ordering, Google Reviews integration, and entrance animations.

---

## 📁 File Structure & Where to Edit

All website content and data have been organized into clean, dedicated files so you can easily make updates without touching complex code:

```
├── index.html                   # Clean HTML structure
├── queen-palace-mobile-menu.html # Backup / alternative entry point
├── css/
│   └── style.css                # All styles, colors, layouts & animations
├── js/
│   ├── app.js                   # Main application logic (search, scroll, sticky nav)
│   └── data/
│       ├── menu-data.js         # Menu categories, dishes, prices, descriptions, pizza sizes
│       ├── restaurant-info.js   # WhatsApp, Facebook, Google Review links & contact info
│       ├── reviews-data.js      # Customer reviews (authors, avatars, text, likes, times)
│       └── animation-data.js    # Falling food shower emojis and animation settings
└── README.md
```

---

## ✏️ How to Edit Content

### 1. Menu Dishes & Prices (`js/data/menu-data.js`)
- **To change a price:** Open `js/data/menu-data.js`, find the dish, and change `price: "200/-"`. For pizzas, change `prices: ["420", "620", "840"]` (8", 10", 12").
- **To add a dish:** Copy an existing line in any category and update the `name` and `price`.
- **To add a combo / set meal:** Add `desc: "Your description here"`.
- **Dish numbering (01, 02...):** Formatted automatically!

### 2. WhatsApp, Facebook & Google Reviews (`js/data/restaurant-info.js`)
- **WhatsApp Number:** Update `number: "8801886929343"`.
- **WhatsApp Greeting Message:** Update `defaultMessage: "Hiii"`.
- **Facebook Link:** Update `url: "https://www.facebook.com/queenplacerestaurant/"`.
- **Google Reviews Link:** Update `url` under `googleReviews`.
- **Footer Text & Notes:** Update under `footer`.

### 3. Customer Reviews (`js/data/reviews-data.js`)
- **To edit a review:** Update `author`, `text`, `time`, or initial `likes`.
- **To link a reviewer to Facebook:** Set `profileUrl: "https://m.facebook.com/..."`.
- **To add a review:** Copy a review block `{ ... }` and increment `id`.
- **To remove a review:** Delete or comment out that review block.

### 4. Visual Styles & Colors (`css/style.css`)
- Colors, margins, fonts, cards, and animations are stored cleanly in `css/style.css`.

---

## 🚀 Public GitHub & GitHub Pages Compatibility

All files use standard **relative paths** (`./css/style.css`, `./js/data/...`, `./js/app.js`).
- Works directly on GitHub Pages (`https://username.github.io/repository/`).
- Works when opening `index.html` locally in any browser.
- No build step required for updates—just edit the file and refresh!
