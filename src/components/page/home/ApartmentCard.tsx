"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ApartmentCardProps {
  type: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  view: string;
  priceFrom: string;
  image: string;
  badge?: string;
}

export default function ApartmentCard({
  type,
  area,
  bedrooms,
  bathrooms,
  view,
  priceFrom,
  image,
  badge,
}: ApartmentCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-white overflow-hidden flex flex-col h-full"
      style={{
        boxShadow: hovered
          ? "0 12px 48px rgba(0,0,0,0.10)"
          : "0 2px 20px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.5s ease",
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={image}
            alt={`${type} — ${area}m²`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        <div className="absolute inset-0 bg-[#B89B72]/6 mix-blend-multiply" />

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-[#111111]/70 backdrop-blur-sm label-small text-[#B89B72]" style={{ fontSize: "0.6rem" }}>
              {badge}
            </span>
          </div>
        )}

        {/* View tag */}
        <div className="absolute bottom-4 left-4">
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3 }}
                className="label-small text-white/80 block"
                style={{ fontSize: "0.6rem" }}
              >
                View: {view}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3
          className="font-serif text-[#111111] font-light leading-tight mb-1"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}
        >
          {type}
        </h3>
        <p className="text-[#5F5F5F] text-xs font-light mb-5 leading-snug">{view}</p>

        {/* Specs */}
        <div className="flex items-center gap-3 text-xs text-[#5F5F5F] font-light mb-5 pb-5 border-b border-[rgba(0,0,0,0.06)]">
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 14 14" fill="none" stroke="#B89B72" strokeWidth="1.2" className="w-3 h-3">
              <rect x="1" y="1" width="12" height="12" rx="1" />
              <path d="M1 5h12M5 5v8" />
            </svg>
            {area}m²
          </span>
          <span className="text-[rgba(0,0,0,0.12)]">·</span>
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 14 14" fill="none" stroke="#B89B72" strokeWidth="1.2" className="w-3 h-3">
              <path d="M2 11V4a1.5 1.5 0 011.5-1.5h7A1.5 1.5 0 0112 4v7M1 11h12" />
            </svg>
            {bedrooms} PN
          </span>
          <span className="text-[rgba(0,0,0,0.12)]">·</span>
          <span>{bathrooms} WC</span>
        </div>

        <div className="flex-1" />

        {/* Price + CTA */}
        <div className="flex items-end justify-between">
          <div>
            <span className="label-small text-[#5F5F5F] block mb-0.5" style={{ fontSize: "0.6rem" }}>Giá từ</span>
            <div className="flex items-baseline gap-1.5">
              <span
                className="font-serif text-[#111111]"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 300 }}
              >
                {priceFrom}
              </span>
              <span className="text-xs text-[#5F5F5F] font-light">Tỷ VND</span>
            </div>
          </div>

          <motion.a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 border border-[rgba(0,0,0,0.1)] text-[#111111] label-small hover:border-[#B89B72] hover:text-[#B89B72] transition-colors duration-300 group"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            Xem Mặt Bằng
            <svg viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-2.5 group-hover:translate-x-0.5 transition-transform duration-200">
              <path d="M1 5h12M9 1l4 4-4 4" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
