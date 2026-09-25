(function () {
  'use strict';
  const category = {
    id: "grill-shawarma",
    name: "Grill & Shawarma",
    emoji: "🌯",
    items: [
      { name: "Shawarma", price: "130/-", image: "", caption: "" },
      { name: "Chicken Grill Full", price: "460/-", image: "", caption: "" },
      { name: "Chicken Grill Single", price: "120/-", image: "", caption: "" },
      { name: "Butter Naan", price: "40/-", image: "", caption: "" },
      { name: "Plain Naan", price: "25/-", image: "", caption: "" },
      { name: "Garlic Naan", price: "35/-", image: "", caption: "" },
      { name: "Special Naan", price: "60/-", image: "", caption: "" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
