/**
 * ================================================================================
 * QUEEN PALACE RESTAURANT - RESTAURANT INFORMATION & LINKS CONFIGURATION
 * ================================================================================
 * Edit restaurant details, contact numbers, social media links, and footer notes here.
 * Any change here will automatically update throughout the website!
 *
 * HOW TO EDIT:
 * 1. WhatsApp Number:
 *    Change `number: "8801886929343"` to your WhatsApp phone number
 *    (in international format: country code first, no '+' or spaces or dashes).
 *
 * 2. WhatsApp Default Greeting Message:
 *    Change `defaultMessage: "Hiii"` to any message you want prefilled when guests click.
 *
 * 3. Facebook Page Link:
 *    Change `url: "https://www.facebook.com/queenplacerestaurant/"` to your Facebook page URL.
 *
 * 4. Google Reviews Link & Place ID:
 *    Change `url` to your Google review direct URL.
 * ================================================================================
 */

const RESTAURANT_INFO = {
  // Brand titles displayed in the sticky top header
  brand: {
    name: "Queen Palace",
    subtitle: "Restaurant"
  },

  // WhatsApp Contact / Ordering Button
  whatsapp: {
    // Phone number in international format (e.g. 8801886929343)
    number: "8801886929343",
    // Default message prefilled when customer clicks WhatsApp button
    defaultMessage: "Hiii",
    buttonText: "WhatsApp",
    // Helper function returning the full wa.me link
    getUrl: function() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
    }
  },

  // Facebook Page Button
  facebook: {
    url: "https://www.facebook.com/queenplacerestaurant/",
    buttonText: "Facebook"
  },

  // Google Reviews Section & Button
  googleReviews: {
    // Place review link
    url: "https://search.google.com/local/writereview?placeid=ChIJhSuxdgAtrTAR6WTKxWA71Wo",
    locationBadge: "Queen Palace • Raozan",
    cardTitle: "আপনার অভিজ্ঞতা কেমন ছিল?",
    cardPrompt: "Google-এ Review দিন",
    buttonLabel: "Leave a Google Review"
  },

  // Real-time Search Box configuration
  search: {
    placeholder: "Search delicious dishes...",
    emptyTitle: "No dishes match your search",
    resetButtonText: "View Full Menu"
  },

  // Site Footer information
  footer: {
    restaurantName: "Queen Palace Restaurant",
    pricingNote: "All prices are in Bangladeshi Taka (BDT) and subject to change without prior notice.",
    navigationHint: "Tip: Tap any category chip above to quickly jump to that section."
  }
};

// Expose globally for browser script tag usage
if (typeof window !== 'undefined') {
  window.RESTAURANT_INFO = RESTAURANT_INFO;
}
