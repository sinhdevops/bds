"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { ProjectData, ApartmentType } from "@/lib/projects";

interface Props {
  project: ProjectData;
}

function AptCard({ apt }: { apt: ApartmentType }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_48px_rgba(11,37,69,0.12)] transition-shadow duration-500"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.div
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-full"
        >
          <Image
            src={apt.image}
            alt={apt.code}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/50 to-transparent" />
        <div className="absolute inset-0 bg-[#C6A77D]/6 mix-blend-multiply" />

        {/* Available badge */}
        {apt.available !== undefined && (
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
            <span className="label-small text-[#0B2545]">{apt.available} căn còn</span>
          </div>
        )}

        {/* Type label */}
        <div className="absolute bottom-4 left-4">
          <span
            className="font-serif text-white text-xl font-light italic"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {apt.code}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Specs row */}
        <div className="flex items-center gap-3 mb-5 pb-5 border-b border-[#E5E0D8]">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 16 16" fill="none" stroke="#C6A77D" strokeWidth="1.2" className="w-3.5 h-3.5">
              <rect x="1" y="1" width="14" height="14" rx="1" /><path d="M1 6h14M6 6v9" />
            </svg>
            <span className="text-sm text-[#555555] font-light">
              {apt.areaRange ? `${apt.areaRange}` : apt.area}m²
            </span>
          </div>
          <span className="text-[#E5E0D8]">·</span>
          {apt.bedrooms > 0 ? (
            <>
              <span className="text-sm text-[#555555] font-light">{apt.bedrooms} PN</span>
              <span className="text-[#E5E0D8]">·</span>
              <span className="text-sm text-[#555555] font-light">{apt.bathrooms} WC</span>
            </>
          ) : (
            <span className="text-sm text-[#555555] font-light">Studio</span>
          )}
          <span className="text-[#E5E0D8]">·</span>
          <span className="text-sm text-[#555555] font-light truncate">{apt.view}</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-end justify-between">
          <div>
            <span className="label-small text-[#8A8A8A] block mb-1">Giá từ</span>
            <div className="flex items-baseline gap-1.5">
              <span
                className="font-serif text-[#0B2545] font-light"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.7rem", lineHeight: 1 }}
              >
                {apt.priceFrom}
              </span>
              {apt.priceTo && (
                <span className="text-[#8A8A8A] text-sm font-light">– {apt.priceTo}</span>
              )}
              <span className="text-sm text-[#8A8A8A] font-light">Tỷ</span>
            </div>
          </div>
          <motion.a
            href="#registration"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#0B2545] text-white label-small rounded-sm hover:bg-[#C6A77D] hover:text-[#0B2545] transition-all duration-300"
            whileHover={{ x: 2 }}
          >
            Tư vấn
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectApartmentTypes({ project }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="can-ho" className="bg-[#F6F3EE] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-small text-[#9C7B5D] block mb-4">Loại Hình Căn Hộ</span>
            <h2
              className="font-serif text-headline text-[#1A1A1A] font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Tìm căn hộ
              <br />
              <em>phù hợp với bạn</em>
            </h2>
          </motion.div>

          {/* Type tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-wrap gap-2"
          >
            <button
              onClick={() => setActiveTab(-1)}
              className={`px-4 py-2 rounded-sm label-small transition-all duration-300 ${
                activeTab === -1
                  ? "bg-[#0B2545] text-white"
                  : "border border-[#E5E0D8] text-[#555555] hover:border-[#0B2545] hover:text-[#0B2545]"
              }`}
            >
              Tất Cả
            </button>
            {project.apartments.map((apt, i) => (
              <button
                key={apt.code}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-sm label-small transition-all duration-300 ${
                  activeTab === i
                    ? "bg-[#0B2545] text-white"
                    : "border border-[#E5E0D8] text-[#555555] hover:border-[#0B2545] hover:text-[#0B2545]"
                }`}
              >
                {apt.code}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {(activeTab === -1 ? project.apartments : [project.apartments[activeTab]]).map(
              (apt, i) => (
                <motion.div
                  key={apt.code}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <AptCard apt={apt} />
                </motion.div>
              )
            )}
          </motion.div>
        </AnimatePresence>

        {/* Price summary band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 p-6 lg:p-8 bg-[#0B2545] rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div>
            <p className="label-small text-[#C6A77D] mb-2">Chính Sách Thanh Toán Linh Hoạt</p>
            <p className="text-white font-light text-base leading-relaxed max-w-lg">
              Thanh toán từ <strong className="text-[#C6A77D]">15%</strong> ký HĐMB — hỗ trợ vay ngân hàng lên đến <strong className="text-[#C6A77D]">70%</strong> giá trị căn hộ. Lãi suất ưu đãi 0% trong 24 tháng đầu.
            </p>
          </div>
          <a
            href="#registration"
            className="flex-shrink-0 px-7 py-3.5 bg-[#C6A77D] text-[#0B2545] label-small font-semibold rounded-sm hover:bg-white transition-colors duration-300 whitespace-nowrap"
          >
            Tư Vấn Chính Sách
          </a>
        </motion.div>
      </div>
    </section>
  );
}
