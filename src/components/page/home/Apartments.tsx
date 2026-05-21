"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "@/i18n/navigation";
import { openConsultationModal } from "@/components/shared/ConsultationModal";
import { PROJECT_CATALOG, type ProjectCatalogItem } from "@/lib/projectCatalog";
import "swiper/css";

const FEATURED_PROJECTS = PROJECT_CATALOG;

function ProjectCard({
  project,
  hovered,
  onHover,
  onLeave,
}: {
  project: ProjectCatalogItem;
  hovered: string | null;
  onHover: () => void;
  onLeave: () => void;
}) {
  const projectHref = { pathname: "/project/[slug]" as const, params: { slug: project.slug } };
  const price = project.priceFrom ? `${project.priceFrom} tỷ` : "Liên hệ";
  const floors = project.floors ? `${project.floors} tầng` : "Đang cập nhật";
  const units = project.totalUnits ? `${project.totalUnits} căn` : project.handover;

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-md bg-white ring-1 ring-black/5"
      style={{
        boxShadow:
          hovered === project.slug
            ? "0 14px 42px rgba(10,18,28,0.14)"
            : "0 6px 22px rgba(10,18,28,0.07)",
        transition: "box-shadow 0.35s ease",
      }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      <Link href={projectHref} className="relative block overflow-hidden" style={{ aspectRatio: "16/8.2" }}>
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered === project.slug ? 1.05 : 1 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        <div className="absolute left-3 top-3">
          <span className="rounded-[3px] bg-white/92 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#111111] backdrop-blur">
            {project.badge}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-5 pb-4 pt-4">
        <Link
          href={projectHref}
          className="font-serif mb-0.5 font-light leading-tight text-[#111111] transition-colors hover:text-[#9C7B5D]"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.05rem, 1.4vw, 1.28rem)",
          }}
        >
          {project.name}
        </Link>
        <p className="mb-4 text-[0.75rem] font-medium leading-snug text-[#777]">{project.address}</p>

        <div className="mb-4 grid grid-cols-3 gap-2 border-b border-[#E5E0D8]/70 pb-4 text-[0.68rem] text-[#666]">
          {[
            ["Quy mô", floors],
            ["Sản phẩm", units],
            ["Diện tích", project.area],
          ].map(([label, value]) => (
            <div key={label} className="min-w-0">
              <p className="mb-1 font-bold uppercase tracking-[0.08em] text-[#9C7B5D]">{label}</p>
              <p className="truncate font-semibold text-[#111111]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.views.slice(0, 3).map((view) => (
            <span key={view} className="rounded-full bg-[#F5F1EB] px-2.5 py-1 text-[0.68rem] font-semibold text-[#555555]">
              {view}
            </span>
          ))}
        </div>

        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#9C7B5D]">Giá từ</p>
            <p className="font-serif text-xl text-[#111111]" style={{ fontFamily: "var(--font-serif)" }}>
              {price}
            </p>
          </div>
          <span className="rounded-full bg-[#F5F1EB] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[#555555]">
            {project.statusLabel}
          </span>
        </div>

        <p className="mb-4 line-clamp-2 text-xs font-medium leading-relaxed text-[#666666]">{project.summary}</p>

        <div className="mt-auto flex items-center gap-5">
          <Link
            href={projectHref}
            className="flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#555] transition-colors hover:text-[#9C7B5D]"
          >
            <TargetIcon />
            Xem chi tiết
          </Link>
          <button
            type="button"
            onClick={openConsultationModal}
            className="flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#555] transition-colors hover:text-[#9C7B5D]"
          >
            <TargetIcon />
            Nhận bảng giá
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-2.5 w-2.5 shrink-0">
      <circle cx="5" cy="5" r="4" />
      <circle cx="5" cy="5" r="1.5" />
    </svg>
  );
}

export default function Apartments() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="apartments" style={{ backgroundColor: "#FAF8F5" }} className="py-10 lg:py-12">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-7 flex items-end justify-between px-6 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#9C7B5D]">
              Dự án nổi bật
            </p>
            <h2
              className="font-serif font-light text-[#111111]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.7rem, 3vw, 2.65rem)",
                lineHeight: 1.1,
              }}
            >
              Không gian sống xứng tầm
            </h2>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ x: 3 }}
          >
            <Link
              href="/project"
              className="flex shrink-0 items-center gap-2 text-[0.65rem] uppercase tracking-[0.12em] text-[#111111]"
            >
              Xem tất cả dự án
              <svg
                viewBox="0 0 20 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-3 w-5 transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M1 6h18M13 1l6 5-6 5" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="lg:hidden">
          <Swiper modules={[Navigation]} slidesPerView={1.15} spaceBetween={12} slidesOffsetBefore={24} slidesOffsetAfter={24}>
            {FEATURED_PROJECTS.map((project) => (
              <SwiperSlide key={project.slug}>
                <ProjectCard
                  project={project}
                  hovered={hovered}
                  onHover={() => setHovered(project.slug)}
                  onLeave={() => setHovered(null)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden items-stretch gap-4 px-6 lg:flex">
          <div className="grid flex-1 grid-cols-3 gap-4">
            {FEATURED_PROJECTS.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.75,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: i * 0.1,
                }}
              >
                <ProjectCard
                  project={project}
                  hovered={hovered}
                  onHover={() => setHovered(project.slug)}
                  onLeave={() => setHovered(null)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
