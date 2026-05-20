"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { PROJECT_CATALOG, type ProjectCatalogItem, type ProjectStatus } from "@/lib/projectCatalog";

type Segment = "all" | "river" | "bridge" | "ready" | "urban";
type Budget = "all" | "under4" | "4to8" | "over8";

const FILTERS: { id: Segment; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "river", label: "Ven sông Hàn" },
  { id: "bridge", label: "View Cầu Rồng" },
  { id: "urban", label: "Đô thị mới" },
  { id: "ready", label: "Nhận nhà ngay" },
];

const BUDGETS: { id: Budget; label: string }[] = [
  { id: "all", label: "Mọi ngân sách" },
  { id: "under4", label: "Dưới 4 tỷ" },
  { id: "4to8", label: "4 - 8 tỷ" },
  { id: "over8", label: "Trên 8 tỷ" },
];

const STATUS_STYLE: Record<ProjectStatus, string> = {
  open: "bg-emerald-500/12 text-emerald-700 ring-emerald-500/20",
  "under-construction": "bg-amber-500/14 text-amber-700 ring-amber-500/20",
  delivered: "bg-sky-500/12 text-sky-700 ring-sky-500/20",
  rumored: "bg-stone-500/12 text-stone-700 ring-stone-500/20",
};

const ArrowIcon = () => (
  <svg viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-2.5 w-4">
    <path d="M1 5h14M11 1l4 4-4 4" />
  </svg>
);

function budgetMatches(project: ProjectCatalogItem, budget: Budget) {
  if (budget === "all") return true;
  if (project.priceFrom === null || project.priceTo === null) return false;
  if (budget === "under4") return project.priceFrom < 4;
  if (budget === "4to8") return project.priceFrom <= 8 && project.priceTo >= 4;
  return project.priceTo > 8;
}

function ProjectCard({ project, featured }: { project: ProjectCatalogItem; featured?: boolean }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className={`group overflow-hidden rounded-md bg-white ring-1 ring-black/5 shadow-[0_8px_26px_rgba(10,18,28,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(10,18,28,0.14)] ${
        featured ? "lg:grid lg:grid-cols-[1.18fr_0.82fr]" : ""
      }`}
    >
      <Link href={{ pathname: "/project/[slug]", params: { slug: project.slug } }} className="relative block min-h-[260px] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={featured ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/62 via-black/12 to-transparent" />
        <div className="absolute left-4 top-4 rounded-[3px] bg-white px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-[#111111]">
          {project.badge}
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <p className="mb-2 text-xs font-semibold text-white/70">{project.address}</p>
          <h3 className="font-serif text-3xl font-normal leading-tight text-white" style={{ fontFamily: "var(--font-serif)" }}>
            {project.name}
          </h3>
        </div>
      </Link>

      <div className="flex flex-col p-5 lg:p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <span className={`inline-flex rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] ring-1 ${STATUS_STYLE[project.status]}`}>
              {project.statusLabel}
            </span>
            <p className="mt-3 text-sm font-medium leading-relaxed text-[#555555]">{project.summary}</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-[#9C7B5D]">Giá từ</p>
            <p className="font-serif text-2xl text-[#111111]" style={{ fontFamily: "var(--font-serif)" }}>
              {project.priceFrom ? `${project.priceFrom} tỷ` : "Liên hệ"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-y border-[#E5E0D8] py-4">
          {[
            ["Quy mô", project.floors ? `${project.floors} tầng` : "Đang cập nhật"],
            ["Sản phẩm", project.totalUnits ? `${project.totalUnits} căn` : "Đang cập nhật"],
            ["Diện tích", project.area],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.1em] text-[#9C7B5D]">{label}</p>
              <p className="mt-1 text-sm font-semibold text-[#111111]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.views.map((view) => (
            <span key={view} className="rounded-full bg-[#F5F1EB] px-3 py-1 text-xs font-semibold text-[#555555]">
              {view}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm font-medium leading-relaxed text-[#666666]">
          <span className="font-bold text-[#111111]">Phù hợp:</span> {project.idealFor}
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href={{ pathname: "/project/[slug]", params: { slug: project.slug } }}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-[3px] bg-[#071522] px-5 py-3 text-center label-small font-bold text-white transition-colors duration-300 hover:bg-[#C6A77D]"
          >
            Xem chi tiết
            <ArrowIcon />
          </Link>
          <Link
            href="/contact"
            className="inline-flex flex-1 items-center justify-center rounded-[3px] border border-[#C6A77D] px-5 py-3 text-center label-small font-bold text-[#9C7B5D] transition-colors duration-300 hover:bg-[#C6A77D] hover:text-white"
          >
            Nhận bảng giá
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

const ProjectGrid = () => {
  const [segment, setSegment] = useState<Segment>("all");
  const [budget, setBudget] = useState<Budget>("all");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return PROJECT_CATALOG.filter((project) => {
      const segmentOk = segment === "all" || project.segment === segment;
      const budgetOk = budgetMatches(project, budget);
      const queryOk =
        !normalizedQuery ||
        [project.name, project.shortName, project.location, project.address, project.idealFor, ...project.views]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return segmentOk && budgetOk && queryOk;
    });
  }, [segment, budget, query]);

  const featuredProject = filteredProjects[0];
  const restProjects = filteredProjects.slice(1);

  return (
    <section id="project-finder" className="relative z-30 bg-[#FAF8F5] py-12 lg:py-16">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="relative z-40 -mt-16 mb-10 rounded-md bg-white p-4 shadow-[0_20px_56px_rgba(10,18,28,0.14)] ring-1 ring-black/5 lg:-mt-20 lg:p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="relative">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C7B5D]">
                <circle cx="9" cy="9" r="6" />
                <path d="M14 14l4 4" />
              </svg>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tìm theo tên dự án, vị trí, view, nhu cầu..."
                className="h-12 w-full rounded-[3px] border border-[#E5E0D8] bg-[#FAF8F5] pl-11 pr-4 text-sm font-medium text-[#111111] outline-none transition-colors placeholder:text-[#8A8A8A] focus:border-[#C6A77D]"
              />
            </div>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[3px] bg-[#C6A77D] px-7 label-small font-bold text-white transition-colors hover:bg-[#071522]"
            >
              Cần tư vấn nhanh?
            </Link>
          </div>

          <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSegment(filter.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${
                    segment === filter.id ? "bg-[#071522] text-white" : "bg-[#F5F1EB] text-[#555555] hover:bg-[#E5E0D8]"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <select
              value={budget}
              onChange={(event) => setBudget(event.target.value as Budget)}
              className="h-10 rounded-[3px] border border-[#E5E0D8] bg-white px-3 text-sm font-semibold text-[#111111] outline-none focus:border-[#C6A77D]"
            >
              {BUDGETS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-small text-[#9C7B5D]">Hiển thị {filteredProjects.length} dự án phù hợp</p>
            <h2 className="mt-2 font-serif text-3xl font-normal leading-tight text-[#111111]" style={{ fontFamily: "var(--font-serif)" }}>
              Danh mục dự án Sun Group Đà Nẵng
            </h2>
          </div>
          <p className="max-w-md text-sm font-medium leading-relaxed text-[#666666]">
            Mỗi card được tối ưu để so sánh nhanh: mức giá, vị trí, view, trạng thái và nhu cầu phù hợp.
          </p>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-md border border-[#E5E0D8] bg-white p-10 text-center"
            >
              <p className="font-serif text-2xl text-[#111111]" style={{ fontFamily: "var(--font-serif)" }}>
                Chưa có dự án phù hợp
              </p>
              <p className="mt-2 text-sm font-medium text-[#777777]">Thử đổi bộ lọc hoặc để lại thông tin để được tư vấn danh mục phù hợp hơn.</p>
            </motion.div>
          ) : (
            <motion.div key="results" layout className="space-y-6">
              {featuredProject && <ProjectCard project={featuredProject} featured />}
              {restProjects.length > 0 && (
                <div className="grid gap-6 lg:grid-cols-2">
                  {restProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 grid gap-4 rounded-md bg-[#071522] p-6 text-white lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
          <div>
            <p className="label-small text-[#C6A77D]">Tư vấn chọn dự án</p>
            <h3 className="mt-2 font-serif text-2xl font-normal" style={{ fontFamily: "var(--font-serif)" }}>
              Không chắc dự án nào hợp ngân sách và mục tiêu?
            </h3>
            <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-white/62">
              Gửi nhu cầu, đội ngũ tư vấn sẽ lọc theo ngân sách, thời điểm nhận nhà, mục tiêu ở hay đầu tư và gửi shortlist rõ ràng.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[3px] bg-[#C6A77D] px-8 py-4 label-small font-bold text-white transition-colors hover:bg-white hover:text-[#071522]"
          >
            Nhận shortlist
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProjectGrid);
