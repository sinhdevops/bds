import type { Metadata } from "next";
import ProjectHero from "@/components/page/project/ProjectHero";
import ProjectGrid from "@/components/page/project/ProjectGrid";
import { PROJECT_CATALOG } from "@/lib/projectCatalog";
import { ROUTES, absoluteUrl, breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo";

const title = "Dự Án Căn Hộ Cao Cấp Đà Nẵng - Ven Sông Hàn";
const description =
  "Danh mục dự án căn hộ tại Đà Nẵng: Sun Symphony, Sun Ponte, Sun Cosmo, Sun Solar và Capital Square. So sánh vị trí, giá tham khảo, tiến độ và thông tin cần xác minh trước giao dịch.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: ROUTES.project,
  keywords: [
    "dự án căn hộ cao cấp Đà Nẵng",
    "Sun Symphony Residence",
    "Sun Ponte Residence",
    "Sun Cosmo Residence",
    "Sun Solar Residence",
    "Capital Square Đà Nẵng",
    "căn hộ view sông Hàn",
    "bảng giá căn hộ Đà Nẵng",
  ],
});

const schemas = [
  webPageSchema({
    id: `${absoluteUrl(ROUTES.project)}/#webpage`,
    url: absoluteUrl(ROUTES.project),
    name: title,
    description,
  }),
  breadcrumbSchema([
    { name: "Trang chủ", url: absoluteUrl(ROUTES.home) },
    { name: "Dự án", url: absoluteUrl(ROUTES.project) },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl(ROUTES.project)}/#project-list`,
    name: "Danh mục dự án căn hộ Đà Nẵng",
    itemListElement: PROJECT_CATALOG.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: absoluteUrl(`${ROUTES.project}/${project.slug}`),
    })),
  },
];

export default function ProjectPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <ProjectHero />
      <ProjectGrid />
    </>
  );
}
