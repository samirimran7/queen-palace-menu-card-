(function () {
  'use strict';
  const category = {
    id: "set-meal",
    name: "Set Meal",
    emoji: "🍱",
    items: [
      {
        name: "Set 1",
        price: "260/-",
        image: "",
        caption: "Fried Rice + Chicken Fry 2 Pcs + Chinese Vegetable + Salad"
      },
      {
        name: "Set 2",
        price: "280/-",
        image: "",
        caption: "Fried Rice + Mix Vegetable + Beef Chili Onion + Salad"
      },
      {
        name: "Set 3",
        price: "300/-",
        image: "",
        caption: "Beef Masala + Fried Rice + Vegetable + Salad"
      },
      {
        name: "Beef Masala + Naan",
        price: "220/-",
        image: "",
        caption: ""
      },
      {
        name: "Chicken Masala + Naan",
        price: "180/-",
        image: "",
        caption: ""
      },
      {
        name: "Mutton Kacchi + Borhani + Jali Kabab",
        price: "400/-",
        image: "",
        caption: ""
      }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
