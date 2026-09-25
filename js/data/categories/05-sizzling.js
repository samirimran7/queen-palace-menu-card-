(function () {
  'use strict';
  const category = {
    id: "sizzling",
    name: "Sizzling",
    emoji: "🔥",
    items: [
      { name: "Beef Sizzling with Mix Fried Rice", price: "600/-", image: "", caption: "Served sizzling hot with special mixed fried rice" },
      { name: "Chicken Sizzling with Mix Fried Rice", price: "450/-", image: "", caption: "Sizzling tender chicken with fragrant fried rice" },
      { name: "Prawn Sizzling with Rice", price: "600/-", image: "", caption: "Succulent prawns sizzling in chef's special gravy" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
