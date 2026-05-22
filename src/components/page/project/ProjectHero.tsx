"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { openConsultationModal } from "@/components/shared/ConsultationModal";

const STATS = [
  { value: "3", label: "Dự án", note: "Ven sông Hàn" },
  { value: "1.066+", label: "Sản phẩm", note: "Căn hộ, villa, shophouse" },
  { value: "2.1 tỷ", label: "Giá từ", note: "Có phương án vay" },
];

const ProjectHero = () => {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#071522]">
      <Image
        src="/images/hero-song-han-clean.png"
        alt="Danh mục dự án căn hộ cao cấp ven sông Hàn Đà Nẵng"
        fill
        className="object-cover object-center opacity-80"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#071522]/94 via-[#071522]/70 to-[#071522]/24" />
      <div className="absolute inset-0 bg-linear-to-t from-[#071522] via-transparent to-[#071522]/48" />

      <div className="relative z-10 mx-auto grid min-h-[620px] max-w-[1240px] items-end gap-10 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="block h-px w-8 bg-[#C6A77D]" />
            <span className="label-small text-[#C6A77D]">Danh mục dự án</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-6 font-serif font-normal leading-[1.02] text-white"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3.1rem, 6vw, 5.7rem)" }}
          >
            Chọn đúng
            <br />
            <em className="text-[#C6A77D]">không gian đầu tư</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-8 max-w-[560px] text-base font-medium leading-[1.85] text-white/76"
          >
            So sánh nhanh các dự án Sun Group nổi bật tại Đà Nẵng theo vị trí, trạng thái bàn giao, mức giá và nhu cầu khai thác.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#project-finder"
              className="rounded-[3px] bg-[#C6A77D] px-8 py-4 text-center label-small font-bold text-white shadow-[0_14px_32px_rgba(0,0,0,0.26)] transition-colors duration-300 hover:bg-white hover:text-[#0B2545]"
            >
              Xem danh mục
            </a>
            <button
              type="button"
              onClick={openConsultationModal}
              className="rounded-[3px] border border-white/28 bg-white/6 px-8 py-4 text-center label-small font-bold text-white backdrop-blur-sm transition-colors duration-300 hover:border-[#C6A77D] hover:text-[#C6A77D]"
            >
              Nhận tư vấn chọn dự án
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid gap-3 sm:grid-cols-3 lg:self-end"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-md border border-white/12 bg-white/9 p-5 backdrop-blur-md">
              <span className="block text-2xl font-bold leading-none text-white">{stat.value}</span>
              <span className="mt-2 block label-small text-[#C6A77D]">{stat.label}</span>
              <span className="mt-1 block text-xs font-medium leading-relaxed text-white/52">{stat.note}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(ProjectHero);
