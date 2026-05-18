"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Article {
  id: string;
  title: string;
  date: string;
  desc: string;
  image: string;
  category: string;
}

const NewsCard = React.memo(({ article }: { article: Article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="group bg-white border border-[#E5E0D8]/40 rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_48px_rgba(0,0,0,0.08)] transition-all duration-500 h-full flex flex-col"
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 flex-shrink-0">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.25,0.1,0.25,1]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-sm">
          <span className="label-small text-[#0B2545] font-semibold uppercase text-[10px] tracking-wider">{article.category}</span>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="p-6 flex-grow flex flex-col">
        <span className="text-xs text-[#8A8A8A] font-light block mb-2">{article.date}</span>
        <h3 className="font-serif text-lg text-[#0B2545] font-semibold leading-snug mb-3 group-hover:text-[#C6A77D] transition-colors duration-300">
          {article.title}
        </h3>
        <p className="text-xs text-[#555555] font-light leading-relaxed mb-6">
          {article.desc}
        </p>

        {/* Space filler to align details block exactly at the bottom */}
        <div className="flex-grow" />

        <div className="pt-4 border-t border-[#E5E0D8]/60 flex items-center justify-between text-[#C6A77D] label-small font-bold">
          <span>Xem chi tiết</span>
          <svg viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-4 h-2.5 group-hover:translate-x-1 transition-transform duration-300">
            <path d="M1 5h14M11 1l4 4-4 4" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
});

NewsCard.displayName = "NewsCard";

const NewsGrid = () => {
  const articles = useMemo<Article[]>(
    () => [
      {
        id: "art-1",
        title: "Lễ Ký Kết Phân Phối Chiến Lược Giữa Sun Group & SRT Miền Trung",
        date: "15 Tháng 5, 2026",
        desc: "Sự kiện ký kết hợp tác mở ra bước tiến dài nhằm đưa những căn hộ siêu sang bên bờ Sông Hàn tới tay các nhà đầu tư tinh hoa.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80&fit=crop",
        category: "Sự Kiện",
      },
      {
        id: "art-2",
        title: "Tiến Độ Thi Công Thực Tế Tòa Symphony 5 - Sun Symphony Residence",
        date: "10 Tháng 5, 2026",
        desc: "Cập nhật tiến độ xây dựng hạ tầng và thi công móng tháp căn hộ S5 sở hữu vị trí vàng đắt giá cuối cùng bờ Đông Sông Hàn.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80&fit=crop",
        category: "Tiến Độ",
      },
      {
        id: "art-3",
        title: "Quy Hoạch Bờ Đông Sông Hàn: Cơ Hội Bứt Phá Của BĐS Nghỉ Dưỡng",
        date: "05 Tháng 5, 2026",
        desc: "Chính sách mở rộng công viên sông Hàn và làm cầu đi bộ tạo tiền đề vững chắc cho việc tăng trưởng giá trị bất động sản.",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80&fit=crop",
        category: "Quy Hoạch",
      },
    ],
    []
  );

  return (
    <section className="bg-[#FAF8F5] py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <div key={art.id} className="h-full">
              <NewsCard article={art} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(NewsGrid);
