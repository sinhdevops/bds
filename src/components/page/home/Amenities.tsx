"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AMENITIES = [
  {
    id: "pool",
    name: "Bể Bơi Vô Cực Sông Hàn",
    desc: "Bể bơi vô cực trên cao với tầm nhìn 180° ôm trọn dòng Sông Hàn và trung tâm Đà Nẵng",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85&fit=crop",
    span: "col-span-2 row-span-2",
  },
  {
    id: "marina",
    name: "Bến Du Thuyền Cá Nhân",
    desc: "Bến du thuyền hạng sang ngay trước sảnh dự án, đặc quyền cho cư dân tinh hoa",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=85&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    id: "gym",
    name: "Wellness & Yoga Club",
    desc: "Phòng tập Gym hiện đại trang bị máy Technogym cao cấp nhất",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=85&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    id: "lounge",
    name: "Sky Lounge & Bistro",
    desc: "Điểm thưởng ngoạn pháo hoa quốc tế DIFF độc bản trên đỉnh tòa tháp",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=85&fit=crop",
    span: "col-span-1 row-span-1",
  },
  {
    id: "park",
    name: "Công Viên Ven Sông Hàn",
    desc: "Không gian cảnh quan xanh mát chạy dọc theo mép nước Sông Hàn",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85&fit=crop",
    span: "col-span-2 row-span-1",
  },
];

export default function Amenities() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="amenities" className="bg-[#F6F3EE] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-small text-[#9C7B5D] block mb-4">Hệ Thống Tiện Ích Thượng Lưu</span>
            <h2
              className="font-serif text-headline text-[#0B2545] font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Chuẩn resort
              <br />
              <em>ngay thềm nhà</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            <p className="text-[#555555] text-base leading-relaxed font-light max-w-sm">
              Hệ thống tiện ích 5 sao đặc quyền được vận hành bởi đơn vị quản lý quốc tế, mang lại chuẩn sống an nhiên đẳng cấp.
            </p>
            <a
              href="#contact"
              className="flex items-center gap-2 text-[#C6A77D] label-small font-semibold group w-fit"
            >
              Khám Phá Tiện Ích
              <svg viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-3 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M1 7h22M17 1l6 6-6 6" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Masonry-style gallery grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 lg:gap-5" style={{ height: "clamp(500px, 70vw, 700px)" }}>
          {AMENITIES.map((item, i) => (
            <motion.div
              key={item.id}
              className={`${item.span} relative rounded-2xl overflow-hidden cursor-pointer group`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
              onHoverStart={() => setHovered(item.id)}
              onHoverEnd={() => setHovered(null)}
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0"
                animate={{ scale: hovered === item.id ? 1.06 : 1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-[#C6A77D]/8 mix-blend-multiply" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <motion.div
                  animate={{ y: hovered === item.id ? 0 : 4, opacity: hovered === item.id ? 1 : 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3
                    className="font-serif text-white font-light leading-tight mb-1"
                    style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)" }}
                  >
                    {item.name}
                  </h3>
                  <AnimatePresence>
                    {hovered === item.id && (
                      <motion.p
                        className="text-white/70 text-xs font-light"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.25 }}
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
