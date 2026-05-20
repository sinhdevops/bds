import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srtmientrung.vn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SRT Miền Trung — Nhà Phân Phối BĐS Cao Cấp Sun Group Đà Nẵng",
    template: "%s | SRT Miền Trung",
  },
  description:
    "Đại lý phân phối chiến lược Sun Group tại Đà Nẵng. Mua căn hộ Sun Symphony, Sun Ponte, Sun Cosmo Residence — lý tưởng đầu tư từ Hà Nội. Giá từ 2.8 tỷ. Hotline: 0325 610016.",
  keywords: [
    "SRT Miền Trung",
    "Sun Group Đà Nẵng",
    "Sun Symphony Residence",
    "Sun Ponte Residence",
    "Sun Cosmo Residence",
    "mua căn hộ Đà Nẵng từ Hà Nội",
    "đầu tư bất động sản Đà Nẵng",
    "căn hộ nghỉ dưỡng Đà Nẵng",
    "đầu tư căn hộ Đà Nẵng cho thuê",
    "bất động sản Đà Nẵng 2025 2026",
    "căn hộ cao cấp Đà Nẵng",
    "căn hộ view sông Hàn Đà Nẵng",
    "nhà phân phối Sun Group Đà Nẵng",
  ],
  authors: [{ name: "SRT Miền Trung", url: siteUrl }],
  creator: "SRT Miền Trung",
  publisher: "SRT Miền Trung",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    siteName: "SRT Miền Trung",
    title: "SRT Miền Trung — Nhà Phân Phối BĐS Cao Cấp Sun Group Đà Nẵng",
    description:
      "Mua căn hộ Sun Symphony, Sun Ponte, Sun Cosmo Residence tại Đà Nẵng — lý tưởng đầu tư từ Hà Nội. Giá từ 2.8 tỷ, sở hữu lâu dài, pháp lý đầy đủ.",
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    site: "@SRTMienTrung",
    title: "SRT Miền Trung — BĐS Cao Cấp Sun Group Đà Nẵng",
    description:
      "Căn hộ Sun Symphony, Sun Ponte, Sun Cosmo Residence tại Đà Nẵng — đầu tư sinh lời từ Hà Nội. Hotline: 0325 610016.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${siteUrl}/#organization`,
  name: "SRT Miền Trung",
  description:
    "Đại lý phân phối chiến lược các dự án căn hộ cao cấp của Tập đoàn Sun Group tại Đà Nẵng.",
  url: siteUrl,
  telephone: "+84325610016",
  address: {
    "@type": "PostalAddress",
    streetAddress: "259 Trần Hưng Đạo",
    addressLocality: "Đà Nẵng",
    addressRegion: "Đà Nẵng",
    addressCountry: "VN",
  },
  areaServed: [
    { "@type": "City", name: "Đà Nẵng" },
    { "@type": "City", name: "Hà Nội" },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "SRT Miền Trung",
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "vi-VN",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "vi")) {
    notFound();
  }

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
          <StickyBar />
          <ConsultationModal />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBar from "@/components/layout/StickyBar";
import ConsultationModal from "@/components/shared/ConsultationModal";
