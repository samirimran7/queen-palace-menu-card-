(function () {
  'use strict';
  const category = {
    id: "rice",
    name: "Rice",
    emoji: "🍚",
    items: [
      { name: "Mix Fried Rice 1:3", price: "420/-", image: "", caption: "Serves 3 persons" },
      { name: "Plain Rice", price: "240/-", image: "", caption: "" },
      { name: "Vegetables Egg Fried Rice", price: "320/-", image: "", caption: "" },
      { name: "Mexican Spicy Rice", price: "330/-", image: "", caption: "" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
