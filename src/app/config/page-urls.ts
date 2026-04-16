/**
 * Central configuration for all page URLs in the Teknas Paints application
 * This file maintains all application routes and their corresponding URLs
 */

export const PAGE_URLS = {
  // Main Pages
  home: "/",
  products: "/products",
  productDetail: "/products/:productId",
  about: "/about",
  locateDealers: "/locate-dealers",
  contact: "/contact",
  ourCompany: "/our-company",
  investors: "/investors",
  
  // User Pages
  account: "/account",
  cart: "/cart",
  
  // Content Pages
  blog: "/blog",
  blogPost: "/blog/:postSlug",
  
  // Search & Discovery
  search: "/search",
} as const;

/**
 * Helper function to generate product detail URL with product ID
 * @param productId - The product ID
 * @returns The complete product detail URL
 */
export const getProductDetailUrl = (productId: string): string => {
  return `/products/${productId}`;
};

/**
 * Helper function to generate blog post URL with post slug
 * @param postSlug - The blog post slug
 * @returns The complete blog post URL
 */
export const getBlogPostUrl = (postSlug: string): string => {
  return `/blog/${postSlug}`;
};

/**
 * Helper function to generate search URL with optional query
 * @param query - The search query (optional)
 * @returns The complete search URL
 */
export const getSearchUrl = (query?: string): string => {
  if (!query) return "/search";
  return `/search?q=${encodeURIComponent(query)}`;
};

/**
 * All page routes as a flat array for reference
 */
export const ALL_PAGE_ROUTES = [
  PAGE_URLS.home,
  PAGE_URLS.products,
  PAGE_URLS.about,
  PAGE_URLS.locateDealers,
  PAGE_URLS.contact,
  PAGE_URLS.ourCompany,
  PAGE_URLS.investors,
  PAGE_URLS.account,
  PAGE_URLS.cart,
  PAGE_URLS.blog,
  PAGE_URLS.search,
] as const;

/**
 * Page metadata for SEO and UI purposes
 */
export const PAGE_METADATA = {
  [PAGE_URLS.home]: {
    title: "Home",
    description: "Welcome to Teknas Paints - Premium Quality Paint Products",
    path: PAGE_URLS.home,
  },
  [PAGE_URLS.products]: {
    title: "Products",
    description: "Browse our complete collection of premium paints",
    path: PAGE_URLS.products,
  },
  [PAGE_URLS.about]: {
    title: "About Us",
    description: "Learn about Teknas Paints and our commitment to quality",
    path: PAGE_URLS.about,
  },
  [PAGE_URLS.locateDealers]: {
    title: "Locate Dealers",
    description: "Find Teknas Paints dealers near you",
    path: PAGE_URLS.locateDealers,
  },
  [PAGE_URLS.contact]: {
    title: "Contact Us",
    description: "Get in touch with Teknas Paints",
    path: PAGE_URLS.contact,
  },
  [PAGE_URLS.ourCompany]: {
    title: "Our Company",
    description: "Discover Teknas Paints company information",
    path: PAGE_URLS.ourCompany,
  },
  [PAGE_URLS.investors]: {
    title: "Investors",
    description: "Investor information for Teknas Paints",
    path: PAGE_URLS.investors,
  },
  [PAGE_URLS.account]: {
    title: "My Account",
    description: "Manage your Teknas Paints account",
    path: PAGE_URLS.account,
  },
  [PAGE_URLS.cart]: {
    title: "Shopping Cart",
    description: "Review your shopping cart",
    path: PAGE_URLS.cart,
  },
  [PAGE_URLS.blog]: {
    title: "Blog",
    description: "Read the latest news and tips from Teknas Paints",
    path: PAGE_URLS.blog,
  },
  [PAGE_URLS.search]: {
    title: "Search",
    description: "Search products and content",
    path: PAGE_URLS.search,
  },
} as const;

/**
 * Navigation links for primary navigation menus
 */
export const PRIMARY_NAV_LINKS = [
  {
    label: "Home",
    url: PAGE_URLS.home,
  },
  {
    label: "Products",
    url: PAGE_URLS.products,
  },
  {
    label: "About",
    url: PAGE_URLS.about,
  },
  {
    label: "Locate Dealers",
    url: PAGE_URLS.locateDealers,
  },
  {
    label: "Our Company",
    url: PAGE_URLS.ourCompany,
  },
  {
    label: "Contact",
    url: PAGE_URLS.contact,
  },
] as const;

/**
 * Secondary navigation links for footers and alternative menus
 */
export const SECONDARY_NAV_LINKS = [
  {
    label: "Investors",
    url: PAGE_URLS.investors,
  },
  {
    label: "Blog",
    url: PAGE_URLS.blog,
  },
  {
    label: "Account",
    url: PAGE_URLS.account,
  },
] as const;
