# Queen Palace — Modular Data Structure

This project has been reorganized into clean, separate, modular files so that anyone can update prices, dishes, images, links, or contact details without touching the website layout, animations, or styling.

---

## 📁 File Structure Overview

```
src/data/
├── types.ts                  # TypeScript data interfaces
├── restaurant-info.ts        # Restaurant name, subtitle, location, disclaimer
├── contact-info.ts           # Address, phone numbers, opening hours, map link
├── whatsapp.ts               # WhatsApp phone number, message, chat URL
├── facebook.ts               # Facebook page URL, handle, label
├── google-reviews.ts         # Google Review URL, Place ID, ratings text
├── customer-reviews.ts       # Customer reviews list (Facebook comment style)
└── categories/               # Individual files for EVERY menu category
    ├── appetizers.ts         # 🍟 Appetizer
    ├── seafood-appetizers.ts # 🦐 Seafood Appetizer
    ├── meatbox.ts            # 🥡 Meatbox
    ├── nachos.ts             # 🧀 Nachos
    ├── sizzling.ts           # 🔥 Sizzling
    ├── pasta.ts              # 🍝 Pasta
    ├── ramen.ts              # 🍜 Ramen
    ├── salad.ts              # 🥗 Salad
    ├── rice.ts               # 🍚 Rice
    ├── curry.ts              # 🍛 Curry
    ├── biriyani.ts           # 🍲 Biriyani
    ├── soup.ts               # 🥣 Soup
    ├── burger.ts             # 🍔 Burger
    ├── pizza.ts              # 🍕 Pizza
    ├── bangla.ts             # 🍽️ Bangla
    ├── grill-shawarma.ts     # 🌯 Grill & Shawarma
    ├── kabob.ts              # 🍢 Kabob
    ├── set-meal.ts           # 🍱 Set Meal
    ├── juice-shake.ts        # 🥤 Juice & Shake
    ├── cha-tea.ts            # ☕ Cha - Tea
    └── index.ts              # Category list aggregator
```

---

## 🍴 How to Change a Food Item, Price, Image, or Caption

Open any file in `src/data/categories/` (for example, `appetizers.ts`):

```typescript
export const appetizersCategory: MenuCategory = {
  id: "appetizer",
  name: "Appetizer",
  emoji: "🍟",
  items: [
    {
      name: "French Fries",
      price: "200/-",
      image: "/images/french-fries.jpg", // Optional: put image URL or leave ""
      caption: "Crispy golden potato fries" // Optional: description or subtitle
    },
    ...
  ]
};
```

- **Price change**: Change `"200/-"` to your new price.
- **Image**: Add an image path like `"/images/french-fries.jpg"` or an external image URL.
- **Caption**: Add any description or combo detail.

---

## 💬 How to Update WhatsApp Number or Message

Open `src/data/whatsapp.ts`:

```typescript
export const whatsAppConfig = {
  phoneNumber: "8801886929343",
  displayNumber: "+880 1886-929343",
  defaultMessage: "Hiii",
  linkUrl: "https://wa.me/8801886929343?text=Hiii",
  label: "WhatsApp"
};
```

---

## 📘 How to Update Facebook Page

Open `src/data/facebook.ts`:

```typescript
export const facebookConfig = {
  pageUrl: "https://www.facebook.com/queenplacerestaurant/",
  handle: "@queenplacerestaurant",
  label: "Facebook"
};
```

---

## ⭐ How to Update Google Review Link

Open `src/data/google-reviews.ts`:

```typescript
export const googleReviewsConfig = {
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJhSuxdgAtrTAR6WTKxWA71Wo",
  placeId: "ChIJhSuxdgAtrTAR6WTKxWA71Wo",
  title: "আপনার অভিজ্ঞতা কেমন ছিল?",
  prompt: "Google-এ Review দিন",
  buttonLabel: "Leave a Google Review",
  locationChipText: "Queen Palace • Raozan"
};
```

---

## 🏛️ How to Update Restaurant Information

Open `src/data/restaurant-info.ts`:

```typescript
export const restaurantInfo = {
  name: "Queen Palace",
  subtitle: "Restaurant",
  locationName: "Raozan, Chittagong, Bangladesh",
  ...
};
```
