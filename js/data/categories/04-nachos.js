(function () {
  'use strict';
  const category = {
    id: "nachos",
    name: "Nachos",
    emoji: "🧀",
    items: [
      { name: "Mexican Special Nachos", price: "300/-", image: "", caption: "" },
      { name: "BBQ Chicken Nachos", price: "250/-", image: "", caption: "" },
      { name: "Creamy Nachos", price: "250/-", image: "", caption: "" },
      { name: "Tower Nachos", price: "400/-", image: "", caption: "" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
