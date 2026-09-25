(function () {
  'use strict';
  const category = {
    id: "cha-tea",
    name: "Cha - Tea",
    emoji: "☕",
    items: [
      { name: "Malai Cha", price: "30/-", image: "", caption: "Traditional creamy milk tea" },
      { name: "Special Malai Cha", price: "50/-", image: "", caption: "Signature rich malai tea" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
