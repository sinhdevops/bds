import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBar from "@/components/layout/StickyBar";
import FloatingContact from "@/components/layout/FloatingContact";
import ConsultationModal from "@/components/shared/ConsultationModal";
import { routing } from "@/i18n/routing";
import { OFFICE_ADDRESS } from "@/lib/contact";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...createMetadata({
    title: "BĐS cao cấp Đà Nẵng - Căn Hộ Cao Cấp Sun Group & Ven Sông Hàn",
    description:
      `Cổng thông tin tư vấn căn hộ cao cấp Đà Nẵng: Sun Symphony, Sun Ponte, Sun Cosmo, Sun Solar và Capital Square. Văn phòng ${OFFICE_ADDRESS}.`,
    keywords: [
      "BĐS cao cấp Đà Nẵng",
      "bds-da-nang.com",
      "Sun Group Đà Nẵng",
      "mua căn hộ Đà Nẵng",
      "căn hộ Sun Group Đà Nẵng",
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
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Real Estate",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/logo-bds-da-nang-dark.svg",
  },
  openGraph: {
    ...createMetadata({
      title: "BĐS cao cấp Đà Nẵng - Căn Hộ Cao Cấp Sun Group & Ven Sông Hàn",
      description:
        `Tư vấn căn hộ Đà Nẵng: bảng giá, giỏ hàng, chính sách bán hàng, lịch xem nhà và pháp lý dự án. Văn phòng ${OFFICE_ADDRESS}.`,
    }).openGraph,
    images: [{ url: absoluteUrl(DEFAULT_OG_IMAGE), width: 1200, height: 630, alt: SITE_NAME }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["BĐS Đà Nẵng", "BDS Da Nang", "bds-da-nang.com"],
  description:
    "Cổng thông tin tư vấn và cập nhật các dự án căn hộ cao cấp tại Đà Nẵng.",
  url: SITE_URL,
  logo: absoluteUrl("/images/logo-bds-da-nang-dark.svg"),
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  telephone: HOTLINE_E164,
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
          <Navbar />
          <main className="grow relative">{children}</main>
          <Footer />
          <FloatingContact />
          <StickyBar />
          <ConsultationModal />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
