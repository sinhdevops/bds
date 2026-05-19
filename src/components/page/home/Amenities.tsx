"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AMENITIES = [
  {
    id: "pool",
    name: "Hồ bơi vô cực",
    label: "VIEW SÔNG HÀN",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=85&fit=crop",
  },
  {
    id: "skybar",
    name: "Sky Bar",
    label: "TRÊN KHÔNG",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=85&fit=crop",
  },
  {
    id: "gym",
    name: "Phòng Gym",
    label: "HIỆN ĐẠI",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=85&fit=crop",
  },
  {
    id: "spa",
    name: "Spa & Wellness",
    label: "THƯ GIÃN",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=85&fit=crop",
  },
  {
    id: "kids",
    name: "Khu vui chơi trẻ em",
    label: "AN TOÀN",
    image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&q=85&fit=crop",
  },
];

function AmenityCard({ item, hovered, onHover, onLeave }: {
  item: typeof AMENITIES[0];
  hovered: string | null;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer rounded-xl"
      style={{ aspectRatio: "3/4" }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered === item.id ? 1.07 : 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 60vw, (max-width: 1024px) 33vw, 20vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          className="font-serif text-white font-light leading-tight mb-0.5"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)" }}
        >
          {item.name}
        </p>
        <span className="text-white/50" style={{ fontSize: "0.58rem", letterSpacing: "0.1em" }}>
          {item.label}
        </span>
      </div>
    </motion.div>
  );
}

export default function Amenities() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="amenities" className="bg-white py-14 lg:py-28">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 lg:mb-12 px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="label-small text-gold">Tiện Ích Chuẩn Resort</span>
            </div>
            <h2
              className="font-serif text-ink font-light leading-[1.08]"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
            >
              Trải nghiệm sống nghỉ dưỡng mỗi ngày
            </h2>
          </motion.div>

          <motion.a
            href="#contact"
            className="hidden lg:flex items-center gap-2 text-ink label-small group shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ x: 3 }}
          >
            Xem Tất Cả Tiện Ích
            <svg viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-3.5 group-hover:translate-x-1 transition-transform duration-200">
              <path d="M1 7h22M17 1l6 6-6 6" />
            </svg>
          </motion.a>
        </div>

        {/* Mobile: Swiper */}
        <div className="lg:hidden">
          <Swiper
            slidesPerView={1.6}
            spaceBetween={10}
            slidesOffsetBefore={24}
            slidesOffsetAfter={24}
          >
            {AMENITIES.map((item) => (
              <SwiperSlide key={item.id}>
                <AmenityCard
                  item={item}
                  hovered={hovered}
                  onHover={() => setHovered(item.id)}
                  onLeave={() => setHovered(null)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:grid grid-cols-5 gap-3 px-20">
          {AMENITIES.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.07 }}
            >
              <AmenityCard
                item={item}
                hovered={hovered}
                onHover={() => setHovered(item.id)}
                onLeave={() => setHovered(null)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
