"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Vị Trí Độc Tôn",
    desc: "Mặt tiền sông Hàn thơ mộng, ôm trọn cung đường Lê Văn Duyệt - Trần Hưng Đạo",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
        <path d="M3 17c1.5-3 4.5-5 9-5s7.5 2 9 5" />
        <path d="M3 12c1.5-2 4.5-3.5 9-3.5S19.5 10 21 12" />
        <path d="M3 7c1.5-1.5 4.5-2 9-2s7.5.5 9 2" />
      </svg>
    ),
    title: "Tầm Nhìn Triệu Đô",
    desc: "Panorama 5 trong 1 ngắm Sông Hàn, biển, bán đảo Sơn Trà và pháo hoa quốc tế DIFF",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    title: "Tiện Ích Đặc Quyền",
    desc: "Bến du thuyền, công viên ven sông rộng lớn, bể bơi vô cực phong cách resort",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
        <path d="M3 6l3-3h12l3 3" />
        <path d="M3 6v13a2 2 0 002 2h14a2 2 0 002-2V6" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    title: "Phân Phối Uy Tín",
    desc: "SRT Miền Trung - Đối tác chiến lược xuất sắc của Sun Group tại miền Trung",
  },
];

export default function ProjectOverview() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const chars = textRef.current.querySelectorAll(".char");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.025,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const tagline = "Designed for elevated riverfront luxury.";

  return (
    <section id="project" className="bg-[#FAF8F5]">
      {/* Stats Bar */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#E5E0D8]">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.title}
              className="flex flex-col items-center text-center gap-4 lg:px-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 }}
            >
              <div className="text-[#C6A77D]">{stat.icon}</div>
              <div>
                <p className="label-medium text-[#0B2545] mb-2">{stat.title}</p>
                <p className="text-[#555555] text-sm leading-relaxed font-light">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-width image section */}
      <div className="relative w-full aspect-[16/7] lg:aspect-[21/8] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85&fit=crop"
          alt="Sông Hàn Đà Nẵng về đêm"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#C6A77D]/10 mix-blend-multiply" />

        {/* Tagline overlay */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center px-6" ref={textRef}>
          <p
            className="font-serif text-white/90 text-center"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 3.5vw, 3rem)", lineHeight: 1.2, fontStyle: "italic", fontWeight: 300 }}
          >
            {tagline.split("").map((char, i) => (
              <span key={i} className="char inline-block" style={{ whiteSpace: char === " " ? "pre" : "normal" }}>
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Brief description */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="label-small text-[#9C7B5D] block mb-4">Về SRT & Sun Group</span>
            <h2
              className="font-serif text-headline text-[#0B2545] font-light leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Kiến tạo chuẩn
              <br />
              <em>sống thượng lưu</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <p className="text-[#555555] text-base lg:text-[1.0625rem] leading-[1.8] font-light mb-6">
              Tổ hợp căn hộ cao cấp <strong>Sun Symphony Residence</strong> tọa lạc trên quỹ đất ven sông Hàn đắt giá cuối cùng tại trung tâm Đà Nẵng. Được phát triển bởi Tập đoàn Sun Group và phân phối chính thức bởi <strong>SRT Miền Trung</strong>, dự án là kiệt tác nghệ thuật sở hữu tầm nhìn 5-trong-1 đắt giá cùng chất sống nghỉ dưỡng đỉnh cao.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { num: "31", unit: "Tầng", label: "cao thượng đỉnh" },
                { num: "1228", unit: "Căn Hộ", label: "cao cấp đặc tuyển" },
                { num: "100%", unit: "Tầm Nhìn", label: "panorama đắt giá" },
              ].map((item) => (
                <div key={item.num} className="flex flex-col gap-1">
                  <span
                    className="font-serif text-3xl text-[#C6A77D] font-light leading-none"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {item.num}
                  </span>
                  <span className="label-small text-[#0B2545] font-semibold">{item.unit}</span>
                  <span className="text-xs text-[#8A8A8A] font-light">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
