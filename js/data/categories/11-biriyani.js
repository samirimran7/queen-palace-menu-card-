(function () {
  'use strict';
  const category = {
    id: "biriyani",
    name: "Biriyani",
    emoji: "🍲",
    items: [
      { name: "Mutton Kacchi", price: "320/-", image: "", caption: "Rich fragrant basmati rice with tender spiced mutton" },
      { name: "Beef Tehari", price: "200/-", image: "", caption: "Aromatic mustard oil cooked beef tehari" },
      { name: "Chicken Hyderabady", price: "300/-", image: "", caption: "Royal Hyderabadi dum chicken biryani" },
      { name: "Beef Hyderabady", price: "320/-", image: "", caption: "Flavorful slow-dum cooked beef biryani" },
      { name: "Mutton Hyderabady", price: "350/-", image: "", caption: "Premium Hyderabadi mutton biryani" },
      { name: "Beef Khichuri", price: "250/-", image: "", caption: "" },
      { name: "Beef Biriyani", price: "250/-", image: "", caption: "" }
    ]
  };

  window.MENU_DATA = window.MENU_DATA || [];
  const idx = window.MENU_DATA.findIndex(c => c.id === category.id);
  if (idx >= 0) { window.MENU_DATA[idx] = category; } else { window.MENU_DATA.push(category); }
})();
