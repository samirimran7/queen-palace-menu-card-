(function () {
  'use strict';
  const category = {
    id: "kabob",
    name: "Kabob",
    emoji: "🍢",
    items: [
      { name: "Beef Shikh Kabab", price: "200/-", image: "", caption: "" },
      { name: "Chicken Boti Kabab", price: "130/-", image: "", caption: "" },
      { name: "Chicken Hariyali", price: "140/-", image: "", caption: "" },
      { name: "Tandoori Chicken", price: "130/-", image: "", caption: "Whole chicken charcoal roasted" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
