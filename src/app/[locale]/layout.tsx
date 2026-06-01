import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import ConsentBanner from "@/components/layout/ConsentBanner";
import MetaPixel from "@/components/layout/MetaPixel";
import { SiteBottomChrome, SiteTopChrome } from "@/components/layout/SiteChrome";
import ConsultationModal from "@/components/shared/ConsultationModal";
import { routing } from "@/i18n/routing";
import { COMPANY_LEGAL_NAME, CONTACT_EMAIL, OFFICE_ADDRESS, TAX_CODE } from "@/lib/contact";
import {
  DEFAULT_OG_IMAGE,
  HOTLINE_E164,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  createMetadata,
} from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const GOOGLE_ADS_ID = "AW-18191913688";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...createMetadata({
    title: "BĐS Đà Nẵng | Tư vấn dự án căn hộ & bất động sản Đà Nẵng",
    description:
      `Website tư vấn bất động sản Đà Nẵng được vận hành bởi nhân viên kinh doanh thuộc ${COMPANY_LEGAL_NAME}. Không phải website của chủ đầu tư. Nhận thông tin dự án, bảng giá tham khảo và tư vấn theo nhu cầu.`,
    keywords: [
      "bất động sản cao cấp Đà Nẵng",
      "BĐS Đà Nẵng",
      "BĐS cao cấp Đà Nẵng",
      "bds-da-nang.com",
      "mua căn hộ Đà Nẵng",
      "Sun Symphony Residence",
      "Sun Ponte Residence",
      "Sun Cosmo Residence",
      "Capital Square Đà Nẵng",
      "bất động sản sông Hàn",
      "đầu tư căn hộ Đà Nẵng",
      "bảng giá căn hộ Đà Nẵng",
    ],
  }),
  applicationName: SITE_NAME,
  authors: [{ name: COMPANY_LEGAL_NAME, url: SITE_URL }],
  creator: COMPANY_LEGAL_NAME,
  publisher: COMPANY_LEGAL_NAME,
  category: "Real Estate",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    ...createMetadata({
      title: "BĐS Đà Nẵng | Tư vấn dự án căn hộ & bất động sản Đà Nẵng",
      description:
        `Website tư vấn bất động sản Đà Nẵng thuộc ${COMPANY_LEGAL_NAME}. Không phải website của chủ đầu tư. Thông tin giá và chính sách chỉ mang tính tham khảo.`,
    }).openGraph,
    images: [{ url: absoluteUrl(DEFAULT_OG_IMAGE), width: 1200, height: 630, alt: SITE_NAME }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: COMPANY_LEGAL_NAME,
  alternateName: ["BĐS Đà Nẵng", "BĐS cao cấp Đà Nẵng", "BDS Da Nang", "BDS cao cap Da Nang", "bat dong san cao cap da nang"],
  description:
    "Website tư vấn bất động sản Đà Nẵng được vận hành bởi nhân viên kinh doanh thuộc SRT Miền Trung; không phải website của chủ đầu tư hoặc thương hiệu dự án.",
  url: SITE_URL,
  logo: absoluteUrl("/images/logo-bds-da-nang-dark.svg"),
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  telephone: HOTLINE_E164,
  email: CONTACT_EMAIL,
  taxID: TAX_CODE,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: OFFICE_ADDRESS,
    addressLocality: "Đà Nẵng",
    addressRegion: "Đà Nẵng",
    addressCountry: "VN",
  },
  areaServed: [
    { "@type": "City", name: "Đà Nẵng" },
    { "@type": "Country", name: "Việt Nam" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: HOTLINE_E164,
      contactType: "sales",
      areaServed: "VN",
      availableLanguage: ["vi"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: ["BĐS Đà Nẵng", "BĐS cao cấp Đà Nẵng", "BDS Da Nang"],
  description:
    `Website tư vấn bất động sản Đà Nẵng thuộc ${COMPANY_LEGAL_NAME}, MST ${TAX_CODE}; không phải website của chủ đầu tư.`,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "vi-VN",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/du-an?keyword={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "vi")) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <Script
          id="google-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied'
              });
            `,
          }}
        />
        <Script
          id="google-ads-gtag-src"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_ID}');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased relative min-h-screen flex flex-col bg-[#FAF8F5]">
        <NextIntlClientProvider locale={locale}>
          <SiteTopChrome />
          <main className="grow relative">{children}</main>
          <SiteBottomChrome />
          <ConsultationModal />
          <MetaPixel />
          <ConsentBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
