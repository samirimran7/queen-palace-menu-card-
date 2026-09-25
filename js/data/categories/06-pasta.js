(function () {
  'use strict';
  const category = {
    id: "pasta",
    name: "Pasta",
    emoji: "🍝",
    items: [
      { name: "Oven Baked Pasta", price: "380/-", image: "", caption: "" },
      { name: "Mexican Spicy Pasta", price: "250/-", image: "", caption: "" },
      { name: "White Creamy Pasta", price: "300/-", image: "", caption: "" },
      { name: "Alfredo Pasta", price: "320/-", image: "", caption: "" },
      { name: "Mix Chow mein", price: "320/-", image: "", caption: "" },
      { name: "Chicken Noodles", price: "250/-", image: "", caption: "" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
