/* Teknas Paints — root shell (verified) */
import { BrowserRouter, Routes, Route, Navigate, Link, useParams } from "react-router-dom";
import { NavigationProvider, useNavigation, slugifyProductName } from "./components/navigation-context";
import { StickyNavBar } from "./components/sticky-navbar";
import { HomePage } from "./components/home-page";
import { ProductDetailPage } from "./components/product-detail-page";
import { ProductsPage, ALL_PRODUCTS } from "./components/products-page";
import { AboutPage } from "./components/about-page";
import { LocateDealersPage } from "./components/locate-dealers-page";
import { ContactPage } from "./components/contact-page";
import { OurCompanyPage } from "./components/our-company-page";
import { InvestorsPage } from "./components/investors-page";
import { AccountPage } from "./components/account-page";
import { CartPage } from "./components/cart-page";
import { SearchPage } from "./components/search-page";
import { BlogPage } from "./components/blog-page";
import { BlogPostPage } from "./components/blog-post-page";
import { PageFooter } from "./components/page-footer";
import { PAGE_URLS } from "./config/page-urls";
import { BLOG_POSTS } from "./components/blog-data";

const FOOTER_VIEWS = new Set([
  "home",
  "products",
  "product-detail",
  "about",
  "locate-dealers",
  "contact",
  "our-company",
  "investors",
  "account",
  "cart",
  "search",
  "blog",
]);

function ProductDetailRoute() {
  const { productId } = useParams<{ productId?: string }>();
  const product = productId
    ? ALL_PRODUCTS.flatMap((section) => section.items).find(
        (item) => slugifyProductName(item.name) === productId,
      )
    : undefined;

  return product ? <ProductDetailPage product={product} /> : <Navigate to={PAGE_URLS.products} replace />;
}

function BlogPostRoute() {
  const { postSlug } = useParams<{ postSlug?: string }>();
  const post = postSlug ? BLOG_POSTS.find((p) => p.slug === postSlug) : undefined;

  return post ? <BlogPostPage post={post} /> : <Navigate to={PAGE_URLS.blog} replace />;
}

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#c75b3a] mb-4">404</p>
        <h1 className="text-[clamp(36px,5vw,60px)] font-black text-[#1a1428] mb-6">Page Not Found</h1>
        <p className="text-[16px] leading-8 text-[#4c4c4c] mb-8">
          The page you’re looking for doesn’t exist or has been moved. Use the button below to return to the homepage.
        </p>
        <Link
          to={PAGE_URLS.home}
          className="inline-flex items-center justify-center rounded-full bg-[#c75b3a] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c75b3a]/20 transition hover:bg-[#ab4c2f]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

function AppContent() {
  const { currentView } = useNavigation();

  return (
    <div className="overflow-x-hidden min-h-screen">
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }}>
        <StickyNavBar />
      </div>
      <Routes>
        <Route path={PAGE_URLS.home} element={<HomePage />} />
        <Route path={PAGE_URLS.products} element={<ProductsPage />} />
        <Route path={PAGE_URLS.productDetail} element={<ProductDetailRoute />} />
        <Route path={PAGE_URLS.about} element={<AboutPage />} />
        <Route path={PAGE_URLS.locateDealers} element={<LocateDealersPage />} />
        <Route path={PAGE_URLS.contact} element={<ContactPage />} />
        <Route path={PAGE_URLS.ourCompany} element={<OurCompanyPage />} />
        <Route path={PAGE_URLS.investors} element={<InvestorsPage />} />
        <Route path={PAGE_URLS.account} element={<AccountPage />} />
        <Route path={PAGE_URLS.cart} element={<CartPage />} />
        <Route path={PAGE_URLS.search} element={<SearchPage />} />
        <Route path={PAGE_URLS.blog} element={<BlogPage />} />
        <Route path={PAGE_URLS.blogPost} element={<BlogPostRoute />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {FOOTER_VIEWS.has(currentView) && <PageFooter />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </BrowserRouter>
  );
}