(function () {
  'use strict';
  const category = {
    id: "salad",
    name: "Salad",
    emoji: "🥗",
    items: [
      { name: "Cashew Nut Salad Saacy", price: "320/-", image: "", caption: "" },
      { name: "Cashew Nuts Salad Dry", price: "320/-", image: "", caption: "" },
      { name: "Honey Chicken Salad", price: "300/-", image: "", caption: "" },
      { name: "Mix Raita Salad", price: "150/-", image: "", caption: "" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
