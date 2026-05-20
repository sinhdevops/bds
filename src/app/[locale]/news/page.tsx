import type { Metadata } from "next";
import NewsHero from "@/components/page/news/NewsHero";
import NewsGrid from "@/components/page/news/NewsGrid";
import { ROUTES, absoluteUrl, breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo";

const title = "Tin Tức BĐS Đà Nẵng - Quy Hoạch, Tiến Độ & Thị Trường";
const description =
  "Cập nhật tin tức bất động sản Đà Nẵng: quy hoạch đô thị, tiến độ dự án Sun Group, phân tích thị trường căn hộ và kinh nghiệm đầu tư.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: ROUTES.news,
  keywords: [
    "tin tức bất động sản Đà Nẵng",
    "thị trường căn hộ Đà Nẵng",
    "quy hoạch Đà Nẵng",
    "tiến độ Sun Symphony Residence",
    "đầu tư bất động sản Đà Nẵng",
  ],
});

const schemas = [
  webPageSchema({
    id: `${absoluteUrl(ROUTES.news)}/#webpage`,
    url: absoluteUrl(ROUTES.news),
    name: title,
    description,
  }),
  breadcrumbSchema([
    { name: "Trang chủ", url: absoluteUrl(ROUTES.home) },
    { name: "Tin tức", url: absoluteUrl(ROUTES.news) },
  ]),
];

export default function NewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <NewsHero />
      <NewsGrid />
    </>
  );
}
