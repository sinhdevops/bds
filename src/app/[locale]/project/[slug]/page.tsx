import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCatalogProject, getCatalogProjectSlugs } from "@/lib/projectCatalog";
import { parseProjectMarkdown, readProjectMarkdown } from "@/lib/projectMarkdown";
import MarkdownProjectPage from "@/components/page/project/MarkdownProjectPage";
import {
  HOTLINE_E164,
  ROUTES,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  breadcrumbSchema,
  createMetadata,
  projectUrl,
  webPageSchema,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCatalogProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCatalogProject(slug);
  if (!project) return { title: "Dự án không tồn tại", robots: { index: false, follow: false } };

  const priceText = project.priceFrom ? `Giá từ ${project.priceFrom} tỷ` : "Nhận bảng giá mới nhất";
  const title = `${project.name} - ${priceText} | BĐS Đà Nẵng`;
  const description = `${project.name} tại ${project.location}. ${priceText}, cập nhật giỏ hàng, chính sách bán hàng và lịch xem nhà qua hotline 0702252678.`;

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
      "căn hộ Sun Group Đà Nẵng",
      "BĐS Đà Nẵng",
    ],
  });
}

function buildProjectSchemas(project: NonNullable<ReturnType<typeof getCatalogProject>>) {
  const pageUrl = projectUrl(project.slug);
  const price = project.priceFrom
    ? {
        "@type": "PriceSpecification",
        priceCurrency: "VND",
        minPrice: project.priceFrom * 1000000000,
      }
    : undefined;

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
      "@type": "ApartmentComplex",
      "@id": `${pageUrl}/#project`,
      name: project.name,
      description: project.summary,
      url: pageUrl,
      image: absoluteUrl(project.heroImage),
      address: {
        "@type": "PostalAddress",
        streetAddress: project.address,
        addressLocality: "Đà Nẵng",
        addressRegion: "Đà Nẵng",
        addressCountry: "VN",
      },
      amenityFeature: project.views.map((view) => ({
        "@type": "LocationFeatureSpecification",
        name: `View ${view}`,
        value: true,
      })),
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: pageUrl,
        seller: { "@id": `${SITE_URL}/#organization` },
        priceSpecification: price,
      },
      seller: {
        "@type": "RealEstateAgent",
        name: SITE_NAME,
        telephone: HOTLINE_E164,
        url: SITE_URL,
      },
    },
  ];
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCatalogProject(slug);
  if (!project) notFound();

  const markdown = readProjectMarkdown(project.contentFile);
  const { blocks, toc } = parseProjectMarkdown(markdown);
  const schemas = buildProjectSchemas(project);

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
