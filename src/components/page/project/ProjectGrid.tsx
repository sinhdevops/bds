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
  { id: "all", label: "Tất Cả Dự Án" },
  { id: "song-han", label: "Mặt Tiền Sông Hàn" },
  { id: "cau-rong", label: "Khu Vực Cầu Rồng" },
  { id: "tran-thi-ly", label: "Cầu Trần Thị Lý" },
];

function ProjectCard({ proj }: { proj: ProjectItem }) {
  const status = STATUS_CONFIG[proj.status];

  return (
    <Link href={{ pathname: "/project/[slug]", params: { slug: proj.slug } }} className="group block">
      <motion.div
        className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_48px_rgba(11,37,69,0.14)] transition-shadow duration-500 h-full flex flex-col"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Image */}
        <div className="relative aspect-4/3 overflow-hidden shrink-0">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={proj.image}
              alt={proj.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-t from-[#0B2545]/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gold/6 mix-blend-multiply" />

          {/* Badge */}
          {proj.badge && (
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
              <span className="label-small text-[#0B2545]">{proj.badge}</span>
            </div>
          )}

          {/* Status */}
          <div className="absolute top-4 right-4">
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${status.bg} backdrop-blur-sm`}>
              <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
              <span className={`label-small ${status.text}`}>{proj.statusLabel}</span>
            </div>
          </div>

          {/* Project name over image */}
          <div className="absolute bottom-4 left-4 right-4">
            <p
              className="font-serif text-white font-light italic text-sm opacity-80"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {proj.tagline}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4 flex-1">
          <div>
            <h3
              className="font-serif text-[#0B2545] font-light text-xl mb-1.5 group-hover:text-gold transition-colors duration-300"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {proj.name}
            </h3>
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 14 18" fill="none" stroke="#C6A77D" strokeWidth="1.2" className="w-3 h-4">
                <path d="M7 1C4.2 1 2 3.2 2 6c0 4 5 11 5 11s5-7 5-11c0-2.8-2.2-5-5-5z" />
                <circle cx="7" cy="6" r="1.8" />
              </svg>
              <span className="text-muted-light text-xs font-light">{proj.location}</span>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-3 py-4 border-y border-border">
            {[
              { label: "Tầng", val: `${proj.floors}` },
              { label: "Căn", val: `${proj.totalUnits}` },
              { label: "Giá từ", val: `${proj.priceFrom} Tỷ` },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-0.5">
                <span
                  className="font-serif text-[#0B2545] font-light leading-none"
                  style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem" }}
                >
                  {s.val}
                </span>
                <span className="text-[10px] text-muted-light font-light">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-1.5 text-gold label-small group-hover:gap-3 transition-all duration-300">
              Xem Dự Án
              <svg viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-2.5">
                <path d="M1 5h14M11 1l4 4-4 4" />
              </svg>
            </div>
            <span className="text-xs text-muted-light font-light">{proj.priceFrom} – {proj.priceTo} Tỷ VND</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

const ProjectGrid = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter((proj) => proj.category === filter);
  }, [filter]);

  const handleFilterChange = useCallback((id: string) => setFilter(id), []);

  return (
    <section className="bg-[#FAF8F5] py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-14">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleFilterChange(tab.id)}
              className={`px-6 py-2.5 rounded-sm label-small transition-all duration-300 ${
                filter === tab.id
                  ? "bg-[#0B2545] text-white shadow-sm"
                  : "border border-[#E5E0D8] text-[#555555] hover:border-[#0B2545] hover:text-[#0B2545]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full"
              >
                <ProjectCard proj={proj} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-muted-light text-sm font-light mb-4">
            Không tìm được sản phẩm phù hợp? Hãy để chúng tôi tư vấn trực tiếp.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0B2545] text-white label-small rounded-sm hover:bg-gold hover:text-[#0B2545] transition-all duration-300"
          >
            Liên Hệ Chuyên Gia
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(ProjectGrid);
