"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  FiArrowRight,
  FiAward,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiPhone,
  FiShield,
  FiTrendingUp,
  FiUser,
  FiX,
} from "react-icons/fi";
import { SiZalo } from "react-icons/si";
import Footer from "@/components/layout/Footer";
import type { ProjectCatalogItem } from "@/lib/projectCatalog";
import { HOTLINE_DISPLAY, HOTLINE_TEL, ZALO_HREF } from "@/lib/contact";
import "swiper/css";

const navItems = ["Tổng quan", "Vị trí", "Tiện ích", "Căn hộ", "Chính sách"];

const heroFeatures = [
  ["Gần biển", "Mỹ Khê"],
  ["Sở hữu", "lâu dài"],
  ["Vị trí", "Sơn Trà"],
  ["Chuẩn sống", "resort"],
];

const heroStats = [
  ["Số lượng căn còn lại", "08", "căn đẹp"],
  ["Giá chỉ từ", "3.09", "tỷ"],
  ["Chiết khấu", "5%", "early bird"],
  ["Hỗ trợ vay", "70%", "GTCH"],
  ["Ân hạn gốc", "30", "tháng"],
];

const hotUnits = [
  {
    code: "F503A20",
    type: "2BR",
    area: "73.1 m²",
    garden: "59.5 m²",
    total: "132.6 m²",
    price: "5.583.822.200",
    image: "/images/projects/fours/fours-f503a20.jpg",
    featured: true,
  },
  {
    code: "F50526",
    type: "1BR+",
    area: "45.2 m²",
    garden: "13.3 m²",
    total: "58.5 m²",
    price: "3.237.889.352",
    image: "/images/projects/fours/fours-F50526.jpg",
  },
  {
    code: "F50830",
    type: "1BR+",
    area: "53.8 m²",
    garden: "0 m²",
    total: "53.8 m²",
    price: "3.115.519.529",
    image: "/images/projects/fours/fours-F50830.jpg",
  },
  {
    code: "F51905",
    type: "1BR+",
    area: "56.4 m²",
    garden: "3.8 m²",
    total: "60.2 m²",
    price: "3.319.470.852",
    image: "/images/projects/fours/fours-F51905.jpg",
  },
  {
    code: "F503A24",
    type: "1BR+",
    area: "45.2 m²",
    garden: "13.3 m²",
    total: "58.5 m²",
    price: "3.206.395.605",
    image: "/images/projects/fours/fours-F50526.jpg",
  },
  {
    code: "F51508",
    type: "1BR+",
    area: "50.5 m²",
    garden: "0 m²",
    total: "50.5 m²",
    price: "3.094.851.211",
    image: "/images/projects/fours/fours-F51508.jpg",
  },
  {
    code: "F51608",
    type: "1BR+",
    area: "50.5 m²",
    garden: "0 m²",
    total: "50.5 m²",
    price: "3.140.081.897",
    image: "/images/projects/fours/fours-F51608.jpg",
  },
  {
    code: "F10610",
    type: "2BR",
    area: "64.8 m²",
    garden: "16.0 m²",
    total: "80.8 m²",
    price: "4.578.378.303",
    image: "/images/projects/fours/fours-F10610.jpg",
  },
];

type HotUnit = (typeof hotUnits)[number];

const buyingReasons = [
  {
    icon: FiTrendingUp,
    title: "Trung tâm phát triển mới Nam Đà Nẵng",
    copy: "Hạ tầng phía Nam được Sun Group đẩy mạnh, giá còn đang đầu chu kỳ.",
  },
  {
    icon: FiAward,
    title: "Giá vẫn còn thấp hơn trung tâm sông Hàn",
    copy: "Trong khi quỹ căn mới gần sông không còn nhiều.",
  },
  {
    icon: FiShield,
    title: "Căn hộ sở hữu lâu dài hiếm dần",
    copy: "Đặc biệt tại khu ven sông, quy hoạch lớn và pháp lý rõ.",
  },
  {
    icon: FiCheckCircle,
    title: "Chính sách kéo giãn dòng tiền mạnh",
    copy: "Hỗ trợ vay và ân hạn giúp khách dễ dàng xuống tiền.",
  },
];

const comparisonRows = [
  ["Chủ đầu tư", "Sun Group", "Chủ đầu tư nhỏ lẻ"],
  ["Pháp lý", "Sở hữu lâu dài", "Thường chỉ 50 năm"],
  ["Hạ tầng", "Quy hoạch đồng bộ, hiện đại", "Hạ tầng cũ, manh mún"],
  ["Tiềm năng tăng giá", "Cao", "Thấp"],
  ["Công viên / sông", "Công viên, sông, tiện ích đa dạng", "Ít tiện ích, không gian hạn chế"],
];

const amenities = [
  ["Hồ bơi vô cực", "/images/projects/capital-square-hero.png"],
  ["Gym & Yoga", "/images/projects/capital-square-street.jpg"],
  ["Công viên nội khu", "/images/hero-song-han-clean.png"],
  ["Kid Club", "/images/projects/sun-solar-masterplan.jpg"],
  ["Sky Lounge", "/images/projects/sun-symphony-tower.jpg"],
  ["Shophouse khối đế", "/images/projects/sun-ponte-hero.jpg"],
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

      <section id="tong-quan" className="relative min-h-screen overflow-hidden px-5 pb-12 pt-24 sm:px-8 lg:px-10">
        <Image
          src="/images/projects/fours/fours-banner.webp"
          alt={project.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#020812]/96 via-[#06111e]/58 to-[#020812]/8" />
        <div className="absolute inset-0 bg-linear-to-t from-[#020812] via-transparent to-[#020812]/52" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_34%,rgba(245,199,106,0.18),transparent_22%),radial-gradient(circle_at_72%_18%,rgba(34,130,255,0.2),transparent_26%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col justify-center">
          <div className="max-w-[740px] pt-8 lg:pt-12">
            <h1 className="mt-5 max-w-5xl text-4xl font-black uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              <span className="block bg-linear-to-b from-[#FFF8DE] via-[#FFD071] to-[#9C5C1E] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,198,93,0.34)]">
                FourS Tower Đà Nẵng
              </span>
              <span className="block bg-linear-to-b from-[#FFF8DE] via-[#FFD071] to-[#9C5C1E] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,198,93,0.34)]">
                Căn hộ view biển Mỹ Khê cao cấp
              </span>
            </h1>
            <p className="mt-4 flex items-center gap-4 text-xl font-semibold uppercase tracking-[0.04em] text-white/95 sm:text-3xl">
              Giỏ hàng đẹp từ Sun Group
              <span className="hidden h-px flex-1 bg-linear-to-r from-[#F5C76A] to-transparent sm:block" />
            </p>
            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/78 sm:text-base">
              FourS Tower sở hữu vị trí gần biển Mỹ Khê, phù hợp khách hàng tìm kiếm căn hộ view biển Đà Nẵng để ở, đầu tư lâu dài hoặc khai thác cho thuê du lịch.
            </p>

            <div className="mt-7 grid max-w-[620px] grid-cols-2 gap-3 sm:grid-cols-4">
              {heroFeatures.map(([title, meta]) => (
                <div key={title} className="flex min-h-14 items-center gap-2 rounded-full border border-[#F5C76A]/28 bg-[#03111f]/42 px-3 py-2 shadow-[inset_0_0_20px_rgba(255,255,255,0.04)] backdrop-blur-md">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F5C76A]/58 bg-[#F5C76A]/10 text-[#F5C76A] shadow-[0_0_18px_rgba(245,199,106,0.28)]">
                    <FiCheckCircle className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-[0.62rem] font-bold leading-tight text-white/82">
                    {title}
                    <span className="block text-white">{meta}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid max-w-[920px] overflow-hidden rounded-[12px] border border-[#F5C76A]/24 bg-[#07131f]/52 shadow-[0_22px_70px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:grid-cols-5">
              {heroStats.map(([label, value, unit]) => (
                <div key={label} className="border-b border-[#F5C76A]/16 px-4 py-4 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                  <p className="text-[0.58rem] font-black uppercase tracking-[0.08em] text-white/78">{label}</p>
                  <p className="mt-2 bg-linear-to-b from-[#FFF8DE] via-[#FFD071] to-[#B46A23] bg-clip-text text-4xl font-black leading-none text-transparent lg:text-5xl">
                    {value}
                  </p>
                  <p className="mt-1 text-[0.62rem] font-black uppercase tracking-[0.08em] text-[#FFE1A0]">{unit}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:ml-[190px] lg:max-w-[680px]">
              <a href="#form" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[11px] bg-linear-to-b from-[#FFF2C2] via-[#F5C76A] to-[#B87325] px-7 text-xs font-black uppercase text-[#08111d] shadow-[0_0_34px_rgba(245,199,106,0.38)] transition-transform hover:-translate-y-0.5">
                Xem bảng giá thật
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#form" className="inline-flex min-h-12 items-center justify-center rounded-[11px] border border-[#F5C76A]/72 bg-[#07131f]/42 px-7 text-xs font-black uppercase text-white shadow-[inset_0_0_18px_rgba(245,199,106,0.08)] backdrop-blur transition-colors hover:bg-[#F5C76A] hover:text-[#08111d]">
                Nhận giỏ hàng VIP
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="can-ho" className="px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <SectionTitle eyebrow="Mặt bằng căn hộ FourS" title="Giỏ hàng căn hộ FourS Tower Đà Nẵng đang nhận booking" />
        <HotUnitsShowcase />
        {false && (
          <>
            <SectionTitle eyebrow="Căn hot nhất" title="Các mã căn đẹp đang được hỏi nhiều" />
            <div className="mx-auto mt-8 grid max-w-[1280px] gap-5 lg:grid-cols-[1.05fr_1.25fr]">
              <FeaturedUnit unit={hotUnits[0]} />
              <div className="grid gap-5 md:grid-cols-3">
                {hotUnits.slice(1).map((unit) => (
                  <SmallUnit key={unit.code} unit={unit} />
                ))}
              </div>
            </div>
            <div className="mx-auto mt-7 max-w-[1280px] text-right">
              <a href="#form" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#F5C76A] hover:text-white">
                Xem tất cả 08 căn còn lại
                <FiArrowRight />
              </a>
            </div>
          </>
        )}
      </section>

      <WhyCompareSection />
      {false && (
        <>
          <section className="border-y border-[#F5C76A]/10 bg-[#030B15] px-5 py-14 sm:px-8 lg:px-10">
            <SectionTitle eyebrow="Vì sao khách đang mua FourS?" title="Bốn lý do khiến giỏ hàng đẹp không nằm lâu" />
            <div className="mx-auto mt-8 grid max-w-[1280px] gap-4 md:grid-cols-2 lg:grid-cols-4">
              {buyingReasons.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="group rounded-[16px] border border-[#F5C76A]/12 bg-white/[0.035] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.24)] transition-all hover:-translate-y-1 hover:border-[#F5C76A]/42 hover:bg-white/[0.055]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[18px] border border-[#F5C76A]/28 bg-[#F5C76A]/10 text-[#F5C76A] shadow-[0_0_30px_rgba(245,199,106,0.16)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 text-sm font-black uppercase leading-relaxed text-[#FFE7AA]">{item.title}</h3>
                    <p className="mt-3 text-sm font-medium leading-7 text-white/56">{item.copy}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="px-5 py-14 sm:px-8 lg:px-10">
            <SectionTitle eyebrow="So sánh FourS với chung cư truyền thống" title="Khác biệt nằm ở pháp lý, quy hoạch và dư địa" />
            <div className="mx-auto mt-8 max-w-[1040px] overflow-hidden rounded-[18px] border border-[#F5C76A]/18 bg-white/[0.035] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <div className="grid grid-cols-3 bg-white/[0.045] text-center text-xs font-black uppercase tracking-[0.1em] text-white/78">
                <div className="p-4">Tiêu chí</div>
                <div className="border-x border-[#F5C76A]/20 bg-[#F5C76A]/10 p-4 text-[#F5C76A]">FourS Tower</div>
                <div className="p-4">Chung cư cũ</div>
              </div>
              {comparisonRows.map(([label, fours, old]) => (
                <div key={label} className="grid grid-cols-3 border-t border-white/8 text-center text-sm font-semibold text-white/68">
                  <div className="p-4 text-white">{label}</div>
                  <div className="border-x border-[#F5C76A]/16 bg-[#F5C76A]/[0.045] p-4 text-[#FFE7AA]">{fours}</div>
                  <div className="p-4">{old}</div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

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

      <section id="tien-ich" className="px-5 py-14 sm:px-8 lg:px-10">
        <SectionTitle eyebrow="Tiện ích chuẩn resort" title="Không gian sống đẳng cấp cho căn hộ cao cấp Đà Nẵng" />
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {amenities.map(([label, image]) => (
            <article key={label} className="group relative min-h-[190px] overflow-hidden rounded-[14px] border border-white/10 bg-white/[0.035]">
              <Image src={image} alt={label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 50vw, 16vw" />
              <div className="absolute inset-0 bg-linear-to-t from-[#020812]/88 via-[#020812]/12 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-center text-xs font-black uppercase tracking-[0.08em] text-white drop-shadow">
                {label}
              </p>
            </article>
          ))}
        </div>
      </section>

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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#F5C76A]/12 bg-[#020812]/72 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#tong-quan" className="flex items-center">
          <Image
            src="/images/logo-bds-da-nang-light.svg"
            alt="BĐS Đà Nẵng"
            width={178}
            height={50}
            priority
            className="h-11 w-auto object-contain"
          />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${slugifyNav(item)}`} className="text-[0.68rem] font-black uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-[#F5C76A]">
              {item}
            </a>
          ))}
        </nav>
        <a href={HOTLINE_TEL} className="inline-flex h-11 items-center gap-2 rounded-full border border-[#F5C76A]/50 px-4 text-xs font-black text-white transition-colors hover:bg-[#F5C76A] hover:text-[#08111d]">
          <FiPhone className="h-4 w-4 text-[#F5C76A]" />
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
    <section className="relative overflow-hidden border-y border-[#F5C76A]/8 bg-[#020A12] px-5 py-10 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(245,199,106,0.12),transparent_26%),radial-gradient(circle_at_82%_30%,rgba(0,120,255,0.09),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <LuxuryTitle>Lý do nên đầu tư FourS Tower</LuxuryTitle>

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {buyingReasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
                className="group relative min-h-[120px] overflow-hidden rounded-[12px] border border-white/[0.04] bg-linear-to-b from-white/[0.045] to-white/[0.015] px-5 py-4 shadow-[0_18px_36px_rgba(0,0,0,0.28)]"
              >
                <div className="absolute -bottom-8 -right-7 h-24 w-24 rounded-full bg-[#F5C76A]/10 blur-2xl transition-opacity group-hover:opacity-90" />
                <div className="flex items-start gap-4">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                    <div className="absolute inset-0 rotate-45 rounded-[13px] border border-[#F5C76A]/36 bg-[#F5C76A]/9 shadow-[0_0_24px_rgba(245,199,106,0.26)]" />
                    <Icon className="relative z-10 h-6 w-6 text-[#F5C76A]" />
                  </div>
                  <div>
                    <h3 className="text-[0.72rem] font-black uppercase leading-relaxed text-[#FFE7A8]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.72rem] font-medium leading-5 text-white/58">{item.copy}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-9">
          <LuxuryTitle>FourS Tower trong nhóm căn hộ đầu tư Đà Nẵng</LuxuryTitle>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto mt-5 grid max-w-7xl gap-3 lg:grid-cols-[1fr_1.28fr_1fr]"
          >
            <ComparisonCard
              title="Tiêu chí"
              values={comparisonRows.map(([label]) => label)}
            />
            <ComparisonCard
              title="FourS Tower"
              values={comparisonRows.map(([, fours]) => fours)}
              highlight
            />
            <ComparisonCard
              title="Chung cư cũ"
              values={comparisonRows.map(([, , old]) => old)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LuxuryTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 text-center">
      <span className="h-px w-16 bg-linear-to-r from-transparent to-[#B7782B]" />
      <span className="text-[#D99B42] drop-shadow-[0_0_12px_rgba(245,199,106,0.52)]">✦</span>
      <h2 className="bg-linear-to-b from-[#FFF4C7] via-[#F3BD61] to-[#A16022] bg-clip-text text-lg font-black uppercase tracking-[0.04em] text-transparent sm:text-xl">
        {children}
      </h2>
      <span className="text-[#D99B42] drop-shadow-[0_0_12px_rgba(245,199,106,0.52)]">✦</span>
      <span className="h-px w-16 bg-linear-to-l from-transparent to-[#B7782B]" />
    </div>
  );
}

function ComparisonCard({
  title,
  values,
  highlight = false,
}: {
  title: string;
  values: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[8px] border text-center shadow-[0_20px_48px_rgba(0,0,0,0.3)] ${highlight
        ? "border-[#F5C76A]/58 bg-[#0F1114] shadow-[0_0_34px_rgba(245,199,106,0.16),0_20px_48px_rgba(0,0,0,0.34)]"
        : "border-white/[0.08] bg-[#06111b]/88"
        }`}
    >
      <div
        className={`px-4 py-3.5 text-[0.72rem] font-black uppercase ${highlight
          ? "bg-linear-to-b from-[#6B4218]/92 to-[#241506]/94 text-[#FFF0B8] shadow-[inset_0_0_22px_rgba(245,199,106,0.2)]"
          : "bg-white/[0.055] text-white"
          }`}
      >
        {title}
      </div>
      {values.map((value) => (
        <div
          key={value}
          className={`border-t px-4 py-3.5 text-[0.72rem] font-semibold leading-5 ${highlight
            ? "border-[#F5C76A]/16 bg-linear-to-b from-[#24180B]/78 to-[#0F1216]/86 font-black text-[#FFE7A8]"
            : "border-white/[0.055] text-white/72"
            }`}
        >
          {value}
        </div>
      ))}
    </div>
  );
}

function HotUnitsShowcase() {
  const [selectedUnit, setSelectedUnit] = useState<HotUnit | null>(null);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-7 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-linear-to-r from-transparent to-[#B7782B]" />
        <span className="text-[#D99B42] drop-shadow-[0_0_14px_rgba(245,199,106,0.55)]">✦</span>
        <h2 className="bg-linear-to-b from-[#FFF4C7] via-[#F2B95D] to-[#A16022] bg-clip-text text-center text-xl font-black uppercase tracking-[0.06em] text-transparent">
          Căn hot nhất
        </h2>
        <span className="text-[#D99B42] drop-shadow-[0_0_14px_rgba(245,199,106,0.55)]">✦</span>
        <span className="h-px w-12 bg-linear-to-l from-transparent to-[#B7782B]" />
      </div>

      <div className="grid items-stretch gap-6 lg:grid-cols-[410px_minmax(0,1fr)]">
        <FeaturedHotUnit unit={hotUnits[0]} onOpen={setSelectedUnit} />

        <div className="relative min-w-0 px-0 lg:px-3">
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
            className="!h-[420px] !pb-0"
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
            className="fours-hot-prev absolute -left-7 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#F5C76A]/45 bg-[#241504]/94 text-[#F5C76A] shadow-[0_0_24px_rgba(245,199,106,0.3)] transition-colors hover:bg-[#F5C76A] hover:text-[#08111d] lg:flex"
          >
            <FiChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Căn tiếp theo"
            className="fours-hot-next absolute -right-7 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#F5C76A]/45 bg-[#08111d]/94 text-[#F5C76A] shadow-[0_0_24px_rgba(245,199,106,0.3)] transition-colors hover:bg-[#F5C76A] hover:text-[#08111d] lg:flex"
          >
            <FiChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-center lg:justify-end">
        <a
          href="#form"
          className="inline-flex items-center gap-2 text-[0.72rem] font-black uppercase tracking-[0.08em] text-[#F5C76A] drop-shadow-[0_0_12px_rgba(245,199,106,0.42)] transition-colors hover:text-white"
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
      className="relative h-[420px] cursor-pointer overflow-hidden rounded-[10px] border border-[#CF8D35]/70 bg-[#07111b]/88 p-5 shadow-[0_0_35px_rgba(245,199,106,0.14),inset_0_0_32px_rgba(245,199,106,0.04)] outline-none transition-all hover:-translate-y-1 hover:border-[#F5C76A] focus-visible:ring-2 focus-visible:ring-[#F5C76A]"
    >
      <span className="absolute left-0 top-0 z-20 rounded-br-[8px] bg-linear-to-r from-[#C48632] via-[#FFE19A] to-[#B97628] px-3 py-1.5 text-[0.58rem] font-black uppercase text-[#15100a]">
        Căn sân vườn hiếm
      </span>

      <div className="grid h-[310px] gap-5 pt-7 sm:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10 flex min-w-0 flex-col">
          <h3 className="bg-linear-to-b from-[#FFF3C6] via-[#F4BD62] to-[#A76322] bg-clip-text text-[2.35rem] font-black leading-none text-transparent">
            {unit.code}
          </h3>
          <p className="mt-2 text-sm font-black uppercase tracking-[0.02em] text-white">{unit.type}</p>

          <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3">
            <HotSpec label="DT thông thủy" value={unit.area} />
            <HotSpec label="DT sân vườn" value={unit.garden || ""} />
            <HotSpec label="DT sàn" value="59.5 m²" />
            <HotSpec label="Tổng diện tích" value={unit.total || ""} />
          </dl>

          <div className="mt-auto pt-3 pb-2">
            <p className="text-xs font-bold text-white/74">Giá bán</p>
            <p className="mt-1 text-[1.25rem] font-black leading-tight text-[#FFE59B]">
              {unit.price} <span className="text-[0.62rem] text-white/70">VND</span>
            </p>
          </div>
        </div>

        <div className="relative h-full overflow-hidden rounded-[8px]">
          <Image
            src={unit.image}
            alt={`Layout căn ${unit.code}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 380px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#06101a]/48 to-transparent" />
          <div className="absolute bottom-5 right-3 flex h-19 w-19 rotate-[-10deg] items-center justify-center rounded-full border border-[#FFE19A]/70 bg-[#4B2A07]/82 text-center text-[0.56rem] font-black uppercase leading-tight text-[#FFE9B3] shadow-[0_0_28px_rgba(245,199,106,0.62)]">
            Hiếm nhất<br />giỏ hàng
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-10 grid gap-3 sm:grid-cols-2">
        <button type="button" onClick={(event) => { event.stopPropagation(); onOpen(unit); }} className="inline-flex h-9 items-center justify-center rounded-[6px] bg-linear-to-b from-[#FFF2C2] via-[#F4BE63] to-[#A76222] text-[0.64rem] font-black uppercase text-[#0B1119] shadow-[0_0_18px_rgba(245,199,106,0.28)]">
          Xem layout
        </button>
        <a href="#form" onClick={(event) => event.stopPropagation()} className="inline-flex h-9 items-center justify-center rounded-[6px] border border-[#E2A34C]/60 bg-[#07111b]/42 text-[0.64rem] font-black uppercase text-white transition-colors hover:bg-[#F5C76A] hover:text-[#08111d]">
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
      className="group flex h-[420px] cursor-pointer flex-col overflow-hidden rounded-[9px] border border-[#D0903A]/30 bg-[#07111b]/78 shadow-[0_18px_45px_rgba(0,0,0,0.34)] outline-none transition-all hover:-translate-y-1 hover:border-[#F5C76A]/58 focus-visible:ring-2 focus-visible:ring-[#F5C76A]"
    >
      <div className="relative h-[165px] shrink-0 overflow-hidden">
        <Image
          src={unit.image}
          alt={`Căn hộ ${unit.code}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          sizes="(max-width: 1024px) 48vw, 240px"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#07111b]/58 to-transparent" />
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-5">
        <h3 className="bg-linear-to-b from-[#FFF3C6] via-[#F2B95D] to-[#A16022] bg-clip-text text-2xl font-black leading-none text-transparent">
          {unit.code}
        </h3>
        <p className="mt-1 text-sm font-black uppercase text-white">{unit.type}</p>

        <div className="mt-5 flex items-center justify-between text-[0.68rem] font-semibold">
          <span className="text-white/64">DT TT</span>
          <span className="text-white">{unit.area}</span>
        </div>

        <div className="mt-4">
          <p className="text-[0.68rem] font-semibold text-white/64">Giá bán</p>
          <p className="mt-1 text-base font-black leading-tight text-[#FFE59B]">
            {unit.price} <span className="text-[0.58rem] text-white/64">VND</span>
          </p>
        </div>

        <button type="button" onClick={(event) => { event.stopPropagation(); onOpen(unit); }} className="mt-auto inline-flex h-9 shrink-0 items-center justify-center rounded-[6px] border border-[#D0903A]/68 bg-[#07111b]/38 text-[0.64rem] font-black uppercase text-white transition-colors hover:bg-[#F5C76A] hover:text-[#08111d]">
          Xem chi tiết
        </button>
      </div>
    </article>
  );
}

function UnitLayoutModal({ unit, onClose }: { unit: HotUnit; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#020812]/92 px-4 py-6 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`Layout căn ${unit.code}`}
      onClick={onClose}
    >
      <div
        className="relative grid max-h-[calc(100vh-48px)] w-full max-w-7xl overflow-hidden rounded-[12px] border border-[#F5C76A]/28 bg-[#06101a] shadow-[0_30px_90px_rgba(0,0,0,0.58)] lg:grid-cols-[minmax(0,1fr)_330px]"
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

        <div className="relative min-h-[40vw] bg-white p-3">
          <Image
            src={unit.image}
            alt={`Layout căn ${unit.code}`}
            fill
            className="object-contain p-3"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
        </div>

        <aside className="flex min-h-0 flex-col border-t border-[#F5C76A]/16 bg-[#07111b] p-5 lg:border-l lg:border-t-0 lg:p-6">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#F5C76A]">Layout căn hộ</p>
          <h3 className="mt-3 bg-linear-to-b from-[#FFF3C6] via-[#F2B95D] to-[#A16022] bg-clip-text text-4xl font-black leading-none text-transparent">
            {unit.code}
          </h3>
          <p className="mt-2 text-sm font-black uppercase text-white">{unit.type}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            <HotSpec label="DT thông thủy" value={unit.area} />
            <HotSpec label="DT sân vườn" value={unit.garden || "0 m²"} />
            <HotSpec label="Tổng diện tích" value={unit.total || unit.area} />
            <HotSpec label="Chính sách" value="5% EB" />
          </dl>

          <div className="mt-6 rounded-[8px] border border-[#F5C76A]/18 bg-[#F5C76A]/8 p-4">
            <p className="text-xs font-semibold text-white/64">Giá bán gồm VAT & KPBT</p>
            <p className="mt-2 text-2xl font-black leading-tight text-[#FFE59B]">
              {unit.price} <span className="text-xs text-white/68">VND</span>
            </p>
          </div>

          <div className="mt-auto grid gap-3 pt-6">
            <a href={HOTLINE_TEL} className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-linear-to-b from-[#FFF2C2] via-[#F4BE63] to-[#A76222] text-xs font-black uppercase text-[#08111d] shadow-[0_0_20px_rgba(245,199,106,0.26)]">
              <FiPhone className="h-4 w-4" />
              Gọi tư vấn căn này
            </a>
            <a href={ZALO_HREF} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border border-[#F5C76A]/48 bg-white/[0.035] text-xs font-black uppercase text-white transition-colors hover:bg-[#F5C76A] hover:text-[#08111d]">
              <SiZalo className="h-4 w-4" />
              Nhận layout qua Zalo
            </a>
            <a href="#form" onClick={onClose} className="inline-flex h-11 items-center justify-center rounded-[8px] border border-white/12 text-xs font-black uppercase text-white/82 transition-colors hover:border-white/34 hover:text-white">
              Nhận bảng giá & chính sách
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

function HotSpec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.68rem] font-semibold text-white/64">{label}</dt>
      <dd className="mt-1 text-[0.72rem] font-black text-white">{value}</dd>
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
          <p className="mt-1 text-2xl font-black text-[#FFE7AA]">{unit.price} <span className="text-xs">VND</span></p>
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
        <p className="mt-1 text-lg font-black text-white">{unit.price} <span className="text-[0.62rem] text-white/52">VND</span></p>
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

