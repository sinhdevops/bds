import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCatalogProject, getCatalogProjectSlugs } from "@/lib/projectCatalog";
import { parseProjectMarkdown, readProjectMarkdown } from "@/lib/projectMarkdown";
import MarkdownProjectPage from "@/components/page/project/MarkdownProjectPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srtmientrung.vn";

export async function generateStaticParams() {
  return getCatalogProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCatalogProject(slug);
  if (!project) return { title: "Dự án không tồn tại" };

  const pageUrl = `${siteUrl}/project/${slug}`;
  const priceText = project.priceFrom ? `Giá từ ${project.priceFrom} tỷ` : "Thông tin giá cập nhật theo giỏ hàng";
  const title = `${project.name} — ${priceText} | SRT Miền Trung`;

  return {
    title,
    description: `${project.name} tại ${project.location}. ${project.summary} Tư vấn 24/7: 0325 610016.`,
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description: project.summary,
      images: [{ url: project.heroImage, width: 1600, height: 900, alt: project.name }],
      type: "website",
      locale: "vi_VN",
      url: pageUrl,
    },
  };
}

function buildProjectSchema(project: ReturnType<typeof getCatalogProject>) {
  if (!project) return null;
  const pageUrl = `${siteUrl}/project/${project.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "@id": `${pageUrl}/#project`,
    name: project.name,
    description: project.summary,
    url: pageUrl,
    image: project.heroImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: project.address,
      addressLocality: "Đà Nẵng",
      addressRegion: "Đà Nẵng",
      addressCountry: "VN",
    },
    seller: {
      "@type": "RealEstateAgent",
      name: "SRT Miền Trung",
      telephone: "+84325610016",
      url: siteUrl,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCatalogProject(slug);
  if (!project) notFound();

  const markdown = readProjectMarkdown(project.contentFile);
  const { blocks, toc } = parseProjectMarkdown(markdown);
  const schema = buildProjectSchema(project);

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <MarkdownProjectPage project={project} blocks={blocks} toc={toc} />
    </>
  );
}
