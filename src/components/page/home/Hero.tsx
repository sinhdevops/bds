"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const SIDE_ACTIONS = [
  {
    label: "Hotline",
    href: "tel:0981814814",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-3.5 h-3.5">
        <path d="M13 10.7l-1.9.2c-.4 0-.8.3-1 .6-.2.3-.4 1.2-3.1-1.5C4.4 7.3 5.3 7 5.5 6.7c.3-.3.5-.6.6-1l.2-1.9c0-.4-.1-.8-.3-1.1L5.2 1.9c-.3-.4-.9-.5-1.4-.2L2.3 2.7C1.7 3 1.5 3.7 1.7 4.3c.6 2.8 2.3 5.6 4.8 8.1 2.5 2.5 5.3 4.2 8.1 4.8.6.1 1.3-.1 1.6-.6l1.1-1.5c.3-.5.2-1.1-.2-1.4l-.9-1c-.3-.2-.7-.4-1.2-.3l.9-.7z" />
      </svg>
    ),
  },
  {
    label: "Zalo",
    href: "#",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-3.5 h-3.5">
        <rect x="1" y="1" width="14" height="14" rx="3" />
        <path d="M4.5 9.5L7 5.5l2.5 4M7 7.5h3M10.5 9.5V5.5" />
      </svg>
    ),
  },
  {
    label: "Đặt lịch",
    href: "#contact",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-3.5 h-3.5">
        <rect x="1" y="3" width="14" height="12" rx="1" />
        <path d="M1 7h14M5 1v4M11 1v4" />
      </svg>
    ),
  },
  {
    label: "VR Tour",
    href: "#vr-tour",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-3.5 h-3.5">
        <path d="M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" />
        <path d="M2 8h12M8 2c-1.7 1.3-2.7 3.5-2.7 6s1 4.7 2.7 6M8 2c1.7 1.3 2.7 3.5 2.7 6S9.7 12.7 8 14" />
      </svg>
    ),
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] max-h-[1080px] overflow-hidden bg-[#111111]"
    >
      {/* Background image — parallax + slow zoom in */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale, y: imageY }}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=2000&q=90&fit=crop"
          alt="Sun Symphony Residence — Căn hộ cao cấp bên bờ Sông Hàn Đà Nẵng"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 z-1 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
      <div className="absolute inset-0 z-1 bg-linear-to-r from-black/55 via-transparent to-transparent" />
      <div className="absolute inset-0 z-1 bg-[#B89B72]/6 mix-blend-multiply" />

      {/* Main content — overlaid bottom-left */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col justify-end px-8 pb-20 lg:px-20 lg:pb-24"
        style={{ y: textY, opacity: contentOpacity }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.7 }}
          className="flex items-center gap-3 mb-7"
        >
          <span className="w-10 h-px bg-[#B89B72]" />
          <span className="label-small text-[#B89B72]">SRT Miền Trung · Sun Group Đà Nẵng</span>
        </motion.div>

        {/* Headline — line-by-line reveal */}
        <div className="mb-8">
          <h1
            className="font-serif text-white font-light leading-[0.92]"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
              letterSpacing: "-0.025em",
            }}
          >
            {[
              { text: "Tuyệt tác", italic: false },
              { text: "bên dòng", italic: true },
              { text: "Sông Hàn", italic: false },
            ].map((line, i) => (
              <span key={line.text} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + i * 0.15,
                  }}
                  style={line.italic ? { fontStyle: "italic", color: "#B89B72" } : undefined}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle + CTAs */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.9 }}
            className="text-white/60 text-[0.9375rem] font-light leading-[1.75] max-w-xs"
          >
            Biểu tượng sống thượng lưu mới tại Đà Nẵng.
            <br />
            Căn hộ hàng hiệu · Resort Living · Tầm nhìn vĩnh cửu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 1.05 }}
            className="flex items-center gap-3 shrink-0"
          >
            <a
              href="#apartments"
              className="px-8 py-3.5 bg-[#B89B72] text-[#111111] label-small tracking-[0.14em] hover:bg-white transition-colors duration-300"
            >
              Khám Phá Dự Án
            </a>
            <a
              href="#vr-tour"
              className="px-8 py-3.5 border border-white/30 text-white label-small tracking-[0.14em] hover:border-[#B89B72] hover:text-[#B89B72] transition-colors duration-300"
            >
              Xem Căn Mẫu 360°
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator — bottom center, desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="label-small text-white/30" style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}>
          Cuộn xuống để khám phá
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-linear-to-b from-[#B89B72] to-transparent"
        />
      </motion.div>

      {/* Right side floating social actions — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4"
      >
        {SIDE_ACTIONS.map((action) => (
          <a
            key={action.label}
            href={action.href}
            className="flex flex-col items-center gap-1.5 group"
          >
            <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 group-hover:border-[#B89B72]/60 group-hover:text-[#B89B72] group-hover:bg-[#B89B72]/10 transition-all duration-300">
              {action.icon}
            </div>
            <span
              className="label-small text-white/30 group-hover:text-[#B89B72] transition-colors duration-300"
              style={{ fontSize: "0.5rem", letterSpacing: "0.12em" }}
            >
              {action.label}
            </span>
          </a>
        ))}
        <div className="w-px h-12 bg-linear-to-b from-white/10 to-transparent mt-1" />
      </motion.div>

      {/* Page counter — bottom left, desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-20 left-8 lg:left-20 z-20 hidden lg:flex items-center gap-3"
      >
        <span className="label-small text-white/25" style={{ fontSize: "0.6rem" }}>01</span>
        <div className="w-14 h-px bg-white/15 relative">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-[#B89B72]" />
        </div>
        <span className="label-small text-white/15" style={{ fontSize: "0.6rem" }}>05</span>
      </motion.div>
    </section>
  );
}
