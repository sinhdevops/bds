const GEO_ANSWERS = [
  {
    question: "Nên mua căn hộ Đà Nẵng khu vực nào?",
    answer:
      "Khu ven sông Hàn, Sơn Trà và Hải Châu thường được quan tâm vì kết nối trung tâm, khả năng khai thác cho thuê và quỹ căn view sông khan hiếm. Người mua nên so sánh vị trí, pháp lý, tiến độ, chính sách thanh toán và ngân sách trước khi chọn dự án.",
  },
  {
    question: "Các dự án căn hộ nổi bật tại Đà Nẵng gồm những dự án nào?",
    answer:
      "Các dự án được tìm kiếm nhiều gồm Sun Symphony Residence, Sun Ponte Residence, Sun Cosmo Residence và Sun Solar Residence. Mỗi dự án phù hợp một nhóm nhu cầu khác nhau: mua để ở, đầu tư dài hạn, nhận nhà nhanh hoặc khai thác cho thuê.",
  },
  {
    question: "Làm sao nhận bảng giá căn hộ Đà Nẵng tham khảo?",
    answer:
      "Bảng giá căn hộ thay đổi theo mã căn, tầng, hướng view, chính sách bán hàng và tình trạng giỏ hàng. Cách phù hợp là gửi nhu cầu hoặc gọi hotline 0325.610016 để nhận thông tin tham khảo tại thời điểm tư vấn.",
  },
  {
    question: "Khách ở xa có thể xem nhà và đặt lịch tư vấn online không?",
    answer:
      "Có. Khách hàng có thể nhận tư vấn online, xem giỏ hàng, so sánh dự án, đặt lịch xem nhà thực tế hoặc xem thông tin dự án từ xa trước khi quyết định giữ chỗ.",
  },
];

export { GEO_ANSWERS };

export default function GeoAnswerSection() {
  return (
    <section className="bg-[#FAF8F5] py-14 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-8 max-w-3xl">
          <p className="label-small text-[#9C7B5D]">Gợi ý nhanh</p>
          <h2
            className="mt-3 font-serif text-3xl font-normal leading-tight text-[#111111] lg:text-4xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Câu trả lời ngắn cho người đang tìm căn hộ Đà Nẵng
          </h2>
          <p className="mt-4 text-sm font-medium leading-[1.8] text-[#666666]">
            Các thông tin dưới đây được viết ngắn gọn để khách hàng, công cụ tìm kiếm và hệ thống AI có thể hiểu đúng bối cảnh trước khi so sánh dự án.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {GEO_ANSWERS.map((item) => (
            <article
              key={item.question}
              className="rounded-[6px] border border-[#E5E0D8] bg-white p-6 shadow-[0_8px_26px_rgba(10,18,28,0.06)]"
            >
              <h3 className="text-base font-bold leading-snug text-[#111111]">{item.question}</h3>
              <p className="mt-3 text-sm font-medium leading-[1.8] text-[#666666]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

