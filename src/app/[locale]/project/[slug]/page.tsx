import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, getAllProjectSlugs } from "@/lib/projects";

import ProjectDetailHero from "@/components/page/project/detail/ProjectDetailHero";
import ProjectHighlights from "@/components/page/project/detail/ProjectHighlights";
import ProjectApartmentTypes from "@/components/page/project/detail/ProjectApartmentTypes";
import ProjectGallery from "@/components/page/project/detail/ProjectGallery";
import ProjectDetailAmenities from "@/components/page/project/detail/ProjectDetailAmenities";
import ProjectDetailLocation from "@/components/page/project/detail/ProjectDetailLocation";
import ProjectDetailCTA from "@/components/page/project/detail/ProjectDetailCTA";
import ProjectDetailNav from "@/components/page/project/detail/ProjectDetailNav";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srtmientrung.vn";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Dự Án Không Tồn Tại" };

  const pageUrl = `${siteUrl}/project/${slug}`;
  const title = `${project.name} — Giá Từ ${project.priceFrom} Tỷ | Mua Căn Hộ Đà Nẵng`;
  const description = `${project.name} tại ${project.location}: ${project.floors} tầng, ${project.totalUnits} căn hộ, giá từ ${project.priceFrom}–${project.priceTo} tỷ. Sở hữu lâu dài, pháp lý đầy đủ. Lý tưởng đầu tư từ Hà Nội — tư vấn 24/7: 0981 814 814.`;

  return {
    title,
    description,
    keywords: [
      project.name,
      `${project.name} giá bao nhiêu`,
      `${project.name} Đà Nẵng`,
      `mua căn hộ ${project.name}`,
      `${project.shortName} Đà Nẵng`,
      "căn hộ cao cấp Đà Nẵng",
      "mua căn hộ Đà Nẵng từ Hà Nội",
      "đầu tư bất động sản Đà Nẵng",
      "căn hộ view sông Hàn",
      "Sun Group Đà Nẵng",
    ],
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      images: [{ url: project.heroImage, width: 1800, height: 900, alt: project.name }],
      type: "website",
      locale: "vi_VN",
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.heroImage],
    },
  };
}

function buildProjectSchema(project: ReturnType<typeof getProject>) {
  if (!project) return null;
  const pageUrl = `${siteUrl}/project/${project.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Apartment",
    "@id": `${pageUrl}/#listing`,
    name: project.name,
    description: project.description,
    url: pageUrl,
    image: project.heroImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: project.fullAddress,
      addressLocality: "Đà Nẵng",
      addressRegion: "Đà Nẵng",
      addressCountry: "VN",
    },
    numberOfRooms: project.apartments.length,
    floorSize: {
      "@type": "QuantitativeValue",
      value: project.apartments[0]?.area ?? 35,
      unitCode: "MTK",
    },
    numberOfFloors: project.floors,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "VND",
      lowPrice: parseFloat(project.priceFrom) * 1_000_000_000,
      highPrice: parseFloat(project.priceTo) * 1_000_000_000,
      offerCount: project.totalUnits,
      seller: {
        "@type": "RealEstateAgent",
        name: "SRT Miền Trung",
        telephone: "+84981814814",
        url: siteUrl,
      },
    },
    amenityFeature: project.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.name,
      value: true,
    })),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang Chủ", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Dự Án", item: `${siteUrl}/project` },
        { "@type": "ListItem", position: 3, name: project.name, item: pageUrl },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const schema = buildProjectSchema(project);

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <ProjectDetailNav />

      <div id="hero">
        <ProjectDetailHero project={project} />
      </div>

      <div id="highlights">
        <ProjectHighlights project={project} />
      </div>

      <ProjectApartmentTypes project={project} />

      <div id="gallery">
        <ProjectGallery project={project} />
      </div>

      <ProjectDetailAmenities project={project} />

      <ProjectDetailLocation project={project} />

      <ProjectDetailCTA project={project} />
    </>
  );
}
