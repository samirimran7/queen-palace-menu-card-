(function () {
  'use strict';
  const category = {
    id: "burger",
    name: "Burger",
    emoji: "🍔",
    items: [
      { name: "BBQ Chicken Burger", price: "230/-", image: "", caption: "" },
      { name: "Broast Chicken Burger", price: "250/-", image: "", caption: "" },
      { name: "Double Decker", price: "300/-", image: "", caption: "Double patties with loaded cheese" },
      { name: "Student Burger", price: "100/-", image: "", caption: "Special value favorite" },
      { name: "Beef Cheese Burger", price: "300/-", image: "", caption: "Juicy grilled beef patty with melted cheese" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
