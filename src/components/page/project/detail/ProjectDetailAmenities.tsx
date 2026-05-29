"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { ProjectData } from "@/lib/projects";

interface Props {
  project: ProjectData;
}

export default function ProjectDetailAmenities({ project }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="tien-ich" className="bg-[#F6F3EE] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-small text-[#9C7B5D] block mb-4">Hệ Thống Tiện Ích</span>
            <h2
              className="font-serif text-headline text-[#1A1A1A] font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Chuẩn resort
              <br />
              <em>ngay tại nhà</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[#555555] text-base leading-relaxed font-light max-w-sm"
          >
            {project.shortName} mang đến hệ thống tiện ích 5 sao được vận hành bởi đội ngũ quản lý quốc tế.
          </motion.p>
        </div>

        {/* Masonry grid */}
        <div
          className="grid grid-cols-3 gap-4 lg:gap-5"
          style={{ gridAutoRows: "clamp(150px, 18vw, 220px)" }}
        >
          {project.amenities.map((item, i) => (
            <motion.div
              key={item.name}
              className={`${item.span ?? "col-span-1"} relative rounded-2xl overflow-hidden cursor-pointer group`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
              onHoverStart={() => setHovered(item.name)}
              onHoverEnd={() => setHovered(null)}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ scale: hovered === item.name ? 1.06 : 1 }}
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

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/70 via-[#0B2545]/15 to-transparent" />
              <div className="absolute inset-0 bg-[#C6A77D]/6 mix-blend-multiply" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <motion.div
                  animate={{ y: hovered === item.name ? 0 : 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className="font-serif text-white font-light leading-tight mb-1"
                    style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)" }}
                  >
                    {item.name}
                  </h3>
                  <AnimatePresence>
                    {hovered === item.name && (
                      <motion.p
                        className="text-white/70 text-xs font-light"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
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

        {/* Extra amenity tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {[
            "Dịch vụ hỗ trợ cư dân",
            "Valet Parking",
            "Security 24h",
            "Co-working Space",
            "Kids Club",
            "BBQ Garden",
            "Meeting Room",
            "Delivery Room",
            "EV Charging",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-white border border-[#E5E0D8] rounded-full text-[#555555] text-xs font-light"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
