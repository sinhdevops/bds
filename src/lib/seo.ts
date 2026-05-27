import type { Metadata } from "next";

export const SITE_NAME = "Bất Động Sản Cao Cấp Đà Nẵng";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bds-da-nang.com";
export const DEFAULT_OG_IMAGE = "/images/hero-song-han-clean.png";
export const HOTLINE = "0352.787777";
export const HOTLINE_E164 = "+84352787777";

export const ROUTES = {
  home: "/",
  about: "/ve-chung-toi",
  project: "/du-an",
  news: "/tin-tuc",
  contact: "/lien-he",
  salesPolicy: "/chinh-sach-ban-hang",
  legal: "/phap-ly",
  terms: "/dieu-khoan",
  privacy: "/chinh-sach-bao-mat",
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function projectUrl(slug: string) {
  return absoluteUrl(`${ROUTES.project}/${slug}`);
}

type SeoConfig = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
}: SeoConfig): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        "vi-VN": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "vi_VN",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webPageSchema({
  id,
  url,
  name,
  description,
}: {
  id: string;
  url: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": id,
    url,
    name,
    description,
    inLanguage: "vi-VN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };
}

