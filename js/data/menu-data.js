/**
 * ================================================================================
 * QUEEN PALACE RESTAURANT - MENU CATEGORIES & FOOD ITEMS
 * ================================================================================
 * QUICK GUIDE FOR EDITING MENU ITEMS & PRICES:
 *
 * 1. HOW TO CHANGE A PRICE:
 *    - Find the dish in the list below.
 *    - Change the `price` string (e.g. price: "220/-").
 *    - For pizzas, change the numbers in the `prices` array: prices: ["450", "650", "850"]
 *      which correspond to 8", 10", and 12" sizes.
 *
 * 2. HOW TO ADD A NEW DISH:
 *    - Locate the category you want to add the dish to.
 *    - Copy an existing item line and paste it inside the `items: [ ... ]` list.
 *    - Change the `name` and `price`.
 *    - Dish numbering (01, 02, 03...) is formatted automatically!
 *
 * 3. HOW TO ADD A SET MEAL / COMBO WITH DESCRIPTION:
 *    - Add the optional `desc` field:
 *      { name: "My New Set Meal", price: "320/-", desc: "Served with Fried Rice & Salad" }
 *
 * 4. HOW TO ADD A NEW CATEGORY:
 *    - Copy an entire category block `{ id: "...", name: "...", emoji: "...", items: [...] }`
 *    - Paste it at the desired position in `MENU_DATA`.
 *    - A navigation chip and full menu section will be generated automatically!
 * ================================================================================
 */

const MENU_DATA = [
  {
    id: "appetizer",
    name: "Appetizer",
    emoji: "🍟",
    items: [
      { name: "French Fries", price: "200/-" },
      { name: "Chicken Fry 2 Pcs", price: "180/-" },
      { name: "Chicken Fry 6 Pcs", price: "300/-" },
      { name: "Fried Omlet 2 Pcs", price: "120/-" },
      { name: "Naga Wings 6 Pcs", price: "300/-" },
      { name: "BBQ Chicken Wings 6 Pcs", price: "200/-" },
      { name: "Roast Chicken 2/4 Pcs", price: "200/400/-" },
      { name: "Golden Fried Prawn 6 Pcs", price: "300/-" },
      { name: "Basket Chicken 6 Pcs", price: "200/-" }
    ]
  },
  {
    id: "seafood-appetizer",
    name: "Seafood Appetizer",
    emoji: "🦐",
    items: [
      { name: "Fish N Chips", price: "300/-" },
      { name: "Fish Finger 6 Pcs", price: "280/-" },
      { name: "Fried Crab", price: "220/-" },
      { name: "Fried Calamari", price: "320/-" },
      { name: "Grilled Calamari", price: "350/-" }
    ]
  },
  {
    id: "meatbox",
    name: "Meatbox",
    emoji: "🥡",
    items: [
      { name: "Classic Meatbox", price: "250/-" },
      { name: "Naga Meatbox", price: "300/-" },
      { name: "Special Cheesy Meatbox", price: "340/-" },
      { name: "Meatball Box", price: "300/-" },
      { name: "BBQ Meatbox", price: "260/-" }
    ]
  },
  {
    id: "nachos",
    name: "Nachos",
    emoji: "🧀",
    items: [
      { name: "Mexican Special Nachos", price: "300/-" },
      { name: "BBQ Chicken Nachos", price: "250/-" },
      { name: "Creamy Nachos", price: "300/-" },
      { name: "Tower Nachos", price: "400/-" }
    ]
  },
  {
    id: "sizzling",
    name: "Sizzling",
    emoji: "🔥",
    items: [
      { name: "Beef Sizzling with Mix Fried Rice", price: "600/-" },
      { name: "Chicken Sizzling with Mix Fried Rice", price: "450/-" },
      { name: "Prawn Sizzling with Rice", price: "600/-" }
    ]
  },
  {
    id: "pasta",
    name: "Pasta",
    emoji: "🍝",
    items: [
      { name: "Oven Baked Pasta", price: "380/-" },
      { name: "Mexican Spicy Pasta", price: "250/-" },
      { name: "White Creamy Pasta", price: "300/-" },
      { name: "Alfredo Pasta", price: "320/-" },
      { name: "Mix Chicken Pasta", price: "350/-" },
      { name: "Chicken Noodles", price: "320/-" }
    ]
  },
  {
    id: "ramen",
    name: "Ramen",
    emoji: "🍜",
    items: [
      { name: "Korean Spicy Ramen", price: "200/-" },
      { name: "Special Ramen", price: "280/-" },
      { name: "Noodles Soup", price: "250/-" }
    ]
  },
  {
    id: "salad",
    name: "Salad",
    emoji: "🥗",
    items: [
      { name: "Cashew Nut Salad Saacy", price: "220/-" },
      { name: "Cashew Nuts Salad (Pcs)", price: "200/-" },
      { name: "Honey Chicken Salad", price: "300/-" },
      { name: "Mix Rait Salad", price: "150/-" }
    ]
  },
  {
    id: "rice",
    name: "Rice",
    emoji: "🍚",
    items: [
      { name: "Mix Fried Rice 1:3", price: "420/-" },
      { name: "Plain Rice", price: "240/-" },
      { name: "Vegetables Egg Fried Rice", price: "320/-" },
      { name: "Mexican Spicy Rice", price: "300/-" }
    ]
  },
  {
    id: "curry",
    name: "Curry",
    emoji: "🍛",
    items: [
      { name: "Thai Mix Vegetable", price: "260/-" },
      { name: "Sauteed Mushroom", price: "300/-" },
      { name: "Vegetables", price: "300/-" },
      { name: "Chicken Butter Masala 1:3", price: "300/-" },
      { name: "Beef Kichuri", price: "280/-" },
      { name: "Beef Chili Onion", price: "300/-" },
      { name: "Sweet And Sour Chicken", price: "300/-" },
      { name: "Chicken Chili Onion", price: "300/-" },
      { name: "Mutton Rezala", price: "250/-" },
      { name: "Beef Kalavuna", price: "300/-" },
      { name: "Beef Sizzling", price: "300/-" },
      { name: "Chicken Sizzling", price: "300/-" }
    ]
  },
  {
    id: "biriyani",
    name: "Biriyani",
    emoji: "🍲",
    items: [
      { name: "Mutton Kacchi", price: "320/-" },
      { name: "Beef Tehari", price: "300/-" },
      { name: "Chicken Hyderabady", price: "320/-" },
      { name: "Beef Hyderabady", price: "320/-" },
      { name: "Mutton Hyderabady", price: "350/-" },
      { name: "Beef Khichuri", price: "250/-" },
      { name: "Beef Biriyani", price: "250/-" }
    ]
  },
  {
    id: "soup",
    name: "Soup",
    emoji: "🥣",
    items: [
      { name: "Thai Soup", price: "130/180/-" },
      { name: "Thai Chicken Soup", price: "120/-" },
      { name: "Hot And Sour Soup", price: "120/-" },
      { name: "Corn Soup", price: "120/-" },
      { name: "Cream Of Mushroom Soup", price: "150/-" },
      { name: "Sea Food Soup", price: "200/-" }
    ]
  },
  {
    id: "burger",
    name: "Burger",
    emoji: "🍔",
    items: [
      { name: "BBQ Chicken Burger", price: "230/-" },
      { name: "Broast Chicken Burger", price: "240/-" },
      { name: "Double Decker", price: "340/-" },
      { name: "Student Burger", price: "200/-" },
      { name: "Beef Cheese Burger", price: "300/-" }
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    emoji: "🍕",
    type: "pizza-table",
    pizzas: [
      { name: "BBQ Chicken Pizza", prices: ["-", "-", "-"], note: "(confirm price with restaurant)" },
      { name: "Cheese Lover Pizza", prices: ["420", "620", "840"] },
      { name: "Sea Food Pizza", prices: ["480", "780", "980"] },
      { name: "Meat Lover Pizza", prices: ["450", "650", "850"] }
    ]
  },
  {
    id: "bangla",
    name: "Bangla",
    emoji: "🍽️",
    items: [
      { name: "Plain Rice", price: "60/-" },
      { name: "Fish Vorta", price: "100/-" },
      { name: "Alu Vorta", price: "60/-" },
      { name: "Chicken Roast Piece (1P/2P)", price: "240/-" },
      { name: "Chicken Korma", price: "230/-" },
      { name: "Mutton Rezala", price: "240/-" },
      { name: "Rupchada Fry", price: "120/-" },
      { name: "Rupchada Curry", price: "150/-" },
      { name: "Prawn Masala", price: "200/-" }
    ]
  },
  {
    id: "grill-shawarma",
    name: "Grill & Shawarma",
    emoji: "🌯",
    items: [
      { name: "Shawarma", price: "130/-" },
      { name: "Chicken Grill", price: "180/-" },
      { name: "Chicken Grill Single", price: "120/-" },
      { name: "Butter Naan", price: "70/-" },
      { name: "Plain Naan", price: "35/-" },
      { name: "Garlic Naan", price: "55/-" },
      { name: "Special Naan", price: "60/-" }
    ]
  },
  {
    id: "kabob",
    name: "Kabob",
    emoji: "🍢",
    items: [
      { name: "Beef Shish Kabab", price: "260/-" },
      { name: "Chicken Boti Kabab", price: "240/-" },
      { name: "Chicken Hariyali", price: "240/-" },
      { name: "Tandoori Chicken", price: "1390/-", desc: "Whole chicken" }
    ]
  },
  {
    id: "set-meal",
    name: "Set Meal",
    emoji: "🍱",
    items: [
      { name: "Set 1", price: "240/-", desc: "Fried Rice + Chicken Fry 2 Pcs / Chinese Vegetable + Salad" },
      { name: "Set 2", price: "280/-", desc: "Fried Rice + Mix Vegetable + Beef Chili Onion + Salad" },
      { name: "Set 3", price: "300/-", desc: "Beef Masala + Fried Rice + Vegetable + Salad" },
      { name: "Beef Masala + Naan", price: "270/-" },
      { name: "Chicken Masala + Naan", price: "180/-" },
      { name: "Mutton Kacchi + Borhani + Jali Kabab", price: "400/-" }
    ]
  },
  {
    id: "juice-shake",
    name: "Juice & Shake",
    emoji: "🥤",
    items: [
      { name: "Mint Lemon", price: "120/-" },
      { name: "Sweet And Sour Lassi", price: "100/-" },
      { name: "Lassi", price: "100/-" },
      { name: "Mint Lassi", price: "100/-" },
      { name: "Papaya Juice", price: "100/-" },
      { name: "Orange Juice", price: "130/-" },
      { name: "Chocolate Milkshake", price: "130/-" },
      { name: "Vanilla Milkshake", price: "130/-" },
      { name: "Oreo Milkshake", price: "150/-" },
      { name: "Bottled Water", price: "", desc: "250ml 40/-, 1000ml 150/-" },
      { name: "Falooda", price: "150/-" },
      { name: "Fruit", price: "50/-" },
      { name: "Malai Shake", price: "50/-", desc: "Faint menu label — please confirm with restaurant" },
      { name: "Cold Coffee", price: "100/-" },
      { name: "Iced Coffee", price: "150/-" },
      { name: "Black Coffee", price: "60/-" }
    ]
  },
  {
    id: "cha-tea",
    name: "Cha - Tea",
    emoji: "☕",
    items: [
      { name: "Malai Cha", price: "30/-" },
      { name: "Special Malai Cha", price: "50/-" }
    ]
  }
];

// Expose globally for browser script tag usage
if (typeof window !== 'undefined') {
  window.MENU_DATA = MENU_DATA;
}
