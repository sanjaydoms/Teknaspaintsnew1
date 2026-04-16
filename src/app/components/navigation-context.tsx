import { createContext, useContext, useMemo, useRef, useEffect, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PAGE_URLS, getProductDetailUrl, getBlogPostUrl, getSearchUrl } from "../config/page-urls";

export interface ProductInfo {
  name: string;
  image: string;
  category: string;
}

export type ViewType =
  | "home"
  | "product-detail"
  | "products"
  | "about"
  | "locate-dealers"
  | "contact"
  | "our-company"
  | "investors"
  | "account"
  | "cart"
  | "search"
  | "blog";

interface NavigationContextType {
  currentView: ViewType;
  previousView: ViewType;
  searchQuery: string;
  navigateToProduct: (product: ProductInfo) => void;
  navigateHome: () => void;
  navigateToProducts: () => void;
  navigateToAbout: () => void;
  navigateToDealers: () => void;
  navigateToContact: () => void;
  navigateToOurCompany: () => void;
  navigateToInvestors: () => void;
  navigateToAccount: () => void;
  navigateToCart: () => void;
  navigateToSearch: (query?: string) => void;
  navigateToBlog: (postSlug?: string) => void;
  navigateBack: () => void;
}

const NavigationContext = createContext<NavigationContextType>({
  currentView: "home",
  previousView: "home",
  searchQuery: "",
  navigateToProduct: () => {},
  navigateHome: () => {},
  navigateToProducts: () => {},
  navigateToAbout: () => {},
  navigateToDealers: () => {},
  navigateToContact: () => {},
  navigateToOurCompany: () => {},
  navigateToInvestors: () => {},
  navigateToAccount: () => {},
  navigateToCart: () => {},
  navigateToSearch: () => {},
  navigateToBlog: () => {},
  navigateBack: () => {},
});

const getViewFromPath = (pathname: string): ViewType => {
  if (pathname === PAGE_URLS.home) return "home";
  if (pathname === PAGE_URLS.products) return "products";
  if (pathname.startsWith("/products/")) return "product-detail";
  if (pathname === PAGE_URLS.about) return "about";
  if (pathname === PAGE_URLS.locateDealers) return "locate-dealers";
  if (pathname === PAGE_URLS.contact) return "contact";
  if (pathname === PAGE_URLS.ourCompany) return "our-company";
  if (pathname === PAGE_URLS.investors) return "investors";
  if (pathname === PAGE_URLS.account) return "account";
  if (pathname === PAGE_URLS.cart) return "cart";
  if (pathname === PAGE_URLS.search) return "search";
  if (pathname === PAGE_URLS.blog || pathname.startsWith("/blog/")) return "blog";
  return "home";
};

export const slugifyProductName = (productName: string): string =>
  productName
    .trim()
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/\+/g, "plus")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function NavigationProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPathRef = useRef(location.pathname);
  const previousViewRef = useRef<ViewType>(getViewFromPath(location.pathname));

  const currentView = useMemo(() => getViewFromPath(location.pathname), [location.pathname]);
  const searchQuery = useMemo(() => new URLSearchParams(location.search).get("q") || "", [location.search]);

  useEffect(() => {
    previousViewRef.current = getViewFromPath(previousPathRef.current);
    previousPathRef.current = location.pathname;
  }, [location.pathname]);

  const navigateHome = () => navigate(PAGE_URLS.home);
  const navigateToProducts = () => navigate(PAGE_URLS.products);
  const navigateToAbout = () => navigate(PAGE_URLS.about);
  const navigateToDealers = () => navigate(PAGE_URLS.locateDealers);
  const navigateToContact = () => navigate(PAGE_URLS.contact);
  const navigateToOurCompany = () => navigate(PAGE_URLS.ourCompany);
  const navigateToInvestors = () => navigate(PAGE_URLS.investors);
  const navigateToAccount = () => navigate(PAGE_URLS.account);
  const navigateToCart = () => navigate(PAGE_URLS.cart);
  const navigateToSearch = (query?: string) => navigate(getSearchUrl(query));
  const navigateToProduct = (product: ProductInfo) => navigate(getProductDetailUrl(slugifyProductName(product.name)));
  const navigateToBlog = (postSlug?: string) => navigate(postSlug ? getBlogPostUrl(postSlug) : PAGE_URLS.blog);
  const navigateBack = () => {
    const prev = previousViewRef.current;
    if (prev === "products") {
      navigateToProducts();
      return;
    }
    if (prev === "blog") {
      navigate(PAGE_URLS.blog);
      return;
    }
    if (prev === "search") {
      navigate(PAGE_URLS.search);
      return;
    }
    navigate(PAGE_URLS.home);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentView,
        previousView: previousViewRef.current,
        searchQuery,
        navigateToProduct,
        navigateHome,
        navigateToProducts,
        navigateToAbout,
        navigateToDealers,
        navigateToContact,
        navigateToOurCompany,
        navigateToInvestors,
        navigateToAccount,
        navigateToCart,
        navigateToSearch,
        navigateToBlog,
        navigateBack,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}