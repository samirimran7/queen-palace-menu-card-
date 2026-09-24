export interface MenuItem {
  /** Dish name */
  name: string;
  /** Price string e.g. "200/-" or "130/180/-" */
  price: string;
  /** Optional dish photo URL (e.g. '/images/dish.jpg' or external URL) */
  image?: string;
  /** Optional dish description or subtitle caption */
  caption?: string;
  /** Legacy alias for caption */
  desc?: string;
}

export interface PizzaItem {
  name: string;
  /** Prices for [8", 10", 12"] sizes */
  prices: [string, string, string];
  /** Optional note e.g. "(confirm price with restaurant)" */
  note?: string;
  /** Optional image URL */
  image?: string;
  /** Optional caption or description */
  caption?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  type?: 'pizza-table';
  items?: MenuItem[];
  pizzas?: PizzaItem[];
}

export interface CustomerReview {
  id: number;
  author: string;
  profileUrl?: string;
  avatarType?: 'fb-default';
  avatarBg?: string;
  initials?: string;
  time: string;
  text: string;
  likes: number;
  liked: boolean;
}

export interface GoogleReviewsConfig {
  reviewUrl: string;
  placeId: string;
  title: string;
  prompt: string;
  buttonLabel: string;
  locationChipText: string;
}

export interface WhatsAppConfig {
  phoneNumber: string;
  displayNumber: string;
  defaultMessage: string;
  linkUrl: string;
  label: string;
}

export interface FacebookConfig {
  pageUrl: string;
  handle: string;
  label: string;
}

export interface RestaurantInfo {
  name: string;
  subtitle: string;
  locationName: string;
  currency: string;
  currencySymbol: string;
  priceNotice: string;
  navigationTip: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  facebookUrl: string;
  googleReviewUrl: string;
  openingHours: string;
}
