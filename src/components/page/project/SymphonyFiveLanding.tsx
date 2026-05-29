"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronLeft,
  FiChevronRight,
  FiCompass,
  FiFacebook,
  FiGrid,
  FiHome,
  FiInstagram,
  FiMenu,
  FiPlay,
  FiStar,
  FiX,
  FiYoutube,
} from "react-icons/fi";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { openConsultationModal } from "@/components/shared/ConsultationModal";
import type { ProjectCatalogItem } from "@/lib/projectCatalog";

const img = "/images/projects/symphony5";

const navItems = [
  { label: "Tổng quan", href: "#tong-quan" },
  { label: "Vị trí", href: "#vi-tri" },
  { label: "Tiện ích", href: "#tien-ich" },
  { label: "Mặt bằng", href: "#mat-bang" },
  { label: "Căn hộ mẫu", href: "#mat-bang" },
  { label: "Chủ đầu tư", href: "#dang-ky" },
  { label: "Tin tức", href: "#dang-ky" },
];

const indicators = [
  ["01", "Tổng quan", "#tong-quan"],
  ["02", "Vị trí", "#vi-tri"],
  ["03", "Tiện ích", "#tien-ich"],
  ["04", "Mặt bằng", "#mat-bang"],
  ["05", "Liên hệ", "#dang-ky"],
];

const trustItems = [
  { icon: FiGrid, title: "Vị trí kim cương", copy: "Mặt sông Hàn, đối diện trung tâm Hải Châu" },
  { icon: FiCompass, title: "View triệu đô", copy: "Panorama sông Hàn - Cầu Rồng - pháo hoa DIFF" },
  { icon: FiStar, title: "Tháp cuối cùng", copy: "Tòa S5 - mảnh ghép hoàn thiện Sun Symphony Residence" },
  { icon: FiHome, title: "Sản phẩm đa dạng", copy: "Studio, 1PN, 2PN, 3PN đáp ứng mọi nhu cầu" },
  { icon: FiBarChart2, title: "Tiềm năng vượt trội", copy: "Khu vực trung tâm, khan hiếm nguồn cung ven sông" },
];

const amenities = [
  { title: "Hồ bơi vô cực", subtitle: "Sky Infinity Pool", image: `${img}/symphony-river-panorama-sunset.png` },
  { title: "Lounge trên cao", subtitle: "Sky Lounge", image: `${img}/symphony-fireworks-balcony-view.jpg` },
  { title: "Căn hộ mẫu", subtitle: "Không gian view sông", image: `${img}/symphony-bedroom-river-view.jpeg` },
  { title: "Cảnh quan nội khu", subtitle: "Zen Garden", image: `${img}/symphony-overview-aerial-day.jpg` },
  { title: "Tầm view panorama", subtitle: "Sông Hàn - biển Mỹ Khê", image: `${img}/symphony-view-directions-map.jpg` },
  { title: "Sảnh đón", subtitle: "Chuẩn 5 sao", image: `${img}/symphony-masterplan-and-location.jpg` },
];

const products = [
  { type: "Studio", area: "30 - 35m²", image: `${img}/symphony-bedroom-river-view.jpeg` },
  { type: "1 phòng ngủ", area: "45 - 55m²", image: `${img}/symphony-fireworks-balcony-view.jpg` },
  { type: "2 phòng ngủ", area: "68 - 80m²", image: `${img}/symphony-river-panorama-sunset.png` },
  { type: "3 phòng ngủ", area: "95 - 120m²", image: `${img}/symphony-overview-aerial-day.jpg` },
];

const distances = ["Cầu Rồng 1 phút", "Hải Châu 2 phút", "Vincom 5 phút", "Mỹ Khê 7 phút", "Sân bay 15 phút"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const goldButton =
  "inline-flex h-12 items-center justify-center gap-3 rounded-[7px] bg-linear-to-r from-[#F0D295] via-[#D4B278] to-[#B88A44] px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-[#07101F] shadow-[0_18px_46px_rgba(212,178,120,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_64px_rgba(212,178,120,0.38)]";

const ghostButton =
  "inline-flex h-12 items-center justify-center gap-3 rounded-[7px] border border-[#D4B278]/45 bg-white/[0.035] px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-[#F5F1E8] backdrop-blur transition duration-300 hover:border-[#D4B278] hover:bg-[#D4B278]/10 hover:text-[#E0C48A]";

export default function SymphonyFiveLanding({ project }: { project: ProjectCatalogItem }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ctaSubmitting, setCtaSubmitting] = useState(false);
  const [ctaSent, setCtaSent] = useState(false);
  const [ctaError, setCtaError] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submitCta = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = event.currentTarget;

    setCtaSubmitting(true);
    setCtaError("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          project: project.name,
          source: window.location.href,
          message: "Đăng ký nhận tư vấn từ CTA Sun Symphony 5",
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Không thể lưu thông tin");
      }

      setCtaSent(true);
      form.reset();
    } catch {
      setCtaError("Chưa lưu được thông tin. Vui lòng thử lại.");
    } finally {
      setCtaSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050B16] font-sans text-[#F5F1E8]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
          scrolled ? "border-b border-white/10 bg-[#06101E]/80 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-16">
          <a href="#hero" className="flex items-center gap-3">
            <span className="font-serif text-[44px] leading-none text-[#D4B278]">S</span>
            <span className="leading-tight">
              <span className="block font-serif text-[18px] uppercase tracking-[0.07em] text-[#D4B278]">Sun Symphony 5</span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.26em] text-[#D4B278]/72">BĐS Đà Nẵng phân phối</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 xl:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/82 transition hover:text-[#D4B278]">
                {item.label}
              </a>
            ))}
          </nav>

          <button type="button" onClick={openConsultationModal} className="hidden h-11 items-center rounded-[7px] border border-[#D4B278]/65 px-6 text-[11px] font-bold uppercase tracking-[0.09em] text-[#D4B278] transition hover:bg-[#D4B278] hover:text-[#07101F] lg:inline-flex">
            Đăng ký nhận thông tin
          </button>

          <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-[7px] border border-[#D4B278]/60 text-[#D4B278] xl:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Mở menu">
            {menuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="fixed inset-0 z-40 bg-[#050B16]/96 px-6 pt-28 backdrop-blur-2xl xl:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <nav className="grid gap-6">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="font-serif text-3xl text-[#F5F1E8]">
                  {item.label}
                </a>
              ))}
              <button type="button" onClick={openConsultationModal} className={`${goldButton} mt-4 w-full`}>
                Đăng ký nhận thông tin <FiArrowRight />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="hero" className="relative min-h-screen overflow-hidden">
        <Image src={project.heroImage} alt="Sun Symphony 5 bên sông Hàn" fill priority className="object-cover object-[62%_50%]" sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-r from-[#050B16]/96 via-[#07101F]/56 to-[#050B16]/6" />
        <div className="absolute inset-0 bg-linear-to-t from-[#050B16] via-[#050B16]/10 to-[#050B16]/20" />
        <div className="absolute right-[14%] top-[10%] h-[44rem] w-[44rem] rounded-full bg-[#D4B278]/16 blur-[130px]" />
        <div className="absolute left-0 top-0 h-full w-1/2 bg-radial-[circle_at_22%_36%] from-[#12304E]/42 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-center px-5 pb-32 pt-28 sm:px-8 lg:px-16">
          <motion.div className="max-w-[650px]" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <p className="inline-flex border-b border-[#D4B278]/65 pb-2 text-[13px] font-semibold uppercase leading-[1.7] tracking-[0.16em] text-[#D4B278]">
              Tháp căn hộ cuối cùng / Sun Symphony Residence
            </p>
            <h1 className="mt-5 font-serif text-[48px] font-normal uppercase leading-[0.95] text-[#F5F1E8] sm:text-[82px] lg:text-[104px]">
              Symphony 5
            </h1>
            <p className="mt-5 text-[20px] uppercase tracking-[0.04em] text-[#F5F1E8] sm:text-[24px]">
              Bản giao hưởng bên sông Hàn
            </p>
            <p className="mt-7 max-w-[500px] text-[15px] leading-[1.9] text-white/70">
              Sở hữu vị trí kim cương bên sông Hàn, đối diện trung tâm Hải Châu, nơi nhịp sống thành phố, ánh sáng mặt nước và giá trị tài sản cùng hội tụ.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button type="button" onClick={openConsultationModal} className={goldButton}>
                Đăng ký nhận thông tin <FiArrowRight className="h-4 w-4" />
              </button>
              <a href="#tien-ich" className={ghostButton}>
                Xem video <FiPlay className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block xl:right-16">
            <div className="grid gap-7 border-l border-white/12 pl-5">
              {indicators.map(([num, label, href], index) => (
                <a key={num} href={href} className={`relative text-left transition hover:text-[#D4B278] ${index === 0 ? "text-white" : "text-white/38"}`}>
                  {index === 0 ? <span className="absolute -left-[21px] top-0 h-8 w-px bg-[#D4B278]" /> : null}
                  <span className="block text-[18px] font-medium">{num}</span>
                  <span className="text-[12px]">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tong-quan" className="relative z-20 -mt-24 px-5 sm:px-8 lg:px-16">
        <motion.div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[10px] border border-white/12 bg-[#06101E]/78 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:grid-cols-5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ duration: 0.7 }}>
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="group border-b border-white/10 px-6 py-7 text-center transition duration-300 hover:bg-white/[0.055] md:border-b-0 md:border-r md:last:border-r-0">
                <Icon className="mx-auto h-7 w-7 text-[#D4B278]" />
                <h3 className="mt-5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#F5F1E8]">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-[180px] text-[12px] leading-[1.7] text-white/60">{item.copy}</p>
              </article>
            );
          })}
        </motion.div>
      </section>

      <section id="vi-tri" className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-16 lg:pb-24 lg:pt-32">
        <Image src={`${img}/symphony-river-panorama-sunset.png`} alt="Vị trí Sun Symphony 5 bên sông Hàn" fill className="object-cover opacity-72" sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-r from-[#050B16] via-[#07101F]/70 to-[#050B16]/12" />
        <div className="absolute inset-0 bg-linear-to-t from-[#050B16] via-[#050B16]/24 to-[#050B16]/30" />
        <div className="relative z-10 mx-auto grid min-h-[540px] max-w-[1320px] gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ duration: 0.7 }}>
            <p className="border-b border-[#D4B278]/55 pb-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#D4B278]">
              Vị trí độc tôn
            </p>
            <h2 className="mt-5 font-serif text-[42px] font-normal uppercase leading-[1.08] text-[#E0C48A] sm:text-[56px]">
              Trung tâm của trung tâm
            </h2>
            <p className="mt-7 text-[15px] leading-[1.9] text-white/72">
              Tọa lạc tại trục Trần Hưng Đạo - Lê Văn Duyệt, Symphony 5 kết nối nhanh đến Hải Châu, Mỹ Khê, sân bay và những biểu tượng bên sông Hàn.
            </p>
            <a href="#dang-ky" className={`${ghostButton} mt-8`}>
              Khám phá vị trí <FiArrowRight />
            </a>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ duration: 0.75 }} className="grid gap-3 sm:grid-cols-5">
            {distances.map((item) => (
              <div key={item} className="border-t border-[#D4B278]/40 bg-[#050B16]/28 px-3 py-4 backdrop-blur-sm">
                <p className="text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.08em] text-white/78">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="tien-ich" className="relative px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="mx-auto font-serif text-[24px] font-normal uppercase tracking-[0.08em] text-[#F5F1E8] sm:text-[28px]">
              Tiện ích chuẩn resort 5 sao
            </h2>
            <div className="hidden gap-3 sm:flex">
              <button type="button" className="symphony-prev flex h-10 w-10 items-center justify-center rounded-full border border-[#D4B278]/55 text-[#D4B278] transition hover:bg-[#D4B278] hover:text-[#07101F]" aria-label="Trước">
                <FiChevronLeft />
              </button>
              <button type="button" className="symphony-next flex h-10 w-10 items-center justify-center rounded-full border border-[#D4B278]/55 text-[#D4B278] transition hover:bg-[#D4B278] hover:text-[#07101F]" aria-label="Sau">
                <FiChevronRight />
              </button>
            </div>
          </div>

          <Swiper modules={[Navigation, Pagination, Autoplay]} navigation={{ prevEl: ".symphony-prev", nextEl: ".symphony-next" }} pagination={{ clickable: true, el: ".symphony-pagination" }} autoplay={{ delay: 3600, disableOnInteraction: false }} loop spaceBetween={18} slidesPerView={1.15} breakpoints={{ 640: { slidesPerView: 2.15 }, 1024: { slidesPerView: 4 }, 1280: { slidesPerView: 5 } }}>
            {amenities.map((item) => (
              <SwiperSlide key={item.title}>
                <article className="group relative h-[250px] overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035]">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 85vw, 260px" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#050B16]/94 via-[#050B16]/18 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                    <p className="text-[11px] text-[#D4B278]">{item.subtitle}</p>
                    <h3 className="mt-2 text-[13px] font-bold uppercase tracking-[0.08em] text-white">{item.title}</h3>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="symphony-pagination mt-7 flex justify-center" />
        </div>
      </section>

      <section id="mat-bang" className="px-5 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ duration: 0.7 }}>
            <p className="border-b border-[#D4B278]/55 pb-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#D4B278]">Mặt bằng</p>
            <h2 className="mt-5 font-serif text-[38px] font-normal uppercase leading-[1.08] text-[#E0C48A] sm:text-[48px]">
              Đa dạng diện tích tối ưu công năng
            </h2>
            <p className="mt-6 text-[15px] leading-[1.85] text-white/64">
              Dải sản phẩm linh hoạt cho nhu cầu ở, khai thác thuê và nắm giữ tài sản ven sông dài hạn.
            </p>
            <button type="button" onClick={openConsultationModal} className={`${ghostButton} mt-7`}>
              Xem chi tiết mặt bằng <FiArrowRight />
            </button>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((plan) => (
              <article key={plan.type} className="group overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#D4B278]/45 hover:bg-white/[0.06]">
                <h3 className="text-[16px] font-medium uppercase text-white">{plan.type}</h3>
                <p className="mt-1 text-[15px] text-[#D4B278]">{plan.area}</p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-[5px] bg-[#0A1320]">
                  <Image src={plan.image} alt={`${plan.type} Sun Symphony 5`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 260px" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="dang-ky" className="px-5 pb-12 sm:px-8 lg:px-16">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[16px] border border-[#D4B278]/22 bg-[#07101F] shadow-[0_34px_120px_rgba(0,0,0,0.5)]">
          <Image src={`${img}/symphony-fireworks-balcony-view.jpg`} alt="View pháo hoa từ Sun Symphony 5" fill className="object-cover opacity-52" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-r from-[#050B16]/96 via-[#07101F]/82 to-[#050B16]/58" />
          <div className="absolute right-10 top-8 h-56 w-56 rounded-full bg-[#D4B278]/18 blur-[80px]" />

          <div className="relative z-10 grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-12 lg:py-11">
            <div>
              <p className="inline-flex rounded-full border border-[#D4B278]/35 bg-[#D4B278]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#E0C48A]">
                Giỏ hàng ưu tiên Symphony 5
              </p>
              <h2 className="mt-5 max-w-[560px] font-serif text-[38px] font-normal uppercase leading-[1.02] text-white sm:text-[52px]">
                Nhận bảng giá & chính sách mới nhất
              </h2>
              <p className="mt-5 max-w-[520px] text-[15px] leading-[1.8] text-white/72">
                Để lại thông tin để nhận tư vấn hướng view, tầng đẹp và lịch thanh toán phù hợp ngân sách.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-semibold text-white/72">
                {["Bảng giá mới", "Chính sách bán hàng", "Tư vấn mã căn đẹp"].map((item) => (
                  <span key={item} className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 backdrop-blur">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <form className="rounded-[12px] border border-white/12 bg-[#050B16]/72 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-5" onSubmit={submitCta}>
              <div className="grid gap-3 sm:grid-cols-2">
                <input name="name" className="h-13 rounded-[7px] border border-white/12 bg-white/[0.04] px-5 text-[14px] text-white outline-none transition placeholder:text-white/42 focus:border-[#D4B278]/75" placeholder="Họ và tên" required />
                <input name="phone" type="tel" className="h-13 rounded-[7px] border border-white/12 bg-white/[0.04] px-5 text-[14px] text-white outline-none transition placeholder:text-white/42 focus:border-[#D4B278]/75" placeholder="Số điện thoại" required />
              </div>
              <button type="submit" disabled={ctaSubmitting} className={`${goldButton} mt-4 w-full disabled:cursor-not-allowed disabled:opacity-70`}>
                {ctaSubmitting ? "Đang lưu..." : "Đăng ký nhận tư vấn"} <FiArrowRight className="h-4 w-4" />
              </button>
              <label className="mt-3 flex items-start gap-3 rounded-[7px] border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-[11px] font-medium leading-relaxed text-white/42">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 accent-[#D4B278]"
                />
                <span>
                  Tôi đồng ý để BĐS Đà Nẵng sử dụng thông tin đã gửi nhằm liên hệ tư vấn theo{" "}
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline text-white/58 hover:text-[#D4B278]">
                    Chính sách bảo mật
                  </a>
                  .
                </span>
              </label>
              {ctaSent ? <p className="mt-3 text-center text-[12px] font-semibold text-[#E0C48A]">Đã nhận thông tin. Chuyên viên sẽ liên hệ lại sớm.</p> : null}
              {ctaError ? <p className="mt-3 text-center text-[12px] font-semibold text-red-200">{ctaError}</p> : null}
              <p className="mt-3 text-center text-[11px] leading-[1.6] text-white/42">
                Thông tin chỉ dùng để tư vấn dự án, không chia sẻ cho bên thứ ba.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-7 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <span className="font-serif text-[36px] leading-none text-[#D4B278]">S</span>
            <span>
              <span className="block font-serif text-[17px] uppercase tracking-[0.06em] text-[#D4B278]">Sun Symphony 5</span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#D4B278]/70">BĐS Đà Nẵng phân phối</span>
            </span>
          </a>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[12px] text-white/58">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-[#D4B278]">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            {[FiFacebook, FiYoutube, FiInstagram].map((Icon, index) => (
              <a key={index} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/16 text-white/70 transition hover:border-[#D4B278] hover:text-[#D4B278]" aria-label="Social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
