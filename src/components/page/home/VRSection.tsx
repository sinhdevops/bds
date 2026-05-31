"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GALLERY = [
  {
    id: "living",
    label: "Phòng khách",
    image:
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1800&q=85&fit=crop",
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
  const prev = () => setActive((a) => (a - 1 + GALLERY.length) % GALLERY.length);
  const next = () => setActive((a) => (a + 1) % GALLERY.length);

  return (
    <section id="vr-tour" className="relative overflow-hidden bg-[#111111]">
      <div className="relative min-h-[380px] lg:min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={GALLERY[active].id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={GALLERY[active].image}
              alt={GALLERY[active].label}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-linear-to-r from-black/88 via-black/46 to-black/8" />
        <div className="absolute inset-0 bg-linear-to-t from-black/72 via-transparent to-black/16" />

        <div className="relative z-10 mx-auto grid max-w-[1240px] px-6 py-16 lg:min-h-[420px] lg:grid-cols-[360px_1fr] lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6A77D]" />
              <span className="label-small text-[#C6A77D]">Khám Phá Không Gian</span>
            </div>
            <h2
              className="mb-6 font-serif text-white font-light leading-[1.08]"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Tinh tế trong
              <br />
              <em className="text-[#C6A77D]">từng chi tiết</em>
            </h2>
            <p className="mb-8 max-w-xs text-sm font-medium leading-[1.8] text-white/70">
              Mỗi không gian cần được kiểm tra theo thông tin thực tế, nhu cầu sử dụng và tài liệu dự án tại thời điểm tư vấn.
            </p>
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-3 rounded-[3px] bg-[#C6A77D] px-7 py-3.5 text-white label-small font-bold transition-colors duration-300 hover:bg-white hover:text-[#0B2545]"
            >
              Khám Phá 360°
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-10 self-end lg:mt-44"
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {GALLERY.map((room, i) => (
                <button
                  key={room.id}
                  onClick={() => setActive(i)}
                  className="group relative overflow-hidden rounded-md border border-white/20"
                  style={{ aspectRatio: "16/10" }}
                >
                  <Image
                    src={room.image}
                    alt={room.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="180px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                  {i === active && <div className="absolute inset-0 ring-2 ring-[#C6A77D]" />}
                  <span className="absolute bottom-2 left-3 text-[0.68rem] font-semibold text-white">
                    {room.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 items-center gap-3 lg:flex">
            {[{ fn: prev, d: "M9 1L1 8l8 7" }, { fn: next, d: "M1 1l8 7-8 7" }].map((btn, i) => (
              <button
                key={i}
                onClick={btn.fn}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#111111] transition-colors duration-300 hover:bg-[#C6A77D] hover:text-white"
              >
                <svg viewBox="0 0 10 16" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-4 w-2.5">
                  <path d={btn.d} />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
