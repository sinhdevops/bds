"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

const SalesPolicyContent = () => {
  const steps = useMemo(
    () => [
      { step: "Đợt 1", val: "Đặt cọc", desc: "Đóng 50,000,000 VND ký văn bản thỏa thuận đặt cọc." },
      { step: "Lựa chọn 1", val: "Thanh toán theo đợt", desc: "Tỷ lệ và thời hạn từng đợt phụ thuộc chính sách bán hàng của từng dự án tại thời điểm tư vấn." },
      { step: "Lựa chọn 2", val: "Thanh toán nhanh", desc: "Một số dự án có phương án thanh toán sớm, có thể lên đến khoảng 95% giá trị theo chính sách công bố." },
      { step: "Hỗ trợ vay", val: "Theo ngân hàng", desc: "Tỷ lệ vay và thời gian hỗ trợ lãi suất phụ thuộc ngân hàng, hồ sơ khách hàng và chính sách từng dự án." },
      { step: "Ký HĐMB", val: "Theo hồ sơ dự án", desc: "Khách hàng cần kiểm tra chủ thể ký hợp đồng, lịch thanh toán, phụ lục và điều kiện hoàn/khấu trừ cọc." },
      { step: "Bàn giao", val: "Theo thông báo", desc: "Thời điểm bàn giao và chi phí liên quan cần được xác nhận bằng tài liệu có thẩm quyền." },
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
              val: "Theo từng dự án",
              desc: "Một số chính sách có ưu đãi cho phương án thanh toán nhanh hoặc thanh toán sớm, cần xác nhận theo bảng chính sách hiện hành.",
            },
            {
              title: "Hỗ Trợ Lãi Suất Ngân Hàng",
              val: "Có thể đến 30 tháng",
              desc: "Thời gian hỗ trợ lãi suất, tỷ lệ vay và điều kiện duyệt vay phụ thuộc ngân hàng, hồ sơ khách hàng và chính sách từng thời điểm.",
            },
            {
              title: "Chính Sách Cần Xác Nhận",
              val: "Không cố định",
              desc: "BĐS Đà Nẵng chỉ tư vấn thông tin tham khảo. Giá, ưu đãi và tiến độ thanh toán cuối cùng theo tài liệu có thẩm quyền.",
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
            <h3 className="font-serif text-2xl text-[#0B2545] font-medium" style={{ fontFamily: "var(--font-serif)" }}>Các Phương Án Thanh Toán Tham Khảo</h3>
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
