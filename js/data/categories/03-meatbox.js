(function () {
  'use strict';
  const category = {
    id: "meatbox",
    name: "Meatbox",
    emoji: "🥡",
    items: [
      { name: "Classic Meatbox", price: "250/-", image: "", caption: "" },
      { name: "Naga Meatbox", price: "260/-", image: "", caption: "" },
      { name: "Special Cheesy Meatbox", price: "300/-", image: "", caption: "" },
      { name: "Meatball Box", price: "250/-", image: "", caption: "" },
      { name: "BBQ Meatbox", price: "260/-", image: "", caption: "" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
