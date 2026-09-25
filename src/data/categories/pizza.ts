import { MenuCategory } from '../types';

export const pizzaCategory: MenuCategory = {
  id: "pizza",
  name: "Pizza",
  emoji: "🍕",
  type: "pizza-table",
  pizzas: [
    {
      name: "BBQ Chicken Pizza",
      prices: ["-", "-", "-"],
      note: "(confirm price with restaurant)",
      image: "",
      caption: "Smoky BBQ chicken topping"
    },
    {
      name: "Cheese Lover Pizza",
      prices: ["420", "620", "840"],
      image: "",
      caption: "Triple cheese blend on handcrafted crust"
    },
    {
      name: "Sea Food Pizza",
      prices: ["480", "780", "980"],
      image: "",
      caption: "Assorted seafood with savory Italian herbs"
    },
    {
      name: "Meat Lover Pizza",
      prices: ["450", "650", "850"],
      image: "",
      caption: "Loaded with seasoned beef and chicken meats"
    }
  ]
};
