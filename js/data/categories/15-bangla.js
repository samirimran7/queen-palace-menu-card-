(function () {
  'use strict';
  const category = {
    id: "bangla",
    name: "Bangla",
    emoji: "🍽️",
    items: [
      { name: "Plain Rice", price: "50/-", image: "", caption: "" },
      { name: "Fish Vorta", price: "100/-", image: "", caption: "" },
      { name: "Alu Vorta", price: "60/-", image: "", caption: "" },
      { name: "Chicken Roast Piece (1P/2P)", price: "150/280/-", image: "", caption: "" },
      { name: "Chicken Korma", price: "230/-", image: "", caption: "" },
      { name: "Mutton Rezala", price: "280/-", image: "", caption: "" },
      { name: "Rupchada Fry", price: "120/-", image: "", caption: "" },
      { name: "Rupchada Curry", price: "150/-", image: "", caption: "" },
      { name: "Prawn Masala", price: "300/-", image: "", caption: "" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
