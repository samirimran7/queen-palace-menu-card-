(function () {
  'use strict';
  const category = {
    id: "soup",
    name: "Soup",
    emoji: "🥣",
    items: [
      { name: "Thai Soup", price: "130/480/-", image: "", caption: "Available in regular / large bowl" },
      { name: "Thai Chicken Soup", price: "120/-", image: "", caption: "" },
      { name: "Hot And Sour Soup", price: "140/-", image: "", caption: "" },
      { name: "Corn Soup", price: "100/-", image: "", caption: "" },
      { name: "Cream Of Mushroom Soup", price: "250/-", image: "", caption: "" },
      { name: "Sea Food Soup", price: "200/-", image: "", caption: "" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
