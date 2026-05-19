"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const PROJECTS = [
  {
    id: "symphony",
    name: "Tòa Symphony",
    address: "Số 1 Nguyễn Văn Linh, Đà Nẵng",
    status: "ĐANG MỞ BÁN",
    statusActive: true,
    bedrooms: "1 – 3 PN",
    area: "50 – 120m²",
    price: "4,3 tỷ",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&fit=crop",
  },
  {
    id: "villas",
    name: "The River Villas",
    address: "Đường Trần Hưng Đạo, Đà Nẵng",
    status: "SẮP RA MẮT",
    statusActive: false,
    bedrooms: "3 – 4 PN",
    area: "150 – 250m²",
    price: "12 tỷ",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&fit=crop",
  },
  {
    id: "danube",
    name: "Tòa Danube",
    address: "Số 2 Lê Văn Duyệt, Đà Nẵng",
    status: "ĐANG MỞ BÁN",
    statusActive: true,
    bedrooms: "1 – 3 PN",
    area: "45 – 110m²",
    price: "3,8 tỷ",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fit=crop",
  },
];

function ProjectCard({
  project,
  hovered,
  onHover,
  onLeave,
}: {
  project: (typeof PROJECTS)[0];
  hovered: string | null;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      className="group bg-white overflow-hidden flex flex-col rounded-2xl h-full"
      style={{
        boxShadow:
          hovered === project.id
            ? "0 8px 40px rgba(0,0,0,0.10)"
            : "0 2px 12px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.35s ease",
      }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16/10" }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered === project.id ? 1.05 : 1 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1"
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.12em",
              fontWeight: 500,
              background: "rgba(10,10,10,0.72)",
              color: project.statusActive ? "#C8A96A" : "rgba(255,255,255,0.8)",
              backdropFilter: "blur(6px)",
              borderRadius: "3px",
            }}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-4 pb-5 flex-1 flex flex-col">
        <h3
          className="font-serif text-[#111111] font-light mb-0.5"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
            lineHeight: 1.3,
          }}
        >
          {project.name}
        </h3>
        <p
          className="text-[#999] font-light mb-4 leading-snug"
          style={{ fontSize: "0.75rem" }}
        >
          {project.address}
        </p>

        <div
          className="flex items-center gap-3 mb-4 pb-4"
          style={{
            borderBottom: "1px solid rgba(229,224,216,0.7)",
            fontSize: "0.72rem",
            color: "#555",
          }}
        >
          <span className="flex items-center gap-1.5">
            <svg
              viewBox="0 0 14 14"
              fill="none"
              stroke="#B89B72"
              strokeWidth="1.2"
              className="w-3 h-3 shrink-0"
            >
              <path d="M2 10V5a1.5 1.5 0 011.5-1.5h7A1.5 1.5 0 0112 5v5M1 10h12" />
            </svg>
            {project.bedrooms}
          </span>
          <span style={{ color: "#D5CFC6" }}>·</span>
          <span className="flex items-center gap-1.5">
            <svg
              viewBox="0 0 14 14"
              fill="none"
              stroke="#B89B72"
              strokeWidth="1.2"
              className="w-3 h-3 shrink-0"
            >
              <rect x="1" y="1" width="12" height="12" rx="1" />
              <path d="M1 5h12M5 5v8" />
            </svg>
            {project.area}
          </span>
          <span style={{ color: "#D5CFC6" }}>·</span>
          <span className="font-medium text-[#111]">
            Giá từ {project.price}
          </span>
        </div>

        <div className="flex items-center gap-5 mt-auto">
          {[
            { href: "#floorplan", label: "XEM MẶT BẰNG" },
            { href: "#vr-tour", label: "XEM VR" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1.5 hover:text-gold transition-colors duration-250"
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.1em",
                color: "#555",
                fontWeight: 500,
              }}
            >
              <svg
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                className="w-2.5 h-2.5 shrink-0"
              >
                <circle cx="5" cy="5" r="4" />
                <circle cx="5" cy="5" r="1.5" />
              </svg>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Apartments() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="apartments"
      style={{ backgroundColor: "#FAF8F5" }}
      className="py-5 lg:py-10"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 lg:mb-12 px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-[#8A8A8A] font-light mb-3 tracking-[0.18em] uppercase"
              style={{ fontSize: "0.65rem" }}
            >
              Dự án nổi bật
            </p>
            <h2
              className="font-serif text-[#111111] font-light"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.6rem, 3vw, 2.75rem)",
                lineHeight: 1.1,
              }}
            >
              Không gian sống xứng tầm
            </h2>
          </motion.div>

          <motion.a
            href="/project"
            className="hidden lg:flex items-center gap-2 shrink-0 group"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              color: "#111111",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ x: 3 }}
          >
            XEM TẤT CẢ DỰ ÁN
            <svg
              viewBox="0 0 20 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-5 h-3 group-hover:translate-x-1 transition-transform duration-200"
            >
              <path d="M1 6h18M13 1l6 5-6 5" />
            </svg>
          </motion.a>
        </div>

        {/* Mobile: Swiper */}
        <div className="lg:hidden">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1.15}
            spaceBetween={12}
            slidesOffsetBefore={24}
            slidesOffsetAfter={24}
          >
            {PROJECTS.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  project={project}
                  hovered={hovered}
                  onHover={() => setHovered(project.id)}
                  onLeave={() => setHovered(null)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:flex items-stretch gap-3 px-20">
          <div className="grid grid-cols-3 gap-4 flex-1">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.75,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: i * 0.1,
                }}
              >
                <ProjectCard
                  project={project}
                  hovered={hovered}
                  onHover={() => setHovered(project.id)}
                  onLeave={() => setHovered(null)}
                />
              </motion.div>
            ))}
          </div>

          <motion.button
            className="flex items-center justify-center shrink-0 self-center"
            style={{
              width: "36px",
              height: "36px",
              border: "1px solid #E5E0D8",
              color: "#111",
              borderRadius: "50%",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ x: 2 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#B89B72";
              e.currentTarget.style.color = "#B89B72";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E0D8";
              e.currentTarget.style.color = "#111";
            }}
          >
            <svg
              viewBox="0 0 8 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              className="w-2 h-3.5"
            >
              <path d="M1 1l6 6-6 6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
