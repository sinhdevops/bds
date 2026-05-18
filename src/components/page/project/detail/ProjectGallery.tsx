"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { ProjectData } from "@/lib/projects";

interface Props {
  project: ProjectData;
}

export default function ProjectGallery({ project }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((v) => (v !== null ? (v - 1 + project.gallery.length) % project.gallery.length : 0));
  const next = () => setLightbox((v) => (v !== null ? (v + 1) % project.gallery.length : 0));

  return (
    <section className="bg-[#FAF8F5] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4"
        >
          <div>
            <span className="label-small text-[#9C7B5D] block mb-4">Không Gian Thực Tế</span>
            <h2
              className="font-serif text-headline text-[#1A1A1A] font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Bộ sưu tập
              <br />
              <em>hình ảnh dự án</em>
            </h2>
          </div>
          <p className="text-[#8A8A8A] label-small">
            {project.gallery.length} ảnh · Click để xem toàn màn hình
          </p>
        </motion.div>

        {/* Gallery grid — editorial asymmetric layout */}
        <div className="grid grid-cols-12 gap-3 lg:gap-4" style={{ gridAutoRows: "200px" }}>
          {project.gallery.map((img, i) => {
            const isLarge = i === 0 || i === 3;
            const colSpan = isLarge ? "col-span-12 md:col-span-7" : "col-span-6 md:col-span-5";
            const rowSpan = isLarge ? "row-span-2" : "row-span-1";

            return (
              <motion.div
                key={i}
                className={`${colSpan} ${rowSpan} relative overflow-hidden rounded-xl cursor-pointer group`}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                onClick={() => openLightbox(i)}
              >
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Caption */}
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="text-white text-sm font-light">{img.caption}</span>
                  </div>
                )}

                {/* Expand icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.5" className="w-3.5 h-3.5">
                    <path d="M1 6V1h5M8 1h5v5M13 8v5H8M6 13H1V8" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Image */}
            <motion.div
              className="relative w-full max-w-5xl max-h-[85vh] aspect-[4/3] mx-8"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.gallery[lightbox].src}
                alt={project.gallery[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />

              {/* Caption */}
              {project.gallery[lightbox].caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white/80 text-sm text-center font-light">
                    {project.gallery[lightbox].caption}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Nav */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg viewBox="0 0 10 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M8 1L2 8l6 7" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg viewBox="0 0 10 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M2 1l6 7-6 7" />
              </svg>
            </button>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {project.gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  className={`rounded-full transition-all duration-300 ${i === lightbox ? "w-5 h-1.5 bg-[#C6A77D]" : "w-1.5 h-1.5 bg-white/30"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
