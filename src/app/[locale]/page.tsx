import type { Metadata } from "next";
import Hero from "@/components/page/home/Hero";
import ProjectOverview from "@/components/page/home/ProjectOverview";
import Apartments from "@/components/page/home/Apartments";
import VRSection from "@/components/page/home/VRSection";
import Floorplan from "@/components/page/home/Floorplan";
import Amenities from "@/components/page/home/Amenities";
import LocationMap from "@/components/page/home/LocationMap";
import GeoAnswerSection, { GEO_ANSWERS } from "@/components/page/home/GeoAnswerSection";
import CTASection from "@/components/page/home/CTASection";
import {
  HOTLINE,
  ROUTES,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  breadcrumbSchema,
  createMetadata,
  webPageSchema,
} from "@/lib/seo";

const title = "BĐS Đà Nẵng | Tư vấn dự án căn hộ & bất động sản Đà Nẵng";
const description =
  "Website tư vấn bất động sản Đà Nẵng được vận hành bởi nhân viên kinh doanh thuộc SRT Miền Trung. Không phải website của chủ đầu tư. Nhận thông tin dự án, bảng giá tham khảo và tư vấn theo nhu cầu.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: ROUTES.home,
  keywords: [
    "mua căn hộ Đà Nẵng",
    "căn hộ cao cấp Đà Nẵng",
    "Sun Symphony Residence Đà Nẵng",
    "Sun Ponte Residence",
    "Sun Cosmo Residence",
    "Capital Square Đà Nẵng",
    "bất động sản sông Hàn",
    "đầu tư căn hộ Đà Nẵng",
    "bảng giá căn hộ Đà Nẵng",
    "BĐS Đà Nẵng",
    "BĐS cao cấp Đà Nẵng",
  ],
});

const homeSchemas = [
  webPageSchema({
    id: `${absoluteUrl(ROUTES.home)}/#webpage`,
    url: absoluteUrl(ROUTES.home),
    name: title,
    description,
  }),
  breadcrumbSchema([{ name: "Trang chủ", url: absoluteUrl(ROUTES.home) }]),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(ROUTES.home)}/#real-estate-consulting`,
    name: "Tư vấn bất động sản Đà Nẵng",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["Đà Nẵng", "Hà Nội", "Việt Nam"],
    serviceType: "Real estate consulting",
    description: "Dịch vụ tư vấn thông tin dự án bất động sản; không phải website của chủ đầu tư.",
    telephone: HOTLINE,
    url: absoluteUrl(ROUTES.contact),
    brand: SITE_NAME,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(ROUTES.home)}/#geo-faq`,
    mainEntity: GEO_ANSWERS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchemas) }}
      />
      <Hero />
      <ProjectOverview />
      <Apartments />
      <VRSection />
      <Floorplan />
      <Amenities />
      <LocationMap />
      <GeoAnswerSection />
      <CTASection />
    </>
  );
}
