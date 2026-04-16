# Teknas Paints - Page URLs Reference Guide

Complete documentation of all page URLs for the Teknas Paints application.

## Core Page URLs

### Main Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Homepage - Entry point of the application |
| Products | `/products` | Product catalog and listing page |
| Product Detail | `/products/{productId}` | Individual product detail page |
| About | `/about` | About Teknas Paints page |
| Our Company | `/our-company` | Company information page |
| Investors | `/investors` | Investor relations page |

### Services & Location

| Page | URL | Description |
|------|-----|-------------|
| Locate Dealers | `/locate-dealers` | Find dealerships and retailers near you |
| Contact | `/contact` | Contact form and information page |

### User Pages

| Page | URL | Description |
|------|-----|-------------|
| Account | `/account` | User account management page |
| Cart | `/cart` | Shopping cart page |

### Content Pages

| Page | URL | Description |
|------|-----|-------------|
| Blog | `/blog` | Blog listing page with all posts |
| Blog Post | `/blog/{postSlug}` | Individual blog post page |

### Search & Discovery

| Page | URL | Description |
|------|-----|-------------|
| Search | `/search` | Search results page |
| Search with Query | `/search?q={query}` | Search results for specific query |

## URL Examples

### Product Navigation
```
/products                    # View all products
/products/red-gloss-paint   # View specific product
/products/blue-matte-paint  # View specific product
```

### Blog Navigation
```
/blog                              # View all blog posts
/blog/how-to-paint-like-a-pro      # View specific blog post
/blog/new-paint-colors-for-2024    # View specific blog post
```

### Search
```
/search                     # Open search (empty)
/search?q=interior+paint    # Search for "interior paint"
/search?q=exterior+colors   # Search for "exterior colors"
```

## Navigation Implementation

### Using the useNavigation Hook

```tsx
import { useNavigation } from './components/navigation-context';

function MyComponent() {
  const { navigateHome, navigateToProducts, navigateToAbout } = useNavigation();

  return (
    <>
      <button onClick={navigateHome}>Home</button>
      <button onClick={navigateToProducts}>Products</button>
      <button onClick={navigateToAbout}>About</button>
    </>
  );
}
```

### Using the URL Configuration

```tsx
import { PAGE_URLS, getProductDetailUrl, getBlogPostUrl, getSearchUrl } from './config/page-urls';

// Get individual URLs
const homeUrl = PAGE_URLS.home;           // "/"
const productsUrl = PAGE_URLS.products;   // "/products"
const aboutUrl = PAGE_URLS.about;         // "/about"

// Generate dynamic URLs
const productUrl = getProductDetailUrl('red-gloss-paint');    // "/products/red-gloss-paint"
const blogPostUrl = getBlogPostUrl('how-to-paint');           // "/blog/how-to-paint"
const searchUrl = getSearchUrl('interior');                   // "/search?q=interior"
```

### Using Navigation Helpers

```tsx
import { useUrlNavigation } from './config/navigation-helpers';

function MyComponent() {
  const { 
    navigateToUrl,
    navigateToProducts,
    navigateToBlog 
  } = useUrlNavigation();

  return (
    <>
      <button onClick={navigateToProducts}>View Products</button>
      <button onClick={() => navigateToBlog('tips-for-painting')}>
        Read Blog Post
      </button>
    </>
  );
}
```

## Navigation Links Arrays

### Primary Navigation Links
Located in `page-urls.ts` as `PRIMARY_NAV_LINKS`:
- Home
- Products
- About
- Locate Dealers
- Our Company
- Contact

### Secondary Navigation Links
Located in `page-urls.ts` as `SECONDARY_NAV_LINKS`:
- Investors
- Blog
- Account

## Page Metadata

Each page has associated metadata for SEO and UI purposes:

```tsx
import { PAGE_METADATA } from './config/page-urls';

const homeMetadata = PAGE_METADATA['/'];
// {
//   title: "Home",
//   description: "Welcome to Teknas Paints - Premium Quality Paint Products",
//   path: "/"
// }
```

## Adding New Pages

When adding new pages to the application:

1. Add the page component to `/src/app/components/`
2. Add the URL to `PAGE_URLS` in `/src/app/config/page-urls.ts`
3. Add metadata to `PAGE_METADATA`
4. Add navigation function to `navigation-context.tsx`
5. Update the switch statement in `App.tsx`
6. Add the view type to the `ViewType` type definition

## URL Standards

- All URLs use **lowercase** with **hyphens** (-) as separators
- Dynamic segments use **curly braces**: `/products/{productId}`
- Search queries are passed via query parameters: `?q=query`
- Internal navigation uses the `useNavigation()` hook
- External links can reference URLs from `page-urls.ts`

## SEO Considerations

- Use descriptive, keyword-rich URL segments
- Keep URLs short and clean
- Avoid special characters in URLs
- Use hyphens, not underscores
- Maintain consistent URL structure
- Use canonical tags for duplicate content

## Routing Architecture

The application uses a **custom context-based routing system** instead of traditional React Router:

- Navigation state is managed via `NavigationProvider` context
- `currentView` tracks the active page
- Helper functions handle navigation logic
- URL parameters are passed through navigation functions
- The system supports browser history via `previousView`
