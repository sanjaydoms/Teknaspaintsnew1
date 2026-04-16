/**
 * Quick Reference - All Page URLs for Teknas Paints
 * Import this file to quickly access any page URL
 */

// ============ EXPORT ALL URLs ============
export const URLS = {
  // Home & Main Pages
  HOME: "/",
  PRODUCTS: "/products",
  PRODUCT_DETAIL: (productId: string) => `/products/${productId}`,
  ABOUT: "/about",
  OUR_COMPANY: "/our-company",
  INVESTORS: "/investors",

  // Services
  LOCATE_DEALERS: "/locate-dealers",
  CONTACT: "/contact",

  // User Pages
  ACCOUNT: "/account",
  CART: "/cart",

  // Content
  BLOG: "/blog",
  BLOG_POST: (postSlug: string) => `/blog/${postSlug}`,

  // Search
  SEARCH: "/search",
  SEARCH_WITH_QUERY: (query: string) => `/search?q=${encodeURIComponent(query)}`,
} as const;

/**
 * Quick access to individual URLs
 */
export const {
  HOME,
  PRODUCTS,
  PRODUCT_DETAIL,
  ABOUT,
  OUR_COMPANY,
  INVESTORS,
  LOCATE_DEALERS,
  CONTACT,
  ACCOUNT,
  CART,
  BLOG,
  BLOG_POST,
  SEARCH,
  SEARCH_WITH_QUERY,
} = URLS;

/**
 * Navigation menu items with URLs
 */
export const MAIN_MENU = [
  { name: "Home", url: HOME },
  { name: "Products", url: PRODUCTS },
  { name: "About", url: ABOUT },
  { name: "Locate Dealers", url: LOCATE_DEALERS },
  { name: "Contact", url: CONTACT },
] as const;

/**
 * Footer menu items
 */
export const FOOTER_MENU = [
  { name: "Our Company", url: OUR_COMPANY },
  { name: "Investors", url: INVESTORS },
  { name: "Blog", url: BLOG },
  { name: "Account", url: ACCOUNT },
] as const;
