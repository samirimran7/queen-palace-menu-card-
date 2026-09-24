import { WhatsAppConfig } from './types';

/**
 * WhatsApp Integration Configuration
 * Easily update the WhatsApp phone number or default order message here.
 */
export const whatsAppConfig: WhatsAppConfig = {
  // International format without '+' or spaces for the WhatsApp API URL
  phoneNumber: "8801886929343",

  // Human-readable format displayed if shown in text
  displayNumber: "+880 1886-929343",

  // Default pre-filled chat greeting or order inquiry message
  defaultMessage: "Hiii",

  // Full direct WhatsApp chat link
  linkUrl: "https://wa.me/8801886929343?text=Hiii",

  // Button label
  label: "WhatsApp"
};
