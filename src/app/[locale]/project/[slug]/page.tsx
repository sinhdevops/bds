import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getCatalogProject, getCatalogProjectSlugs } from "@/lib/projectCatalog";
import { parseProjectMarkdown } from "@/lib/projectMarkdown";
import MarkdownProjectPage from "@/components/page/project/MarkdownProjectPage";
import FoursTowerLanding from "@/components/page/project/FoursTowerLanding";
import SymphonyFiveLanding from "@/components/page/project/SymphonyFiveLanding";
import {
  ROUTES,
  SITE_URL,
  absoluteUrl,
  breadcrumbSchema,
  createMetadata,
  projectUrl,
  webPageSchema,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) => getCatalogProjectSlugs().map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getCatalogProject(slug);
  if (!project) return { title: "Dự án không tồn tại", robots: { index: false, follow: false } };

  const priceText = project.priceFrom ? `Giá tham khảo từ ${project.priceFrom} tỷ` : "Nhận thông tin giá tham khảo";
  const isFoursTower = project.slug === "fours-tower-da-nang";
  const title = isFoursTower
    ? "FourS Tower Đà Nẵng | Thông tin tư vấn căn hộ tham khảo"
    : `${project.name} - ${priceText} | BĐS Đà Nẵng`;
  const description = isFoursTower
    ? "Thông tin tư vấn tham khảo về FourS Tower Đà Nẵng. Website không phải trang của chủ đầu tư; giá, giỏ hàng và chính sách cần xác minh tại thời điểm tư vấn."
    : `${project.name} tại ${project.location}. ${priceText}, cập nhật thông tin dự án, chính sách bán hàng tham khảo và lịch xem nhà qua hotline 0325.610016.`;

  return createMetadata({
    title,
    description,
    path: `${ROUTES.project}/${slug}`,
    image: project.heroImage,
    keywords: project.seoKeywords ?? [
      project.name,
      project.shortName,
      `${project.name} Đà Nẵng`,
      `bảng giá ${project.name}`,
      `mua căn hộ ${project.name}`,
      "căn hộ cao cấp Đà Nẵng",
      "BĐS Đà Nẵng",
    ],
  });
}

function buildProjectSchemas(project: NonNullable<ReturnType<typeof getCatalogProject>>) {
  const pageUrl = projectUrl(project.slug);
  return [
    webPageSchema({
      id: `${pageUrl}/#webpage`,
      url: pageUrl,
      name: project.name,
      description: project.summary,
    }),
    breadcrumbSchema([
      { name: "Trang chủ", url: absoluteUrl(ROUTES.home) },
      { name: "Dự án", url: absoluteUrl(ROUTES.project) },
      { name: project.name, url: pageUrl },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}/#consulting-service`,
      name: `Tư vấn thông tin ${project.name}`,
      serviceType: "Real estate consulting",
      description: `${project.summary} Thông tin do website tư vấn bất động sản tổng hợp, không phải website của chủ đầu tư.`,
      url: pageUrl,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Đà Nẵng",
      subjectOf: { "@id": `${pageUrl}/#webpage` },
    },
  ];
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getCatalogProject(slug);
  if (!project) notFound();
  const schemas = buildProjectSchemas(project);

  if (project.slug === "sun-symphony-5") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
        <SymphonyFiveLanding project={project} />
      </>
    );
  }

  if (project.slug === "fours-tower-da-nang") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
        <FoursTowerLanding project={project} />
      </>
    );
  }

  const markdown = [
    `# ${project.name}`,
    "",
    `![${project.name}](${project.heroImage})`,
    "",
    "## Tổng quan",
    "",
    project.summary,
    "",
    "## Thông tin nhanh",
    "",
    `- Vị trí: ${project.location}`,
    `- Địa chỉ: ${project.address}`,
    `- Giá từ: ${project.priceFrom ? `${project.priceFrom} tỷ` : "Liên hệ"}`,
    `- Diện tích: ${project.area}`,
    `- Bàn giao: ${project.handover}`,
    "",
    "## Góc nhìn tư vấn",
    "",
    project.idealFor,
  ].join("\n");
  const { blocks, toc } = parseProjectMarkdown(markdown);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <MarkdownProjectPage project={project} blocks={blocks} toc={toc} />
    </>
  );
}

