import type { Metadata } from "next";
import AboutHero from "@/components/page/about/AboutHero";
import AboutContent from "@/components/page/about/AboutContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srtmientrung.vn";
const pageUrl = `${siteUrl}/about`;

export const metadata: Metadata = {
  title: "Về SRT Miền Trung — Đại Lý Phân Phối Uy Tín Sun Group Đà Nẵng",
  description:
    "SRT Miền Trung — đại lý phân phối chiến lược Sun Group tại Đà Nẵng với đội ngũ chuyên gia hơn 10 năm kinh nghiệm. Cam kết tư vấn minh bạch, hỗ trợ khách hàng Hà Nội từ A–Z khi đầu tư căn hộ Đà Nẵng.",
  keywords: [
    "SRT Miền Trung",
    "đại lý bất động sản Đà Nẵng uy tín",
    "nhà phân phối Sun Group Đà Nẵng",
    "tư vấn đầu tư căn hộ Đà Nẵng",
    "môi giới bất động sản Đà Nẵng",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Về SRT Miền Trung — Đại Lý Uy Tín Sun Group Đà Nẵng",
    description:
      "Đối tác phân phối chiến lược của Sun Group với hơn 10 năm kinh nghiệm. Đội ngũ tư vấn chuyên biệt phục vụ khách hàng Hà Nội.",
    url: pageUrl,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
    </>
  );
}
