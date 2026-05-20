import type { MetadataRoute } from "next";
import { getCatalogProjectSlugs } from "@/lib/projectCatalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srtmientrung.vn";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/du-an`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/lien-he`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tin-tuc`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/ve-chung-toi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/chinh-sach-ban-hang`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/phap-ly`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/dieu-khoan`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/chinh-sach-bao-mat`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const projectPages: MetadataRoute.Sitemap = getCatalogProjectSlugs().map((slug) => ({
    url: `${baseUrl}/du-an/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  return [...staticPages, ...projectPages];
}
