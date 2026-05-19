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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    number: "15",
    unit: "Phút",
    title: "Đến Sân Bay Quốc Tế",
    desc: "Sân bay Quốc tế Đà Nẵng",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
        <path d="M3 17c1.5-3 4.5-5 9-5s7.5 2 9 5" />
        <path d="M3 12c1.5-2 4.5-3.5 9-3.5S19.5 10 21 12" />
        <path d="M3 7c1.5-1.5 4.5-2 9-2s7.5.5 9 2" />
      </svg>
    ),
    number: "100%",
    unit: "",
    title: "Căn Hộ View Sông Hàn",
    desc: "Panorama 5 trong 1 triệu đô",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    number: "5",
    unit: "Sao",
    title: "Vận Hành & Dịch Vụ",
    desc: "Chuẩn resort quốc tế cao cấp",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
        <path d="M3 6l3-3h12l3 3" />
        <path d="M3 6v13a2 2 0 002 2h14a2 2 0 002-2V6" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    number: "Sở Hữu",
    unit: "",
    title: "Lâu Dài",
    desc: "Cho người Việt Nam",
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
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.022,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const tagline = "Designed for elevated riverfront luxury.";

  return (
    <section id="project" className="bg-[#F8F6F2]">
      {/* Stats bar */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[rgba(0,0,0,0.07)]">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.title}
              className="flex flex-col items-center text-center gap-4 px-6 lg:px-10 py-6 lg:py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 }}
            >
              <div className="text-[#B89B72]/70">{stat.icon}</div>
              <div>
                <div className="flex items-baseline justify-center gap-1 mb-1.5">
                  <span
                    className="font-serif text-[#111111]"
                    style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 300 }}
                  >
                    {stat.number}
                  </span>
                  {stat.unit && (
                    <span className="label-small text-[#B89B72] text-xs">{stat.unit}</span>
                  )}
                </div>
                <p className="label-small text-[#111111] mb-1">{stat.title}</p>
                <p className="text-[#5F5F5F] text-xs font-light leading-snug">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-width cinematic image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21/8" }}>
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=85&fit=crop"
          alt="Sông Hàn Đà Nẵng về đêm — Sun Symphony Residence"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-[#B89B72]/8 mix-blend-multiply" />

        {/* Tagline with character animation */}
        <div className="absolute inset-0 flex items-end justify-center pb-10 px-6" ref={textRef}>
          <p
            className="font-serif text-white/90 text-center italic font-light"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 3vw, 2.75rem)",
              lineHeight: 1.2,
            }}
          >
            {tagline.split("").map((char, i) => (
              <span
                key={i}
                className="char inline-block"
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Brief description */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#B89B72]" />
              <span className="label-small text-[#B89B72]">Về SRT & Sun Group</span>
            </div>
            <h2
              className="font-serif text-[#111111] font-light leading-[1.1]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              }}
            >
              Kiến tạo chuẩn
              <br />
              <em className="text-[#B89B72]">sống thượng lưu</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <p className="text-[#5F5F5F] text-[0.9375rem] leading-[1.85] font-light mb-8">
              Tổ hợp căn hộ cao cấp <strong className="text-[#111111] font-medium">Sun Symphony Residence</strong> tọa lạc trên quỹ đất ven Sông Hàn đắt giá cuối cùng tại trung tâm Đà Nẵng — kiệt tác sở hữu tầm nhìn 5-trong-1 cùng chất sống nghỉ dưỡng đỉnh cao.
            </p>
            <div className="flex gap-10">
              {[
                { num: "31", unit: "Tầng", desc: "cao thượng đỉnh" },
                { num: "1228", unit: "Căn Hộ", desc: "cao cấp đặc tuyển" },
                { num: "100%", unit: "Tầm Nhìn", desc: "panorama đắt giá" },
              ].map((item) => (
                <div key={item.num}>
                  <span
                    className="font-serif text-[#B89B72] block"
                    style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 300, lineHeight: 1 }}
                  >
                    {item.num}
                  </span>
                  <span className="label-small text-[#111111] block mt-1.5">{item.unit}</span>
                  <span className="text-xs text-[#5F5F5F] font-light">{item.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
