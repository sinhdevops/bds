"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FLOORS = ["Tầng 5", "Tầng 6", "Tầng 7", "Tầng 8", "Tầng 9", "Tầng 10"];
const VIEWS = ["View sông Hàn", "View thành phố", "View nội khu"];
const TYPES = ["1 Phòng ngủ", "2 Phòng ngủ", "3 Phòng ngủ", "Duplex"];

const UNIT_COLORS: Record<string, string> = {
  "1pn": "#A8D8B0",
  "2pn": "#F5C97A",
  "3pn": "#9BC4E8",
  duplex: "#C9A8D8",
};

const LEGEND = [
  { key: "1pn", label: "1 PN", color: "#A8D8B0" },
  { key: "2pn", label: "2 PN", color: "#F5C97A" },
  { key: "3pn", label: "3 PN", color: "#9BC4E8" },
  { key: "duplex", label: "Duplex", color: "#C9A8D8" },
];

interface Unit {
  id: string;
  code: string;
  type: string;
  area: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

const UNITS: Unit[] = [
  { id: "a01", code: "A01", type: "1pn", area: 52, x: 30, y: 60, w: 55, h: 45 },
  { id: "a02", code: "A02", type: "2pn", area: 72, x: 90, y: 60, w: 65, h: 45 },
  {
    id: "a03",
    code: "A03",
    type: "2pn",
    area: 75,
    x: 160,
    y: 60,
    w: 65,
    h: 45,
  },
  {
    id: "a04",
    code: "A04",
    type: "1pn",
    area: 50,
    x: 230,
    y: 60,
    w: 55,
    h: 45,
  },
  {
    id: "a05",
    code: "A05",
    type: "3pn",
    area: 98,
    x: 290,
    y: 60,
    w: 80,
    h: 45,
  },
  {
    id: "a06",
    code: "A06",
    type: "duplex",
    area: 145,
    x: 375,
    y: 60,
    w: 65,
    h: 95,
  },
  {
    id: "a07",
    code: "A07",
    type: "1pn",
    area: 48,
    x: 30,
    y: 120,
    w: 55,
    h: 45,
  },
  {
    id: "a08",
    code: "A08",
    type: "2pn",
    area: 78,
    x: 90,
    y: 120,
    w: 65,
    h: 45,
  },
  {
    id: "a09",
    code: "A09",
    type: "2pn",
    area: 76,
    x: 160,
    y: 120,
    w: 65,
    h: 45,
  },
  {
    id: "a10",
    code: "A10",
    type: "1pn",
    area: 54,
    x: 230,
    y: 120,
    w: 55,
    h: 45,
  },
  {
    id: "a11",
    code: "A11",
    type: "3pn",
    area: 102,
    x: 290,
    y: 120,
    w: 80,
    h: 45,
  },
  {
    id: "b01",
    code: "B01",
    type: "1pn",
    area: 50,
    x: 30,
    y: 210,
    w: 55,
    h: 45,
  },
  {
    id: "b02",
    code: "B02",
    type: "2pn",
    area: 74,
    x: 90,
    y: 210,
    w: 65,
    h: 45,
  },
  {
    id: "b03",
    code: "B03",
    type: "2pn",
    area: 80,
    x: 160,
    y: 210,
    w: 65,
    h: 45,
  },
  {
    id: "b04",
    code: "B04",
    type: "3pn",
    area: 95,
    x: 230,
    y: 210,
    w: 80,
    h: 45,
  },
  {
    id: "b05",
    code: "B05",
    type: "duplex",
    area: 138,
    x: 315,
    y: 210,
    w: 60,
    h: 95,
  },
  {
    id: "b06",
    code: "B06",
    type: "1pn",
    area: 49,
    x: 380,
    y: 210,
    w: 55,
    h: 45,
  },
  {
    id: "b07",
    code: "B07",
    type: "2pn",
    area: 71,
    x: 30,
    y: 270,
    w: 65,
    h: 45,
  },
  {
    id: "b08",
    code: "B08",
    type: "2pn",
    area: 78,
    x: 100,
    y: 270,
    w: 65,
    h: 45,
  },
  {
    id: "b09",
    code: "B09",
    type: "1pn",
    area: 52,
    x: 170,
    y: 270,
    w: 55,
    h: 45,
  },
  {
    id: "b10",
    code: "B10",
    type: "3pn",
    area: 100,
    x: 230,
    y: 270,
    w: 80,
    h: 45,
  },
  {
    id: "b11",
    code: "B11",
    type: "1pn",
    area: 46,
    x: 380,
    y: 270,
    w: 55,
    h: 45,
  },
];

const SELECTED_UNIT: Unit = UNITS.find((u) => u.code === "A08")!;
const UNIT_FEATURES = [
  "Phòng tắm riêng rẽ",
  "Ban công thoáng",
  "Bếp mở hiện đại",
];

export default function Floorplan() {
  const [floor, setFloor] = useState("Tầng 8");
  const [view, setView] = useState("View sông Hàn");
  const [type, setType] = useState("2 Phòng ngủ");
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<Unit>(SELECTED_UNIT);

  return (
    <section id="floorplan" className="bg-[#FAF8F5] py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        {/* Header */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#B89B72]" />
              <span className="label-small text-gold">
                Mặt Bằng Tòa Symphony
              </span>
            </div>
            <h2
              className="font-serif text-[#111111] font-light"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              }}
            >
              Chọn căn hộ theo nhu cầu
            </h2>
          </motion.div>
        </div>

        {/* 3-column layout */}
        <div className="grid lg:grid-cols-[200px_1fr_280px] gap-6 items-start">
          {/* LEFT — Filters */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Floor */}
            <div className="flex flex-col gap-1.5">
              <label
                className="label-small text-[#111111]"
                style={{ fontSize: "0.6rem" }}
              >
                Chọn Tầng
              </label>
              <div className="relative">
                <select
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#E5E0D8] text-[#111111] text-sm font-light appearance-none focus:outline-none focus:border-[#B89B72] transition-colors duration-200"
                >
                  {FLOORS.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
                <svg
                  viewBox="0 0 10 6"
                  fill="none"
                  stroke="#B89B72"
                  strokeWidth="1.4"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-2.5 h-1.5 pointer-events-none"
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </div>
            </div>

            {/* View */}
            <div className="flex flex-col gap-1.5">
              <label
                className="label-small text-[#111111]"
                style={{ fontSize: "0.6rem" }}
              >
                Hướng View
              </label>
              <div className="relative">
                <select
                  value={view}
                  onChange={(e) => setView(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#E5E0D8] text-[#111111] text-sm font-light appearance-none focus:outline-none focus:border-[#B89B72] transition-colors duration-200"
                >
                  {VIEWS.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
                <svg
                  viewBox="0 0 10 6"
                  fill="none"
                  stroke="#B89B72"
                  strokeWidth="1.4"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-2.5 h-1.5 pointer-events-none"
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </div>
            </div>

            {/* Type */}
            <div className="flex flex-col gap-1.5">
              <label
                className="label-small text-[#111111]"
                style={{ fontSize: "0.6rem" }}
              >
                Loại Căn Hộ
              </label>
              <div className="relative">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#E5E0D8] text-[#111111] text-sm font-light appearance-none focus:outline-none focus:border-[#B89B72] transition-colors duration-200"
                >
                  {TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <svg
                  viewBox="0 0 10 6"
                  fill="none"
                  stroke="#B89B72"
                  strokeWidth="1.4"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-2.5 h-1.5 pointer-events-none"
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </div>
            </div>

            <button className="w-full py-3 bg-[#111111] text-white label-small tracking-[0.12em] hover:bg-[#B89B72] hover:text-[#111111] transition-all duration-300 mt-2">
              Tìm Kiếm
            </button>
          </motion.div>

          {/* CENTER — Floor Plan SVG */}
          <motion.div
            className="relative bg-white border border-[#E5E0D8]/60 p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            {/* View labels */}
            <div className="text-center mb-2">
              <span
                className="label-small text-gold"
                style={{ fontSize: "0.55rem", letterSpacing: "0.18em" }}
              >
                VIEW SÔNG HÀN
              </span>
            </div>

            <div className="relative">
              <svg
                viewBox="0 0 460 340"
                className="w-full"
                style={{ maxHeight: "340px" }}
              >
                <rect width="460" height="340" fill="#FAFAF8" />

                {/* Corridor labels */}
                <text
                  x="230"
                  y="185"
                  textAnchor="middle"
                  style={{
                    fontSize: 7,
                    fill: "#AAA",
                    fontFamily: "sans-serif",
                    letterSpacing: "0.12em",
                  }}
                >
                  HÀNH LANG
                </text>
                <rect
                  x="0"
                  y="175"
                  width="460"
                  height="20"
                  fill="#EDE8E0"
                  opacity="0.5"
                />

                {/* Units */}
                {UNITS.map((unit) => {
                  const isHovered = hovered === unit.id;
                  const isSelected = selected?.id === unit.id;
                  const color = UNIT_COLORS[unit.type] ?? "#E5E0D8";
                  return (
                    <g key={unit.id}>
                      <rect
                        x={unit.x}
                        y={unit.y}
                        width={unit.w}
                        height={unit.h}
                        rx={2}
                        fill={
                          isSelected
                            ? color
                            : isHovered
                              ? color + "DD"
                              : color + "99"
                        }
                        stroke={
                          isSelected
                            ? "#111111"
                            : isHovered
                              ? "#B89B72"
                              : "#ffffff"
                        }
                        strokeWidth={isSelected ? 1.5 : isHovered ? 1 : 0.8}
                        style={{ cursor: "pointer", transition: "all 0.2s" }}
                        onMouseEnter={() => setHovered(unit.id)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => setSelected(unit)}
                      />
                      <text
                        x={unit.x + unit.w / 2}
                        y={unit.y + unit.h / 2 - 3}
                        textAnchor="middle"
                        style={{
                          fontSize: 7,
                          fill: "#333",
                          fontFamily: "sans-serif",
                          fontWeight: 600,
                          pointerEvents: "none",
                        }}
                      >
                        {unit.code}
                      </text>
                      <text
                        x={unit.x + unit.w / 2}
                        y={unit.y + unit.h / 2 + 7}
                        textAnchor="middle"
                        style={{
                          fontSize: 6,
                          fill: "#666",
                          fontFamily: "sans-serif",
                          pointerEvents: "none",
                        }}
                      >
                        {unit.area}m²
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Zoom icon */}
              <button className="absolute top-2 right-2 w-7 h-7 border border-[#E5E0D8] flex items-center justify-center text-[#8A8A8A] hover:border-[#B89B72] hover:text-gold transition-all duration-200 bg-white">
                <svg
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className="w-3 h-3"
                >
                  <path d="M1 5V1h4M9 1h4v4M13 9v4H9M5 13H1V9" />
                </svg>
              </button>
            </div>

            <div className="text-center mt-2 mb-3">
              <span
                className="label-small text-[#8A8A8A]"
                style={{ fontSize: "0.55rem", letterSpacing: "0.18em" }}
              >
                VIEW THÀNH PHỐ
              </span>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-5 pt-3 border-t border-[#E5E0D8]/60">
              {LEGEND.map((item) => (
                <div key={item.key} className="flex items-center gap-1.5">
                  <div
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[0.65rem] text-[#555555] font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Unit Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {selected && (
              <div className="bg-white border border-[#E5E0D8]/60 overflow-hidden">
                {/* Unit header */}
                <div className="p-5 pb-4 border-b border-[#E5E0D8]/60">
                  <div className="flex items-start justify-between mb-1">
                    <h3
                      className="font-serif text-[#111111] font-light"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.4rem",
                      }}
                    >
                      Căn {selected.code}
                    </h3>
                    <span
                      className="px-2.5 py-1 label-small text-white"
                      style={{
                        fontSize: "0.58rem",
                        backgroundColor: "#B89B72",
                      }}
                    >
                      {selected.type === "1pn"
                        ? "1 PN"
                        : selected.type === "2pn"
                          ? "2 PN"
                          : selected.type === "3pn"
                            ? "3 PN"
                            : "Duplex"}
                    </span>
                  </div>
                  <p className="text-[#8A8A8A] text-sm font-light">
                    {selected.area}m²
                  </p>
                </div>

                {/* Features */}
                <div className="p-5">
                  <p
                    className="label-small text-[#8A8A8A] mb-3"
                    style={{ fontSize: "0.6rem" }}
                  >
                    Đặc điểm nổi bật
                  </p>
                  <div className="flex flex-col gap-2 mb-6">
                    {UNIT_FEATURES.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <svg
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="#B89B72"
                          strokeWidth="1.4"
                          className="w-3 h-3 shrink-0"
                        >
                          <path d="M2 6l3 3 5-5" />
                        </svg>
                        <span className="text-[#555555] text-xs font-light">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-2.5">
                    <a
                      href="#floorplan"
                      className="w-full py-3 border border-[#111111] text-[#111111] label-small text-center hover:bg-[#111111] hover:text-white transition-all duration-300"
                      style={{ fontSize: "0.65rem" }}
                    >
                      Xem Layout
                    </a>
                    <a
                      href="#vr-tour"
                      className="w-full py-3 border border-[#B89B72] text-gold label-small text-center hover:bg-[#B89B72] hover:text-[#111111] transition-all duration-300"
                      style={{ fontSize: "0.65rem" }}
                    >
                      Xem VR
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
