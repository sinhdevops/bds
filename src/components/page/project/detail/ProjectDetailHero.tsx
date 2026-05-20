"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { ProjectData } from "@/lib/projects";
import { STATUS_CONFIG } from "@/lib/projects";
import { openConsultationModal } from "@/components/shared/ConsultationModal";

interface Props {
  project: ProjectData;
}

export default function ProjectDetailHero({ project }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const status = STATUS_CONFIG[project.status];

  return (
    <section ref={ref} className="relative w-full h-screen min-h-[640px] max-h-[1000px] overflow-hidden bg-[#0B2545] flex items-end">
      {/* Parallax image */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer overlays for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/50 to-[#0B2545]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#C6A77D]/6 mix-blend-multiply" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24"
        style={{ y: contentY }}
      >
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2 mb-8"
        >
          <Link href="/project" className="text-white/40 label-small hover:text-white/70 transition-colors">
            Dự Án
          </Link>
          <span className="text-white/25 label-small">/</span>
          <span className="text-[#C6A77D] label-small">{project.shortName}</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-16 items-end">
          {/* Left — title block */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${status.bg} backdrop-blur-sm`}>
                <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`} />
                <span className={`label-small ${status.text}`}>{project.statusLabel}</span>
              </div>
              <span className="label-small text-white/40">{project.developer}</span>
            </motion.div>

            {/* Project name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
              className="font-serif text-white font-light leading-[1.04] mb-4"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
            >
              {project.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="font-serif italic text-[#C6A77D]/90 font-light mb-8"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
            >
              {project.tagline}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex items-center gap-2 mb-8"
            >
              <svg viewBox="0 0 16 20" fill="none" stroke="#C6A77D" strokeWidth="1.3" className="w-3.5 h-4.5 flex-shrink-0">
                <path d="M8 1C4.7 1 2 3.7 2 7c0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6z" />
                <circle cx="8" cy="7" r="2" />
              </svg>
              <span className="text-white/60 text-sm font-light">{project.fullAddress}</span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={openConsultationModal}
                className="px-8 py-3.5 bg-[#C6A77D] text-[#0B2545] label-small tracking-[0.1em] font-semibold rounded-sm hover:bg-white hover:text-[#0B2545] transition-all duration-300"
              >
                Đăng Ký Tư Vấn
              </button>
              <a
                href="tel:0325610016"
                className="flex items-center gap-2.5 px-6 py-3.5 border border-white/25 text-white label-small rounded-sm hover:border-[#C6A77D]/60 hover:text-[#C6A77D] transition-all duration-300"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-3.5 h-3.5">
                  <path d="M13 10.7l-1.9.2c-.4 0-.8.3-1 .6-.2.3-.4 1.2-3.1-1.5C4.4 7.3 5.3 7 5.5 6.7c.3-.3.5-.6.6-1l.2-1.9c0-.4-.1-.8-.3-1.1L5.2 1.9c-.3-.4-.9-.5-1.4-.2L2.3 2.7C1.7 3 1.5 3.7 1.7 4.3c.6 2.8 2.3 5.6 4.8 8.1 2.5 2.5 5.3 4.2 8.1 4.8.6.1 1.3-.1 1.6-.6l1.1-1.5c.3-.5.2-1.1-.2-1.4l-.9-1c-.3-.2-.7-.4-1.2-.3z" />
                </svg>
                0325 610016
              </a>
            </motion.div>
          </div>

          {/* Right — key stats panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl p-6 lg:p-7"
          >
            <p className="label-small text-[#C6A77D] mb-5">Thông Số Dự Án</p>
            <div className="grid grid-cols-2 gap-5">
              {project.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="label-small text-white/40">{stat.label}</span>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="font-serif text-white font-light"
                      style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", lineHeight: 1 }}
                    >
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-xs text-white/50 font-light">{stat.unit}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 my-5" />

            {/* Developer info */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="label-small text-white/40">Chủ Đầu Tư</span>
                <span className="text-white text-sm font-light">{project.developer}</span>
              </div>
              <div className="flex flex-col gap-0.5 text-right">
                <span className="label-small text-white/40">Phân Phối</span>
                <span className="text-[#C6A77D] text-sm font-light">{project.distributor}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#C6A77D]/80 to-transparent"
        />
      </motion.div>
    </section>
  );
}
