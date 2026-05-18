"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

const SalesPolicyContent = () => {
  const steps = useMemo(
    () => [
      { step: "Đợt 1", val: "Đặt cọc", desc: "Đóng 50,000,000 VND ký văn bản thỏa thuận đặt cọc." },
      { step: "Đợt 2", val: "10% giá trị", desc: "Thanh toán 10% (đã gồm cọc) trong vòng 10 ngày từ ngày cọc." },
      { step: "Đợt 3", val: "15% ký HĐMB", desc: "Thanh toán 15% khi ký kết hợp đồng mua bán chính thức." },
      { step: "Các Đợt Tiếp", val: "Năm 2026 - 2027", desc: "Chia nhỏ thành 8 đợt thanh toán từ 5% - 10% mỗi đợt cách nhau 60 ngày." },
      { step: "Bàn Giao", val: "25% giá trị", desc: "Thanh toán 25% khi nhận thông báo bàn giao căn hộ hoàn thiện." },
      { step: "Sổ Hồng", val: "5% cuối cùng", desc: "Thanh toán 5% còn lại khi có thông báo nhận bàn giao quyền sở hữu nhà." },
    ],
    []
  );

  return (
    <section className="bg-[#FAF8F5] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="label-small text-[#9C7B5D] block mb-4 uppercase">Chính Sách Bán Hàng Dự Kiến</span>
          <h2 className="font-serif text-headline text-[#0B2545] font-light" style={{ fontFamily: "var(--font-serif)" }}>
            Chính Sách & <em>Tiến Độ Thanh Toán</em>
          </h2>
        </div>

        {/* Highlight details */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Chiết Khấu Thanh Toán Sớm",
              val: "Lên Đến 10%",
              desc: "Chiết khấu trực tiếp vào giá bán chưa VAT + KPBT khi quý khách chọn phương án thanh toán sớm bằng vốn tự có.",
            },
            {
              title: "Hỗ Trợ Lãi Suất Ngân Hàng",
              val: "0% Lên Đến 24 Tháng",
              desc: "Hỗ trợ vay vốn ngân hàng lên đến 70% giá trị căn hộ với lãi suất 0% và ân hạn nợ gốc suốt 24 tháng từ ngày giải ngân.",
            },
            {
              title: "Quà Tặng Tri Ân Khách Hàng",
              val: "Miễn Phí Quản Lý 3 Năm",
              desc: "Đặc quyền miễn phí dịch vụ quản lý vận hành tòa tháp cao cấp trong 3 năm đầu tiên từ thời điểm nhận bàn giao nhà.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 bg-white border border-[#E5E0D8]/40 rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.02)] flex flex-col gap-4 text-center items-center"
            >
              <h3 className="label-medium text-[#8A8A8A] font-medium">{item.title}</h3>
              <span className="font-serif text-2xl text-[#C6A77D] font-bold" style={{ fontFamily: "var(--font-serif)" }}>{item.val}</span>
              <p className="text-xs text-[#555555] font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Payment steps */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl text-[#0B2545] font-medium" style={{ fontFamily: "var(--font-serif)" }}>Tiến Độ Thanh Toán Chuẩn</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((st, i) => (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 bg-[#F6F3EE] border border-[#E5E0D8]/60 rounded-xl"
              >
                <span className="text-[10px] text-[#C6A77D] font-bold uppercase tracking-wider block mb-1">{st.step}</span>
                <h4 className="text-sm text-[#0B2545] font-bold mb-2">{st.val}</h4>
                <p className="text-xs text-[#555555] font-light leading-relaxed">{st.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default React.memo(SalesPolicyContent);
