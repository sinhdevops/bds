import type { Metadata } from "next";
import Hero from "@/components/page/home/Hero";
import ProjectOverview from "@/components/page/home/ProjectOverview";
import Apartments from "@/components/page/home/Apartments";
import VRSection from "@/components/page/home/VRSection";
import Floorplan from "@/components/page/home/Floorplan";
import Amenities from "@/components/page/home/Amenities";
import LocationMap from "@/components/page/home/LocationMap";
import CTASection from "@/components/page/home/CTASection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srtmientrung.vn";

export const metadata: Metadata = {
  title: "SRT Miền Trung — Mua Căn Hộ Sun Group Đà Nẵng, Đầu Tư Từ Hà Nội",
  description:
    "Mua căn hộ cao cấp Sun Symphony, Sun Ponte, Sun Cosmo Residence tại Đà Nẵng. Lý tưởng cho khách Hà Nội đầu tư nghỉ dưỡng, cho thuê sinh lời. Sở hữu lâu dài, pháp lý đầy đủ. Giá từ 2.8 tỷ. Tư vấn 24/7: 0325 610016.",
  keywords: [
    "mua căn hộ Đà Nẵng",
    "đầu tư căn hộ Đà Nẵng từ Hà Nội",
    "căn hộ Sun Group Đà Nẵng",
    "Sun Symphony Residence Đà Nẵng",
    "căn hộ nghỉ dưỡng Đà Nẵng",
    "bất động sản sông Hàn Đà Nẵng",
    "SRT Miền Trung",
    "căn hộ cao cấp Đà Nẵng 2025",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "SRT Miền Trung — Mua Căn Hộ Sun Group Đà Nẵng, Đầu Tư Từ Hà Nội",
    description:
      "Căn hộ cao cấp Sun Symphony, Sun Ponte, Sun Cosmo Residence tại Đà Nẵng. Đầu tư từ Hà Nội — sở hữu lâu dài, cho thuê sinh lời. Giá từ 2.8 tỷ.",
    url: siteUrl,
    type: "website",
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "SRT Miền Trung — Mua Căn Hộ Sun Group Đà Nẵng",
  description:
    "Đại lý phân phối chiến lược căn hộ cao cấp Sun Group tại Đà Nẵng. Lý tưởng cho nhà đầu tư Hà Nội.",
  inLanguage: "vi-VN",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang Chủ", item: siteUrl },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Hero />
      <ProjectOverview />
      <Apartments />
      <VRSection />
      <Floorplan />
      <Amenities />
      <LocationMap />
      <CTASection />
    </>
  );
}
