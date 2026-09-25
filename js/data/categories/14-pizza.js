(function () {
  'use strict';
  const category = {
    id: "pizza",
    name: "Pizza",
    emoji: "🍕",
    type: "pizza-table",
    pizzas: [
      {
        name: "BBQ Chicken Pizza",
        prices: ["420", "620", "820"],
        note: "(confirm price with restaurant)",
        image: "",
        caption: "Smoky BBQ chicken topping"
      },
      {
        name: "Cheese Lover Pizza",
        prices: ["500", "700", "900"],
        image: "",
        caption: "Triple cheese blend on handcrafted crust"
      },
      {
        name: "Sea Food Pizza",
        prices: ["480", "680", "880"],
        image: "",
        caption: "Assorted seafood with savory Italian herbs"
      },
      {
        name: "Meat Lover Pizza",
        prices: ["450", "650", "840"],
        image: "",
        caption: "Loaded with seasoned beef and chicken meats"
      }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
