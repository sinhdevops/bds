"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Category = "all" | "market" | "progress" | "planning" | "guide";

interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  desc: string;
  image: string;
  category: Exclude<Category, "all">;
  categoryLabel: string;
  tag: string;
}

const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Bờ Đông Sông Hàn tiếp tục là tâm điểm săn quỹ đất đẹp",
    date: "20 Tháng 5, 2026",
    readTime: "5 phút đọc",
    desc: "Nguồn cung ven sông hữu hạn khiến các dự án có vị trí thật, mặt tiền sông và pháp lý rõ ràng được quan tâm mạnh hơn.",
    image: "/images/hero-song-han-clean.png",
    category: "market",
    categoryLabel: "Thị trường",
    tag: "Góc nhìn đầu tư",
  },
  {
    id: "art-2",
    title: "Tiến độ Symphony 5: những mốc người mua cần theo dõi",
    date: "18 Tháng 5, 2026",
    readTime: "4 phút đọc",
    desc: "Khi chọn căn hộ đang triển khai, người mua nên theo dõi pháp lý bán hàng, tiến độ móng, lịch thanh toán và điều kiện bàn giao.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=85&fit=crop",
    category: "progress",
    categoryLabel: "Tiến độ",
    tag: "Sun Symphony",
  },
  {
    id: "art-3",
    title: "Quy hoạch ven sông Hàn tác động thế nào đến giá căn hộ?",
    date: "15 Tháng 5, 2026",
    readTime: "6 phút đọc",
    desc: "Không gian công cộng, cầu kết nối và hạ tầng dịch vụ là các yếu tố tạo lực kéo dài hạn cho khu vực ven sông.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=85&fit=crop",
    category: "planning",
    categoryLabel: "Quy hoạch",
    tag: "Hạ tầng",
  },
  {
    id: "art-4",
    title: "Nhà đầu tư Hà Nội nên chọn dự án đã bàn giao hay đang mở bán?",
    date: "12 Tháng 5, 2026",
    readTime: "7 phút đọc",
    desc: "Dự án đã bàn giao phù hợp nhu cầu kiểm tra sản phẩm thực tế, dự án đang mở bán phù hợp người chấp nhận biến số về tiến độ và lịch thanh toán.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85&fit=crop",
    category: "guide",
    categoryLabel: "Cẩm nang",
    tag: "So sánh",
  },
  {
    id: "art-5",
    title: "Checklist kiểm tra pháp lý trước khi giữ chỗ căn hộ Đà Nẵng",
    date: "08 Tháng 5, 2026",
    readTime: "5 phút đọc",
    desc: "Người mua nên kiểm tra chủ đầu tư, điều kiện mở bán, ngân hàng bảo lãnh, hợp đồng và tiến độ thanh toán trước khi xuống tiền.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=85&fit=crop",
    category: "guide",
    categoryLabel: "Cẩm nang",
    tag: "Pháp lý",
  },
  {
    id: "art-6",
    title: "Vì sao căn hộ view sông giữ thanh khoản tốt hơn?",
    date: "05 Tháng 5, 2026",
    readTime: "4 phút đọc",
    desc: "View hiếm, trải nghiệm sống khác biệt và nhu cầu thuê cao giúp nhóm căn hộ view sông có lợi thế khi thị trường phân hóa.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=85&fit=crop",
    category: "market",
    categoryLabel: "Thị trường",
    tag: "View sông",
  },
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "market", label: "Thị trường" },
  { id: "progress", label: "Tiến độ" },
  { id: "planning", label: "Quy hoạch" },
  { id: "guide", label: "Cẩm nang" },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-2.5 w-4">
    <path d="M1 5h14M11 1l4 4-4 4" />
  </svg>
);

function FeaturedArticle({ article }: { article: Article }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden rounded-md bg-white shadow-[0_14px_42px_rgba(10,18,28,0.10)] ring-1 ring-black/5 lg:grid lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="relative min-h-[320px] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 54vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/58 to-transparent" />
        <span className="absolute left-5 top-5 rounded-[3px] bg-white px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-[#111111]">
          {article.tag}
        </span>
      </div>
      <div className="flex flex-col justify-center p-6 lg:p-8">
        <p className="label-small text-[#9C7B5D]">{article.categoryLabel} • {article.readTime}</p>
        <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-[#111111] lg:text-4xl" style={{ fontFamily: "var(--font-serif)" }}>
          {article.title}
        </h2>
        <p className="mt-4 text-sm font-medium leading-[1.8] text-[#666666]">{article.desc}</p>
        <div className="mt-6 flex items-center justify-between border-t border-[#E5E0D8] pt-5">
          <span className="text-xs font-semibold text-[#777777]">{article.date}</span>
          <button className="inline-flex items-center gap-2 label-small font-bold text-[#9C7B5D] transition-colors group-hover:text-[#071522]">
            Đọc bài viết
            <ArrowIcon />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-md bg-white shadow-[0_8px_26px_rgba(10,18,28,0.07)] ring-1 ring-black/5"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-4 top-4 rounded-[3px] bg-white/92 px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.08em] text-[#111111]">
          {article.categoryLabel}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="text-xs font-semibold text-[#777777]">{article.date}</span>
          <span className="text-xs font-semibold text-[#9C7B5D]">{article.readTime}</span>
        </div>
        <h3 className="font-serif text-xl font-normal leading-snug text-[#111111] transition-colors group-hover:text-[#9C7B5D]" style={{ fontFamily: "var(--font-serif)" }}>
          {article.title}
        </h3>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#666666]">{article.desc}</p>
        <button className="mt-5 inline-flex items-center gap-2 label-small font-bold text-[#9C7B5D]">
          Xem chi tiết
          <ArrowIcon />
        </button>
      </div>
    </motion.article>
  );
}

const NewsGrid = () => {
  const [category, setCategory] = useState<Category>("all");
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return ARTICLES.filter((article) => {
      const categoryOk = category === "all" || article.category === category;
      const queryOk =
        !normalizedQuery ||
        [article.title, article.desc, article.categoryLabel, article.tag].join(" ").toLowerCase().includes(normalizedQuery);
      return categoryOk && queryOk;
    });
  }, [category, query]);

  const featured = filteredArticles[0] ?? ARTICLES[0];
  const rest = filteredArticles.slice(1);

  return (
    <section id="news-list" className="bg-[#FAF8F5] py-12 lg:py-16">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="-mt-20 mb-10 rounded-md bg-white p-4 shadow-[0_20px_56px_rgba(10,18,28,0.14)] ring-1 ring-black/5 lg:p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="relative">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C7B5D]">
                <circle cx="9" cy="9" r="6" />
                <path d="M14 14l4 4" />
              </svg>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tìm tin theo thị trường, tiến độ, pháp lý..."
                className="h-12 w-full rounded-[3px] border border-[#E5E0D8] bg-[#FAF8F5] pl-11 pr-4 text-sm font-medium text-[#111111] outline-none placeholder:text-[#8A8A8A] focus:border-[#C6A77D]"
              />
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[3px] bg-[#C6A77D] px-7 label-small font-bold text-white transition-colors hover:bg-[#071522]"
            >
              Nhận tư vấn đầu tư
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {CATEGORIES.map((item) => (
              <button
                key={item.id}
                onClick={() => setCategory(item.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${
                  category === item.id ? "bg-[#071522] text-white" : "bg-[#F5F1EB] text-[#555555] hover:bg-[#E5E0D8]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-small text-[#9C7B5D]">Hiển thị {filteredArticles.length} bài viết</p>
            <h2 className="mt-2 font-serif text-3xl font-normal leading-tight text-[#111111]" style={{ fontFamily: "var(--font-serif)" }}>
              Bản tin dành cho nhà đầu tư
            </h2>
          </div>
          <p className="max-w-md text-sm font-medium leading-relaxed text-[#666666]">
            Nội dung được trình bày theo hướng dễ scan: chủ đề, thời gian đọc, tóm tắt và hành động tiếp theo.
          </p>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredArticles.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-md border border-[#E5E0D8] bg-white p-10 text-center"
            >
              <p className="font-serif text-2xl text-[#111111]" style={{ fontFamily: "var(--font-serif)" }}>Không tìm thấy bài phù hợp</p>
              <p className="mt-2 text-sm font-medium text-[#777777]">Thử đổi từ khóa hoặc chọn chủ đề khác.</p>
            </motion.div>
          ) : (
            <motion.div key={`${category}-${query}`} layout className="grid gap-8 lg:grid-cols-[1fr_320px]">
              <div className="space-y-8">
                <FeaturedArticle article={featured} />
                {rest.length > 0 && (
                  <div className="grid gap-6 md:grid-cols-2">
                    {rest.map((article) => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                  </div>
                )}
              </div>

              <aside className="space-y-5">
                <div className="rounded-md bg-[#071522] p-6 text-white">
                  <p className="label-small text-[#C6A77D]">Điểm cần theo dõi</p>
                  <ul className="mt-5 space-y-4">
                    {["Pháp lý mở bán và bảo lãnh ngân hàng", "Tiến độ thực tế so với lịch thanh toán", "Khả năng khai thác thuê theo vị trí", "Tỷ lệ căn view đẹp còn lại"].map((item) => (
                      <li key={item} className="flex gap-3 text-sm font-medium leading-relaxed text-white/72">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6A77D]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-md bg-white p-6 shadow-[0_8px_26px_rgba(10,18,28,0.07)] ring-1 ring-black/5">
                  <p className="label-small text-[#9C7B5D]">Nhận bản tin</p>
                  <h3 className="mt-3 font-serif text-2xl font-normal leading-tight text-[#111111]" style={{ fontFamily: "var(--font-serif)" }}>
                    Nhận giá và tiến độ tham khảo
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-[#666666]">
                    Để lại thông tin, BĐS Đà Nẵng sẽ gửi bản tin ngắn gọn theo nhu cầu của bạn.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-[3px] bg-[#C6A77D] px-5 py-3 label-small font-bold text-white transition-colors hover:bg-[#071522]"
                  >
                    Đăng ký nhận tin
                  </Link>
                </div>
              </aside>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default React.memo(NewsGrid);
