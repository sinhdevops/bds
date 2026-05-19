"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const DISTANCES = [
  {
    place: "Cầu Sông Hàn / Cầu Thuận Phước",
    time: "2 phút",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4.5 h-4.5">
        <path d="M2 10h16M5 6v8M10 4v12M15 6v8" />
      </svg>
    ),
  },
  {
    place: "Biển Mỹ Khê & Bán đảo Sơn Trà",
    time: "5 phút",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4.5 h-4.5">
        <path d="M2 14c2-4 6-6 10-4M2 10c2-3 6-4 10-2M2 6c2-2 6-2 10 0" />
      </svg>
    ),
  },
  {
    place: "Cầu Rồng — Biểu tượng Đà Nẵng",
    time: "5 phút",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4.5 h-4.5">
        <path d="M2 12c4-6 12-6 16 0" />
        <path d="M6 12v4M14 12v4" />
      </svg>
    ),
  },
  {
    place: "Sân bay Quốc tế Đà Nẵng",
    time: "10 phút",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4.5 h-4.5">
        <path d="M2 15l6-4 2-8 2 8 6 4" />
        <path d="M10 3v12" />
      </svg>
    ),
  },
  {
    place: "Vincom Center Đà Nẵng",
    time: "7 phút",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4.5 h-4.5">
        <rect x="3" y="5" width="14" height="13" rx="1" />
        <path d="M7 18V10h6v8M10 5V2" />
      </svg>
    ),
  },
  {
    place: "Phố cổ Hội An",
    time: "35 phút",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4.5 h-4.5">
        <path d="M10 3C6.7 3 4 5.7 4 9c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6z" />
        <circle cx="10" cy="9" r="2" />
      </svg>
    ),
  },
];

const LANDMARKS = [
  { id: "project", x: 210, y: 208, isProject: true },
  { id: "beach", label: "Biển Mỹ Khê", x: 380, y: 180 },
  { id: "airport", label: "Sân bay", x: 80, y: 185 },
  { id: "dragon", label: "Cầu Rồng", x: 155, y: 212 },
  { id: "hoian", label: "Hội An", x: 285, y: 390 },
  { id: "bana", label: "Bà Nà Hills", x: 100, y: 300 },
];

export default function LocationMap() {
  const [hoveredLandmark, setHoveredLandmark] = useState<string | null>(null);

  return (
    <section id="location" className="bg-[#0E0E0E] py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle gold radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse 50% 60% at 30% 50%, rgba(184,155,114,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-14 lg:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#B89B72]" />
              <span className="label-small text-[#B89B72]">Vị Trí Đắc Địa</span>
            </div>
            <h2
              className="font-serif text-white font-light leading-[1.08]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              }}
            >
              Kết nối hoàn hảo
              <br />
              <em className="text-[#B89B72]">tại trung tâm Đà Nẵng</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex flex-col justify-end"
          >
            <p className="text-white/40 text-[0.9375rem] font-light leading-[1.8]">
              Tọa lạc tại mặt tiền đường Lê Văn Duyệt bên bờ đông Sông Hàn — vị thế đắc địa nhất tại trung tâm Đà Nẵng, mang tầm nhìn panorama triệu đô không thể sao chép.
            </p>
          </motion.div>
        </div>

        {/* Content: distance list + map */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Distance cards */}
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            {DISTANCES.map((item, i) => (
              <motion.div
                key={item.place}
                className="flex items-center gap-4 py-3.5 px-4 border border-white/6 hover:border-[#B89B72]/25 hover:bg-[#B89B72]/4 transition-all duration-300 group cursor-default"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
              >
                <div className="text-[#B89B72]/60 group-hover:text-[#B89B72] transition-colors duration-300 shrink-0">
                  {item.icon}
                </div>
                <p className="text-white/45 text-sm font-light leading-snug flex-1 group-hover:text-white/65 transition-colors duration-300">
                  {item.place}
                </p>
                <span className="label-small text-[#B89B72]/70 group-hover:text-[#B89B72] transition-colors duration-300 shrink-0 whitespace-nowrap">
                  {item.time}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Dark luxury SVG map */}
          <motion.div
            className="relative overflow-hidden border border-white/6"
            style={{ aspectRatio: "4/3" }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <svg
              viewBox="0 0 500 375"
              className="w-full h-full"
              style={{ background: "#131313" }}
            >
              {/* Ocean/sea */}
              <rect x="310" y="0" width="190" height="375" fill="#0A1520" opacity="0.9" />

              {/* Street grid — subtle on dark */}
              {[70, 130, 190, 250].map((y) => (
                <line key={`h${y}`} x1="0" y1={y} x2="310" y2={y} stroke="#222" strokeWidth="1" />
              ))}
              {[80, 150, 220, 280].map((x) => (
                <line key={`v${x}`} x1={x} y1="0" x2={x} y2="375" stroke="#222" strokeWidth="1" />
              ))}

              {/* Coastline glow */}
              <path
                d="M310 0 C315 50, 320 100, 312 150 C308 180, 314 210, 310 250 C308 280, 315 320, 310 375"
                fill="none"
                stroke="#1A3040"
                strokeWidth="2.5"
              />

              {/* Han River — glowing blue */}
              <path
                d="M0 210 C60 215, 130 205, 180 208 C210 210, 250 218, 285 215 C298 213, 308 210, 312 210"
                fill="none"
                stroke="#1E4A6E"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M0 210 C60 215, 130 205, 180 208 C210 210, 250 218, 285 215 C298 213, 308 210, 312 210"
                fill="none"
                stroke="#2A6FA8"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.5"
              />
              <text
                x="130"
                y="205"
                style={{ fontSize: 9, fill: "#2A6FA8", fontFamily: "var(--font-sans)", letterSpacing: "0.1em", opacity: 0.8 }}
              >
                Sông Hàn
              </text>

              {/* Sea label */}
              <text x="348" y="178" style={{ fontSize: 9, fill: "#1A3040", fontFamily: "var(--font-sans)", letterSpacing: "0.06em" }}>Biển</text>
              <text x="340" y="194" style={{ fontSize: 9, fill: "#1A3040", fontFamily: "var(--font-sans)", letterSpacing: "0.06em" }}>Mỹ Khê</text>

              {/* Other landmarks */}
              {LANDMARKS.filter((l) => !l.isProject).map((lm) => (
                <g key={lm.id} transform={`translate(${lm.x}, ${lm.y})`}>
                  <circle cx="0" cy="0" r="3" fill="#B89B72" opacity="0.5" />
                  <circle cx="0" cy="0" r="1.5" fill="#B89B72" opacity="0.8" />
                  <text x="7" y="4" style={{ fontSize: 8, fill: "#555", fontFamily: "var(--font-sans)" }}>
                    {lm.label}
                  </text>
                </g>
              ))}

              {/* Project marker — glowing gold */}
              <g transform="translate(210, 208)">
                {/* Outer glow rings */}
                <motion.circle
                  cx="0"
                  cy="0"
                  r="20"
                  fill="none"
                  stroke="#B89B72"
                  strokeWidth="0.8"
                  animate={{ r: [16, 30, 16], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="0"
                  cy="0"
                  r="12"
                  fill="none"
                  stroke="#B89B72"
                  strokeWidth="0.8"
                  animate={{ r: [8, 20, 8], opacity: [0.7, 0, 0.7] }}
                  transition={{ repeat: Infinity, duration: 2.8, delay: 0.5, ease: "easeInOut" }}
                />
                {/* Center */}
                <circle cx="0" cy="0" r="6" fill="#B89B72" />
                <circle cx="0" cy="0" r="2.5" fill="#111" />
                {/* Label tag */}
                <rect x="-44" y="-44" width="88" height="24" rx="2" fill="#1A1A1A" stroke="#B89B72" strokeWidth="0.6" />
                <text x="0" y="-28" textAnchor="middle" style={{ fontSize: 7.5, fill: "#B89B72", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em" }}>
                  SUN SYMPHONY
                </text>
                <text x="0" y="-20" textAnchor="middle" style={{ fontSize: 6, fill: "#666", fontFamily: "var(--font-sans)", letterSpacing: "0.05em" }}>
                  Lê Văn Duyệt · Đà Nẵng
                </text>
              </g>

              {/* Scale bar */}
              <g transform="translate(20, 355)">
                <line x1="0" y1="0" x2="40" y2="0" stroke="#333" strokeWidth="1" />
                <text x="44" y="4" style={{ fontSize: 8, fill: "#444", fontFamily: "var(--font-sans)" }}>2 km</text>
              </g>
            </svg>

            {/* Map badge */}
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-ink border border-white/8">
              <span className="label-small text-[#B89B72]/70">Đà Nẵng, Việt Nam</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
