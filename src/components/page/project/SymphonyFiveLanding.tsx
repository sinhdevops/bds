"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  ["01", "Tổng quan"],
  ["02", "Vị trí"],
  ["03", "Tiện ích"],
  ["04", "Mặt bằng"],
  ["05", "Liên hệ"],
];

const trustItems = [
  { icon: FiGrid, title: "Vị trí kim cương", copy: "Mặt tiền sông Hàn, đối diện trung tâm Hải Châu" },
  { icon: FiCompass, title: "View triệu đô", copy: "Panorama sông Hàn, Cầu Rồng và pháo hoa DIFF" },
  { icon: FiStar, title: "Tháp cuối cùng", copy: "Tòa S5, mảnh ghép hoàn thiện của Sun Symphony" },
  { icon: FiHome, title: "Sản phẩm đa dạng", copy: "Studio, 1PN, 2PN, 3PN, sky villa và penthouse" },
  { icon: FiBarChart2, title: "Giá trị bền vững", copy: "Nguồn cung ven sông trung tâm ngày càng khan hiếm" },
];

const amenities = [
  { title: "Hồ bơi vô cực", subtitle: "Sky Infinity Pool", image: `${img}/symphony-river-panorama-sunset.png` },
  { title: "Sky lounge", subtitle: "View pháo hoa sông Hàn", image: `${img}/symphony-fireworks-balcony-view.jpg` },
  { title: "Căn hộ mẫu", subtitle: "Không gian view thành phố", image: `${img}/symphony-bedroom-river-view.jpeg` },
  { title: "Cảnh quan nội khu", subtitle: "Resort trong lòng đô thị", image: `${img}/symphony-overview-aerial-day.jpg` },
  { title: "Tầm view panorama", subtitle: "Sông Hàn - biển Mỹ Khê", image: `${img}/symphony-view-directions-map.jpg` },
  { title: "Sảnh đón", subtitle: "Chuẩn sống 5 sao", image: `${img}/symphony-masterplan-and-location.jpg` },
];

const products = [
  { type: "Studio", area: "30 - 35m²", image: `${img}/symphony-bedroom-river-view.jpeg` },
  { type: "1 phòng ngủ", area: "45 - 55m²", image: `${img}/symphony-fireworks-balcony-view.jpg` },
  { type: "2 phòng ngủ", area: "68 - 80m²", image: `${img}/symphony-river-panorama-sunset.png` },
  { type: "3 phòng ngủ", area: "95 - 120m²", image: `${img}/symphony-overview-aerial-day.jpg` },
];

const distances = ["Cầu Rồng 1 phút", "Hải Châu 2 phút", "Vincom 5 phút", "Mỹ Khê 7 phút", "Sân bay 15 phút"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const goldButton =
  "inline-flex h-12 items-center justify-center gap-3 rounded-full bg-linear-to-r from-[#F0D295] via-[#D4B278] to-[#B88A44] px-6 text-[11px] font-bold uppercase tracking-[0.09em] text-[#07101F] shadow-[0_18px_48px_rgba(212,178,120,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(212,178,120,0.4)]";

const ghostButton =
  "inline-flex h-12 items-center justify-center gap-3 rounded-full border border-[#D4B278]/45 bg-white/[0.035] px-6 text-[11px] font-bold uppercase tracking-[0.09em] text-[#F5F1E8] backdrop-blur transition duration-300 hover:border-[#D4B278] hover:bg-[#D4B278]/10 hover:text-[#E0C48A]";

function SectionIntro({ eyebrow, title, copy, center = false }: { eyebrow: string; title: string; copy?: string; center?: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-xl"}
    >
      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#D4B278]">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-[38px] font-normal uppercase leading-[1.05] text-[#F5F1E8] sm:text-[52px]">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-[15px] leading-[1.85] text-white/64">{copy}</p> : null}
    </motion.div>
  );
}

export default function SymphonyFiveLanding({ project }: { project: ProjectCatalogItem }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050B16] font-sans text-[#F5F1E8]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
          scrolled ? "border-b border-white/10 bg-[#06101E]/78 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-16">
          <a href="#hero" className="flex items-center gap-3">
            <span className="font-serif text-[44px] leading-none text-[#D4B278]">S</span>
            <span className="leading-tight">
              <span className="block font-serif text-[18px] uppercase tracking-[0.07em] text-[#D4B278]">Sun Symphony 5</span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.26em] text-[#D4B278]/72">By Sun Group</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 xl:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/82 transition hover:text-[#D4B278]">
                {item.label}
              </a>
            ))}
          </nav>

          <button type="button" onClick={openConsultationModal} className="hidden h-11 rounded-full border border-[#D4B278]/65 px-6 text-[11px] font-bold uppercase tracking-[0.09em] text-[#D4B278] transition hover:bg-[#D4B278] hover:text-[#07101F] lg:inline-flex lg:items-center">
            Đăng ký nhận thông tin
          </button>

          <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D4B278]/60 text-[#D4B278] xl:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Mở menu">
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
        <div className="absolute inset-0 bg-linear-to-r from-[#050B16]/96 via-[#07101F]/64 to-[#050B16]/14" />
        <div className="absolute inset-0 bg-linear-to-t from-[#050B16] via-[#050B16]/12 to-[#050B16]/18" />
        <div className="absolute right-[18%] top-[8%] h-[42rem] w-[42rem] rounded-full bg-[#D4B278]/16 blur-[120px]" />
        <div className="absolute left-0 top-0 h-full w-1/2 bg-radial-[circle_at_22%_36%] from-[#12304E]/42 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-center px-5 pb-28 pt-28 sm:px-8 lg:px-16">
          <motion.div className="max-w-[640px]" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
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
              {indicators.map(([num, label], index) => (
                <a key={num} href={navItems[index]?.href ?? "#dang-ky"} className={`relative text-left transition hover:text-[#D4B278] ${index === 0 ? "text-white" : "text-white/38"}`}>
                  {index === 0 ? <span className="absolute -left-[21px] top-0 h-8 w-px bg-[#D4B278]" /> : null}
                  <span className="block text-[18px] font-medium">{num}</span>
                  <span className="text-[12px]">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tong-quan" className="relative z-20 -mt-20 px-5 sm:px-8 lg:px-16">
        <motion.div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[18px] border border-white/10 bg-[#07101F]/70 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:grid-cols-5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ duration: 0.7 }}>
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

      <section id="vi-tri" className="relative px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-80 bg-radial-[circle_at_70%_10%] from-[#1B4A73]/28 via-transparent to-transparent" />
        <div className="relative mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Vị trí độc tôn"
              title="Trung tâm của trung tâm"
              copy="Tọa lạc tại trục Trần Hưng Đạo - Lê Văn Duyệt, Symphony 5 kết nối nhanh đến trung tâm Hải Châu, bãi biển Mỹ Khê, sân bay và các biểu tượng bên sông Hàn."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {distances.map((item) => (
                <span key={item} className="rounded-full border border-[#D4B278]/28 bg-white/[0.035] px-4 py-2 text-[12px] font-semibold text-white/72 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>
            <a href="#dang-ky" className={`${ghostButton} mt-8`}>
              Khám phá vị trí <FiArrowRight />
            </a>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-[24px] border border-[#D4B278]/18 bg-white/[0.035] p-2 shadow-[0_28px_110px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[18px]">
              <Image src={`${img}/symphony-location-river-map.jpg`} alt="Bản đồ vị trí Sun Symphony 5 bên sông Hàn" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 760px" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="tien-ich" className="relative px-5 py-20 sm:px-8 lg:px-16">
        <div className="absolute inset-x-0 top-24 h-96 bg-radial-[circle_at_50%_50%] from-[#D4B278]/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-[1320px]">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Tiện ích"
              title="Tiện ích chuẩn resort 5 sao"
              copy="Mỗi tiện ích được đặt trong trải nghiệm sống ven sông: yên tĩnh, riêng tư, nhưng vẫn sát nhịp năng lượng của Đà Nẵng."
            />
            <div className="hidden gap-3 sm:flex">
              <button type="button" className="symphony-prev flex h-11 w-11 items-center justify-center rounded-full border border-[#D4B278]/55 text-[#D4B278] transition hover:bg-[#D4B278] hover:text-[#07101F]" aria-label="Trước">
                <FiChevronLeft />
              </button>
              <button type="button" className="symphony-next flex h-11 w-11 items-center justify-center rounded-full border border-[#D4B278]/55 text-[#D4B278] transition hover:bg-[#D4B278] hover:text-[#07101F]" aria-label="Sau">
                <FiChevronRight />
              </button>
            </div>
          </div>

          <Swiper modules={[Navigation, Pagination, Autoplay]} navigation={{ prevEl: ".symphony-prev", nextEl: ".symphony-next" }} pagination={{ clickable: true, el: ".symphony-pagination" }} autoplay={{ delay: 3600, disableOnInteraction: false }} loop spaceBetween={22} slidesPerView={1.15} breakpoints={{ 640: { slidesPerView: 2.15 }, 1024: { slidesPerView: 3.2 }, 1280: { slidesPerView: 4 } }}>
            {amenities.map((item) => (
              <SwiperSlide key={item.title}>
                <article className="group relative h-[330px] overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035]">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 85vw, 330px" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#050B16]/94 via-[#050B16]/18 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D4B278]">{item.subtitle}</p>
                    <h3 className="mt-2 font-serif text-2xl font-normal text-white">{item.title}</h3>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="symphony-pagination mt-7 flex justify-center" />
        </div>
      </section>

      <section id="mat-bang" className="px-5 py-24 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Mặt bằng"
              title="Đa dạng diện tích tối ưu công năng"
              copy="Dải sản phẩm linh hoạt cho cả nhu cầu ở, khai thác thuê và nắm giữ tài sản ven sông dài hạn."
            />
            <button type="button" onClick={openConsultationModal} className={`${ghostButton} mt-8`}>
              Xem chi tiết mặt bằng <FiArrowRight />
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((plan) => (
              <article key={plan.type} className="group overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.035] p-3 transition duration-300 hover:-translate-y-1.5 hover:border-[#D4B278]/45 hover:bg-white/[0.06]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[15px] bg-[#0A1320]">
                  <Image src={plan.image} alt={`${plan.type} Sun Symphony 5`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 260px" />
                </div>
                <div className="px-2 py-4">
                  <h3 className="text-[14px] font-bold uppercase tracking-[0.08em] text-white">{plan.type}</h3>
                  <p className="mt-2 text-[17px] text-[#D4B278]">{plan.area}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="dang-ky" className="px-5 pb-14 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[24px] border border-white/10 bg-[#07101F]/72 p-3 shadow-[0_28px_110px_rgba(0,0,0,0.42)] backdrop-blur-2xl lg:grid-cols-[0.36fr_0.28fr_0.36fr] lg:items-center">
          <div className="relative min-h-[210px] overflow-hidden rounded-[18px]">
            <Image src={`${img}/symphony-fireworks-balcony-view.jpg`} alt="View pháo hoa từ Sun Symphony 5" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 460px" />
          </div>
          <div className="px-4 py-7 lg:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#D4B278]">Private consultation</p>
            <h2 className="mt-3 font-serif text-[34px] font-normal uppercase leading-[1.05] text-white">Đăng ký nhận thông tin</h2>
            <p className="mt-4 text-[13px] leading-[1.8] text-white/64">Nhận bảng giá, chính sách bán hàng và tư vấn mã căn đẹp nhất.</p>
          </div>
          <form className="grid gap-3 p-2 sm:grid-cols-2 lg:grid-cols-1" onSubmit={(event) => event.preventDefault()}>
            <input className="h-12 rounded-full border border-white/12 bg-[#050B16]/72 px-5 text-[13px] text-white outline-none transition placeholder:text-white/38 focus:border-[#D4B278]/70" placeholder="Họ và tên" />
            <input className="h-12 rounded-full border border-white/12 bg-[#050B16]/72 px-5 text-[13px] text-white outline-none transition placeholder:text-white/38 focus:border-[#D4B278]/70" placeholder="Số điện thoại" />
            <button type="button" onClick={openConsultationModal} className={`${goldButton} sm:col-span-2 lg:col-span-1`}>
              Đăng ký ngay
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-7 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <span className="font-serif text-[36px] leading-none text-[#D4B278]">S</span>
            <span>
              <span className="block font-serif text-[17px] uppercase tracking-[0.06em] text-[#D4B278]">Sun Symphony 5</span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#D4B278]/70">By Sun Group</span>
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
