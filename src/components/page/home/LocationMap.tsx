"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const LANDMARKS = [
  { id: "project", label: "Sun Symphony", x: 210, y: 208, isProject: true },
  { id: "beach", label: "Biển Mỹ Khê", x: 380, y: 180, time: "5 Phút" },
  { id: "airport", label: "Sân bay Quốc tế", x: 80, y: 180, time: "10 Phút" },
  { id: "dragon", label: "Cầu Rồng", x: 150, y: 210, time: "5 Phút" },
  { id: "center", label: "Trung tâm Hành chính", x: 180, y: 150, time: "4 Phút" },
  { id: "hoian", label: "Hội An", x: 280, y: 390, time: "35 Phút" },
  { id: "bana", label: "Bà Nà Hills", x: 100, y: 300, time: "45 Phút" },
];

const DISTANCES = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
        <path d="M10 2a7 7 0 110 14A7 7 0 0110 2z" />
        <path d="M10 7v4l2.5 1.5" />
      </svg>
    ),
    place: "Cầu Thuận Phước / Cầu Sông Hàn",
    time: "02 - 03 Phút",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
        <path d="M2 10h16M2 10c2-4 6-6 10-4" />
        <circle cx="5" cy="10" r="1.5" />
        <circle cx="15" cy="10" r="1.5" />
      </svg>
    ),
    place: "Cầu Rồng — Biểu tượng Đà Nẵng",
    time: "05 Phút",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
        <rect x="3" y="8" width="14" height="10" rx="1" />
        <path d="M7 8V6a3 3 0 016 0v2" />
        <circle cx="10" cy="13" r="1.5" />
      </svg>
    ),
    place: "Biển Mỹ Khê & Bán đảo Sơn Trà",
    time: "05 Phút",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
        <path d="M10 3C6.7 3 4 5.7 4 9c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6z" />
        <circle cx="10" cy="9" r="2" />
      </svg>
    ),
    place: "Sân bay Quốc tế Đà Nẵng",
    time: "10 Phút",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
        <path d="M3 17L10 3l7 14" />
        <path d="M6.5 11h7" />
      </svg>
    ),
    place: "Phố cổ Hội An",
    time: "35 Phút",
  },
];

export default function LocationMap() {
  const [activeLandmark, setActiveLandmark] = useState<string | null>(null);

  return (
    <section id="location" className="bg-[#FAF8F5] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-small text-[#9C7B5D] block mb-4">Tọa Độ Vàng Sông Hàn</span>
            <h2
              className="font-serif text-headline text-[#0B2545] font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Vị trí độc tôn
              <br />
              <em>— Tầm nhìn kiệt tác</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-2 justify-end"
          >
            <p className="text-[#555555] text-base leading-relaxed font-light">
              Tọa lạc tại mặt tiền đường Lê Văn Duyệt - Trần Hưng Đạo bên bờ đông sông Hàn thơ mộng, mang lại khả năng kết nối hoàn hảo và tầm view panorama triệu đô.
            </p>
          </motion.div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Distance list */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {DISTANCES.map((item, i) => (
              <motion.div
                key={item.place}
                className="flex items-start gap-4 p-4 rounded-xl bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300 group cursor-pointer"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className="text-[#C6A77D] mt-0.5 flex-shrink-0">{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#1A1A1A] font-light leading-snug">{item.place}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="label-small text-[#C6A77D] whitespace-nowrap">{item.time}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom SVG Map */}
          <motion.div
            className="relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06)]"
            style={{ aspectRatio: "4/3" }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <svg viewBox="0 0 500 375" className="w-full h-full" style={{ background: "#F5F0E8" }}>
              {/* Ocean */}
              <rect x="310" y="0" width="190" height="375" fill="#D4E8F0" opacity="0.6" />

              {/* Land grid — streets */}
              {[70, 130, 190, 250].map((y) => (
                <line key={y} x1="0" y1={y} x2="310" y2={y} stroke="#E8E0D0" strokeWidth="0.8" />
              ))}
              {[80, 150, 220, 280].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2="375" stroke="#E8E0D0" strokeWidth="0.8" />
              ))}

              {/* Coastline */}
              <path
                d="M310 0 C315 50, 320 100, 312 150 C308 180, 314 210, 310 250 C308 280, 315 320, 310 375"
                fill="none"
                stroke="#B8D4E0"
                strokeWidth="2"
                strokeDasharray="4 3"
              />

              {/* Han River */}
              <path
                d="M0 210 C60 215, 130 205, 180 208 C210 210, 250 218, 285 215 C298 213, 308 210, 312 210"
                fill="none"
                stroke="#B8D4E0"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.7"
              />
              <text x="130" y="206" style={{ fontSize: 9, fill: "#8AAFBF", fontFamily: "var(--font-sans)", letterSpacing: "0.08em" }}>Sông Hàn</text>

              {/* Ocean label */}
              <text x="355" y="180" style={{ fontSize: 10, fill: "#7AAFC0", fontFamily: "var(--font-sans)", letterSpacing: "0.06em" }}>Biển</text>
              <text x="348" y="196" style={{ fontSize: 10, fill: "#7AAFC0", fontFamily: "var(--font-sans)", letterSpacing: "0.06em" }}>Mỹ Khê</text>

              {/* Project marker — SUN SYMPHONY */}
              <g transform="translate(210, 208)">
                {/* Pulse rings */}
                <motion.circle
                  cx="0" cy="0" r="20"
                  fill="none" stroke="#C6A77D" strokeWidth="1"
                  animate={{ r: [16, 28, 16], opacity: [0.6, 0, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="0" cy="0" r="12"
                  fill="none" stroke="#C6A77D" strokeWidth="1"
                  animate={{ r: [8, 18, 8], opacity: [0.8, 0, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 0.4, ease: "easeInOut" }}
                />
                {/* Center dot */}
                <circle cx="0" cy="0" r="7" fill="#C6A77D" />
                <circle cx="0" cy="0" r="3" fill="white" />
                {/* Label */}
                <rect x="-42" y="-42" width="84" height="22" rx="3" fill="white" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.12))" }} />
                <text x="0" y="-26" textAnchor="middle" style={{ fontSize: 7.5, fill: "#0B2545", fontFamily: "var(--font-sans)", fontWeight: 700, letterSpacing: "0.02em" }}>SUN SYMPHONY</text>
              </g>

              {/* Other landmarks */}
              {LANDMARKS.filter(l => !l.isProject).map((lm) => (
                <g key={lm.id} transform={`translate(${lm.x}, ${lm.y})`}>
                  <circle cx="0" cy="0" r="4" fill="#9C7B5D" opacity="0.7" />
                  <circle cx="0" cy="0" r="2" fill="white" />
                  <text x="7" y="4" style={{ fontSize: 8, fill: "#555555", fontFamily: "var(--font-sans)" }}>{lm.label}</text>
                </g>
              ))}

              {/* Zoom controls */}
              <g transform="translate(468, 20)">
                <rect x="-12" y="-1" width="24" height="24" rx="4" fill="white" stroke="#E5E0D8" strokeWidth="1" />
                <text x="0" y="16" textAnchor="middle" style={{ fontSize: 14, fill: "#555555", fontFamily: "var(--font-sans)" }}>+</text>
              </g>
              <g transform="translate(468, 50)">
                <rect x="-12" y="-1" width="24" height="24" rx="4" fill="white" stroke="#E5E0D8" strokeWidth="1" />
                <text x="0" y="16" textAnchor="middle" style={{ fontSize: 14, fill: "#555555", fontFamily: "var(--font-sans)" }}>−</text>
              </g>
            </svg>

            {/* Scale indicator */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="w-10 h-px bg-[#555555]" style={{ borderTop: "1px solid #555", position: "relative" }} />
              <span className="text-[10px] text-[#555555]">2 km</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
