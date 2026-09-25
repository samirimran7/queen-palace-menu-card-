(function () {
  'use strict';
  const category = {
    id: "appetizer",
    name: "Appetizer",
    emoji: "🍟",
    items: [
      { name: "French Fries", price: "200/-", image: "", caption: "" },
      { name: "Chicken Fry 3 Pcs", price: "180/-", image: "", caption: "" },
      { name: "Chicken Fry 6 Pcs", price: "350/-", image: "", caption: "" },
      { name: "Fried Onthon 6 Pcs", price: "200/-", image: "", caption: "" },
      { name: "Naga Wings 6 Pcs", price: "250/-", image: "", caption: "" },
      { name: "BBQ Chicken Wings 6 Pcs", price: "220/-", image: "", caption: "" },
      { name: "Broast Chicken 2/4 Pcs", price: "200/400/-", image: "", caption: "" },
      { name: "Golden Fried Prawn 6 Pcs", price: "300/-", image: "", caption: "" },
      { name: "Basket Chicken 6 Pcs", price: "320/-", image: "", caption: "" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
