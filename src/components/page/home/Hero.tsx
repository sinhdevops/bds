"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const SIDE_ACTIONS = [
  {
    label: "Hotline",
    href: "tel:0352787777",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-4 w-4">
        <path d="M13 10.7l-1.9.2c-.4 0-.8.3-1 .6-.2.3-.4 1.2-3.1-1.5C4.4 7.3 5.3 7 5.5 6.7c.3-.3.5-.6.6-1l.2-1.9c0-.4-.1-.8-.3-1.1L5.2 1.9c-.3-.4-.9-.5-1.4-.2L2.3 2.7C1.7 3 1.5 3.7 1.7 4.3c.6 2.8 2.3 5.6 4.8 8.1 2.5 2.5 5.3 4.2 8.1 4.8.6.1 1.3-.1 1.6-.6l1.1-1.5c.3-.5.2-1.1-.2-1.4l-.9-1c-.3-.2-.7-.4-1.2-.3z" />
      </svg>
    ),
  },
  {
    label: "Zalo",
    href: "#",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-4 w-4">
        <rect x="1.5" y="1.5" width="13" height="13" rx="3" />
        <path d="M4.5 10h3.2L4.7 6h3.1M9.3 10V6h2.2c.9 0 1.5.5 1.5 1.3 0 .9-.6 1.4-1.5 1.4H9.3" />
      </svg>
    ),
  },
  {
    label: "Đặt lịch xem",
    href: "#contact",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-4 w-4">
        <rect x="1.5" y="3" width="13" height="11.5" rx="1.5" />
        <path d="M1.5 6.5h13M5 1.5V4M11 1.5V4M5 9h2M9 9h2M5 12h2" />
      </svg>
    ),
  },
  {
    label: "VR Tour",
    href: "#vr-tour",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-4 w-4">
        <path d="M2 6.8c1.2-1.1 2.4-1.6 3.7-1.6 1.2 0 2 .4 2.3 1.2.4-.8 1.2-1.2 2.3-1.2 1.3 0 2.5.5 3.7 1.6v4.4c0 .9-.7 1.6-1.6 1.6h-1.2c-.8 0-1.4-.4-1.8-1.1L8 9.2l-1.4 2.5c-.4.7-1 1.1-1.8 1.1H3.6c-.9 0-1.6-.7-1.6-1.6V6.8z" />
        <path d="M4.4 8.9h2.1M5.5 7.8V10M10 8.9h.1M12 8.9h.1" />
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

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.52], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen max-h-[820px] min-h-[560px] w-full overflow-hidden bg-[#071522]"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale, y: imageY }}
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/images/hero-song-han-clean.png"
          alt="Toàn cảnh Sông Hàn Đà Nẵng lúc hoàng hôn"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 z-1 bg-linear-to-t from-[#071522]/72 via-[#071522]/16 to-[#071522]/24" />
      <div className="absolute inset-0 z-1 bg-linear-to-r from-[#071522]/84 via-[#071522]/20 to-transparent" />
      <div className="absolute inset-0 z-1 bg-linear-to-b from-[#06111C]/56 via-transparent to-transparent" />
      <div className="absolute inset-0 z-1 bg-[#C6A77D]/8 mix-blend-multiply" />

      <motion.div
        className="absolute inset-0 z-10 flex flex-col justify-center px-6 pb-24 pt-20 md:px-12 lg:px-[92px] lg:pt-24"
        style={{ y: textY, opacity: contentOpacity }}
      >
        <div className="mb-5 max-w-[620px]">
          <h1
            className="font-serif text-[3.75rem] font-normal leading-[1.02] text-white md:text-[4.4rem] lg:text-[5.15rem]"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: 0,
              textShadow: "0 4px 22px rgba(0,0,0,0.58)",
            }}
          >
            {["Tuyệt tác", "bên dòng Sông Hàn"].map((text, index) => (
              <span key={text} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + index * 0.15,
                  }}
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.9 }}
          className="mb-9 max-w-[480px] text-[0.95rem] font-medium leading-[1.85] text-white/86 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
        >
          Biểu tượng sống thượng lưu mới tại Đà Nẵng
          <br />
          Căn hộ hàng hiệu • Resort Living • Tầm nhìn vĩnh cửu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 1.05 }}
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#apartments"
            className="min-w-[184px] rounded-[3px] bg-[#C6A77D] px-8 py-4 text-center label-small font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition-colors duration-300 hover:bg-white hover:text-[#0B2545]"
          >
            Khám Phá Dự Án
          </a>
          <a
            href="#vr-tour"
            className="min-w-[194px] rounded-[3px] border border-white/35 bg-[#071522]/22 px-8 py-4 text-center label-small font-bold text-white backdrop-blur-[2px] transition-colors duration-300 hover:border-[#C6A77D] hover:text-[#C6A77D]"
          >
            Xem Căn Mẫu 360°
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-10 w-6 justify-center rounded-full border border-[#C6A77D]/75 pt-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#C6A77D]" />
        </motion.div>
        <span className="text-[0.72rem] font-medium text-white/48">
          Cuộn xuống để khám phá
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute right-5 top-1/2 z-20 hidden w-[86px] -translate-y-1/2 flex-col items-center gap-4 rounded-[4px] bg-[#071522]/76 py-5 shadow-[0_18px_36px_rgba(0,0,0,0.36)] backdrop-blur-md lg:flex"
      >
        {SIDE_ACTIONS.map((action) => (
          <a key={action.label} href={action.href} className="group flex w-full flex-col items-center gap-1.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/28 text-white/86 transition-all duration-300 group-hover:border-[#C6A77D]/80 group-hover:bg-[#C6A77D]/10 group-hover:text-[#C6A77D]">
              {action.icon}
            </div>
            <span className="max-w-[64px] text-center text-[0.62rem] font-semibold leading-tight text-white/86 transition-colors duration-300 group-hover:text-[#C6A77D]">
              {action.label}
            </span>
          </a>
        ))}
      </motion.div>
    </section>
  );
}

