"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { STATUS_CONFIG } from "@/lib/projects";

interface ProjectItem {
  slug: string;
  name: string;
  tagline: string;
  status: "open" | "under-construction" | "delivered";
  statusLabel: string;
  location: string;
  priceFrom: string;
  priceTo: string;
  floors: number;
  totalUnits: number;
  image: string;
  badge?: string;
  category: "song-han" | "cau-rong" | "tran-thi-ly";
}

const PROJECTS: ProjectItem[] = [
  {
    slug: "sun-symphony-residence",
    name: "Sun Symphony Residence",
    tagline: "Khúc giao hưởng giữa lòng thành phố",
    status: "open",
    statusLabel: "Đang Mở Bán",
    location: "Trần Hưng Đạo · Sơn Trà",
    priceFrom: "2.8",
    priceTo: "18",
    floors: 39,
    totalUnits: 396,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80&fit=crop",
    badge: "Hot — Symphony 5",
    category: "song-han",
  },
  {
    slug: "sun-ponte-residence",
    name: "Sun Ponte Residence",
    tagline: "Kiệt tác sống bên Cầu Rồng huyền thoại",
    status: "under-construction",
    statusLabel: "Đang Xây Dựng",
    location: "Phạm Văn Đồng · Sơn Trà",
    priceFrom: "3.5",
    priceTo: "22",
    floors: 35,
    totalUnits: 352,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80&fit=crop",
    badge: "Căn Hộ Hạng Sang",
    category: "cau-rong",
  },
  {
    slug: "sun-cosmo-residence",
    name: "Sun Cosmo Residence",
    tagline: "Cuộc sống tầm cao giữa sông núi hữu tình",
    status: "delivered",
    statusLabel: "Đã Bàn Giao",
    location: "Nguyễn Tất Thành · Hải Châu",
    priceFrom: "3.0",
    priceTo: "14",
    floors: 33,
    totalUnits: 318,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&fit=crop",
    badge: "Nhận Nhà Ngay",
    category: "tran-thi-ly",
  },
];

const FILTER_TABS = [
  { id: "all", label: "Tất Cả", count: 3 },
  { id: "song-han", label: "Sông Hàn", count: 1 },
  { id: "cau-rong", label: "Cầu Rồng", count: 1 },
  { id: "tran-thi-ly", label: "Trần Thị Lý", count: 1 },
];

const LocationIcon = () => (
  <svg viewBox="0 0 14 18" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-3 h-4 shrink-0">
    <path d="M7 1C4.2 1 2 3.2 2 6c0 4 5 11 5 11s5-7 5-11c0-2.8-2.2-5-5-5z" />
    <circle cx="7" cy="6" r="1.8" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-2.5 shrink-0">
    <path d="M1 5h14M11 1l4 4-4 4" />
  </svg>
);

function StatusBadge({ status, label }: { status: ProjectItem["status"]; label: string }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${cfg.bg} backdrop-blur-sm`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dot} ${status === "open" ? "animate-pulse" : ""}`} />
      <span className={`label-small ${cfg.text}`}>{label}</span>
    </div>
  );
}

/** Large editorial card — used when a project is "featured" (first in filtered list) */
function FeaturedCard({ proj, index }: { proj: ProjectItem; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link href={{ pathname: "/project/[slug]", params: { slug: proj.slug } }} className="group block h-full">
      <motion.article
        className="relative overflow-hidden rounded-2xl h-full min-h-[420px] lg:min-h-[500px] bg-navy"
        whileHover={{ scale: 1.012 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Background image */}
        <Image
          src={proj.image}
          alt={proj.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 66vw"
        />

        {/* Overlay layers */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0B2545] via-[#0B2545]/35 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0B2545]/25 to-transparent" />

        {/* Index number – watermark */}
        <div className="absolute top-5 left-6 select-none pointer-events-none">
          <span
            className="font-serif text-white/15 font-light"
            style={{ fontFamily: "var(--font-serif)", fontSize: "5rem", lineHeight: 1 }}
          >
            {num}
          </span>
        </div>

        {/* Top-right badges */}
        <div className="absolute top-5 right-5 flex flex-col items-end gap-2">
          {proj.badge && (
            <div className="px-3 py-1 bg-gold rounded-sm">
              <span className="label-small text-[#0B2545]">{proj.badge}</span>
            </div>
          )}
          <StatusBadge status={proj.status} label={proj.statusLabel} />
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex items-center gap-1.5 text-white/55 mb-2">
            <LocationIcon />
            <span className="text-xs font-light">{proj.location}</span>
          </div>

          <h3
            className="font-serif text-white font-light leading-tight mb-1.5"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            {proj.name}
          </h3>
          <p
            className="text-white/45 text-sm font-light italic mb-5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {proj.tagline}
          </p>

          {/* Stats + CTA */}
          <div className="flex items-end justify-between gap-4">
            <div className="flex items-center gap-5">
              <div>
                <span
                  className="font-serif text-gold font-light leading-none"
                  style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem" }}
                >
                  {proj.priceFrom}
                </span>
                <span className="text-white/40 text-xs ml-1.5">– {proj.priceTo} Tỷ</span>
              </div>
              <div className="hidden sm:flex items-center gap-4 border-l border-white/15 pl-5">
                <div className="text-center">
                  <div className="text-white text-sm font-light leading-none">{proj.floors}</div>
                  <div className="text-white/40 text-[10px] mt-0.5">Tầng</div>
                </div>
                <div className="w-px h-7 bg-white/15" />
                <div className="text-center">
                  <div className="text-white text-sm font-light leading-none">{proj.totalUnits}</div>
                  <div className="text-white/40 text-[10px] mt-0.5">Căn</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gold label-small group-hover:gap-3 transition-all duration-300">
              Xem Dự Án
              <ArrowIcon />
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

/** Compact card — used for secondary projects in the bento layout */
function CompactCard({ proj, index }: { proj: ProjectItem; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link href={{ pathname: "/project/[slug]", params: { slug: proj.slug } }} className="group block h-full">
      <motion.article
        className="flex flex-col overflow-hidden rounded-2xl h-full bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(11,37,69,0.12)] transition-shadow duration-500"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Image */}
        <div className="relative overflow-hidden shrink-0" style={{ height: "180px" }}>
          <Image
            src={proj.image}
            alt={proj.name}
            fill
            className="object-cover transition-transform duration-600 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0B2545]/55 via-transparent to-transparent" />

          <div className="absolute top-4 left-4 select-none pointer-events-none">
            <span
              className="font-serif text-white/20 font-light"
              style={{ fontFamily: "var(--font-serif)", fontSize: "3rem", lineHeight: 1 }}
            >
              {num}
            </span>
          </div>

          <div className="absolute top-4 right-4">
            <StatusBadge status={proj.status} label={proj.statusLabel} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-5 flex-1">
          <div className="flex items-center gap-1.5 text-muted-light">
            <LocationIcon />
            <span className="text-xs font-light">{proj.location}</span>
          </div>

          <h3
            className="font-serif text-navy font-light leading-snug group-hover:text-gold transition-colors duration-300"
            style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem" }}
          >
            {proj.name}
          </h3>

          <p
            className="text-muted-light text-xs font-light italic line-clamp-1"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {proj.tagline}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 mt-auto border-t border-border">
            <div>
              <span
                className="font-serif text-gold font-light"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem" }}
              >
                {proj.priceFrom}
              </span>
              <span className="text-muted-light text-xs ml-1">– {proj.priceTo} Tỷ</span>
            </div>
            <div className="flex items-center gap-1.5 text-gold label-small group-hover:gap-2.5 transition-all duration-300">
              Chi Tiết
              <ArrowIcon />
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

/** Determines which layout variant to use based on result count */
function ProjectLayout({ projects }: { projects: ProjectItem[] }) {
  if (projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 text-center"
      >
        <p className="text-muted font-light text-lg mb-2">Không có dự án nào phù hợp</p>
        <p className="text-muted-light text-sm font-light">Thử chọn bộ lọc khác</p>
      </motion.div>
    );
  }

  if (projects.length === 1) {
    return (
      <div className="max-w-2xl mx-auto" style={{ minHeight: "440px" }}>
        <FeaturedCard proj={projects[0]} index={0} />
      </div>
    );
  }

  if (projects.length === 2) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ minHeight: "420px" }}>
        {projects.map((proj, i) => (
          <FeaturedCard key={proj.slug} proj={proj} index={i} />
        ))}
      </div>
    );
  }

  /* 3+ projects: editorial bento — featured left (2/3) + supporting right (1/3 stacked) */
  const [featured, ...rest] = projects;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      {/* Featured */}
      <div className="lg:col-span-2" style={{ minHeight: "500px" }}>
        <FeaturedCard proj={featured} index={0} />
      </div>

      {/* Supporting */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {rest.map((proj, i) => (
          <CompactCard key={proj.slug} proj={proj} index={i + 1} />
        ))}
      </div>
    </div>
  );
}

const ProjectGrid = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  const handleFilterChange = useCallback((id: string) => setFilter(id), []);

  return (
    <section className="bg-cream-light py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="label-small text-muted mb-2">
              Hiển thị{" "}
              <span className="text-navy font-medium">{filteredProjects.length}</span> dự án
            </p>
            <h2
              className="font-serif text-navy font-light leading-tight"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Danh Mục Dự Án
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id)}
                className={`relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full label-small transition-all duration-300 ${
                  filter === tab.id
                    ? "bg-navy text-white shadow-sm"
                    : "border border-border text-muted hover:border-navy/40 hover:text-navy"
                }`}
              >
                {tab.label}
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full transition-colors duration-300 ${
                    filter === tab.id ? "bg-white/20 text-white" : "bg-border text-muted"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ProjectLayout projects={filteredProjects} />
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div>
            <p className="text-navy font-serif font-light text-lg mb-1" style={{ fontFamily: "var(--font-serif)" }}>
              Chưa tìm được sản phẩm ưng ý?
            </p>
            <p className="text-muted-light text-sm font-light">
              Chuyên gia của chúng tôi sẽ tư vấn danh mục phù hợp với nhu cầu của bạn.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-navy text-white label-small rounded-sm hover:bg-gold hover:text-navy transition-all duration-300"
          >
            Liên Hệ Chuyên Gia
            <ArrowIcon />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(ProjectGrid);
