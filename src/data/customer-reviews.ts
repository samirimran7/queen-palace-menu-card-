import { CustomerReview } from './types';

/**
 * Facebook-Style Customer Reviews Data
 * Easily add, edit, or remove customer reviews, ratings, profile links, or like counts.
 */
export const customerReviews: CustomerReview[] = [
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
