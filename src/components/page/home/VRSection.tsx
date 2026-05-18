"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ROOMS = [
  {
    id: "living",
    label: "Phòng Khách",
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1600&q=85&fit=crop",
    hotspots: [
      { x: 30, y: 40, label: "Sky Lounge View" },
      { x: 70, y: 55, label: "Sofa bọc da Ý" },
    ],
  },
  {
    id: "bedroom",
    label: "Phòng Ngủ",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1600&q=85&fit=crop",
    hotspots: [
      { x: 20, y: 50, label: "Ocean View Balcony" },
      { x: 75, y: 35, label: "King Bed Premium" },
    ],
  },
  {
    id: "kitchen",
    label: "Bếp & Ăn",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85&fit=crop",
    hotspots: [
      { x: 55, y: 45, label: "Bếp Miele tích hợp" },
      { x: 25, y: 60, label: "Đá marble Ý" },
    ],
  },
  {
    id: "terrace",
    label: "Terrasse",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=85&fit=crop",
    hotspots: [
      { x: 40, y: 30, label: "Tầm nhìn 180°" },
      { x: 65, y: 65, label: "Sàn gỗ teak" },
    ],
  },
];

export default function VRSection() {
  const [activeRoom, setActiveRoom] = useState(0);
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  const [fullscreen, setFullscreen] = useState(false);

  const room = ROOMS[activeRoom];

  return (
    <section id="vr-tour" className="relative bg-[#141412] py-24 lg:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #C6A77D08 0%, transparent 60%), radial-gradient(circle at 80% 20%, #9C7B5D06 0%, transparent 50%)" }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#C6A77D]" />
              <span className="label-small text-[#C6A77D]">Virtual Tour 360°</span>
            </div>
            <h2
              className="font-serif text-headline text-white font-light leading-[1.1]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Khám phá từng
              <br />
              <em className="text-[#C6A77D]">không gian</em>
            </h2>
          </motion.div>

          {/* Room tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {ROOMS.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setActiveRoom(i)}
                className={`px-4 py-2 rounded-sm label-small transition-all duration-300 ${
                  i === activeRoom
                    ? "bg-[#C6A77D] text-[#1A1A1A]"
                    : "border border-white/20 text-white/60 hover:border-[#C6A77D]/60 hover:text-white/90"
                }`}
              >
                {r.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Panoramic viewer */}
        <motion.div
          className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden cursor-crosshair"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={room.id}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src={room.image}
                alt={room.label}
                fill
                className="object-cover"
                sizes="100vw"
              />
              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20" />
              <div className="absolute inset-0 bg-[#C6A77D]/6 mix-blend-multiply" />
            </motion.div>
          </AnimatePresence>

          {/* Hotspots */}
          {room.hotspots.map((spot, i) => (
            <div
              key={i}
              className="absolute z-10"
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onMouseEnter={() => setHoveredHotspot(i)}
              onMouseLeave={() => setHoveredHotspot(null)}
            >
              <div className="relative flex items-center justify-center">
                {/* Pulse ring */}
                <motion.div
                  className="absolute w-10 h-10 rounded-full border border-[#C6A77D]/40"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.8 }}
                />
                {/* Dot */}
                <div className="w-3 h-3 rounded-full bg-[#C6A77D] border border-white/50 shadow-lg cursor-pointer" />

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredHotspot === i && (
                    <motion.div
                      className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-sm shadow-xl"
                      initial={{ opacity: 0, y: 4, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="label-small text-[#1A1A1A]">{spot.label}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}

          {/* VR badge */}
          <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A77D] animate-pulse" />
            <span className="label-small text-white/80">360° Virtual Tour</span>
          </div>

          {/* Room indicator */}
          <div className="absolute bottom-6 left-6 flex flex-col gap-1">
            <span
              className="font-serif text-white text-xl font-light italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {room.label}
            </span>
            <div className="flex items-center gap-1">
              {ROOMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveRoom(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeRoom ? "w-6 h-0.5 bg-[#C6A77D]" : "w-1 h-0.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Enter fullscreen */}
          <motion.button
            onClick={() => setFullscreen(true)}
            className="absolute bottom-6 right-6 flex items-center gap-2.5 px-5 py-2.5 bg-[#C6A77D] text-[#1A1A1A] label-small rounded-sm hover:bg-[#9C7B5D] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
              <path d="M1 6V1h5M10 1h5v5M15 10v5h-5M6 15H1v-5" />
            </svg>
            Xem Tour Đầy Đủ
          </motion.button>
        </motion.div>
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative w-full h-full">
              <Image
                src={room.image}
                alt={room.label}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Controls */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span
                  className="font-serif text-white text-2xl italic font-light"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  The Aria — {room.label}
                </span>
                <button
                  onClick={() => setFullscreen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <path d="M1 1l12 12M13 1L1 13" />
                  </svg>
                </button>
              </div>

              {/* Room navigation in fullscreen */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
                {ROOMS.map((r, i) => (
                  <button
                    key={r.id}
                    onClick={() => setActiveRoom(i)}
                    className={`px-4 py-2 rounded-sm label-small backdrop-blur-sm transition-all duration-300 ${
                      i === activeRoom
                        ? "bg-[#C6A77D] text-[#1A1A1A]"
                        : "bg-white/10 text-white/70 border border-white/20"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
