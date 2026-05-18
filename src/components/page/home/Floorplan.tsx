"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ApartmentType = "all" | "studio" | "1pn" | "2pn" | "3pn";

interface UnitInfo {
  id: string;
  code: string;
  type: ApartmentType;
  area: number;
  view: string;
  price: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const UNITS: UnitInfo[] = [
  // Horizontal block - Top Units (y: 150, height: 40)
  { id: "s5a-15", code: "S5A-08-15", type: "2pn", area: 68.5, view: "Sông Hàn & Cầu Thuận Phước", price: "5.5 Tỷ", x: 80, y: 150, width: 45, height: 40 },
  { id: "s5a-16", code: "S5A-08-16", type: "1pn", area: 48.2, view: "Sông Hàn & Bán đảo Sơn Trà", price: "3.9 Tỷ", x: 128, y: 150, width: 40, height: 40 },
  { id: "s5a-17", code: "S5A-08-17", type: "1pn", area: 45.5, view: "Sông Hàn & Bán đảo Sơn Trà", price: "3.8 Tỷ", x: 171, y: 150, width: 40, height: 40 },
  { id: "s5a-18", code: "S5A-08-18", type: "studio", area: 30.1, view: "Sông Hàn & Pháo hoa DIFF", price: "2.6 Tỷ", x: 214, y: 150, width: 35, height: 40 },
  { id: "s5a-20", code: "S5A-08-20", type: "studio", area: 30.1, view: "Sông Hàn & Pháo hoa DIFF", price: "2.6 Tỷ", x: 252, y: 150, width: 35, height: 40 },
  { id: "s5a-22", code: "S5A-08-22", type: "studio", area: 31.4, view: "Sông Hàn & Thành phố", price: "2.7 Tỷ", x: 290, y: 150, width: 35, height: 40 },

  // Horizontal block - Bottom Units (y: 220, height: 40)
  { id: "s5a-10", code: "S5A-08-10", type: "2pn", area: 70.2, view: "Nội Khu & Bể Bơi", price: "5.3 Tỷ", x: 80, y: 220, width: 45, height: 40 },
  { id: "s5a-09", code: "S5A-08-09", type: "2pn", area: 68.5, view: "Nội Khu & Bể Bơi", price: "5.1 Tỷ", x: 128, y: 220, width: 40, height: 40 },
  { id: "s5a-08", code: "S5A-08-08", type: "1pn", area: 45.5, view: "Nội Khu & Thành phố", price: "3.5 Tỷ", x: 171, y: 220, width: 40, height: 40 },
  { id: "s5a-07", code: "S5A-08-07", type: "1pn", area: 48.0, view: "Nội Khu & Thành phố", price: "3.7 Tỷ", x: 214, y: 220, width: 40, height: 40 },
  { id: "s5a-06", code: "S5A-08-06", type: "studio", area: 30.1, view: "Nội Khu & Vườn Hoa", price: "2.4 Tỷ", x: 257, y: 220, width: 35, height: 40 },
  { id: "s5a-05", code: "S5A-08-05", type: "studio", area: 30.1, view: "Nội Khu & Vườn Hoa", price: "2.4 Tỷ", x: 295, y: 220, width: 35, height: 40 },

  // Vertical block - Right Wing Units (x: 335, width: 62)
  { id: "s5b-05", code: "S5B-08-05", type: "1pn", area: 51.8, view: "Sông Hàn & Thành phố", price: "4.1 Tỷ", x: 335, y: 265, width: 62, height: 40 },
  { id: "s5b-06", code: "S5B-08-06", type: "1pn", area: 44.5, view: "Sông Hàn & Thành phố", price: "3.7 Tỷ", x: 335, y: 308, width: 62, height: 40 },
  { id: "s5b-07", code: "S5B-08-07", type: "studio", area: 31.4, view: "Nội Khu Resort", price: "2.5 Tỷ", x: 335, y: 351, width: 62, height: 35 },
  { id: "s5b-08", code: "S5B-08-08", type: "2pn", area: 70.1, view: "Sông Hàn Panorama", price: "5.8 Tỷ", x: 335, y: 389, width: 62, height: 50 },
  { id: "s5b-09", code: "S5B-08-09", type: "1pn", area: 48.0, view: "Nội Khu & Bể Bơi", price: "3.6 Tỷ", x: 335, y: 442, width: 62, height: 40 },
  { id: "s5b-10", code: "S5B-08-10", type: "studio", area: 30.1, view: "Nội Khu & Bể Bơi", price: "2.4 Tỷ", x: 335, y: 485, width: 62, height: 35 },
  { id: "s5b-11", code: "S5B-08-11", type: "3pn", area: 92.5, view: "Sông Hàn & Cầu Rồng Panorama", price: "8.5 Tỷ", x: 335, y: 523, width: 62, height: 60 },
];

const FILTERS: { value: ApartmentType; label: string }[] = [
  { value: "all", label: "Tất Cả" },
  { value: "studio", label: "Căn Studio" },
  { value: "1pn", label: "Căn 1PN+" },
  { value: "2pn", label: "Căn 2PN" },
  { value: "3pn", label: "Căn 3PN" },
];

const typeColors: Record<ApartmentType, string> = {
  all: "#C6A77D",
  studio: "#A9D0F5", // Sky Blue
  "1pn": "#F7A3B5",   // Light Pink
  "2pn": "#98D8A0",   // Soft Green
  "3pn": "#FBBF24",   // Gold
};

const typeLabels: Record<ApartmentType, string> = {
  all: "Tất cả",
  studio: "CĂN HỘ STU",
  "1pn": "CĂN HỘ 1PN+",
  "2pn": "CĂN HỘ 2BR",
  "3pn": "CĂN HỘ 3BR",
};

export default function Floorplan() {
  const [filter, setFilter] = useState<ApartmentType>("all");
  const [hoveredUnit, setHoveredUnit] = useState<UnitInfo | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<UnitInfo | null>(null);

  const isVisible = (unit: UnitInfo) => filter === "all" || unit.type === filter;

  return (
    <section id="floorplan" className="bg-[#FAF8F5] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-small text-[#9C7B5D] block mb-4">Mặt Bằng Tầng Điển Hình Tòa S5</span>
            <h2
              className="font-serif text-headline text-[#0B2545] font-light leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Mặt Bằng Tầng 3A-18
              <br />
              <em>Tòa Symphony 5</em>
            </h2>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-wrap gap-2 lg:justify-end"
          >
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 rounded-sm label-small font-semibold transition-all duration-300 ${
                  filter === f.value
                    ? "bg-[#0B2545] text-white shadow-sm"
                    : "border border-[#E5E0D8] text-[#555555] hover:border-[#0B2545] hover:text-[#0B2545]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Floor plan + Info panel */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
          {/* SVG Floor Plan */}
          <motion.div
            className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_32px_rgba(0,0,0,0.05)] border border-[#E5E0D8]/40"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Title Badge inside floorplan */}
            <div className="absolute top-6 left-6 z-10">
              <span className="px-4 py-2 bg-[#FAF8F5] border border-[#E5E0D8] text-[#0B2545] label-small font-semibold rounded-sm shadow-sm inline-block">
                Tòa Symphony 5 · Sun Symphony
              </span>
            </div>

            <div className="w-full overflow-x-auto pt-10">
              <svg
                viewBox="0 0 460 620"
                className="w-full mx-auto"
                style={{ minWidth: "340px", maxHeight: "580px" }}
              >
                {/* Grid Background */}
                <rect width="460" height="620" fill="#FAF9F6" rx="12" />

                {/* Building Boundary Guidelines */}
                <path d="M 60 130 L 415 130 L 415 600 L 315 600 L 315 285 L 60 285 Z" fill="none" stroke="#EDE8E0" strokeWidth="1.5" strokeDasharray="5 5" />

                {/* Horizontal Walkway Corridor */}
                <rect x="70" y="193" width="262" height="24" rx="2" fill="#EAE6DF" stroke="#DCD6CD" strokeWidth="1" />
                
                {/* Vertical Walkway Corridor */}
                <rect x="307" y="217" width="24" height="375" rx="2" fill="#EAE6DF" stroke="#DCD6CD" strokeWidth="1" />

                {/* Junction overlapping fill */}
                <rect x="307" y="193" width="25" height="25" fill="#EAE6DF" />

                {/* Central Corridor texts */}
                <text x="180" y="208" textAnchor="middle" style={{ fontSize: 7, fill: "#8A8A8A", fontFamily: "var(--font-sans)", letterSpacing: "0.1em", fontWeight: 500 }}>HÀNH LANG TÒA A</text>
                <text x="319" y="400" textAnchor="middle" style={{ fontSize: 7, fill: "#8A8A8A", fontFamily: "var(--font-sans)", letterSpacing: "0.1em", fontWeight: 500 }} transform="rotate(-90, 319, 400)">HÀNH LANG TÒA B</text>

                {/* Elevator/Stairs Core */}
                <rect x="332" y="150" width="65" height="64" rx="3" fill="#E3DFD7" stroke="#CBC5B9" strokeWidth="1" />
                <path d="M 345 160 H 384 V 204 H 345 Z" fill="none" stroke="#CBC5B9" strokeWidth="1" />
                <line x1="345" y1="182" x2="384" y2="182" stroke="#CBC5B9" strokeWidth="1" />
                <line x1="365" y1="160" x2="365" y2="204" stroke="#CBC5B9" strokeWidth="1" />
                <text x="365" y="200" textAnchor="middle" style={{ fontSize: 6.5, fill: "#8A8A8A", fontFamily: "var(--font-sans)", fontWeight: 600 }}>CORE LIFT</text>

                {/* Compass Arrow B (North) - matching top right */}
                <g transform="translate(420, 70)">
                  <circle cx="0" cy="0" r="18" fill="white" stroke="#E5E0D8" strokeWidth="1.2" />
                  <path d="M0 -13 L4 -3 L0 -5 L-4 -3 Z" fill="#D32F2F" />
                  <path d="M0 13 L4 3 L0 5 L-4 3 Z" fill="#0B2545" />
                  <text x="0" y="-20" textAnchor="middle" style={{ fontSize: 9, fill: "#0B2545", fontFamily: "var(--font-sans)", fontWeight: 700 }}>B</text>
                </g>

                {/* Sông Hàn Direction Overlay (Bottom Left) */}
                <g transform="translate(60, 50)">
                  <path d="M0 0 C 40 5, 80 -5, 120 0" fill="none" stroke="#8AAFBF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                  <text x="60" y="-8" textAnchor="middle" style={{ fontSize: 8, fill: "#8AAFBF", fontFamily: "var(--font-sans)", letterSpacing: "0.15em", fontWeight: 600 }}>HƯỚNG SÔNG HÀN</text>
                </g>

                {/* Units rendering */}
                {UNITS.map((unit) => {
                  const visible = isVisible(unit);
                  const isHovered = hoveredUnit?.id === unit.id;
                  const isSelected = selectedUnit?.id === unit.id;
                  const color = typeColors[unit.type];

                  return (
                    <g key={unit.id}>
                      <rect
                        x={unit.x}
                        y={unit.y}
                        width={unit.width}
                        height={unit.height}
                        rx={4}
                        fill={visible ? (isHovered || isSelected ? color : `${color}BF`) : "#ECE9E2"}
                        stroke={visible ? (isHovered || isSelected ? "#0B2545" : "#FAF9F6") : "#DCD9D2"}
                        strokeWidth={isSelected ? 2.5 : isHovered ? 1.5 : 1}
                        style={{ transition: "all 0.3s ease", cursor: visible ? "pointer" : "default" }}
                        onMouseEnter={() => visible && setHoveredUnit(unit)}
                        onMouseLeave={() => setHoveredUnit(null)}
                        onClick={() => visible && setSelectedUnit(unit.id === selectedUnit?.id ? null : unit)}
                      />
                      {visible && (
                        <>
                          <text
                            x={unit.x + unit.width / 2}
                            y={unit.y + unit.height / 2 - 4}
                            textAnchor="middle"
                            style={{ fontSize: 7, fill: "#0B2545", fontFamily: "var(--font-sans)", fontWeight: 700, pointerEvents: "none" }}
                          >
                            {unit.code.split("-").pop()}
                          </text>
                          <text
                            x={unit.x + unit.width / 2}
                            y={unit.y + unit.height / 2 + 5}
                            textAnchor="middle"
                            style={{ fontSize: 6.5, fill: "#333333", fontFamily: "var(--font-sans)", fontWeight: 500, pointerEvents: "none" }}
                          >
                            {unit.area}m²
                          </text>
                        </>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-6 pt-5 border-t border-[#E5E0D8]">
              {(Object.entries(typeColors) as [ApartmentType, string][]).filter(([k]) => k !== "all").map(([type, color]) => (
                <div key={type} className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-sm border border-[#E5E0D8]" style={{ backgroundColor: `${color}BF` }} />
                  <span className="text-xs text-[#555555] font-semibold">{typeLabels[type]}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {selectedUnit || hoveredUnit ? (
                <motion.div
                  key={(selectedUnit || hoveredUnit)!.id}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_32px_rgba(0,0,0,0.05)] border border-[#E5E0D8]/40 flex flex-col gap-5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {(() => {
                    const unit = selectedUnit || hoveredUnit!;
                    return (
                      <>
                        <div>
                          <span className="label-small text-[#9C7B5D] block mb-1">Mã Căn Hộ</span>
                          <h3
                            className="font-serif text-3xl text-[#0B2545] font-bold"
                            style={{ fontFamily: "var(--font-serif)" }}
                          >
                            {unit.code}
                          </h3>
                          <span className="inline-block mt-2 px-2.5 py-1 text-[0.625rem] tracking-wider rounded-sm font-bold bg-[#FAF8F5] border border-[#E5E0D8] text-[#C6A77D]">
                            {typeLabels[unit.type]}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { label: "Diện Tích Thông Thủy", val: `${unit.area} m²` },
                            { label: "Số Phòng Ngủ", val: unit.type === "studio" ? "Studio" : unit.type === "1pn" ? "1 PN + 1" : unit.type === "2pn" ? "2 Phòng Ngủ" : "3 Phòng Ngủ" },
                            { label: "Tầm Nhìn Hướng", val: unit.view.split("&")[0] },
                            { label: "Tầng Đẹp", val: "Tầng 08 (Đẹp Nhất)" },
                          ].map((item) => (
                            <div key={item.label} className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EDE8E0]/40">
                              <span className="label-small text-[#8A8A8A] block mb-1" style={{ fontSize: "0.6rem" }}>{item.label}</span>
                              <span className="text-xs text-[#0B2545] font-bold leading-tight block">{item.val}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-[#E5E0D8]">
                          <span className="label-small text-[#8A8A8A] block mb-1">Giá Khoảng</span>
                          <span
                            className="font-serif text-3xl text-[#C6A77D] font-bold"
                            style={{ fontFamily: "var(--font-serif)" }}
                          >
                            {unit.price}
                          </span>
                          <span className="text-[10px] text-[#8A8A8A] block mt-1">Đã bao gồm VAT + KPBT (Nội thất liền tường cao cấp)</span>
                        </div>

                        <a
                          href="#contact"
                          className="mt-6 inline-flex items-center justify-center gap-2 py-3.5 bg-[#C6A77D] text-[#1A1A1A] label-small font-bold rounded-sm hover:bg-[#0B2545] hover:text-white transition-all duration-300 shadow-sm"
                        >
                          Nhận Báo Giá Chi Tiết
                        </a>
                      </>
                    );
                  })()}
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  className="bg-white rounded-2xl p-8 min-h-[460px] flex flex-col items-center justify-center gap-4 text-center border-2 border-dashed border-[#E5E0D8]/60 shadow-[0_4px_32px_rgba(0,0,0,0.02)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#E5E0D8] flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 20 20" fill="none" stroke="#C6A77D" strokeWidth="1.5" className="w-5 h-5">
                      <path d="M10 4v12M4 10h12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#0B2545] font-semibold mb-1" style={{ fontFamily: "var(--font-serif)" }}>Chọn Căn Hộ</h4>
                    <p className="text-xs text-[#8A8A8A] font-light leading-relaxed max-w-[200px] mx-auto">
                      Di chuột hoặc nhấn chọn một căn hộ trên sơ đồ tầng để xem thông tin diện tích, hướng view và giá chi tiết.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
