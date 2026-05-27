"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative w-full h-[50vh] min-h-[360px] overflow-hidden flex items-center justify-center bg-[#0B2545]">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80&fit=crop"
        alt="BĐS Đà Nẵng"
        fill
        className="object-cover object-center opacity-30 select-none pointer-events-none"
        priority
      />

      {/* Luxury gold & navy dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/40 via-[#0B2545]/60 to-[#0B2545]" />
      <div className="absolute inset-0 bg-[#C6A77D]/5 mix-blend-multiply" />

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center z-10 pt-20">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="label-small text-[#C6A77D] tracking-[0.25em] font-bold block mb-4 uppercase"
        >
          Hành Trình Kiến Tạo
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="font-serif text-white font-light leading-tight mb-4"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}
        >
          Về BĐS Đà Nẵng
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-white/60 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed"
        >
          Đơn vị môi giới bất động sản cao cấp tại Đà Nẵng — tư vấn độc lập, không thuộc chủ đầu tư hay chủ sở hữu dự án.
        </motion.p>
      </div>
    </section>
  );
};

export default React.memo(AboutHero);
