"use client";

import { motion } from "framer-motion";
import type { ProjectData, NearbyPlace } from "@/lib/projects";

const ICON_PATHS: Record<NearbyPlace["icon"], React.ReactNode> = {
  plane: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-4 h-4">
      <path d="M17 2L3 9l6 2 2 6 6-15z" />
    </svg>
  ),
  bridge: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-4 h-4">
      <path d="M2 10h16M2 10c2-4 6-5 10-3" />
      <path d="M5 10V7M15 10V7" />
      <path d="M2 13h16" />
    </svg>
  ),
  city: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-4 h-4">
      <path d="M2 18V8l6-5 6 5v10H2z" />
      <path d="M8 18v-5h4v5" />
      <rect x="14" y="10" width="4" height="8" />
    </svg>
  ),
  beach: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-4 h-4">
      <path d="M2 14c1-2 3-3.5 6-3.5S13 12 14 14" />
      <path d="M10 10.5V3M7 5l3-2 3 2" />
    </svg>
  ),
  mountain: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-4 h-4">
      <path d="M2 17L9 4l7 13H2z" />
      <path d="M6 17l3-5 3 5" />
    </svg>
  ),
  hospital: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-4 h-4">
      <rect x="3" y="3" width="14" height="14" rx="1" />
      <path d="M10 7v6M7 10h6" />
    </svg>
  ),
  market: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-4 h-4">
      <path d="M3 4h14l-1 8H4L3 4z" />
      <circle cx="7" cy="17" r="1.5" />
      <circle cx="14" cy="17" r="1.5" />
    </svg>
  ),
};

interface Props {
  project: ProjectData;
}

export default function ProjectDetailLocation({ project }: Props) {
  return (
    <section id="vi-tri" className="bg-[#FAF8F5] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-small text-[#9C7B5D] block mb-4">Vị Trí Chiến Lược</span>
            <h2
              className="font-serif text-headline text-[#1A1A1A] font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Kết nối thuận tiện
              <br />
              <em>— Giá trị xứng tầm</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[#555555] text-base leading-[1.85] font-light"
          >
            {project.mapDescription}
          </motion.p>
        </div>

        {/* Map + distance list */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Custom SVG Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06)]"
            style={{ aspectRatio: "16/9" }}
          >
            <svg viewBox="0 0 640 360" className="w-full h-full" style={{ background: "#F5F0E8" }}>
              {/* Ocean */}
              <rect x="520" y="0" width="120" height="360" fill="#C8E2ED" opacity="0.65" />

              {/* Street grid */}
              {[70, 140, 200, 270, 330].map((y) => (
                <line key={`h${y}`} x1="0" y1={y} x2="520" y2={y} stroke="#E8E0D0" strokeWidth="0.8" />
              ))}
              {[90, 170, 250, 340, 430].map((x) => (
                <line key={`v${x}`} x1={x} y1="0" x2={x} y2="360" stroke="#E8E0D0" strokeWidth="0.8" />
              ))}

              {/* Main roads (thicker) */}
              <line x1="0" y1="200" x2="520" y2="200" stroke="#DDD6C8" strokeWidth="3" />
              <line x1="250" y1="0" x2="250" y2="360" stroke="#DDD6C8" strokeWidth="3" />

              {/* River (Han River) */}
              <path
                d="M0 240 C80 238, 160 232, 240 236 C300 239, 370 246, 430 242 C470 239, 500 235, 520 236"
                fill="none" stroke="#AAD4E5" strokeWidth="8" strokeLinecap="round" opacity="0.8"
              />
              <text x="180" y="232" style={{ fontSize: 9, fill: "#80B8D0", fontFamily: "var(--font-sans)", letterSpacing: "0.06em" }}>
                Sông Hàn
              </text>

              {/* Coastline */}
              <path
                d="M520 0 C524 60, 522 130, 518 200 C516 240, 522 290, 520 360"
                fill="none" stroke="#90C8E0" strokeWidth="2.5" strokeDasharray="5 4"
              />

              {/* Ocean label */}
              <text x="540" y="170" style={{ fontSize: 9, fill: "#6AB5D5", fontFamily: "var(--font-sans)", letterSpacing: "0.05em" }}>
                Biển
              </text>
              <text x="540" y="185" style={{ fontSize: 9, fill: "#6AB5D5", fontFamily: "var(--font-sans)", letterSpacing: "0.05em" }}>
                Đông
              </text>

              {/* Project marker */}
              <g transform="translate(390, 220)">
                <motion.circle
                  cx="0" cy="0" r="22"
                  fill="none" stroke="#C6A77D" strokeWidth="1"
                  animate={{ r: [16, 28, 16], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                />
                <circle cx="0" cy="0" r="9" fill="#0B2545" />
                <circle cx="0" cy="0" r="4" fill="#C6A77D" />
                {/* Label */}
                <rect x="-38" y="-48" width="76" height="22" rx="3" fill="white"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))" }} />
                <text x="0" y="-32" textAnchor="middle"
                  style={{ fontSize: 8, fill: "#0B2545", fontFamily: "var(--font-sans)", fontWeight: 700, letterSpacing: "0.04em" }}>
                  {project.shortName.toUpperCase()}
                </text>
              </g>

              {/* Nearby markers */}
              {[
                { x: 200, y: 110, label: "Sân bay" },
                { x: 320, y: 230, label: "Cầu Rồng" },
                { x: 270, y: 270, label: "TT Đà Nẵng" },
              ].map((m) => (
                <g key={m.label} transform={`translate(${m.x}, ${m.y})`}>
                  <circle cx="0" cy="0" r="5" fill="#9C7B5D" opacity="0.65" />
                  <circle cx="0" cy="0" r="2" fill="white" />
                  <text x="8" y="4" style={{ fontSize: 8, fill: "#555", fontFamily: "var(--font-sans)" }}>
                    {m.label}
                  </text>
                </g>
              ))}

              {/* Compass */}
              <g transform="translate(608, 30)">
                <circle cx="0" cy="0" r="16" fill="white" opacity="0.9" />
                <path d="M0-10L2.5-3L0-5L-2.5-3Z" fill="#0B2545" />
                <path d="M0 10L2.5 3L0 5L-2.5 3Z" fill="#DDD" />
                <text x="0" y="-14" textAnchor="middle"
                  style={{ fontSize: 8, fill: "#0B2545", fontFamily: "var(--font-sans)", fontWeight: 600 }}>N</text>
              </g>
            </svg>

            {/* Address overlay */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
              <p className="text-xs text-[#0B2545] font-medium leading-snug max-w-[200px]">
                {project.fullAddress}
              </p>
            </div>
          </motion.div>

          {/* Distance cards */}
          <motion.div
            className="flex flex-col gap-2.5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="label-small text-[#8A8A8A] mb-1">Khoảng Cách Tiện Ích</p>
            {project.nearbyPlaces.map((place, i) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-[0_4px_20px_rgba(11,37,69,0.06)] transition-shadow duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0B2545]/6 flex items-center justify-center text-[#0B2545] flex-shrink-0">
                  {ICON_PATHS[place.icon]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#1A1A1A] font-light leading-snug truncate">{place.name}</p>
                  <p className="text-xs text-[#8A8A8A] font-light">{place.distance}</p>
                </div>
                <span className="label-small text-[#C6A77D] flex-shrink-0">{place.time}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
