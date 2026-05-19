"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AMENITIES = [
  {
    id: "pool",
    name: "Bể Bơi Vô Cực",
    label: "View Sông Hàn",
    desc: "Bể bơi vô cực trên cao với tầm nhìn 180° ôm trọn dòng Sông Hàn và trung tâm Đà Nẵng",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=85&fit=crop",
    cols: "lg:col-span-2",
    rows: "lg:row-span-2",
  },
  {
    id: "skybar",
    name: "Sky Bar",
    label: "Trên không",
    desc: "Điểm thưởng ngoạn pháo hoa quốc tế DIFF độc bản trên đỉnh tòa tháp",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=85&fit=crop",
    cols: "",
    rows: "",
  },
  {
    id: "gym",
    name: "Phòng Gym",
    label: "Hiện đại",
    desc: "Trang bị máy Technogym cao cấp, không gian tập luyện đẳng cấp 5 sao",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=85&fit=crop",
    cols: "",
    rows: "",
  },
  {
    id: "spa",
    name: "Spa & Wellness",
    label: "Thư giãn",
    desc: "Không gian spa cao cấp với liệu trình độc quyền từ thương hiệu quốc tế",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&q=85&fit=crop",
    cols: "lg:col-span-2",
    rows: "",
  },
  {
    id: "kids",
    name: "Khu Vui Chơi Trẻ Em",
    label: "An toàn",
    desc: "Không gian vui chơi an toàn và sáng tạo, thiết kế bởi chuyên gia quốc tế",
    image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&q=85&fit=crop",
    cols: "",
    rows: "",
  },
];

export default function Amenities() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="amenities" className="bg-[#F8F6F2] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 lg:mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#B89B72]" />
              <span className="label-small text-[#B89B72]">Tiện Ích Chuẩn Resort</span>
            </div>
            <h2
              className="font-serif text-[#111111] font-light leading-[1.08]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              }}
            >
              Trải nghiệm sống
              <br />
              <em className="text-[#B89B72]">nghỉ dưỡng mỗi ngày</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex flex-col gap-4 lg:max-w-xs"
          >
            <p className="text-[#5F5F5F] text-[0.9375rem] leading-[1.8] font-light">
              Hệ thống tiện ích 5 sao vận hành bởi đơn vị quản lý quốc tế, mang lại chuẩn sống an nhiên đẳng cấp mỗi ngày.
            </p>
            <a
              href="#contact"
              className="flex items-center gap-2 text-[#B89B72] label-small group w-fit"
            >
              Xem tất cả tiện ích
              <svg viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-3 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M1 7h22M17 1l6 6-6 6" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Bento grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ gridAutoRows: "280px" }}
        >
          {AMENITIES.map((item, i) => (
            <motion.div
              key={item.id}
              className={`relative overflow-hidden cursor-pointer group ${item.cols} ${item.rows}`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
              onHoverStart={() => setHovered(item.id)}
              onHoverEnd={() => setHovered(null)}
            >
              {/* Image with zoom on hover */}
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>

              {/* Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
              <motion.div
                className="absolute inset-0 bg-[#B89B72]/0"
                animate={{ opacity: hovered === item.id ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ background: "rgba(184,155,114,0.06)" }}
              />

              {/* Label badge — top left */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-black/40 backdrop-blur-sm label-small text-[#B89B72]" style={{ fontSize: "0.6rem" }}>
                  {item.label}
                </span>
              </div>

              {/* Content — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <motion.div
                  animate={{ y: hovered === item.id ? 0 : 3 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3
                    className="font-serif text-white font-light leading-tight mb-1.5"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1rem, 1.4vw, 1.3rem)",
                    }}
                  >
                    {item.name}
                  </h3>
                  <AnimatePresence>
                    {hovered === item.id && (
                      <motion.p
                        className="text-white/60 text-xs font-light leading-relaxed max-w-xs"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
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
