/**
 * ================================================================================
 * QUEEN PALACE RESTAURANT - FOOD SHOWER ANIMATION CONFIGURATION
 * ================================================================================
 * Configure the 16 food emojis, animation speeds, drift angles, and falling settings.
 * ================================================================================
 */

const FOOD_ITEMS_CONFIG = [
  {
    emoji: '🍔',
    name: 'Gourmet Burger',
    rotRange: [-14, 14],
    driftRange: [-12, 12],
    durationRange: [3.4, 4.0],
    sizeDesktop: 46,
    sizeMobile: 36
  },
  {
    emoji: '🍗',
    name: 'Crispy Chicken',
    rotRange: [-18, 18],
    driftRange: [-14, 14],
    durationRange: [3.4, 4.0],
    sizeDesktop: 46,
    sizeMobile: 36
  },
  {
    emoji: '🍕',
    name: 'Pizza Slice',
    rotRange: [-16, 16],
    driftRange: [-12, 12],
    durationRange: [3.3, 3.9],
    sizeDesktop: 46,
    sizeMobile: 36
  },
  {
    emoji: '🍟',
    name: 'French Fries',
    rotRange: [-12, 12],
    driftRange: [-12, 12],
    durationRange: [3.4, 4.0],
    sizeDesktop: 46,
    sizeMobile: 36
  },
  {
    emoji: '☕',
    name: 'Hot Cha & Coffee',
    rotRange: [-8, 8],
    driftRange: [-10, 10],
    durationRange: [3.5, 4.1],
    sizeDesktop: 44,
    sizeMobile: 34
  },
  {
    emoji: '🧃',
    name: 'Fruit Juice Box',
    rotRange: [-10, 10],
    driftRange: [-10, 10],
    durationRange: [3.4, 4.0],
    sizeDesktop: 44,
    sizeMobile: 34
  },
  {
    emoji: '🍮',
    name: 'Custard Dessert',
    rotRange: [-8, 8],
    driftRange: [-10, 10],
    durationRange: [3.5, 4.1],
    sizeDesktop: 44,
    sizeMobile: 34
  },
  {
    emoji: '🥗',
    name: 'Fresh Salad',
    rotRange: [-14, 14],
    driftRange: [-12, 12],
    durationRange: [3.4, 4.0],
    sizeDesktop: 46,
    sizeMobile: 36
  },
  {
    emoji: '🥘',
    name: 'Biriyani & Curry Pan',
    rotRange: [-10, 10],
    driftRange: [-12, 12],
    durationRange: [3.3, 3.9],
    sizeDesktop: 46,
    sizeMobile: 36
  },
  {
    emoji: '🧁',
    name: 'Cupcake Sweet',
    rotRange: [-12, 12],
    driftRange: [-10, 10],
    durationRange: [3.5, 4.1],
    sizeDesktop: 44,
    sizeMobile: 34
  },
  {
    emoji: '🧇',
    name: 'Waffle Dessert',
    rotRange: [-14, 14],
    driftRange: [-12, 12],
    durationRange: [3.4, 4.0],
    sizeDesktop: 44,
    sizeMobile: 34
  },
  {
    emoji: '🌯',
    name: 'Shawarma & Wrap',
    rotRange: [-16, 16],
    driftRange: [-12, 12],
    durationRange: [3.3, 3.9],
    sizeDesktop: 46,
    sizeMobile: 36
  },
  {
    emoji: '🥡',
    name: 'Meatbox Takeout',
    rotRange: [-10, 10],
    driftRange: [-10, 10],
    durationRange: [3.4, 4.0],
    sizeDesktop: 44,
    sizeMobile: 34
  },
  {
    emoji: '🧋',
    name: 'Boba & Shake',
    rotRange: [-8, 8],
    driftRange: [-10, 10],
    durationRange: [3.5, 4.1],
    sizeDesktop: 44,
    sizeMobile: 34
  },
  {
    emoji: '🍿',
    name: 'Popcorn Snack',
    rotRange: [-14, 14],
    driftRange: [-12, 12],
    durationRange: [3.4, 4.0],
    sizeDesktop: 44,
    sizeMobile: 34
  },
  {
    emoji: '🧂',
    name: 'Salt & Spice',
    rotRange: [-12, 12],
    driftRange: [-10, 10],
    durationRange: [3.5, 4.2],
    sizeDesktop: 40,
    sizeMobile: 32
  }
];

// Animation timing settings
const FOOD_ANIMATION_SETTINGS = {
  initialDelayMs: 2000,    // Wait 2s after page load before shower starts
  mobileSpawnMs: 210,      // Spawn interval on mobile
  desktopSpawnMs: 190,     // Spawn interval on desktop
  repeatPerEmoji: 2        // Each emoji drops exactly twice (16 * 2 = 32 items)
};

// Expose globally for browser script tag usage
if (typeof window !== 'undefined') {
  window.FOOD_ITEMS_CONFIG = FOOD_ITEMS_CONFIG;
  window.FOOD_ANIMATION_SETTINGS = FOOD_ANIMATION_SETTINGS;
}
