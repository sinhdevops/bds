import type { MetadataRoute } from "next";
import { getCatalogProjectSlugs } from "@/lib/projectCatalog";
import { absoluteUrl, ROUTES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl(ROUTES.home), lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: absoluteUrl(ROUTES.project), lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: absoluteUrl(ROUTES.contact), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: absoluteUrl(ROUTES.news), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl(ROUTES.about), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl(ROUTES.salesPolicy), lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: absoluteUrl(ROUTES.legal), lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: absoluteUrl(ROUTES.terms), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl(ROUTES.privacy), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/llms.txt"), lastModified: now, changeFrequency: "monthly", priority: 0.2 },
  ];

  const projectPages: MetadataRoute.Sitemap = getCatalogProjectSlugs().map((slug) => ({
    url: absoluteUrl(`${ROUTES.project}/${slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  return [...staticPages, ...projectPages];
}
