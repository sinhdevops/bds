"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GALLERY = [
  {
    id: "living",
    label: "Phòng khách",
    image:
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1600&q=85&fit=crop",
  },
  {
    id: "bedroom",
    label: "Phòng ngủ",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=85&fit=crop",
  },
  {
    id: "terrace",
    label: "Ban công",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=85&fit=crop",
  },
  {
    id: "bathroom",
    label: "Phòng tắm",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=85&fit=crop",
  },
];

export default function VRSection() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a - 1 + GALLERY.length) % GALLERY.length);
  const next = () => setActive((a) => (a + 1) % GALLERY.length);

  return (
    <section id="vr-tour" className="relative bg-[#111111] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B89B72]/25 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT — Content */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#B89B72]" />
              <span className="label-small text-gold">Khám Phá Không Gian</span>
            </div>

            <h2
              className="font-serif text-white font-light leading-[1.08] mb-6"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
              }}
            >
              Tinh tế trong
              <br />
              <em className="text-gold">từng chi tiết</em>
            </h2>

            <p className="text-white/40 text-sm font-light leading-[1.8] mb-10 max-w-xs">
              Mỗi không gian được chăm chút tỉ mỉ, mang đến trải nghiệm sống
              đẳng cấp và khác biệt.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#B89B72] text-[#111111] label-small tracking-[0.12em] hover:bg-white transition-colors duration-300 w-fit mb-12"
            >
              Khám Phá 360°
            </a>

            {/* Navigation arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#B89B72]/60 hover:text-gold transition-all duration-300"
              >
                <svg
                  viewBox="0 0 10 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="w-2.5 h-4"
                >
                  <path d="M9 1L1 8l8 7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#B89B72]/60 hover:text-gold transition-all duration-300"
              >
                <svg
                  viewBox="0 0 10 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="w-2.5 h-4"
                >
                  <path d="M1 1l8 7-8 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* RIGHT — Image + Thumbnails */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1,
            }}
          >
            {/* Main image */}
            <div
              className="relative overflow-hidden mb-3"
              style={{ aspectRatio: "16/10" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={GALLERY[active].id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Image
                    src={GALLERY[active].image}
                    alt={GALLERY[active].label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[#B89B72]/4 mix-blend-multiply" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail strip */}
            <div className="grid grid-cols-4 gap-2">
              {GALLERY.map((room, i) => (
                <button
                  key={room.id}
                  onClick={() => setActive(i)}
                  className="relative overflow-hidden group"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={room.image}
                    alt={room.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="180px"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: "rgba(0,0,0,0.45)",
                      opacity: i === active ? 0 : 1,
                    }}
                  />
                  {i === active && (
                    <div className="absolute inset-0 ring-1 ring-[#B89B72]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span
                    className="absolute bottom-1.5 left-2 label-small text-white/80"
                    style={{ fontSize: "0.52rem" }}
                  >
                    {room.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
