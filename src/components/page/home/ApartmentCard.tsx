"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
      className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_48px_rgba(0,0,0,0.12)] transition-shadow duration-500 h-full flex flex-col"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-full"
        >
          <Image
            src={image}
            alt={`${type} - ${area}m²`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Warm overlay */}
        <div className="absolute inset-0 bg-[#C6A77D]/8 mix-blend-multiply" />

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
            <span className="label-small text-[#1A1A1A]">{badge}</span>
          </div>
        )}

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className="font-serif text-xl text-[#1A1A1A] font-light"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {type}
          </h3>
          <span className="label-small text-[#8A8A8A] mt-1 text-right flex-shrink-0">{view}</span>
        </div>

        <div className="flex-1" />

        {/* Specs */}
        <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#E5E0D8]">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 16 16" fill="none" stroke="#C6A77D" strokeWidth="1.2" className="w-3.5 h-3.5">
              <rect x="1" y="1" width="14" height="14" rx="1" />
              <path d="M1 6h14M6 6v9" />
            </svg>
            <span className="text-sm text-[#555555] font-light">{area}m²</span>
          </div>
          <span className="text-[#E5E0D8]">·</span>
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 16 16" fill="none" stroke="#C6A77D" strokeWidth="1.2" className="w-3.5 h-3.5">
              <path d="M2 12V4a2 2 0 012-2h8a2 2 0 012 2v8" />
              <path d="M1 12h14" />
            </svg>
            <span className="text-sm text-[#555555] font-light">{bedrooms} phòng ngủ</span>
          </div>
          <span className="text-[#E5E0D8]">·</span>
          <span className="text-sm text-[#555555] font-light">{bathrooms} WC</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="label-small text-[#8A8A8A] block mb-1">Từ</span>
            <span
              className="font-serif text-2xl text-[#1A1A1A] font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {priceFrom}
            </span>
            <span className="text-sm text-[#8A8A8A] ml-1.5">Tỷ VND</span>
          </div>
          <motion.button
            whileHover={{ x: 4 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2 text-[#C6A77D] label-small group"
          >
            Chi tiết
            <svg viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-3">
              <path d="M1 5h14M11 1l4 4-4 4" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
