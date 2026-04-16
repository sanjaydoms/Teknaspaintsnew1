/**
 * Navigation helper utilities for the Teknas Paints application
 * Provides helper functions to work with the navigation context and URLs
 */

import { useCallback } from "react";
import { useNavigation } from "../components/navigation-context";
import type { ProductInfo } from "../components/navigation-context";
import { PAGE_URLS, getProductDetailUrl, getBlogPostUrl, getSearchUrl } from "./page-urls";

/**
 * Hook to get URL navigation functions
 * Wraps the navigation context with URL-based navigation helpers
 */
export function useUrlNavigation() {
  const navigation = useNavigation();

  const navigateToUrl = useCallback((url: string) => {
    // Parse the URL to determine which navigation function to call
    const pathname = url.split("?")[0]; // Remove query params
    const searchParams = new URLSearchParams(url.split("?")[1] || "");

    // Handle specific routes
    if (pathname === PAGE_URLS.home) {
      navigation.navigateHome();
    } else if (pathname === PAGE_URLS.products) {
      navigation.navigateToProducts();
    } else if (pathname.startsWith("/products/")) {
      // Product detail - would need product ID
      const productId = pathname.split("/").pop();
      if (productId) {
        // You would need to fetch/find the product and then navigate
        console.warn("Product navigation via URL requires product object");
      }
    } else if (pathname === PAGE_URLS.about) {
      navigation.navigateToAbout();
    } else if (pathname === PAGE_URLS.locateDealers) {
      navigation.navigateToDealers();
    } else if (pathname === PAGE_URLS.contact) {
      navigation.navigateToContact();
    } else if (pathname === PAGE_URLS.ourCompany) {
      navigation.navigateToOurCompany();
    } else if (pathname === PAGE_URLS.investors) {
      navigation.navigateToInvestors();
    } else if (pathname === PAGE_URLS.account) {
      navigation.navigateToAccount();
    } else if (pathname === PAGE_URLS.cart) {
      navigation.navigateToCart();
    } else if (pathname === PAGE_URLS.blog) {
      navigation.navigateToBlog();
    } else if (pathname.startsWith("/blog/")) {
      const postSlug = pathname.split("/").pop();
      if (postSlug) {
        navigation.navigateToBlog(postSlug);
      }
    } else if (pathname === PAGE_URLS.search) {
      const query = searchParams.get("q");
      navigation.navigateToSearch(query || undefined);
    }
  }, [navigation]);

  return {
    navigateToUrl,
    navigateHome: navigation.navigateHome,
    navigateToProducts: navigation.navigateToProducts,
    navigateToAbout: navigation.navigateToAbout,
    navigateToDealers: navigation.navigateToDealers,
    navigateToContact: navigation.navigateToContact,
    navigateToOurCompany: navigation.navigateToOurCompany,
    navigateToInvestors: navigation.navigateToInvestors,
    navigateToAccount: navigation.navigateToAccount,
    navigateToCart: navigation.navigateToCart,
    navigateToSearch: navigation.navigateToSearch,
    navigateToBlog: navigation.navigateToBlog,
  };
}

/**
 * Get all available page URLs
 */
export const getAllPageUrls = () => PAGE_URLS;

/**
 * Get URL for a product detail page
 */
export const getProductUrl = (productId: string) => getProductDetailUrl(productId);

/**
 * Get URL for a blog post
 */
export const getBlogUrl = (postSlug: string) => getBlogPostUrl(postSlug);

/**
 * Get URL for search with optional query
 */
export const getSearchPageUrl = (query?: string) => getSearchUrl(query);

/**
 * Format page title from URL
 */
export const formatPageTitle = (pathname: string): string => {
  const title = pathname
    .split("/")
    .filter(Boolean)
    .join(" ")
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return title || "Home";
};

/**
 * Check if a URL is a valid page route
 */
export const isValidPageRoute = (url: string): boolean => {
  const pathname = url.split("?")[0];
  const validRoutes = Object.values(PAGE_URLS) as string[];

 // Check exact matches or pattern matches (e.g., /products/:id, /blog/:slug)
  return validRoutes.some((route) => {
    if (route.includes(":")) {
      const pattern = route.replace(/:\w+/g, "[^/]+");
      return new RegExp(`^${pattern}$`).test(pathname);
    }
    return route === pathname;
  });
};
