/**
 * ================================================================================
 * QUEEN PALACE RESTAURANT - CUSTOMER REVIEWS DATA
 * ================================================================================
 * The 4 authentic customer reviews styled like Facebook comments.
 *
 * HOW TO EDIT REVIEWS:
 * 1. TO EDIT A REVIEW:
 *    - Locate the review you want to modify below.
 *    - Update `author`, `text`, `time`, or initial `likes`.
 *    - For custom avatars, set `initials` (e.g. "NF") and `avatarBg` (e.g. "#e3b13e").
 *    - For Facebook profile links, set `profileUrl: "https://m.facebook.com/..."`.
 *      When `profileUrl` is provided, clicking the reviewer's avatar, name, or card
 *      opens their Facebook profile.
 *
 * 2. TO ADD A NEW REVIEW:
 *    - Copy one of the review objects `{ id: ..., author: ... }`
 *    - Paste it at the bottom of `REVIEWS_DATA`, incrementing `id`.
 *
 * 3. TO REMOVE A REVIEW:
 *    - Simply delete or comment out the review block `{ ... }`.
 * ================================================================================
 */

const REVIEWS_DATA = [
  {
    id: 1,
    author: "Samir Imran Sagar",
    profileUrl: "https://m.facebook.com/samirimransagar/",
    avatarType: "fb-default",
    avatarBg: "#ced2d8",
    time: "2 hrs ago",
    text: "The Mutton Kacchi here is hands down one of the best in town! Meat was tender, flavorful, and the Borhani paired with it perfectly. Highly recommended!",
    likes: 18,
    liked: false
  },
  {
    id: 2,
    author: "Nabila Farzana",
    initials: "NF",
    avatarBg: "#e3b13e", // Gold
    time: "Yesterday at 7:30 PM",
    text: "Special Cheesy Meatbox and Korean Spicy Ramen were super delicious. Great portion sizes and prompt table service. Will definitely come back with friends!",
    likes: 24,
    liked: false
  },
  {
    id: 3,
    author: "Rashidul Karim",
    initials: "RK",
    avatarBg: "#0f3826", // Emerald
    time: "3 days ago",
    text: "Had Beef Sizzling with Mix Fried Rice tonight with family. Came out steaming hot with that irresistible sizzle aroma. Finishing with Special Malai Cha was heavenly.",
    likes: 15,
    liked: false
  },
  {
    id: 4,
    author: "Sumaiya Anjum",
    initials: "SA",
    avatarBg: "#98121e", // Burgundy
    time: "1 week ago",
    text: "Tried Oven Baked Pasta and BBQ Chicken Wings. Rich cheese, authentic spices, and very reasonable pricing. Queen Palace never disappoints!",
    likes: 31,
    liked: false
  }
];

// Expose globally for browser script tag usage
if (typeof window !== 'undefined') {
  window.REVIEWS_DATA = REVIEWS_DATA;
}
