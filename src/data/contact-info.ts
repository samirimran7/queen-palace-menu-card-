import { ContactInfo } from './types';
import { whatsAppConfig } from './whatsapp';
import { facebookConfig } from './facebook';
import { googleReviewsConfig } from './google-reviews';

/**
 * Contact & Location Information
 * Easily update the restaurant's address, contact numbers, hours, and map links.
 */
export const contactInfo: ContactInfo = {
  // Physical restaurant address
  address: "Queen Palace Restaurant, Raozan, Chittagong, Bangladesh",

  // Primary customer support / order phone number
  phone: whatsAppConfig.displayNumber,

  // WhatsApp order number
  whatsapp: whatsAppConfig.displayNumber,

  // Official Facebook page link
  facebookUrl: facebookConfig.pageUrl,

  // Google Maps / review link
  googleReviewUrl: googleReviewsConfig.reviewUrl,

  // Operating hours
  openingHours: "Open daily 10:00 AM - 11:00 PM"
};
