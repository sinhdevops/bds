"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface ValueCardProps {
  num: string;
  title: string;
  desc: string;
}

const ValueCard = React.memo(({ num, title, desc }: ValueCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    className="p-8 bg-white border border-[#E5E0D8]/40 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col gap-4"
  >
    <span className="font-serif text-3xl text-[#C6A77D] font-light leading-none" style={{ fontFamily: "var(--font-serif)" }}>
      {num}
    </span>
    <h3 className="label-medium text-[#0B2545] font-semibold">{title}</h3>
    <p className="text-sm text-[#555555] font-light leading-relaxed">{desc}</p>
  </motion.div>
));

ValueCard.displayName = "ValueCard";

const AboutContent = () => {
  // Memoize core values to optimize performance
  const coreValues = useMemo(
    () => [
      {
        num: "01",
        title: "Tín Nghĩa Hàng Đầu",
        desc: "Luôn đặt chữ Tín làm kim chỉ nam, cam kết cung cấp những thông tin pháp lý dự án minh bạch và chính xác tuyệt đối.",
      },
      {
        num: "02",
        title: "Chuyên Nghiệp Tận Tâm",
        desc: "Đội ngũ chuyên viên tư vấn giàu kinh nghiệm, tận tụy phục vụ quý khách hàng trong suốt vòng đời đầu tư dự án.",
      },
      {
        num: "03",
        title: "Giá Trị Bền Vững",
        desc: "Đồng hành kiến tạo những bất động sản dòng chảy giá trị trường tồn, gia tăng giá trị theo thời gian bên bờ sông Hàn.",
      },
    ],
    []
  );

  return (
    <section className="bg-[#FAF8F5] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Core Pillars */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-small text-[#9C7B5D] block mb-4">Sứ Mệnh & Tầm Nhìn</span>
            <h2
              className="font-serif text-headline text-[#0B2545] font-light leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Cánh chim đầu đàn
              <br />
              <em>phân phối bất động sản cao cấp</em>
            </h2>
            <p className="text-[#555555] text-base leading-[1.8] font-light mb-6">
              BĐS Đà Nẵng là kênh cập nhật và tư vấn các dự án bất động sản cao cấp tại Đà Nẵng. Chúng tôi tập trung cung cấp thông tin rõ ràng về vị trí, giỏ hàng, chính sách và pháp lý để khách hàng ra quyết định tốt hơn.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="p-8 bg-[#F6F3EE] rounded-2xl border border-[#E5E0D8]/60">
              <h3 className="label-medium text-[#0B2545] font-bold mb-3 uppercase tracking-wider">Tầm Nhìn Chiến Lược</h3>
              <p className="text-sm text-[#555555] leading-relaxed font-light">
                Trở thành biểu tượng của sự tin cậy, chuyên nghiệp trong lĩnh vực phân phối bất động sản cao cấp và nghỉ dưỡng tại miền Trung, mang lại chất sống thượng lưu đỉnh cao cho khách hàng.
              </p>
            </div>
            <div className="p-8 bg-[#F6F3EE] rounded-2xl border border-[#E5E0D8]/60">
              <h3 className="label-medium text-[#0B2545] font-bold mb-3 uppercase tracking-wider">Sứ Mệnh Đồng Hành</h3>
              <p className="text-sm text-[#555555] leading-relaxed font-light">
                Không ngừng kiến tạo và khai mở tiềm năng bất động sản nghỉ dưỡng, mang đến cho nhà đầu tư những tuyệt tác kiến trúc sở hữu giá trị trường tồn cùng tính thanh khoản ưu tú.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values grid */}
        <div>
          <div className="text-center mb-16">
            <span className="label-small text-[#9C7B5D] block mb-4 uppercase">Giá Trị Cốt Lõi</span>
            <h2 className="font-serif text-headline text-[#0B2545] font-light" style={{ fontFamily: "var(--font-serif)" }}>
              Giá Trị Xây Dựng <em>Niềm Tin</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((val) => (
              <ValueCard key={val.num} {...val} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutContent);
