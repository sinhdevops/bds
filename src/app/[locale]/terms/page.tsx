export const metadata = {
  title: "Điều Khoản Sử Dụng — SRT Miền Trung",
  description: "Các điều khoản và điều kiện áp dụng cho người dùng truy cập và tra cứu thông tin bất động sản trên website chính thức của SRT Miền Trung.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative w-full h-[30vh] min-h-[220px] overflow-hidden flex items-center justify-center bg-[#0B2545]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/40 via-[#0B2545]/60 to-[#0B2545] z-0" />
        <div className="relative text-center z-10 pt-16">
          <h1 className="font-serif text-white font-light text-3xl md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
            Điều Khoản Sử Dụng
          </h1>
        </div>
      </section>

      <section className="bg-[#FAF8F5] py-16 lg:py-24 text-[#555555]">
        <div className="max-w-[800px] mx-auto px-6 font-light leading-relaxed text-sm md:text-base flex flex-col gap-6">
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
            1. Quy định chung
          </h2>
          <p>
            Chào mừng quý khách đến với cổng thông tin bất động sản chính thức của **SRT Miền Trung**. Khi truy cập và sử dụng trang web này, quý khách mặc nhiên đồng ý tuân thủ toàn bộ các điều khoản và điều kiện được nêu dưới đây. Nếu không đồng ý, xin vui lòng ngừng truy cập.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            2. Quyền sở hữu trí tuệ
          </h2>
          <p>
            Toàn bộ nội dung trên website bao gồm văn bản, thiết kế, hình ảnh dự án, sơ đồ tầng tháp Symphony 5, các mã nguồn, nhãn hiệu thương hiệu đều thuộc quyền sở hữu trí tuệ của **SRT Miền Trung** và các đối tác liên quan. Nghiêm cấm mọi hành vi sao chép, phân phối hoặc tái xuất bản khi chưa có sự đồng ý bằng văn bản từ chúng tôi.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            3. Giới hạn trách nhiệm
          </h2>
          <p>
            Các thông tin về căn hộ, giá bán và chính sách bán hàng của dự án Sun Symphony Residence, Sun Ponte Residence chỉ mang tính chất tham khảo dự kiến. SRT Miền Trung nỗ lực đảm bảo thông tin chính xác nhất nhưng không chịu trách nhiệm pháp lý đối với bất kỳ sai lệch khách quan nào từ phía chủ đầu tư.
          </p>
        </div>
      </section>
    </>
  );
}
