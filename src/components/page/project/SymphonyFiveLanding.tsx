import Image from "next/image";
import { FiArrowRight, FiCheck, FiMapPin, FiPhoneCall } from "react-icons/fi";
import type { ProjectCatalogItem } from "@/lib/projectCatalog";
import { HOTLINE_DISPLAY, HOTLINE_TEL } from "@/lib/contact";
import SymphonyLeadButton from "./SymphonyLeadButton";

const storyPoints = [
  {
    eyebrow: "Một vị trí có thể kể chuyện",
    title: "Sáng mở mắt là sông Hàn, tối nhìn thành phố lên đèn.",
    copy:
      "Symphony 5 không bán một căn hộ đơn thuần. Sản phẩm bán cảm giác sở hữu một tọa độ ven sông dễ nhận diện, nơi nhịp sống Sơn Trà, biển Mỹ Khê và trung tâm Đà Nẵng cùng xuất hiện trong một khung nhìn.",
  },
  {
    eyebrow: "Giá trị để ở và khai thác",
    title: "Một tài sản đẹp hơn khi được trải nghiệm trực tiếp.",
    copy:
      "Câu chuyện view sông, view biển và pháo hoa giúp căn hộ có lợi thế truyền thông tự nhiên khi ở, cho thuê hoặc bán lại. Với dòng sản phẩm cao cấp, cảm xúc của người xem nhà thường là phần quyết định sau cùng.",
  },
];

const signatureViews = ["Sông Hàn", "Biển Mỹ Khê", "Pháo hoa", "Skyline Đà Nẵng"];

const apartmentTypes = [
  ["Studio", "52m²", "Tối ưu vốn vào"],
  ["1PN", "63 - 70m²", "Dễ khai thác thuê"],
  ["2PN", "72 - 86m²", "Cân bằng ở và đầu tư"],
  ["3PN", "108 - 138m²", "Không gian gia đình"],
  ["Penthouse", "158m²", "Tầm nhìn biểu tượng"],
];

const investmentNotes = [
  "Vị trí Trần Hưng Đạo - Lê Văn Duyệt, kết nối nhanh qua các cây cầu trung tâm.",
  "Tòa 39 tầng, khoảng 396 căn, tạo độ hiếm cho nhóm căn có view đẹp.",
  "Dải diện tích 52 - 158m² giúp chọn ngân sách linh hoạt theo chiến lược nắm giữ.",
  "Thương hiệu Sun Group và câu chuyện ven sông hỗ trợ thanh khoản dài hạn.",
];

export default function SymphonyFiveLanding({ project }: { project: ProjectCatalogItem }) {
  return (
    <main className="bg-[#101820] text-white">
      <section className="relative min-h-[calc(100svh-72px)] overflow-hidden">
        <Image src={project.heroImage} alt={project.name} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-r from-[#081018]/96 via-[#101820]/66 to-[#101820]/12" />
        <div className="absolute inset-0 bg-linear-to-t from-[#101820] via-[#101820]/20 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C8A46D]/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] max-w-[1280px] flex-col justify-end px-5 pb-10 pt-28 sm:px-8 lg:px-10 lg:pb-16">
          <div className="max-w-4xl">
            <p className="label-small mb-5 text-[#D6B77F]">Sun Group · Ven sông Hàn · Symphony 5</p>
            <h1
              className="font-serif text-5xl font-normal leading-[0.98] text-white sm:text-6xl lg:text-[6.8rem]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Sở hữu một khung nhìn biết kể chuyện.
            </h1>
            <p className="mt-7 max-w-2xl text-base font-medium leading-[1.9] text-white/72 sm:text-lg">
              {project.name} dành cho khách hàng muốn một tài sản ven sông giàu cảm xúc, dễ nhận diện và có câu chuyện đủ đẹp để ở, khai thác hoặc nắm giữ dài hạn.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <SymphonyLeadButton />
              <a
                href={HOTLINE_TEL}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] border border-white/24 bg-white/6 px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:border-[#D6B77F] hover:text-[#D6B77F]"
              >
                <FiPhoneCall className="h-4 w-4" aria-hidden="true" />
                {HOTLINE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-3 lg:max-w-3xl">
            {[
              ["Giá từ", `${project.priceFrom} tỷ`],
              ["Diện tích", project.area],
              ["Bàn giao", project.handover],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#101820]/72 p-5 backdrop-blur">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/42">{label}</p>
                <p className="mt-2 font-serif text-2xl text-white" style={{ fontFamily: "var(--font-serif)" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F2EA] px-5 py-16 text-[#151515] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="label-small text-[#9A7849]">Digital brochure</p>
            <h2
              className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Không gian bán cảm xúc trước khi bán diện tích.
            </h2>
          </div>
          <p className="text-base font-medium leading-[1.9] text-[#56514A] lg:text-lg">
            Symphony 5 được đặt trong bối cảnh đẹp nhất của bất động sản Đà Nẵng: sông, biển, cầu và ánh sáng thành phố. Landing này giữ lại những điều tác động trực tiếp đến quyết định mua, bỏ bớt nhiễu để khách tập trung vào giá trị của một căn hộ ven sông có tính biểu tượng.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-2 lg:gap-16">
          {storyPoints.map((item, index) => (
            <article key={item.title} className={index === 1 ? "lg:mt-28" : ""}>
              <div className="relative overflow-hidden rounded-[6px]" style={{ aspectRatio: "4/5" }}>
                <Image
                  src={index === 0 ? "/images/hero-song-han-clean.png" : "/images/projects/sun-symphony-tower.jpg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#101820]/80 via-transparent to-transparent" />
              </div>
              <p className="label-small mt-8 text-[#D6B77F]">{item.eyebrow}</p>
              <h3
                className="mt-4 font-serif text-3xl font-normal leading-tight text-white sm:text-4xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {item.title}
              </h3>
              <p className="mt-5 text-sm font-medium leading-[1.9] text-white/62 sm:text-base">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1218] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="label-small text-[#D6B77F]">Signature views</p>
            <h2
              className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Bốn lớp cảnh quan tạo nên sức hút của Symphony 5.
            </h2>
          </div>
          <div className="grid gap-px bg-white/12 sm:grid-cols-2">
            {signatureViews.map((view, index) => (
              <div key={view} className="min-h-40 bg-[#0B1218] p-7">
                <p className="font-serif text-5xl text-[#D6B77F]/42" style={{ fontFamily: "var(--font-serif)" }}>
                  0{index + 1}
                </p>
                <p className="mt-8 text-lg font-semibold text-white">{view}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F2EA] px-5 py-16 text-[#151515] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="label-small text-[#9A7849]">Lý do xuống tiền</p>
              <h2
                className="mt-4 font-serif text-4xl font-normal leading-tight sm:text-5xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Căn đẹp không chỉ khác giá. Căn đẹp khác khả năng kể lại.
              </h2>
            </div>
            <div className="grid gap-4">
              {investmentNotes.map((note) => (
                <div key={note} className="flex gap-4 border-t border-[#D9CEBE] pt-4">
                  <FiCheck className="mt-1 h-4 w-4 shrink-0 text-[#9A7849]" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-[1.8] text-[#514B43]">{note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-px bg-[#D9CEBE] md:grid-cols-5">
            {apartmentTypes.map(([type, area, note]) => (
              <div key={type} className="bg-[#F7F2EA] p-5">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.13em] text-[#9A7849]">{type}</p>
                <p className="mt-5 font-serif text-3xl text-[#151515]" style={{ fontFamily: "var(--font-serif)" }}>
                  {area}
                </p>
                <p className="mt-3 min-h-10 text-xs font-semibold leading-[1.6] text-[#6C6358]">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-[6px]">
            <Image src="/images/projects/sun-symphony-tower.jpg" alt="Tòa căn hộ Sun Symphony 5" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div className="relative min-h-[250px] overflow-hidden rounded-[6px]">
              <Image src="/images/hero-song-han-clean.png" alt="Không gian sông Hàn Đà Nẵng" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
            <div className="border border-white/12 p-7">
              <p className="label-small text-[#D6B77F]">Địa chỉ</p>
              <div className="mt-4 flex gap-3">
                <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-[#D6B77F]" aria-hidden="true" />
                <p className="text-lg font-semibold leading-[1.7] text-white/82">{project.address}, {project.location}</p>
              </div>
              <SymphonyLeadButton label="Đặt lịch xem vị trí" className="mt-7" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <Image src={project.heroImage} alt="Sun Symphony 5" fill className="object-cover opacity-28" sizes="100vw" />
        <div className="absolute inset-0 bg-[#101820]/82" />
        <div className="relative z-10 mx-auto max-w-[880px] text-center">
          <p className="label-small text-[#D6B77F]">Private consultation</p>
          <h2
            className="mt-5 font-serif text-4xl font-normal leading-tight sm:text-6xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Chọn đúng mã căn là phần quan trọng nhất của Symphony 5.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-[1.9] text-white/66">
            Nhận bảng giá, giỏ hàng và tư vấn hướng view theo ngân sách. Ưu tiên các căn có câu chuyện tốt: tầng, hướng, khoảng nhìn và lịch thanh toán phù hợp.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <SymphonyLeadButton label="Nhận tư vấn mã căn" />
            <a
              href={HOTLINE_TEL}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] border border-white/24 px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:border-[#D6B77F] hover:text-[#D6B77F]"
            >
              Gọi {HOTLINE_DISPLAY}
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
