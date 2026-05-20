"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="w-6 h-6"
      >
        <path d="M21 16l-9-9-9 9" />
        <path d="M3 12l9-9 9 9" />
        <path d="M5 20h14" />
        <path d="M12 3v14" />
        <path d="M3 16c1-2 3-3 5-2l4 2 4-2c2-1 4 0 5 2" />
      </svg>
    ),
    number: "15",
    unit: "Phút",
    title: "đến sân bay",
    desc: "quốc tế Đà Nẵng",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="w-6 h-6"
      >
        <path d="M2 17c2-4 5-6 10-6s8 2 10 6" />
        <path d="M2 12c2-3 5-4.5 10-4.5S20 9 22 12" />
        <path d="M2 7c2-2 5-3 10-3s8 1 10 3" />
      </svg>
    ),
    number: "100%",
    unit: "",
    title: "căn hộ view",
    desc: "sông Hàn",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="w-6 h-6"
      >
        <path d="M12 2l2.4 5.5H20l-4.6 3.8 1.8 5.7L12 14l-5.2 3 1.8-5.7L4 7.5h5.6L12 2z" />
      </svg>
    ),
    number: "5",
    unit: "Sao",
    title: "vận hành & dịch vụ",
    desc: "chuẩn resort",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="w-6 h-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    number: "Sở Hữu",
    unit: "",
    title: "lâu dài",
    desc: "cho người Việt Nam",
  },
];

export default function ProjectOverview() {
  return (
    <section
      id="project"
      style={{ backgroundColor: "#FAF8F5" }}
      className="relative z-20 pb-4 lg:pb-8"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="-mt-10 lg:-mt-14 grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E5E0D8]/70 rounded-md bg-white shadow-[0_18px_48px_rgba(10,18,28,0.10)] ring-1 ring-black/5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.title}
              className="flex items-center gap-5 px-6 py-6 lg:px-10 lg:py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.1,
              }}
            >
              <div className="text-[#C6A77D] shrink-0">{stat.icon}</div>
              <div>
                <div className="flex items-baseline gap-1 mb-0.5">
                  <span
                    className="font-sans text-[#141414] uppercase"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(0.95rem, 1.2vw, 1.12rem)",
                      fontWeight: 700,
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.number}
                  </span>
                  {stat.unit && (
                    <span className="label-small text-[#141414]" style={{ fontSize: "0.6rem" }}>
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="text-[#292929] text-xs font-semibold leading-snug">
                  {stat.title}
                </p>
                <p className="text-[#8A8A8A] text-xs font-light leading-snug">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
