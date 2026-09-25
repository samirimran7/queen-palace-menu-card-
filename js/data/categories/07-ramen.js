(function () {
  'use strict';
  const category = {
    id: "ramen",
    name: "Ramen",
    emoji: "🍜",
    items: [
      { name: "Korean Spicy Ramen", price: "200/-", image: "", caption: "" },
      { name: "Special Ramen", price: "280/-", image: "", caption: "" },
      { name: "Noodles Soup", price: "000/-", image: "", caption: "" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
