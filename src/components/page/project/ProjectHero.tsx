"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const STATS = [
  { value: "3", label: "Dự Án", note: "Tại Đà Nẵng" },
  { value: "1,066", label: "Căn Hộ", note: "Studio → Penthouse" },
  { value: "2.8 Tỷ", label: "Giá Từ", note: "Hỗ trợ vay 70%" },
];

const ProjectHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B2545]" style={{ minHeight: "56vh" }}>
      <Image
        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&q=80&fit=crop"
        alt="Dự án căn hộ cao cấp Đà Nẵng"
        fill
        className="object-cover object-center opacity-[0.18] select-none pointer-events-none"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#0B2545] via-[#0B2545]/85 to-[#0B2545]/50" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0B2545]/70" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pt-32 pb-14">
        {/* Left – heading */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-px bg-gold block" />
            <span className="label-small text-gold tracking-[0.22em]">DANH MỤC DỰ ÁN</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-white font-light leading-[1.08] mb-5"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
          >
            Tuyệt Tác
            <br />
            <em className="not-italic text-gold">Sông Hàn</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/50 font-light leading-relaxed max-w-[480px]"
            style={{ fontSize: "clamp(0.875rem, 1.4vw, 1rem)" }}
          >
            Ba tổ hợp căn hộ hạng sang Sun Group tọa lạc tại vị trí đắc địa ven bờ Sông Hàn — pháp lý đầy đủ, đầu tư sinh lời bền vững.
          </motion.p>
        </div>

        {/* Right – stats */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex items-end gap-8 lg:gap-12 shrink-0"
        >
          {STATS.map((s, i) => (
            <div key={s.label} className={`flex flex-col ${i > 0 ? "border-l border-white/12 pl-8 lg:pl-12" : ""}`}>
              <span
                className="font-serif text-white font-light leading-none"
                style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.6rem)" }}
              >
                {s.value}
              </span>
              <span className="text-gold label-small mt-1.5">{s.label}</span>
              <span className="text-white/35 text-[10px] font-light mt-0.5 hidden sm:block">{s.note}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/35 to-transparent origin-left"
      />
    </section>
  );
};

export default React.memo(ProjectHero);
