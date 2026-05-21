import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { MarkdownBlock, TocItem } from "@/lib/projectMarkdown";
import { PROJECT_CATALOG, type ProjectCatalogItem } from "@/lib/projectCatalog";

function renderInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function MarkdownProjectPage({
  project,
  blocks,
  toc,
}: {
  project: ProjectCatalogItem;
  blocks: MarkdownBlock[];
  toc: TocItem[];
}) {
  const relatedProjects = PROJECT_CATALOG.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <main className="bg-[#FAF8F5]">
      <section className="relative min-h-[620px] overflow-hidden bg-[#071522]">
        <Image src={project.heroImage} alt={project.name} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-r from-[#071522]/92 via-[#071522]/58 to-[#071522]/18" />
        <div className="absolute inset-0 bg-linear-to-t from-[#071522] via-transparent to-[#071522]/36" />
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1240px] flex-col justify-end px-6 pb-16 pt-32">
          <p className="label-small mb-5 text-[#C6A77D]">{project.badge}</p>
          <h1 className="max-w-4xl font-serif text-5xl font-normal leading-[1.02] text-white lg:text-7xl" style={{ fontFamily: "var(--font-serif)" }}>
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-[1.85] text-white/72">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.views.map((view) => (
              <span key={view} className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                {view}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-8 px-6 py-12 lg:grid-cols-[280px_1fr] lg:py-16">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-md bg-white p-5 shadow-[0_8px_26px_rgba(10,18,28,0.07)] ring-1 ring-black/5">
            <p className="label-small text-[#9C7B5D]">Mục lục</p>
            <nav className="mt-4 space-y-2">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block rounded-[3px] px-3 py-2 text-sm font-semibold text-[#555555] transition-colors hover:bg-[#F5F1EB] hover:text-[#111111] ${
                    item.level === 3 ? "ml-4" : ""
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-5 rounded-md bg-[#071522] p-5 text-white">
            <p className="label-small text-[#C6A77D]">Thông tin nhanh</p>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Vị trí", project.location],
                ["Giá từ", project.priceFrom ? `${project.priceFrom} tỷ` : "Đang cập nhật"],
                ["Diện tích", project.area],
                ["Bàn giao", project.handover],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-white/10 pb-3">
                  <dt className="text-white/42">{label}</dt>
                  <dd className="mt-1 font-semibold text-white">{value}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/contact"
              className="mt-5 inline-flex w-full justify-center rounded-[3px] bg-[#C6A77D] px-5 py-3 label-small font-bold text-white transition-colors hover:bg-white hover:text-[#071522]"
            >
              Nhận bảng giá
            </Link>
          </div>
        </aside>

        <article className="overflow-hidden rounded-md bg-white p-6 shadow-[0_10px_34px_rgba(10,18,28,0.08)] ring-1 ring-black/5 lg:p-10">
          {blocks.map((block, index) => {
            if (block.type === "heading") {
              if (block.level === 1) return null;
              const Tag = block.level === 2 ? "h2" : "h3";
              return (
                <Tag
                  key={index}
                  id={block.id}
                  className={`${block.level === 2 ? "mt-10 text-3xl" : "mt-8 text-2xl"} scroll-mt-28 font-serif font-normal leading-tight text-[#111111] first:mt-0`}
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {block.text}
                </Tag>
              );
            }

            if (block.type === "paragraph") {
              return (
                <p key={index} className="mt-4 text-[0.98rem] font-medium leading-[1.9] text-[#5F5F5F]">
                  {renderInline(block.text)}
                </p>
              );
            }

            if (block.type === "image") {
              return (
                <figure key={index} className="relative mt-8 overflow-hidden rounded-md bg-[#071522]" style={{ aspectRatio: "16/8.8" }}>
                  <Image src={block.src} alt={block.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 760px" />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent px-5 py-4 text-xs font-semibold text-white/80">
                    {block.alt}
                  </figcaption>
                </figure>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={index} className="mt-5 space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-semibold leading-relaxed text-[#555555]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6A77D]" />
                      <span>{renderInline(item)}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </article>
      </section>

      {relatedProjects.length > 0 && (
        <section className="border-t border-[#E5E0D8] bg-white py-14 lg:py-18">
          <div className="mx-auto max-w-[1240px] px-6">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="label-small text-[#9C7B5D]">Dự án liên quan</p>
                <h2
                  className="mt-3 font-serif text-3xl font-normal leading-tight text-[#111111] lg:text-4xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Có thể phù hợp với nhu cầu của bạn
                </h2>
              </div>
              <Link
                href="/project"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#111111] transition-colors hover:text-[#9C7B5D]"
              >
                Xem tất cả dự án
                <ArrowIcon />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {relatedProjects.map((item) => (
                <RelatedProjectCard key={item.slug} project={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function RelatedProjectCard({ project }: { project: ProjectCatalogItem }) {
  const price = project.priceFrom ? `${project.priceFrom} tỷ` : "Liên hệ";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md bg-[#FAF8F5] shadow-[0_8px_26px_rgba(10,18,28,0.07)] ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(10,18,28,0.13)]">
      <Link
        href={{ pathname: "/project/[slug]", params: { slug: project.slug } }}
        className="relative block overflow-hidden"
        style={{ aspectRatio: "16/9.5" }}
      >
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/58 via-black/8 to-transparent" />
        <span className="absolute left-4 top-4 rounded-[3px] bg-white/94 px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-[#111111]">
          {project.badge}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-[#9C7B5D]">{project.location}</p>
            <Link
              href={{ pathname: "/project/[slug]", params: { slug: project.slug } }}
              className="mt-1 line-clamp-2 block min-h-[3.65rem] font-serif text-2xl font-normal leading-tight text-[#111111] transition-colors hover:text-[#9C7B5D]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {project.name}
            </Link>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#9C7B5D]">Giá từ</p>
            <p className="font-semibold text-[#111111]">{price}</p>
          </div>
        </div>

        <div className="mb-4 flex min-h-[2rem] flex-wrap gap-1.5">
          {project.views.slice(0, 3).map((view) => (
            <span key={view} className="rounded-full bg-white px-2.5 py-1 text-[0.68rem] font-semibold text-[#555555]">
              {view}
            </span>
          ))}
        </div>

        <p className="text-sm font-medium leading-[1.75] text-[#666666]">{project.summary}</p>

        <Link
          href={{ pathname: "/project/[slug]", params: { slug: project.slug } }}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-[3px] bg-[#071522] px-5 py-3 label-small font-bold text-white transition-colors hover:bg-[#C6A77D] md:mt-auto"
        >
          Xem chi tiết
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-2.5 w-4">
      <path d="M1 5h14M11 1l4 4-4 4" />
    </svg>
  );
}
