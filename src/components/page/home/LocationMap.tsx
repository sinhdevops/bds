"use client";

import { motion } from "framer-motion";

const DISTANCES = [
  {
    place: "Sân bay quốc tế",
    time: "15 phút",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4">
        <path d="M2 15l6-4 2-8 2 8 6 4" />
        <path d="M10 3v12" />
      </svg>
    ),
  },
  {
    place: "Cầu Rồng",
    time: "5 phút",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4">
        <path d="M2 12c4-6 12-6 16 0" />
        <path d="M6 12v4M14 12v4" />
      </svg>
    ),
  },
  {
    place: "Biển Mỹ Khê",
    time: "5 phút",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4">
        <path d="M2 14c2-4 6-6 10-4M2 10c2-3 6-4 10-2M2 6c2-2 6-2 10 0" />
      </svg>
    ),
  },
  {
    place: "Trung tâm hành chính",
    time: "5 phút",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4">
        <rect x="3" y="5" width="14" height="13" rx="1" />
        <path d="M7 18V10h6v8M10 5V2" />
      </svg>
    ),
  },
  {
    place: "Phố cổ Hội An",
    time: "40 phút",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4">
        <path d="M10 3C6.7 3 4 5.7 4 9c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6z" />
        <circle cx="10" cy="9" r="2" />
      </svg>
    ),
  },
];

const LANDMARKS = [
  { id: "airport", label: "Sân bay", x: 72, y: 285 },
  { id: "admin", label: "TT hành chính", x: 96, y: 132 },
  { id: "dragon", label: "Cầu Rồng", x: 185, y: 265 },
  { id: "mykhe", label: "Biển Mỹ Khê", x: 428, y: 224 },
  { id: "sontra", label: "Sơn Trà", x: 395, y: 88 },
];

export default function LocationMap() {
  return (
    <section id="location" className="bg-white relative overflow-hidden">
      <div className="grid lg:grid-cols-[420px_1fr]">
        <div className="flex flex-col justify-center bg-[#FAF8F5] px-8 lg:px-16 py-14 lg:py-18 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#B89B72]" />
              <span className="label-small text-gold">Vị Trí Đắc Địa</span>
            </div>
            <h2
              className="font-serif text-[#111111] font-light leading-[1.08] mb-8"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              }}
            >
              Kết nối hoàn hảo
              <br />
              <em>tại trung tâm Đà Nẵng</em>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col gap-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            {DISTANCES.map((item, i) => (
              <motion.div
                key={item.place}
                className="flex items-center gap-4 py-3 border-b border-[#E5E0D8] group cursor-default"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.07 }}
              >
                <div className="text-gold/70 shrink-0">{item.icon}</div>
                <p className="text-[#555555] text-sm font-medium flex-1">{item.place}</p>
                <span className="label-small text-[#111111] shrink-0">{item.time}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative min-h-[400px] lg:min-h-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <svg viewBox="0 0 500 375" className="w-full h-full" style={{ background: "#17202A", minHeight: 360 }}>
            <defs>
              <radialGradient id="projectGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C6A77D" stopOpacity="0.42" />
                <stop offset="72%" stopColor="#C6A77D" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#C6A77D" stopOpacity="0" />
              </radialGradient>
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect width="500" height="375" fill="#17202A" />
            <path d="M385 0 C392 70 392 145 386 210 C380 278 386 330 390 375 L500 375 L500 0 Z" fill="#071522" opacity="0.96" />
            <path d="M385 0 C392 70 392 145 386 210 C380 278 386 330 390 375" fill="none" stroke="#28475B" strokeWidth="3" opacity="0.85" />

            {[60, 125, 190, 255, 320].map((y) => (
              <line key={`h${y}`} x1="0" y1={y} x2="386" y2={y} stroke="#2B2A25" strokeWidth="1" opacity="0.75" />
            ))}
            {[70, 135, 205, 275, 345].map((x) => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="375" stroke="#2B2A25" strokeWidth="1" opacity="0.75" />
            ))}

            <path
              d="M144 0 C152 42 148 83 139 124 C131 164 137 199 147 236 C158 276 151 324 138 375"
              fill="none"
              stroke="#153247"
              strokeWidth="42"
              strokeLinecap="round"
              opacity="0.92"
            />
            <path
              d="M144 0 C152 42 148 83 139 124 C131 164 137 199 147 236 C158 276 151 324 138 375"
              fill="none"
              stroke="#2A6FA8"
              strokeWidth="18"
              strokeLinecap="round"
              opacity="0.82"
            />
            <path
              d="M144 0 C152 42 148 83 139 124 C131 164 137 199 147 236 C158 276 151 324 138 375"
              fill="none"
              stroke="#43A0D8"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.42"
            />

            <text x="111" y="184" transform="rotate(-82 111 184)" style={{ fontSize: 13, fill: "#43A0D8", fontFamily: "var(--font-sans)", letterSpacing: "0.08em", opacity: 0.82 }}>
              Sông Hàn
            </text>
            <text x="421" y="176" textAnchor="middle" style={{ fontSize: 12, fill: "#315871", fontFamily: "var(--font-sans)", letterSpacing: "0.08em" }}>
              Biển
            </text>
            <text x="421" y="194" textAnchor="middle" style={{ fontSize: 12, fill: "#315871", fontFamily: "var(--font-sans)", letterSpacing: "0.08em" }}>
              Mỹ Khê
            </text>

            <path d="M58 128 C93 133 119 131 151 121 C185 110 215 96 256 88 C296 80 331 84 372 96" fill="none" stroke="#786448" strokeWidth="2" opacity="0.58" />
            <path d="M158 95 C205 95 259 100 330 104" fill="none" stroke="#8A704D" strokeWidth="2.4" opacity="0.7" />
            <text x="232" y="89" style={{ fontSize: 7.5, fill: "#8F826F", fontFamily: "var(--font-sans)", letterSpacing: "0.04em" }}>
              Lê Văn Duyệt
            </text>
            <path d="M172 14 C177 62 178 104 176 150 C174 204 184 254 192 334" fill="none" stroke="#9A8058" strokeWidth="2.6" opacity="0.72" />
            <text x="188" y="180" transform="rotate(84 188 180)" style={{ fontSize: 7.5, fill: "#9A8058", fontFamily: "var(--font-sans)", letterSpacing: "0.04em" }}>
              Trần Hưng Đạo
            </text>

            <path d="M100 250 C134 251 158 250 185 265 C208 278 235 284 274 278" fill="none" stroke="#C6A77D" strokeWidth="2" opacity="0.75" />
            <text x="184" y="256" style={{ fontSize: 8, fill: "#9A8D7C", fontFamily: "var(--font-sans)" }}>
              Cầu Rồng
            </text>

            {LANDMARKS.map((lm) => (
              <g key={lm.id} transform={`translate(${lm.x},${lm.y})`}>
                <circle cx="0" cy="0" r="3.6" fill="#C6A77D" opacity="0.65" />
                <circle cx="0" cy="0" r="1.6" fill="#17202A" opacity="0.95" />
                <text x="9" y="4" style={{ fontSize: 8, fill: "#8C8376", fontFamily: "var(--font-sans)" }}>
                  {lm.label}
                </text>
              </g>
            ))}

            <g transform="translate(182,104)" filter="url(#softGlow)">
              <circle cx="0" cy="0" r="42" fill="url(#projectGlow)" />
              <circle cx="0" cy="0" r="22" fill="none" stroke="#C6A77D" strokeWidth="1" opacity="0.46" />
              <circle cx="0" cy="0" r="9" fill="#C6A77D" />
              <circle cx="0" cy="0" r="3.6" fill="#071522" />
              <rect x="12" y="-46" width="150" height="42" rx="4" fill="#151B20" stroke="#C6A77D" strokeWidth="1.2" />
              <text x="87" y="-22" textAnchor="middle" style={{ fontSize: 12, fill: "#C6A77D", fontFamily: "var(--font-sans)", fontWeight: 700, letterSpacing: "0.08em" }}>
                SUN SYMPHONY
              </text>
              <text x="87" y="-8" textAnchor="middle" style={{ fontSize: 7.5, fill: "#B9B1A7", fontFamily: "var(--font-sans)", letterSpacing: "0.03em" }}>
                Trần Hưng Đạo - Lê Văn Duyệt
              </text>
            </g>

            <g transform="translate(20,355)">
              <line x1="0" y1="0" x2="40" y2="0" stroke="#4B4A43" strokeWidth="1" />
              <text x="44" y="4" style={{ fontSize: 7.5, fill: "#7A746C", fontFamily: "var(--font-sans)" }}>
                2 km
              </text>
            </g>
          </svg>

          <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#0E0E0E] border border-white/8">
            <span className="label-small text-gold/70">Sơn Trà, Đà Nẵng</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
