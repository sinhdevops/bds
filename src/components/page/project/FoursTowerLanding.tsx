"use client";

import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  FiArrowRight,
  FiAward,
  FiBarChart2,
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiDollarSign,
  FiGift,
  FiGrid,
  FiHeart,
  FiHome,
  FiLayers,
  FiMapPin,
  FiPhone,
  FiShield,
  FiStar,
  FiTag,
  FiTrendingUp,
  FiUsers,
  FiUser,
  FiX,
  FiXCircle,
} from "react-icons/fi";
import {
  FaBagShopping,
  FaChampagneGlasses,
  FaChildReaching,
  FaDumbbell,
  FaPersonSwimming,
  FaTree,
} from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
import type { IconType } from "react-icons";
import Footer from "@/components/layout/Footer";
import type { ProjectCatalogItem } from "@/lib/projectCatalog";
import { HOTLINE_DISPLAY, HOTLINE_TEL, ZALO_HREF } from "@/lib/contact";
import "swiper/css";

const navItems = ["Tổng quan", "Vị trí", "Tiện ích", "Căn hộ", "Chính sách"];

const heroFeatures: [IconType, string, string][] = [
  [FiAward, "View biển", "Mỹ Khê"],
  [FiHome, "Sở hữu", "lâu dài"],
  [FiMapPin, "Vị trí", "Sơn Trà"],
  [FiBriefcase, "Chuẩn sống", "resort"],
];

const heroStats: [IconType, string, string, string][] = [
  [FiHome, "Số lượng còn lại", "08", "căn đẹp"],
  [FiDollarSign, "Giá chỉ từ", "3XX", "tỷ"],
  [FiTag, "Chiết khấu", "5%", "early bird"],
  [FiBriefcase, "Hỗ trợ vay", "70%", "GTCH"],
  [FiCalendar, "Ân hạn gốc", "30", "tháng"],
];

const hotUnits = [
  {
    code: "F503A20",
    type: "2BR",
    area: "73.1 m²",
    garden: "59.5 m²",
    total: "132.6 m²",
    price: "5XX tỷ",
    image: "/images/projects/fours/fours-banner.webp",
    featured: true,
  },
  {
    code: "F50526",
    type: "1BR+",
    area: "45.2 m²",
    garden: "13.3 m²",
    total: "58.5 m²",
    price: "3XX tỷ",
    image: "/images/projects/fours/fours-street.webp",
  },
  {
    code: "F50830",
    type: "1BR+",
    area: "53.8 m²",
    garden: "0 m²",
    total: "53.8 m²",
    price: "3XX tỷ",
    image: "/images/projects/fours/fours-banner.webp",
  },
  {
    code: "F51905",
    type: "1BR+",
    area: "56.4 m²",
    garden: "3.8 m²",
    total: "60.2 m²",
    price: "3XX tỷ",
    image: "/images/projects/fours/fours-street.webp",
  },
  {
    code: "F503A24",
    type: "1BR+",
    area: "45.2 m²",
    garden: "13.3 m²",
    total: "58.5 m²",
    price: "3XX tỷ",
    image: "/images/projects/fours/fours-banner.webp",
  },
  {
    code: "F51508",
    type: "1BR+",
    area: "50.5 m²",
    garden: "0 m²",
    total: "50.5 m²",
    price: "3XX tỷ",
    image: "/images/projects/fours/fours-street.webp",
  },
  {
    code: "F51608",
    type: "1BR+",
    area: "50.5 m²",
    garden: "0 m²",
    total: "50.5 m²",
    price: "3XX tỷ",
    image: "/images/projects/fours/fours-banner.webp",
  },
  {
    code: "F10610",
    type: "2BR",
    area: "64.8 m²",
    garden: "16.0 m²",
    total: "80.8 m²",
    price: "4XX tỷ",
    image: "/images/projects/fours/fours-street.webp",
  },
];

type HotUnit = (typeof hotUnits)[number];

const buyingReasons = [
  {
    icon: FiTrendingUp,
    image: "/images/projects/fours/fours-street.webp",
    title: ["Trung tâm", "phát triển mới", "Nam Đà Nẵng"],
    copy: "Hạ tầng phía Nam được Sun Group đẩy mạnh, giá còn đang đầu chu kỳ.",
  },
  {
    icon: FiAward,
    image: "/images/hero-song-han-clean.png",
    title: ["Giá vẫn còn thấp hơn", "trung tâm sông Hàn"],
    copy: "Trong khi quỹ căn mới gần sông không còn nhiều.",
  },
  {
    icon: FiShield,
    image: "/images/projects/sun-symphony-tower.jpg",
    title: ["Căn hộ sở hữu", "lâu dài hiếm dần"],
    copy: "Đặc biệt tại khu ven sông, quy hoạch lớn và pháp lý rõ.",
  },
  {
    icon: FiCheckCircle,
    image: "/images/projects/fours/fours-banner.webp",
    title: ["Chính sách kéo giãn dòng", "tiền mạnh"],
    copy: "Hỗ trợ vay và ân hạn giúp khách dễ dàng xuống tiền.",
  },
];

const comparisonRows: [IconType, string, string, string][] = [
  [FiMapPin, "Chủ đầu tư", "Sun Group", "Chủ đầu tư nhỏ lẻ"],
  [FiShield, "Pháp lý", "Sở hữu lâu dài", "Thường chỉ 50 năm"],
  [FiLayers, "Hạ tầng", "Quy hoạch đồng bộ, hiện đại", "Hạ tầng cũ, manh mún"],
  [FiBarChart2, "Tiềm năng tăng giá", "Cao", "Thấp"],
  [FiUsers, "Công viên / sông", "Công viên, sông, tiện ích đa dạng", "Ít tiện ích, không gian hạn chế"],
];

const amenities: {
  label: string;
  desc: string;
  image: string;
  icon: IconType;
}[] = [
    {
      label: "Hồ bơi vô cực",
      desc: "Tầm nhìn panorama hướng sông Hàn & biển Mỹ Khê.",
      image: "/images/projects/capital-square-hero.png",
      icon: FaPersonSwimming,
    },
    {
      label: "Gym & Yoga",
      desc: "Không gian tập luyện hiện đại với trang thiết bị cao cấp.",
      image: "/images/projects/capital-square-street.jpg",
      icon: FaDumbbell,
    },
    {
      label: "Công viên nội khu",
      desc: "Không gian xanh mát với vườn thiền, đường dạo bộ thư giãn.",
      image: "/images/projects/fours/fours-street.webp",
      icon: FaTree,
    },
    {
      label: "Kid Club",
      desc: "Khu vui chơi trẻ em an toàn, sáng tạo và đầy màu sắc.",
      image: "/images/projects/sun-solar-masterplan.jpg",
      icon: FaChildReaching,
    },
    {
      label: "Sky Lounge",
      desc: "Không gian thư giãn trên cao với view thành phố tuyệt đẹp.",
      image: "/images/projects/sun-symphony-tower.jpg",
      icon: FaChampagneGlasses,
    },
    {
      label: "Shophouse khối đế",
      desc: "Trung tâm mua sắm, ẩm thực đa dạng ngay dưới chân tòa nhà.",
      image: "/images/projects/fours/fours-banner.webp",
      icon: FaBagShopping,
    },
  ];

const policies = [
  ["Chiết khấu", "5%", "Early bird"],
  ["Hỗ trợ vay", "70%", "Giá trị căn hộ"],
  ["Ân hạn gốc", "30", "tháng"],
  ["Giãn tiến độ", "48", "tháng"],
];

export default function FoursTowerLanding({ project }: { project: ProjectCatalogItem }) {
  const [need, setNeed] = useState("Để Ở");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          project: project.name,
          interest: need,
          channel: "Gọi điện/Zalo",
          source: window.location.href,
          message: "Nhận giỏ hàng nội bộ FourS Tower",
        }),
      });

      if (!response.ok) throw new Error("submit failed");
      setSent(true);
      event.currentTarget.reset();
    } catch {
      setError("Chưa gửi được form. Anh/chị có thể gọi hoặc nhắn Zalo để nhận giỏ hàng ngay.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#020812] text-white">
      <FoursHeader />

      <section id="tong-quan" className="relative min-h-screen overflow-hidden px-5 pb-8 pt-24 sm:px-8 lg:px-10 lg:pb-10">
        <Image
          src="/images/projects/fours/fours-banner.webp"
          alt={project.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#040816]/38" />
        <div className="absolute inset-0 bg-linear-to-r from-[#040816]/98 via-[#091B34]/78 to-[#091B34]/12" />
        <div className="absolute inset-0 bg-linear-to-t from-[#040816] via-[#040816]/16 to-[#040816]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,42,87,0.45),transparent_45%),radial-gradient(circle_at_34%_50%,rgba(245,178,77,0.18),transparent_24%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-112px)] max-w-[1480px] flex-col justify-start pt-4 sm:pt-6 lg:pt-10">
          <div className="max-w-[1180px]">
            <div className="inline-flex h-9 items-center rounded-full border border-[#F5B24D]/70 bg-[#091B34]/58 px-4 text-[0.68rem] font-black uppercase tracking-[0.08em] text-[#F3F5F8] shadow-[inset_0_0_18px_rgba(255,255,255,0.04)] backdrop-blur-md">
              FourS Tower Đà Nẵng
            </div>

            <h1 className="mt-5 max-w-[980px] text-[2rem] font-bold uppercase leading-none tracking-normal text-[#F3F5F8] drop-shadow-[0_10px_28px_rgba(0,0,0,0.48)] sm:text-[2.85rem] lg:text-[3.35rem] xl:text-[3.6rem]">
              <span className="block py-1 leading-[1.12] lg:whitespace-nowrap">Căn hộ view biển Mỹ Khê</span>
              <span className="block py-1 leading-[1.12] bg-linear-to-b from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(245,178,77,0.35)] lg:whitespace-nowrap">
                Khẳng định đẳng cấp
              </span>
            </h1>

            <div className="mt-5 h-px w-full max-w-[650px] bg-linear-to-r from-transparent via-[#F5B24D]/90 to-transparent shadow-[0_0_30px_rgba(245,178,77,0.35),0_0_80px_rgba(245,178,77,0.12)]" />

            <p className="mt-5 max-w-[640px] text-sm font-medium leading-[1.7] text-[#F3F5F8]/85 sm:text-lg">
              FourS Tower sở hữu vị trí vàng bên bờ biển Mỹ Khê, mang đến tầm nhìn panorama tuyệt mỹ và tiềm năng đầu tư vượt trội.
            </p>

            <div className="mt-6 grid max-w-[640px] grid-cols-2 gap-3 sm:grid-cols-4">
              {heroFeatures.map(([Icon, title, meta]) => (
                <div key={title as string} className="flex min-h-[62px] items-center gap-3 rounded-[10px] border border-white/[0.08] bg-[#091B34]/62 px-3 py-2.5 shadow-[inset_0_0_22px_rgba(255,255,255,0.035)] backdrop-blur-md">
                  <Icon className="h-5 w-5 shrink-0 text-[#F5B24D] drop-shadow-[0_0_14px_rgba(245,178,77,0.35)]" />
                  <p className="text-[0.7rem] font-bold uppercase leading-4 text-[#AAB6C8] lg:text-xs">
                    {title}
                    <span className="block text-[#F3F5F8]">{meta}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid max-w-[700px] gap-4 sm:grid-cols-2">
              <a href="#form" className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-[14px] bg-linear-to-br from-[#F5B24D] to-[#FFCC73] px-7 text-sm font-semibold uppercase tracking-normal text-[#040816] shadow-[0_0_30px_rgba(245,178,77,0.35),0_0_80px_rgba(245,178,77,0.12)] transition-transform hover:-translate-y-0.5 hover:from-[#FFCC73] hover:to-[#FF9D2F]">
                Xem bảng giá thật
                <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#form" className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-[14px] border border-[#F5B24D]/80 bg-[#091B34]/42 px-7 text-sm font-semibold uppercase tracking-normal text-[#F3F5F8] shadow-[inset_0_0_18px_rgba(245,178,77,0.12)] backdrop-blur-md transition-colors hover:bg-[#F5B24D] hover:text-[#040816]">
                <FiAward className="h-5 w-5 text-[#F5B24D]" />
                Nhận giỏ hàng VIP
              </a>
            </div>
          </div>

          <div className="mt-8 grid overflow-hidden rounded-[14px] border border-white/[0.08] bg-[rgba(7,14,28,0.72)] shadow-[0_22px_80px_rgba(0,0,0,0.48),0_0_30px_rgba(245,178,77,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:grid-cols-5 lg:mt-10 lg:max-w-[1370px]">
            {heroStats.map(([Icon, label, value, unit], index) => (
              <div
                key={label as string}
                className={`flex min-h-[92px] items-center gap-3 border-white/[0.08] px-4 py-3 sm:border-r sm:last:border-r-0 lg:px-5 ${index === 0 ? "border-b sm:border-b-0" : "border-b sm:border-b-0"}`}
              >
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#F5B24D]/42 bg-[#040816]/72 text-[#F5B24D] shadow-[0_0_30px_rgba(245,178,77,0.35)] md:flex">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#AAB6C8] sm:whitespace-nowrap">{label}</p>
                  <p className="mt-1 bg-linear-to-b from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] bg-clip-text text-3xl font-bold leading-none text-transparent lg:text-[2.65rem]">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-[#AAB6C8]">{unit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-[160px] right-6 hidden max-w-[235px] items-center gap-3 rounded-[14px] bg-[#091B34]/90 px-5 py-4 shadow-[0_0_30px_rgba(245,178,77,0.35),0_22px_50px_rgba(0,0,0,0.42)] backdrop-blur-xl lg:flex">
            <FiMapPin className="h-8 w-8 shrink-0 text-[#F5B24D]" />
            <p className="text-[0.64rem] font-black uppercase leading-5 tracking-[0.04em] text-[#F3F5F8]">
              Vị trí kim cương
              <span className="block text-[#F3F5F8]/86">Mặt tiền Trần Hưng Đạo</span>
              <span className="block text-[#F3F5F8]/86">View biển Mỹ Khê</span>
            </p>
          </div>
        </div>
      </section>

      <section id="can-ho" className="relative overflow-hidden bg-[#040816] px-4 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(14,42,87,0.48),transparent_42%),linear-gradient(180deg,#040816_0%,#091B34_48%,#040816_100%)]" />
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(245,178,77,0.20),transparent_64%)]" />
        <div className="absolute left-0 top-0 h-full w-[34%] bg-[linear-gradient(90deg,rgba(245,178,77,0.08),transparent)] opacity-70" />
        <HotUnitsShowcase />
      </section>

      <WhyCompareSection />

      <section id="vi-tri" className="px-5 py-14 sm:px-8 lg:px-10">
        <SectionTitle eyebrow="Vị trí FourS Tower Đà Nẵng" title="Căn hộ gần biển Mỹ Khê trong trung tâm du lịch Đà Nẵng" />
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm font-medium leading-7 text-white/62">
          FourS Tower hướng đến nhóm khách muốn sống gần biển Mỹ Khê, kết nối khu Sơn Trà và các trục du lịch Đà Nẵng. Vị trí này phù hợp cho nhu cầu an cư, căn hộ đầu tư Đà Nẵng và khai thác Airbnb theo mùa du lịch.
        </p>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[18px]">
          <div className="relative aspect-1440/500">
            <Image
              src="/images/projects/fours/fours-street.webp"
              alt="Bản đồ vị trí kết nối vàng FourS Tower Đà Nẵng"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <ResortAmenitiesSection />

      <section id="chinh-sach" className="px-5 pb-24 pt-12 sm:px-8 lg:px-10 lg:pb-18">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[20px] border border-[#F5C76A]/14 bg-white/[0.035] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] lg:p-10">
            <SectionTitle eyebrow="Giá bán căn hộ FourS mới nhất" title="Bảng giá FourS Tower và chính sách dòng tiền hiện tại" align="left" />
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {policies.map(([label, value, meta]) => (
                <div key={label} className="rounded-[16px] border border-[#F5C76A]/18 bg-linear-to-b from-[#F5C76A]/18 to-white/[0.035] p-5 text-center shadow-[0_0_30px_rgba(245,199,106,0.08)]">
                  <p className="text-xs font-black uppercase text-[#FFE7AA]">{label}</p>
                  <p className="mt-4 bg-linear-to-b from-white to-[#D99535] bg-clip-text text-5xl font-black text-transparent">{value}</p>
                  <p className="mt-2 text-[0.68rem] font-black uppercase tracking-[0.1em] text-white/66">{meta}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm font-semibold text-[#FFE7AA]">Áp dụng cho giỏ hàng hiện tại, cần kiểm tra theo từng mã căn.</p>
          </div>

          <form id="form" onSubmit={submitLead} className="rounded-[20px] border border-[#F5C76A]/18 bg-[#07131f]/78 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl lg:p-10">
            <p className="text-center text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#F5C76A]">Nhận giỏ hàng nội bộ FourS</p>
            <h2 className="mt-3 text-center text-3xl font-black uppercase leading-tight text-white">Nhận giá căn hộ FourS và giỏ hàng mới nhất hôm nay</h2>
            <div className="mt-7 grid gap-4">
              <label className="relative block">
                <FiUser className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#F5C76A]" />
                <input name="name" required placeholder="Họ và tên" className="h-13 w-full rounded-[10px] border border-white/12 bg-white/[0.045] pl-11 pr-4 text-sm font-semibold text-white outline-none transition-colors placeholder:text-white/36 focus:border-[#F5C76A]" />
              </label>
              <label className="relative block">
                <FiPhone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#F5C76A]" />
                <input name="phone" required type="tel" placeholder="Số điện thoại" className="h-13 w-full rounded-[10px] border border-white/12 bg-white/[0.045] pl-11 pr-4 text-sm font-semibold text-white outline-none transition-colors placeholder:text-white/36 focus:border-[#F5C76A]" />
              </label>
              <div className="grid gap-2">
                <p className="text-xs font-semibold text-white/64">Nhu cầu</p>
                <div className="grid grid-cols-3 gap-2">
                  {["Để Ở", "Đầu tư", "Cho thuê"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setNeed(item)}
                      className={`h-11 rounded-[10px] border text-xs font-black uppercase transition-colors ${need === item
                        ? "border-[#F5C76A] bg-[#F5C76A] text-[#08111d]"
                        : "border-white/12 bg-white/[0.035] text-white/70 hover:border-[#F5C76A]/60"
                        }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button type="submit" disabled={submitting} className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-[12px] bg-linear-to-r from-[#B8792E] via-[#FFE4A0] to-[#C5822D] px-6 text-sm font-black uppercase text-[#08111d] shadow-[0_0_34px_rgba(245,199,106,0.28)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70">
              {submitting ? "Đang gửi..." : sent ? "Đã nhận thông tin" : "Nhận giỏ hàng VIP ngay"}
            </button>
            {error ? <p className="mt-4 text-center text-xs font-semibold text-red-200">{error}</p> : null}
            <p className="mt-4 text-center text-xs font-medium text-white/42">Cam kết bảo mật thông tin tuyệt đối</p>
          </form>
        </div>
      </section>

      <Footer />

      <a
        href={ZALO_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn Zalo nhận giỏ hàng FourS"
        className="fixed bottom-24 right-4 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-[0_0_28px_rgba(0,104,255,0.42)] lg:bottom-7 lg:right-7"
      >
        <SiZalo className="h-6 w-6" />
      </a>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#F5C76A]/18 bg-[#06111d]/94 p-3 backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-[48px_1fr] gap-3">
          <a href={HOTLINE_TEL} aria-label={`Gọi ${HOTLINE_DISPLAY}`} className="flex h-12 items-center justify-center rounded-full border border-[#F5C76A]/30 text-[#F5C76A]">
            <FiPhone className="h-5 w-5" />
          </a>
          <a href="#form" className="flex h-12 items-center justify-center rounded-full bg-linear-to-r from-[#B8792E] via-[#FFE4A0] to-[#C5822D] text-xs font-black uppercase text-[#08111d]">
            Nhận giỏ hàng VIP
          </a>
        </div>
      </div>
    </main>
  );
}

function FoursHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-linear-to-b from-[#020812]/80 to-transparent">
      <div className="mx-auto flex h-24 max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/vi" className="flex items-center">
          <Image
            src="/images/logo-bds-da-nang-light.svg"
            alt="BĐS Đà Nẵng"
            width={178}
            height={50}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-12 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${slugifyNav(item)}`} className="text-[15px] font-semibold uppercase tracking-[2px] text-[#F3F5F8]/76 transition-colors hover:text-[#F5B24D]">
              {item}
            </a>
          ))}
        </nav>
        <a href={HOTLINE_TEL} className="inline-flex h-13 items-center gap-3 rounded-full border border-[#F5B24D]/80 bg-[#091B34]/26 px-5 text-sm font-black text-[#FFCC73] shadow-[inset_0_0_18px_rgba(245,178,77,0.12)] backdrop-blur-md transition-colors hover:bg-[#F5B24D] hover:text-[#040816] sm:px-6">
          <FiPhone className="h-5 w-5 text-[#F5B24D]" />
          <span className="hidden sm:inline">{HOTLINE_DISPLAY}</span>
        </a>
      </div>
    </header>
  );
}

function SectionTitle({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mx-auto max-w-4xl ${align === "center" ? "text-center" : "text-left"}`}>
      <p className="text-[0.72rem] font-black uppercase tracking-[0.18em] text-[#F5C76A]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">{title}</h2>
    </div>
  );
}

function WhyCompareSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#F5B24D]/10 bg-[#040816] px-4 py-12 sm:px-8 lg:px-10 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,42,87,0.42),transparent_48%),linear-gradient(180deg,#040816_0%,#091B34_54%,#040816_100%)]" />
      <div className="absolute inset-x-0 top-[17%] h-[260px] bg-[linear-gradient(90deg,transparent,rgba(245,178,77,0.12),transparent)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-[190px] bg-[radial-gradient(ellipse_at_bottom,rgba(245,178,77,0.28),transparent_62%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[210px] opacity-55 [background-image:linear-gradient(to_top,rgba(245,178,77,0.16)_0,transparent_62%),repeating-linear-gradient(90deg,transparent_0_42px,rgba(245,178,77,0.22)_43px,transparent_45px)]" />

      <div className="relative z-10 mx-auto max-w-[1540px]">
        <LuxuryTitle eyebrow="Lý do nên đầu tư">FourS Tower</LuxuryTitle>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {buyingReasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title.join(" ")}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
                className="group relative min-h-[212px] overflow-hidden rounded-[10px] border border-[#F5B24D]/45 bg-[rgba(7,14,28,0.72)] p-7 shadow-[0_0_30px_rgba(245,178,77,0.10),0_26px_70px_rgba(0,0,0,0.42)] backdrop-blur-[14px]"
              >
                <Image src={item.image} alt="" fill className="object-cover opacity-38 transition duration-700 group-hover:scale-105 group-hover:opacity-48" sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" />
                <div className="absolute inset-0 bg-linear-to-r from-[#040816]/92 via-[#091B34]/78 to-[#040816]/44" />
                <div className="absolute inset-0 bg-linear-to-t from-[#040816]/86 via-transparent to-[#040816]/18" />
                <div className="absolute -right-12 -top-10 h-32 w-32 rounded-full bg-[#F5B24D]/18 blur-3xl" />

                <div className="relative z-10 flex h-full items-start gap-5">
                  <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border border-[#F5B24D]/76 bg-[#091B34]/72 text-[#F5B24D] shadow-[0_0_22px_rgba(245,178,77,0.42),inset_0_0_22px_rgba(245,178,77,0.08)]">
                    <Icon className="h-9 w-9" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[1rem] font-black uppercase leading-[1.45] tracking-[-0.01em] text-[#F3F5F8] sm:text-[1.08rem]">
                      {item.title.map((line, lineIndex) => (
                        <span key={line} className={`block ${lineIndex === item.title.length - 1 ? "text-[#F5B24D]" : ""}`}>
                          {line}
                        </span>
                      ))}
                    </h3>
                    <span className="mt-3 block h-px w-12 bg-[#F5B24D]" />
                    <p className="mt-4 max-w-[260px] text-[0.82rem] font-medium leading-6 text-[#F3F5F8]/78">{item.copy}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 lg:mt-16">
          <ComparisonTitle />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto mt-7 hidden max-w-[1390px] items-end gap-0 lg:grid lg:grid-cols-[1.1fr_1.18fr_1.1fr]"
          >
            <ComparisonCard
              title="Tiêu chí"
              type="criteria"
              values={comparisonRows.map(([icon, label]) => ({ icon, text: label }))}
            />
            <ComparisonCard
              title="FourS Tower"
              values={comparisonRows.map(([, , fours]) => ({ text: fours }))}
              highlight
            />
            <ComparisonCard
              title="Chung cư cũ"
              type="old"
              values={comparisonRows.map(([, , , old]) => ({ text: old }))}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto mt-6 overflow-hidden rounded-[10px] border border-[#F5B24D]/34 bg-[rgba(7,14,28,0.76)] text-center shadow-[0_0_30px_rgba(245,178,77,0.12),0_22px_60px_rgba(0,0,0,0.42)] backdrop-blur-[14px] lg:hidden"
          >
            <div className="grid grid-cols-[0.86fr_1.14fr_0.9fr] bg-[#091B34]/88 text-[0.58rem] font-black uppercase leading-tight text-[#F3F5F8]">
              <div className="px-2 py-3">Tiêu chí</div>
              <div className="border-x border-[#F5B24D]/22 bg-linear-to-b from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] px-2 py-3 text-[#040816]">FourS Tower</div>
              <div className="px-2 py-3">Chung cư cũ</div>
            </div>
            {comparisonRows.map(([Icon, label, fours, old]) => (
              <div key={label} className="grid min-h-14 grid-cols-[0.86fr_1.14fr_0.9fr] border-t border-white/[0.07] text-[0.62rem] font-semibold leading-4">
                <div className="flex items-center justify-center gap-1.5 px-2 py-2 text-[#F3F5F8]/78"><Icon className="hidden h-3.5 w-3.5 text-[#F5B24D] min-[390px]:block" />{label}</div>
                <div className="flex items-center justify-center border-x border-[#F5B24D]/18 bg-[#F5B24D]/[0.06] px-2 py-2 font-black text-[#FFCC73]">{fours}</div>
                <div className="flex items-center justify-center px-2 py-2 text-[#AAB6C8]">{old}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LuxuryTitle({ eyebrow, children }: { eyebrow?: string; children: ReactNode }) {
  return (
    <div className="text-center">
      {eyebrow ? (
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-linear-to-r from-transparent via-[#F5B24D]/50 to-[#F5B24D]" />
          <span className="text-[1.1rem] font-medium uppercase tracking-[0.08em] text-[#F5B24D] sm:text-[1.35rem]">{eyebrow}</span>
          <span className="h-px w-20 bg-linear-to-l from-transparent via-[#F5B24D]/50 to-[#F5B24D]" />
        </div>
      ) : null}
      <h2 className="mt-1 bg-linear-to-b from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] bg-clip-text text-[2.25rem] font-black uppercase leading-[1.05] tracking-[-0.02em] text-transparent drop-shadow-[0_0_30px_rgba(245,178,77,0.35)] sm:text-[3rem] lg:text-[3.35rem]">
        {children}
      </h2>
    </div>
  );
}

function ComparisonTitle() {
  return (
    <div className="relative mx-auto max-w-[1140px] text-center">
      <div className="flex items-center justify-center gap-4">
        <span className="hidden h-px flex-1 bg-linear-to-r from-transparent to-[#F5B24D] sm:block" />
        <span className="text-[#F5B24D] drop-shadow-[0_0_16px_rgba(245,178,77,0.7)]">✦</span>
        <div className="flex h-12 w-12 items-end justify-center text-[#F5B24D] drop-shadow-[0_0_20px_rgba(245,178,77,0.45)]">
          <FiHome className="h-9 w-9" />
        </div>
        <span className="text-[#F5B24D] drop-shadow-[0_0_16px_rgba(245,178,77,0.7)]">✦</span>
        <span className="hidden h-px flex-1 bg-linear-to-l from-transparent to-[#F5B24D] sm:block" />
      </div>
      <h2 className="mt-2 text-[1.3rem] font-black uppercase leading-tight tracking-[0.01em] text-[#F3F5F8] sm:text-[1.8rem] lg:text-[2rem]">
        FourS Tower trong nhóm căn hộ đầu tư <span className="bg-linear-to-b from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] bg-clip-text text-transparent">Đà Nẵng</span>
      </h2>
    </div>
  );
}

function ComparisonCard({
  title,
  values,
  highlight = false,
  type = "normal",
}: {
  title: string;
  values: { icon?: IconType; text: string }[];
  highlight?: boolean;
  type?: "criteria" | "normal" | "old";
}) {
  return (
    <div
      className={`overflow-hidden border text-center shadow-[0_26px_80px_rgba(0,0,0,0.42)] backdrop-blur-[14px] ${highlight
        ? "relative z-10 -mx-px rounded-[10px] border-[#F5B24D]/72 bg-[rgba(7,14,28,0.88)] shadow-[0_0_34px_rgba(245,178,77,0.22),0_26px_80px_rgba(0,0,0,0.45)]"
        : type === "criteria"
          ? "rounded-l-[10px] border-white/[0.10] bg-[rgba(7,14,28,0.74)]"
          : "rounded-r-[10px] border-white/[0.10] bg-[rgba(7,14,28,0.74)]"
        }`}
    >
      <div
        className={`px-5 py-5 text-[1rem] font-black uppercase tracking-[-0.01em] ${highlight
          ? "bg-linear-to-b from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] text-[#040816] shadow-[inset_0_0_26px_rgba(255,255,255,0.28)]"
          : "bg-linear-to-b from-white/[0.085] to-white/[0.025] text-[#F3F5F8]"
          }`}
      >
        {title}
      </div>
      {values.map(({ icon: Icon, text }) => (
        <div
          key={text}
          className={`flex min-h-[64px] items-center border-t px-7 text-[1rem] font-medium leading-6 ${highlight
            ? "justify-start gap-5 border-[#F5B24D]/18 bg-linear-to-r from-[#F5B24D]/[0.10] via-[#091B34]/70 to-[#040816]/88 font-semibold text-[#FFCC73]"
            : type === "criteria"
              ? "justify-start gap-6 border-white/[0.075] text-[#F3F5F8]"
              : "justify-start gap-5 border-white/[0.075] text-[#F3F5F8]/82"
            }`}
        >
          {type === "criteria" && Icon ? <Icon className="h-6 w-6 shrink-0 text-[#F5B24D]" /> : null}
          {highlight ? <FiCheck className="h-6 w-6 shrink-0 rounded-full border border-[#F5B24D]/70 p-1 text-[#F5B24D]" /> : null}
          {type === "old" ? <FiXCircle className="h-6 w-6 shrink-0 text-[#AAB6C8]/70" /> : null}
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

function ResortAmenitiesSection() {
  return (
    <section id="tien-ich" className="relative overflow-hidden bg-[#040816] px-4 py-14 sm:px-8 lg:px-10 lg:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(14,42,87,0.54),transparent_42%),linear-gradient(180deg,#040816_0%,#091B34_48%,#040816_100%)]" />
      <div className="absolute inset-x-[-18%] top-[-18%] h-[460px] rounded-[50%] border-t border-[#F5B24D]/30 opacity-70 shadow-[0_-8px_70px_rgba(245,178,77,0.14)]" />
      <div className="absolute inset-x-[4%] top-[9%] h-[250px] rounded-[50%] border-t border-[#F5B24D]/16 opacity-75" />
      <div className="absolute right-0 top-20 h-[280px] w-[360px] bg-[radial-gradient(circle,rgba(245,178,77,0.24),transparent_62%)] blur-2xl" />
      <div className="absolute left-0 bottom-0 h-[260px] w-[420px] bg-[radial-gradient(circle,rgba(245,178,77,0.16),transparent_64%)] blur-2xl" />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="mx-auto max-w-[1040px] text-center">
          <div className="mx-auto inline-flex h-12 items-center gap-4 rounded-[18px] border border-[#F5B24D]/46 bg-[#091B34]/70 px-9 shadow-[0_0_34px_rgba(245,178,77,0.22)] backdrop-blur-[14px]">
            <span className="h-px w-12 bg-linear-to-r from-transparent to-[#F5B24D]" />
            <span className="text-[0.95rem] font-black uppercase tracking-[0.22em] text-[#F5B24D]">Tiện ích chuẩn resort</span>
            <span className="h-px w-12 bg-linear-to-l from-transparent to-[#F5B24D]" />
          </div>
          <h2 className="mt-5 text-[2rem] font-black uppercase leading-[1.08] tracking-[-0.02em] text-[#F3F5F8] sm:text-[3.35rem] lg:text-[4rem]">
            <span className="block py-1">Không gian sống đẳng cấp</span>
            <span className="block bg-linear-to-b from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] bg-clip-text py-1 text-transparent drop-shadow-[0_0_30px_rgba(245,178,77,0.35)]">
              Cho căn hộ cao cấp Đà Nẵng
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[660px] text-[1rem] font-medium leading-7 text-[#F3F5F8]/78 sm:text-[1.12rem]">
            Hệ tiện ích chuẩn resort được quy hoạch đồng bộ, mang đến trải nghiệm sống trọn vẹn mỗi ngày.
          </p>
          <span className="mx-auto mt-5 block h-3 w-3 rotate-45 border border-[#F5B24D] shadow-[0_0_14px_rgba(245,178,77,0.7)]" />
        </div>

        <div className="mt-8 lg:hidden">
          <Swiper
            slidesPerView={1.08}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 2.15, spaceBetween: 18 },
            }}
            className="!overflow-visible"
          >
            {amenities.map((item, index) => (
              <SwiperSlide key={item.label}>
                <AmenityCard item={item} index={index} sizes="88vw" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-9 hidden gap-5 lg:grid lg:grid-cols-6">
          {amenities.map((item, index) => (
            <AmenityCard key={item.label} item={item} index={index} sizes="17vw" />
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenityCard({
  item,
  index,
  sizes,
}: {
  item: (typeof amenities)[number];
  index: number;
  sizes: string;
}) {
  const Icon = item.icon;

  return (
    <article className="group relative min-h-[410px] overflow-hidden rounded-[14px] border border-[#F5B24D]/34 bg-[rgba(7,14,28,0.72)] shadow-[0_0_26px_rgba(245,178,77,0.10),0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-[14px] lg:min-h-[445px]">
      <div className="relative h-[210px] overflow-hidden lg:h-[230px]">
        <Image src={item.image} alt={item.label} fill className="object-cover transition duration-700 group-hover:scale-105" sizes={sizes} />
        <div className="absolute inset-0 bg-linear-to-t from-[#040816]/42 via-transparent to-transparent" />
        <div className="absolute left-4 top-auto bottom-5 flex h-10 min-w-11 items-center justify-center rounded-[10px] border border-[#F5B24D]/60 bg-[#091B34]/72 px-2 text-[1.1rem] font-black text-[#F5B24D] shadow-[0_0_18px_rgba(245,178,77,0.34)]">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>
      <div className="relative px-5 pb-6 pt-11 text-center">
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-[#F5B24D]/42 to-transparent" />
        <div className="absolute left-1/2 top-0 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#F5B24D]/66 bg-[#091B34]/88 text-[#F5B24D] shadow-[0_0_28px_rgba(245,178,77,0.42),inset_0_0_22px_rgba(245,178,77,0.08)]">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-[1rem] font-black uppercase leading-tight text-[#F3F5F8]">{item.label}</h3>
        <p className="mx-auto mt-4 min-h-[54px] max-w-[210px] text-[0.86rem] font-medium leading-6 text-[#F3F5F8]/72">{item.desc}</p>
        <a href="#form" className="mt-5 inline-flex items-center justify-center gap-2 text-[0.75rem] font-black uppercase tracking-[0.1em] text-[#F5B24D] transition-colors hover:text-[#FFCC73]">
          Xem chi tiết
          <FiArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function HotUnitsShowcase() {
  const [selectedUnit, setSelectedUnit] = useState<HotUnit | null>(null);

  return (
    <div className="relative z-10 mx-auto max-w-[1500px]">
      <div className="mb-7 text-center">
        <h2 className="bg-linear-to-b from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] bg-clip-text text-[2.45rem] font-black uppercase leading-none tracking-[-0.02em] text-transparent drop-shadow-[0_0_30px_rgba(245,178,77,0.35)] sm:text-[3.4rem] lg:text-[4.1rem]">
          Đang nhận booking
        </h2>
        <div className="mt-5 flex items-center justify-center gap-5">
          <span className="h-px w-28 bg-linear-to-r from-transparent to-[#F5B24D]/72" />
          <span className="text-[#F5B24D] drop-shadow-[0_0_14px_rgba(245,178,77,0.55)]">✦</span>
          <p className="text-[0.9rem] font-black uppercase tracking-[0.14em] text-[#F5B24D]">
            Căn hot nhất
          </p>
          <span className="text-[#F5B24D] drop-shadow-[0_0_14px_rgba(245,178,77,0.55)]">✦</span>
          <span className="h-px w-28 bg-linear-to-l from-transparent to-[#F5B24D]/72" />
        </div>
      </div>

      <div className="grid items-stretch gap-5 lg:grid-cols-[1.05fr_minmax(0,1.95fr)]">
        <FeaturedHotUnit unit={hotUnits[0]} onOpen={setSelectedUnit} />

        <div className="relative min-w-0 px-0 lg:px-2">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".fours-hot-prev",
              nextEl: ".fours-hot-next",
            }}
            slidesPerView={1.08}
            spaceBetween={14}
            breakpoints={{
              640: { slidesPerView: 2.1, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 18 },
            }}
            className="!h-[430px] !pb-0"
          >
            {hotUnits.slice(1).map((unit) => (
              <SwiperSlide key={unit.code} className="!h-full">
                <HotUnitCard unit={unit} onOpen={setSelectedUnit} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Căn trước"
            className="fours-hot-prev absolute -left-7 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#F5B24D]/50 bg-[#091B34]/94 text-[#F5B24D] shadow-[0_0_24px_rgba(245,178,77,0.28)] transition-colors hover:bg-[#F5B24D] hover:text-[#040816] lg:flex"
          >
            <FiChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Căn tiếp theo"
            className="fours-hot-next absolute -right-7 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#F5B24D]/50 bg-[#091B34]/94 text-[#F5B24D] shadow-[0_0_24px_rgba(245,178,77,0.28)] transition-colors hover:bg-[#F5B24D] hover:text-[#040816] lg:flex"
          >
            <FiChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-center lg:justify-end">
        <a
          href="#form"
          className="inline-flex items-center gap-2 text-[0.72rem] font-black uppercase tracking-[0.08em] text-[#F5B24D] drop-shadow-[0_0_12px_rgba(245,178,77,0.42)] transition-colors hover:text-white"
        >
          Xem tất cả 08 căn còn lại
          <FiArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {selectedUnit && (
        <UnitLayoutModal unit={selectedUnit} onClose={() => setSelectedUnit(null)} />
      )}
    </div>
  );
}

function FeaturedHotUnit({ unit, onOpen }: { unit: HotUnit; onOpen: (unit: HotUnit) => void }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(unit)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") onOpen(unit);
      }}
      className="relative flex min-h-[610px] cursor-pointer flex-col overflow-hidden rounded-[10px] border border-[#F5B24D]/72 bg-[rgba(7,14,28,0.84)] shadow-[0_0_34px_rgba(245,178,77,0.18),0_24px_70px_rgba(0,0,0,0.48),inset_0_0_32px_rgba(245,178,77,0.04)] outline-none transition-all hover:-translate-y-1 hover:border-[#FFCC73] focus-visible:ring-2 focus-visible:ring-[#F5B24D] sm:min-h-0 lg:h-[430px]"
    >
      <span className="absolute left-0 top-0 z-20 inline-flex items-center gap-1.5 rounded-br-[10px] bg-linear-to-r from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] px-3 py-1.5 text-[0.58rem] font-black uppercase text-[#040816] shadow-[0_0_18px_rgba(245,178,77,0.38)]">
        <FiStar className="h-3.5 w-3.5" />
        Căn sân vườn hiếm
      </span>

      <div className="grid min-h-0 flex-1 sm:grid-cols-[0.93fr_1.07fr]">
        <div className="relative z-10 flex min-w-0 flex-col px-5 pb-4 pt-12">
          <h3 className="bg-linear-to-b from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] bg-clip-text text-[2rem] font-black leading-none text-transparent lg:text-[2.35rem]">
            {unit.code}
          </h3>
          <p className="mt-2 text-[0.95rem] font-black uppercase tracking-[0.02em] text-[#F3F5F8]">{unit.type}</p>
          <span className="mt-2 h-px w-10 bg-[#F5B24D]" />

          <dl className="mt-5 grid gap-3">
            <HotSpec icon={FiGrid} label="DT thông thủy" value={unit.area} />
            <HotSpec icon={FiHome} label="DT sàn" value={unit.garden || unit.area} />
            <HotSpec icon={FiBriefcase} label="DT sân vườn" value={unit.garden || "0 m²"} />
            <HotSpec icon={FiCalendar} label="Tổng diện tích" value={unit.total || unit.area} />
          </dl>

          <div className="mt-auto border-t border-white/[0.09] pt-4">
            <p className="text-[0.72rem] font-semibold text-[#AAB6C8]">Giá bán</p>
            <p className="mt-1 whitespace-nowrap bg-linear-to-b from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] bg-clip-text text-[1.18rem] font-black leading-tight text-transparent lg:text-[1.32rem]">
              {unit.price}
            </p>
          </div>
        </div>

        <div className="relative min-h-[250px] overflow-hidden sm:h-full">
          <Image
            src={unit.image}
            alt={`Layout căn ${unit.code}`}
            fill
            className="object-cover object-top transition duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 380px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#040816]/62 via-transparent to-transparent" />
          <FiMapPin className="absolute left-1/2 top-[44%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 fill-[#F5B24D] text-[#F5B24D] drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]" />
          <div className="absolute bottom-9 right-4 flex h-[86px] w-[86px] rotate-[-8deg] flex-col items-center justify-center rounded-full border border-[#F5B24D]/72 bg-[#091B34]/88 text-center text-[0.56rem] font-black uppercase leading-tight text-[#FFCC73] shadow-[0_0_28px_rgba(245,178,77,0.62),inset_0_0_20px_rgba(245,178,77,0.08)]">
            <FiAward className="mb-1 h-5 w-5" />
            Hiếm nhất<br />giỏ hàng
            <span className="mt-1 tracking-[0.14em]">★★★★★</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 grid shrink-0 gap-3 border-t border-white/[0.08] bg-[#07111b]/72 px-5 pb-5 pt-6 sm:grid-cols-2">
        <button type="button" onClick={(event) => { event.stopPropagation(); onOpen(unit); }} className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[6px] bg-linear-to-b from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] text-[0.66rem] font-black uppercase text-[#040816] shadow-[0_0_18px_rgba(245,178,77,0.30)]">
          <FiCalendar className="h-3.5 w-3.5" />
          Xem layout
        </button>
        <a href="#form" onClick={(event) => event.stopPropagation()} className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[6px] border border-[#F5B24D]/52 bg-[#07111b]/66 text-[0.66rem] font-black uppercase text-[#F3F5F8] transition-colors hover:bg-[#F5B24D] hover:text-[#040816]">
          <FiGift className="h-3.5 w-3.5 text-[#F5B24D]" />
          Nhận giá tốt nhất
        </a>
      </div>
    </article>
  );
}

function HotUnitCard({ unit, onOpen }: { unit: HotUnit; onOpen: (unit: HotUnit) => void }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(unit)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") onOpen(unit);
      }}
      className="group flex h-[430px] cursor-pointer flex-col overflow-hidden rounded-[8px] border border-[#F5B24D]/30 bg-[rgba(7,14,28,0.82)] shadow-[0_20px_54px_rgba(0,0,0,0.42)] outline-none backdrop-blur-[14px] transition-all hover:-translate-y-1 hover:border-[#F5B24D]/68 hover:shadow-[0_0_28px_rgba(245,178,77,0.16),0_24px_60px_rgba(0,0,0,0.46)] focus-visible:ring-2 focus-visible:ring-[#F5B24D]"
    >
      <div className="relative h-[190px] shrink-0 overflow-hidden lg:h-[185px]">
        <Image
          src={unit.image}
          alt={`Căn hộ ${unit.code}`}
          fill
          className="object-cover object-top transition-transform duration-700"
          sizes="(max-width: 1024px) 48vw, 240px"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#040816]/62 via-transparent to-transparent" />
        <button
          type="button"
          aria-label="Lưu căn hộ"
          onClick={(event) => event.stopPropagation()}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-[#FFCC73] drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] transition-transform hover:scale-110"
        >
          <FiHeart className="h-5 w-5" />
        </button>
        <FiMapPin className="absolute left-1/2 top-[54%] h-8 w-8 -translate-x-1/2 -translate-y-1/2 fill-[#F5B24D] text-[#F5B24D] drop-shadow-[0_6px_16px_rgba(0,0,0,0.55)]" />
        <span className="absolute bottom-3 left-4 rounded-[6px] bg-linear-to-r from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] px-3 py-1 text-[0.64rem] font-black uppercase text-[#040816] shadow-[0_0_14px_rgba(245,178,77,0.32)]">
          {unit.type}
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-5 pb-4 pt-4">
        <h3 className="bg-linear-to-b from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] bg-clip-text text-[1.45rem] font-black leading-none text-transparent">
          {unit.code}
        </h3>

        <div className="mt-4 flex items-center justify-between border-b border-white/[0.07] pb-3 text-[0.72rem] font-semibold">
          <span className="text-[#AAB6C8]">DT TT</span>
          <span className="text-[#F3F5F8]">{unit.area}</span>
        </div>

        <div className="mt-3">
          <p className="text-[0.72rem] font-semibold text-[#AAB6C8]">Giá bán</p>
          <p className="mt-1 bg-linear-to-b from-[#FFCC73] via-[#F5B24D] to-[#D88A1D] bg-clip-text text-[1.22rem] font-black leading-tight text-transparent">
            {unit.price}
          </p>
        </div>

        <button type="button" onClick={(event) => { event.stopPropagation(); onOpen(unit); }} className="mt-auto inline-flex h-10 shrink-0 items-center justify-center gap-3 rounded-[6px] border border-[#F5B24D]/42 bg-[#07111b]/54 text-[0.66rem] font-black uppercase text-[#F3F5F8] shadow-[inset_0_0_16px_rgba(245,178,77,0.06)] transition-colors hover:bg-[#F5B24D] hover:text-[#040816]">
          Xem chi tiết
          <FiArrowRight className="h-3.5 w-3.5 text-[#F5B24D]" />
        </button>
      </div>
    </article>
  );
}

function UnitLayoutModal({ unit, onClose }: { unit: HotUnit; onClose: () => void }) {
  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-[#020812]/92 px-3 py-3 backdrop-blur-md sm:px-4 sm:py-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Layout căn ${unit.code}`}
      onClick={onClose}
    >
      <div
        className="relative flex h-[calc(100dvh-24px)] w-full max-w-7xl flex-col overflow-hidden rounded-[12px] border border-[#F5C76A]/28 bg-[#06101a] shadow-[0_30px_90px_rgba(0,0,0,0.58)] sm:h-auto sm:max-h-[calc(100vh-48px)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Đóng"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white transition-colors hover:bg-[#F5C76A] hover:text-[#08111d]"
        >
          <FiX className="h-5 w-5" />
        </button>

        <div className="relative h-[44%] min-h-0 shrink-0 bg-white sm:h-[68vh] sm:min-h-[360px]">
          <Image
            src={unit.image}
            alt={`Layout căn ${unit.code}`}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>

        <aside className="flex min-h-0 flex-1 flex-col gap-3 border-t border-[#F5C76A]/16 bg-[#07111b] p-4 sm:grid sm:flex-none sm:gap-4 lg:grid-cols-[220px_minmax(0,1fr)_360px] lg:items-center lg:p-5">
          <div>
            <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#F5C76A]">Layout căn hộ</p>
            <h3 className="mt-1 bg-linear-to-b from-[#FFF3C6] via-[#F2B95D] to-[#A16022] bg-clip-text text-[2rem] font-black leading-none text-transparent sm:mt-2 sm:text-4xl">
              {unit.code}
            </h3>
            <p className="mt-2 text-sm font-black uppercase text-white">{unit.type}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-4 sm:gap-3">
            <HotSpec icon={FiGrid} label="DT thông thủy" value={unit.area} />
            <HotSpec icon={FiBriefcase} label="DT sân vườn" value={unit.garden || "0 m²"} />
            <HotSpec icon={FiHome} label="Tổng diện tích" value={unit.total || unit.area} />
            <div>
              <p className="text-[0.68rem] font-semibold text-white/64">Giá bán</p>
              <p className="mt-1 text-base font-black leading-tight text-[#FFE59B]">
                {unit.price}
              </p>
            </div>
          </div>

          <div className="mt-auto grid gap-2 sm:mt-0 sm:grid-cols-3 lg:grid-cols-1">
            <a href={HOTLINE_TEL} className="inline-flex h-10 items-center justify-center gap-2 rounded-[8px] bg-linear-to-b from-[#FFF2C2] via-[#F4BE63] to-[#A76222] text-[0.68rem] font-black uppercase text-[#08111d] shadow-[0_0_20px_rgba(245,199,106,0.26)] sm:h-11 sm:text-xs">
              <FiPhone className="h-4 w-4" />
              Gọi tư vấn căn này
            </a>
            <a href={ZALO_HREF} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center justify-center gap-2 rounded-[8px] border border-[#F5C76A]/48 bg-white/[0.035] text-[0.68rem] font-black uppercase text-white transition-colors hover:bg-[#F5C76A] hover:text-[#08111d] sm:h-11 sm:text-xs">
              <SiZalo className="h-4 w-4" />
              Nhận layout qua Zalo
            </a>
            <a href="#form" onClick={onClose} className="inline-flex h-10 items-center justify-center rounded-[8px] border border-white/12 text-[0.68rem] font-black uppercase text-white/82 transition-colors hover:border-white/34 hover:text-white sm:h-11 sm:text-xs">
              Nhận bảng giá & chính sách
            </a>
          </div>
        </aside>
      </div>
    </div>,
    document.body,
  );
}

function HotSpec({ icon: Icon, label, value }: { icon: IconType; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[18px_1fr_auto] items-center gap-2 text-[0.66rem]">
      <Icon className="h-3.5 w-3.5 text-[#AAB6C8]" />
      <dt className="font-medium text-[#AAB6C8]">{label}</dt>
      <dd className="font-black text-[#F3F5F8]">{value}</dd>
    </div>
  );
}

function FeaturedUnit({ unit }: { unit: (typeof hotUnits)[number] }) {
  return (
    <article className="relative overflow-hidden rounded-[20px] border border-[#F5C76A]/30 bg-white/[0.035] p-5 shadow-[0_28px_70px_rgba(0,0,0,0.3)]">
      <span className="absolute left-0 top-0 rounded-br-[12px] bg-linear-to-r from-[#B8792E] to-[#FFE4A0] px-4 py-2 text-[0.66rem] font-black uppercase text-[#08111d]">
        Căn sân vườn hiếm
      </span>
      <div className="grid gap-5 pt-8 md:grid-cols-[0.8fr_1fr]">
        <div>
          <h3 className="bg-linear-to-b from-white to-[#D99535] bg-clip-text text-5xl font-black text-transparent">{unit.code}</h3>
          <p className="mt-2 text-sm font-black uppercase text-white">{unit.type}</p>
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <Spec label="DT thông thủy" value={unit.area} />
            <Spec label="DT sân vườn" value={unit.garden || ""} />
            <Spec label="DT sàn" value="59.5 m²" />
            <Spec label="Tổng diện tích" value={unit.total || ""} />
          </dl>
          <p className="mt-6 text-xs font-bold text-white/54">Giá bán</p>
          <p className="mt-1 text-2xl font-black text-[#FFE7AA]">{unit.price}</p>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-[16px] bg-[#06111d]">
          <Image src={unit.image} alt={`Layout căn ${unit.code}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
          <div className="absolute inset-0 bg-linear-to-t from-[#020812]/65 to-transparent" />
          <div className="absolute bottom-5 right-5 flex h-24 w-24 items-center justify-center rounded-full border border-[#F5C76A]/58 bg-[#3A240A]/70 text-center text-[0.64rem] font-black uppercase leading-tight text-[#FFE7AA] shadow-[0_0_35px_rgba(245,199,106,0.35)]">
            Đẹp nhất<br />giỏ hàng
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a href="#form" className="inline-flex h-11 items-center justify-center rounded-[10px] bg-linear-to-r from-[#B8792E] via-[#FFE4A0] to-[#C5822D] text-xs font-black uppercase text-[#08111d]">Xem layout</a>
        <a href="#form" className="inline-flex h-11 items-center justify-center rounded-[10px] border border-[#F5C76A]/42 text-xs font-black uppercase text-white hover:bg-[#F5C76A] hover:text-[#08111d]">Nhận giá tốt nhất</a>
      </div>
    </article>
  );
}

function SmallUnit({ unit }: { unit: (typeof hotUnits)[number] }) {
  return (
    <article className="group overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.035] shadow-[0_20px_50px_rgba(0,0,0,0.24)] transition-all hover:-translate-y-1 hover:border-[#F5C76A]/35">
      <div className="relative min-h-[180px] overflow-hidden">
        <Image src={unit.image} alt={`Căn hộ ${unit.code}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 33vw, 20vw" />
        <div className="absolute inset-0 bg-linear-to-t from-[#020812]/80 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-black text-[#FFE7AA]">{unit.code}</h3>
        <p className="mt-1 text-sm font-bold uppercase text-white">{unit.type}</p>
        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-sm">
          <span className="text-white/52">DT TT</span>
          <span className="font-bold text-white">{unit.area}</span>
        </div>
        <p className="mt-5 text-xs font-bold text-white/52">Giá bán</p>
        <p className="mt-1 text-lg font-black text-white">{unit.price}</p>
        <a href="#form" className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-[10px] border border-[#F5C76A]/35 text-xs font-black uppercase text-white transition-colors hover:bg-[#F5C76A] hover:text-[#08111d]">
          Xem chi tiết
        </a>
      </div>
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold text-white/50">{label}</dt>
      <dd className="mt-1 font-bold text-white">{value}</dd>
    </div>
  );
}

function slugifyNav(label: string) {
  const map: Record<string, string> = {
    "Tổng quan": "tong-quan",
    "Vị trí": "vi-tri",
    "Tiện ích": "tien-ich",
    "Căn hộ": "can-ho",
    "Chính sách": "chinh-sach",
  };

  return map[label] || "tong-quan";
}
