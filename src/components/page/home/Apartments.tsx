"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ApartmentCard from "./ApartmentCard";

const APARTMENTS = [
  {
    type: "Sun Symphony Residence",
    area: 78,
    bedrooms: 2,
    bathrooms: 2,
    view: "Trần Hưng Đạo · Sông Hàn",
    priceFrom: "2.8",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&fit=crop",
    badge: "Hot - Symphony 5",
  },
  {
    type: "Sun Ponte Residence",
    area: 68,
    bedrooms: 2,
    bathrooms: 2,
    view: "Cầu Rồng · Sông Hàn",
    priceFrom: "3.5",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&fit=crop",
    badge: "Căn Hộ Hạng Sang",
  },
  {
    type: "Sun Cosmo Residence",
    area: 72,
    bedrooms: 2,
    bathrooms: 2,
    view: "Cầu Trần Thị Lý · Ngũ Hành Sơn",
    priceFrom: "3.0",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fit=crop",
    badge: "Đã Bàn Giao",
  },
];

export default function Apartments() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="apartments" className="bg-[#F6F3EE] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="label-small text-[#9C7B5D] block mb-4">Danh Mục Sản Phẩm</span>
            <h2
              className="font-serif text-headline text-[#0B2545] font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Các Dự Án
              <br />
              <em>Phân Phối Chính Thức</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            className="text-[#555555] text-base leading-relaxed font-light max-w-sm"
          >
            SRT Miền Trung tự hào là đại lý phân phối chiến lược, đem đến cho quý khách hàng những tuyệt tác kiến trúc đẳng cấp từ Tập đoàn Sun Group tại Đà Nẵng.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {APARTMENTS.map((apt, i) => (
            <motion.div
              key={apt.type}
              className="h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 }}
            >
              <ApartmentCard {...apt} />
            </motion.div>
          ))}
        </div>

        {/* Carousel indicators + navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-between mt-10"
        >
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex ? "w-8 h-1.5 bg-[#C6A77D]" : "w-1.5 h-1.5 bg-[#E5E0D8]"
                }`}
              />
            ))}
          </div>

          <motion.a
            href="#contact"
            className="flex items-center gap-2 text-[#C6A77D] label-small group"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.25 }}
          >
            Xem Tất Cả Căn Hộ
            <svg viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-3.5">
              <path d="M1 7h22M17 1l6 6-6 6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
