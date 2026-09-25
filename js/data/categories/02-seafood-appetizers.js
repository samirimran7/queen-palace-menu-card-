(function () {
  'use strict';
  const category = {
    id: "seafood-appetizer",
    name: "Seafood Appetizer",
    emoji: "🦐",
    items: [
      { name: "Fish N Chips", price: "400/-", image: "", caption: "" },
      { name: "Fish Finger 6 Pcs", price: "350/-", image: "", caption: "" },
      { name: "Fried Crab", price: "220/-", image: "", caption: "" },
      { name: "Fried Calamari", price: "320/-", image: "", caption: "" },
      { name: "Grilled Calamari", price: "350/-", image: "", caption: "" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
