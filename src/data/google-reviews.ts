import { GoogleReviewsConfig } from './types';

/**
 * Google Reviews Integration Configuration
 * Easily update the Google review URL, Place ID, or text shown in the Google review banner.
 */
export const googleReviewsConfig: GoogleReviewsConfig = {
  // Direct link where customers write a review on Google for Queen Palace
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJhSuxdgAtrTAR6WTKxWA71Wo",
  
  // Google Place ID for Queen Palace, Raozan
  placeId: "ChIJhSuxdgAtrTAR6WTKxWA71Wo",

  // Bengali title displayed on card
  title: "আপনার অভিজ্ঞতা কেমন ছিল?",

  // Prompt subtitle
  prompt: "Google-এ Review দিন",

  // Action button text
  buttonLabel: "Leave a Google Review",

  // Location chip text
  locationChipText: "Queen Palace • Raozan"
};
