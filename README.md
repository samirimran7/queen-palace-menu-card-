# Queen Palace Restaurant - Mobile Menu Website

A mobile-first restaurant menu website with instant search, sticky category navigation, customer reviews, WhatsApp ordering, Google Reviews integration, and entrance animations.

---

## 📁 File Structure & Individual Category Files

Every single food category has its own separate JavaScript file in `js/data/categories/`:

```
├── index.html                           # Clean HTML structure
├── queen-palace-mobile-menu.html         # Backup HTML structure
├── css/
│   └── style.css                        # All design, styling, and animations
├── js/
│   ├── app.js                           # App logic (search, scroll, sticky nav)
│   └── data/
│       ├── restaurant-info.js           # WhatsApp, Facebook, Google Reviews links
│       ├── reviews-data.js              # Customer reviews
│       ├── animation-data.js            # Falling food shower configuration
│       └── categories/                  # 👈 ALL 20 CATEGORIES (Edit any file!)
│           ├── 01-appetizers.js
│           ├── 02-seafood-appetizers.js
│           ├── 03-meatbox.js
│           ├── 04-nachos.js
│           ├── 05-sizzling.js
│           ├── 06-pasta.js
│           ├── 07-ramen.js
│           ├── 08-salad.js
│           ├── 09-rice.js
│           ├── 10-curry.js
│           ├── 11-biriyani.js
│           ├── 12-soup.js
│           ├── 13-burger.js
│           ├── 14-pizza.js
│           ├── 15-bangla.js
│           ├── 16-grill-shawarma.js
│           ├── 17-kabob.js
│           ├── 18-set-meal.js
│           ├── 19-juice-shake.js
│           └── 20-cha-tea.js
```

---

## ✏️ How to Edit on GitHub

1. **To change a price or item name:**
   - Go to `js/data/categories/` on GitHub.
   - Click on the category file (e.g. `14-pizza.js` or `13-burger.js`).
   - Click the pencil ✏️ icon on GitHub, make your edits, and click **Commit changes**.
   - Your live site updates automatically!

2. **To update WhatsApp or Facebook:**
   - Open `js/data/restaurant-info.js`.
   - Update phone number or links.

---

## 🚀 GitHub Pages Setup

### Option A: Deploy from branch (Recommended & Instant)
1. Go to your repository on GitHub.
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Set branch to `main` (or `master`) and folder to `/ (root)`.
5. Click **Save**. Your site will be live in ~30 seconds!

### Option B: Deploy via GitHub Actions
A ready-to-run `.github/workflows/deploy.yml` is included. Under **Settings** > **Pages** > **Source**, you can also choose **GitHub Actions**.
