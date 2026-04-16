/**
 * Sitemap configuration for Teknas Paints
 * Used for SEO and generating XML sitemaps
 */

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

export const SITEMAP_ENTRIES: SitemapEntry[] = [
  {
    url: "/",
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    url: "/products",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "/about",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    url: "/our-company",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    url: "/investors",
    changefreq: "monthly",
    priority: 0.6,
  },
  {
    url: "/locate-dealers",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/contact",
    changefreq: "yearly",
    priority: 0.8,
  },
  {
    url: "/blog",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/search",
    changefreq: "always",
    priority: 0.7,
  },
];

/**
 * Generate XML sitemap string from sitemap entries
 */
export const generateXmlSitemap = (baseUrl: string, entries: SitemapEntry[]): string => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = "</urlset>";

  const urlEntries = entries
    .map((entry) => {
      return `  <url>
    <loc>${baseUrl}${entry.url}</loc>${
        entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ""
      }${entry.changefreq ? `\n    <changefreq>${entry.changefreq}</changefreq>` : ""}${
        entry.priority !== undefined
          ? `\n    <priority>${entry.priority.toFixed(1)}</priority>`
          : ""
      }
  </url>`;
    })
    .join("\n");

  return `${xmlHeader}${urlsetOpen}${urlEntries}\n${urlsetClose}`;
};

/**
 * Generate robots.txt content
 */
export const generateRobotsTxt = (sitemapUrl: string): string => {
  return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;
};
