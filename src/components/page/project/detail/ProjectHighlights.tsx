"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ProjectData } from "@/lib/projects";

const ICON_MAP: Record<string, React.ReactNode> = {
  river: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
      <path d="M3 17c1.5-3 4.5-5 9-5s7.5 2 9 5" />
      <path d="M3 12c1.5-2 4.5-3.5 9-3.5S19.5 10 21 12" />
      <path d="M3 7c1.5-1.5 4.5-2 9-2s7.5.5 9 2" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
      <path d="M12 2l3.1 6.3L22 9.3l-5 4.9 1.2 6.9L12 18l-6.2 3.1L7 14.2 2 9.3l6.9-1L12 2z" />
    </svg>
  ),
  invest: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
      <path d="M3 17l4-8 4 4 4-9 4 5" />
      <path d="M3 20h18" />
    </svg>
  ),
  bridge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
      <path d="M2 12h20" />
      <path d="M6 12V7l6-4 6 4v5" />
      <path d="M2 17h20M6 17v3M18 17v3" />
    </svg>
  ),
  luxury: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
      <path d="M3 6l3-3h12l3 3v13a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
      <path d="M9 21V12h6v9" />
    </svg>
  ),
  mountain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
      <path d="M3 20L12 4l9 16H3z" />
      <path d="M8 20l4-7 4 7" />
    </svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h8M18 10v4" />
    </svg>
  ),
};

interface Props {
  project: ProjectData;
}

export default function ProjectHighlights({ project }: Props) {
  return (
    <section className="bg-[#FAF8F5] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14 lg:mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-small text-[#9C7B5D] block mb-4">Điểm Nổi Bật</span>
            <h2
              className="font-serif text-headline text-[#1A1A1A] font-light leading-[1.1]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Tại sao chọn
              <br />
              <em>{project.shortName}?</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[#555555] text-base leading-[1.9] font-light lg:pt-6"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {project.highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-7 hover:shadow-[0_8px_40px_rgba(11,37,69,0.08)] transition-shadow duration-500 border border-[#E5E0D8]/60"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#0B2545]/6 flex items-center justify-center text-[#0B2545] mb-5 group-hover:bg-[#C6A77D]/12 group-hover:text-[#C6A77D] transition-all duration-400">
                {ICON_MAP[item.icon] ?? ICON_MAP.star}
              </div>

              <h3
                className="font-serif text-[#1A1A1A] font-light mb-3 leading-snug"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem" }}
              >
                {item.title}
              </h3>
              <p className="text-[#555555] text-sm font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider with gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[#C6A77D]/40 to-transparent mt-16 origin-left"
        />
      </div>
    </section>
  );
}
