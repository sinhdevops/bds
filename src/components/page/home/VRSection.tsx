"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const GALLERY = [
  {
    id: "living",
    label: "Phòng Khách",
    caption: "Không gian tiếp khách đẳng cấp với tầm nhìn sông Hàn bất tận",
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1600&q=85&fit=crop",
    aspect: "wide",
  },
  {
    id: "bedroom",
    label: "Phòng Ngủ Master",
    caption: "Bộ nội thất King Bed cao cấp, ban công riêng view biển & sông",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=85&fit=crop",
    aspect: "tall",
  },
  {
    id: "kitchen",
    label: "Nhà Bếp & Ăn",
    caption: "Bếp tích hợp thiết bị Miele, đá marble Ý, thiết kế open-concept",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85&fit=crop",
    aspect: "tall",
  },
  {
    id: "terrace",
    label: "Ban Công Riêng",
    caption: "Tầm nhìn 180° ôm trọn Sông Hàn và bán đảo Sơn Trà",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=85&fit=crop",
    aspect: "wide",
  },
  {
    id: "bathroom",
    label: "Phòng Tắm",
    caption: "Bồn tắm đứng Villeroy & Boch, gạch mosaic thủ công nhập khẩu",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=85&fit=crop",
    aspect: "tall",
  },
];

export default function VRSection() {
  const [active, setActive] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const current = GALLERY[active];

  return (
    <section id="vr-tour" ref={sectionRef} className="relative bg-[#111111] overflow-hidden py-24 lg:py-32">
      {/* Subtle gold radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(184,155,114,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#B89B72]/25 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"
          style={{ y: headerY }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-[#B89B72]" />
              <span className="label-small text-[#B89B72]">Khám Phá Không Gian</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif text-white font-light leading-[1.08]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              }}
            >
              Tinh tế trong
              <br />
              <em className="text-[#B89B72]">từng chi tiết</em>
            </motion.h2>
          </div>

          {/* Room tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {GALLERY.map((room, i) => (
              <button
                key={room.id}
                onClick={() => setActive(i)}
                className={`px-4 py-2 label-small transition-all duration-300 ${
                  i === active
                    ? "bg-[#B89B72] text-[#111111]"
                    : "border border-white/15 text-white/50 hover:border-[#B89B72]/50 hover:text-white/80"
                }`}
              >
                {room.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Main cinematic viewer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "21/9" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src={current.image}
                alt={current.label}
                fill
                className="object-cover"
                sizes="100vw"
              />
              {/* Cinematic gradient overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-black/30 to-transparent" />
              <div className="absolute inset-0 bg-[#B89B72]/5 mix-blend-multiply" />
            </motion.div>
          </AnimatePresence>

          {/* Badge */}
          <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#B89B72] animate-pulse" />
            <span className="label-small text-white/70">360° Virtual Tour</span>
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-6 right-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
              >
                <p
                  className="font-serif text-white font-light italic mb-1"
                  style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
                >
                  {current.label}
                </p>
                <p className="text-white/50 text-sm font-light">{current.caption}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide dots */}
          <div className="absolute bottom-6 right-6 flex items-center gap-1.5">
            {GALLERY.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 ${
                  i === active ? "w-6 h-0.5 bg-[#B89B72]" : "w-1.5 h-0.5 bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* Expand fullscreen */}
          <motion.button
            onClick={() => setFullscreen(true)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="absolute top-5 right-5 w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#B89B72]/60 hover:text-[#B89B72] transition-all duration-300 bg-black/30 backdrop-blur-sm"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-3.5 h-3.5">
              <path d="M1 6V1h5M10 1h5v5M15 10v5h-5M6 15H1v-5" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Thumbnail strip */}
        <div ref={trackRef} className="flex gap-3 mt-4 overflow-x-auto pb-1 scrollbar-hide">
          {GALLERY.map((room, i) => (
            <motion.button
              key={room.id}
              onClick={() => setActive(i)}
              className={`relative shrink-0 overflow-hidden transition-all duration-300 ${
                i === active ? "ring-1 ring-[#B89B72] opacity-100" : "opacity-40 hover:opacity-70"
              }`}
              style={{ width: 140, height: 80 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: i === active ? 1 : 0.4, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <Image
                src={room.image}
                alt={room.label}
                fill
                className="object-cover"
                sizes="140px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-1.5 left-2 label-small text-white/80" style={{ fontSize: "0.55rem" }}>
                {room.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex items-center gap-6 mt-10"
        >
          <a
            href="#contact"
            className="flex items-center gap-3 px-7 py-3 bg-[#B89B72] text-[#111111] label-small tracking-[0.12em] hover:bg-white transition-colors duration-300"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
              <path d="M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" />
              <path d="M2 8h12M8 2c-1.7 1.3-2.7 3.5-2.7 6s1 4.7 2.7 6" />
            </svg>
            Khám Phá 360°
          </a>
          <button
            onClick={() => setFullscreen(true)}
            className="flex items-center gap-2 text-white/50 label-small hover:text-[#B89B72] transition-colors duration-300 group"
          >
            <svg viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-3 group-hover:translate-x-1 transition-transform duration-300">
              <path d="M1 7h22M17 1l6 6-6 6" />
            </svg>
            Xem Video Walkthrough
          </button>
        </motion.div>
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="fixed inset-0 z-100 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative w-full h-full">
              <Image src={current.image} alt={current.label} fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-x-0 top-6 flex items-center justify-between px-8 z-10">
                <span className="font-serif text-white text-2xl italic font-light" style={{ fontFamily: "var(--font-serif)" }}>
                  {current.label}
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
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
                {GALLERY.map((r, i) => (
                  <button
                    key={r.id}
                    onClick={() => setActive(i)}
                    className={`px-4 py-2 label-small backdrop-blur-sm transition-all duration-300 ${
                      i === active ? "bg-[#B89B72] text-[#111111]" : "bg-white/10 text-white/70 border border-white/20"
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
