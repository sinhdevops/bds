"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const transition = (delay = 0) => ({
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  delay,
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] max-h-[1080px] flex overflow-hidden bg-[#F6F3EE]"
    >
      {/* Left — Text content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center w-full lg:w-[45%] px-8 lg:px-16 xl:px-20 pt-20 pb-12"
        style={{ y: textY }}
      >
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={transition(0.4)}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-[#C6A77D]" />
          <span className="label-small text-[#9C7B5D]">
            SRT Miền Trung · Sun Group Đà Nẵng
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={transition(0.55)}
          className="font-serif text-display text-[#0B2545] font-light leading-[1.04]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Tuyệt Tác
          <br />
          <span className="italic text-[#C6A77D]">Bên Dòng</span>
          <br />
          Sông Hàn
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={transition(0.7)}
          className="w-12 h-px bg-[#C6A77D] my-7"
        />

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={transition(0.8)}
          className="text-[#555555] text-base lg:text-[1.0625rem] leading-relaxed max-w-sm font-sans font-light"
        >
          Đại lý phân phối chiến lược các tổ hợp dự án
          <br />
          căn hộ cao cấp hàng đầu của Sun Group tại Đà Nẵng.
          <br />
          Vị thế độc tôn, kiến trúc đẳng cấp thế giới.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={transition(0.92)}
          className="flex items-center gap-4 mt-10"
        >
          <a
            href="#apartments"
            className="px-7 py-3.5 bg-[#C6A77D] text-[#1A1A1A] label-small font-semibold tracking-[0.15em] rounded-sm hover:bg-[#0B2545] hover:text-white transition-all duration-400"
          >
            Khám Phá Dự Án
          </a>
          <a
            href="#floorplan"
            className="flex items-center gap-2.5 text-[#0B2545] label-small font-semibold tracking-[0.12em] group"
          >
            <span className="w-8 h-8 rounded-full border border-[#C6A77D] flex items-center justify-center group-hover:bg-[#C6A77D] transition-colors duration-300">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                className="ml-0.5"
              >
                <path d="M1 1L9 6L1 11V1Z" fill="#C6A77D" className="group-hover:fill-white transition-colors" />
              </svg>
            </span>
            Xem Sơ Đồ Tòa
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-8 lg:left-16 xl:left-20 flex flex-col items-start gap-2"
        >
          <span className="label-small text-[#8A8A8A]">Cuộn xuống</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#C6A77D] to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Right — Image */}
      <motion.div
        className="absolute right-0 top-0 w-full lg:w-[62%] h-full bg-[#0B2545]"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        style={{ y: imageY }}
      >
        {/* Gradient overlay on the left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F3EE] via-[#F6F3EE]/30 to-transparent z-10 lg:hidden" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F6F3EE] to-transparent z-10 hidden lg:block" />

        <Image
          src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=1600&q=85&fit=crop"
          alt="Sun Symphony Residence — Căn hộ cao cấp bên bờ Sông Hàn"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 62vw"
        />

        {/* Warm luxury overlay */}
        <div className="absolute inset-0 bg-[#C6A77D]/12 mix-blend-multiply z-[5]" />
      </motion.div>

      {/* Slide counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3 hidden lg:flex"
      >
        <span className="label-small text-[#1A1A1A]/80">01</span>
        <div className="w-px h-16 bg-[#E5E0D8]">
          <div className="w-full h-1/3 bg-[#C6A77D]" />
        </div>
        <span className="label-small text-[#8A8A8A]">05</span>
      </motion.div>
    </section>
  );
}
