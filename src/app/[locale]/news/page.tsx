import type { Metadata } from "next";
import NewsHero from "@/components/page/news/NewsHero";
import NewsGrid from "@/components/page/news/NewsGrid";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srtmientrung.vn";
const pageUrl = `${siteUrl}/news`;

export const metadata: Metadata = {
  title: "Tin Tức BĐS Đà Nẵng — Quy Hoạch, Tiến Độ & Thị Trường 2025",
  description:
    "Cập nhật tin tức bất động sản Đà Nẵng mới nhất: quy hoạch đô thị, tiến độ dự án Sun Group, phân tích thị trường 2025–2026. Thông tin cần thiết cho nhà đầu tư Hà Nội trước khi mua căn hộ Đà Nẵng.",
  keywords: [
    "tin tức bất động sản Đà Nẵng 2025",
    "thị trường căn hộ Đà Nẵng",
    "quy hoạch đô thị Đà Nẵng",
    "tiến độ Sun Symphony Residence",
    "tiến độ Sun Ponte Residence",
    "đầu tư bất động sản Đà Nẵng có nên không",
    "bất động sản Đà Nẵng tăng giá",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Tin Tức BĐS Đà Nẵng — Quy Hoạch, Tiến Độ & Thị Trường 2025",
    description:
      "Phân tích thị trường, quy hoạch và tiến độ các dự án Sun Group Đà Nẵng. Cẩm nang đầu tư cho nhà đầu tư Hà Nội.",
    url: pageUrl,
    type: "website",
  },
};

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsGrid />
    </>
  );
}
