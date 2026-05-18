export const metadata = {
  title: "Chính Sách Bảo Mật — SRT Miền Trung",
  description: "Bảo mật thông tin khách hàng là ưu tiên hàng đầu tại SRT Miền Trung. Tìm hiểu cách chúng tôi thu thập, sử dụng và bảo mật dữ liệu của quý khách.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative w-full h-[30vh] min-h-[220px] overflow-hidden flex items-center justify-center bg-[#0B2545]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/40 via-[#0B2545]/60 to-[#0B2545] z-0" />
        <div className="relative text-center z-10 pt-16">
          <h1 className="font-serif text-white font-light text-3xl md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
            Chính Sách Bảo Mật
          </h1>
        </div>
      </section>

      <section className="bg-[#FAF8F5] py-16 lg:py-24 text-[#555555]">
        <div className="max-w-[800px] mx-auto px-6 font-light leading-relaxed text-sm md:text-base flex flex-col gap-6">
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
            1. Mục đích thu thập dữ liệu
          </h2>
          <p>
            **SRT Miền Trung** thực hiện việc thu thập thông tin khách hàng thông qua các form đăng ký nhận bảng giá nhằm mục đích: cung cấp các tài liệu dự án chính xác, liên hệ tư vấn trực tiếp và cập nhật nhanh chóng các chính sách bán hàng mới từ phía Tập đoàn Sun Group.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            2. Cam kết bảo mật thông tin
          </h2>
          <p>
            Chúng tôi cam kết bảo mật tuyệt đối các dữ liệu cá nhân của quý khách (Họ tên, Số điện thoại, Email) và không chia sẻ cho bất kỳ bên thứ ba nào khi chưa có sự đồng ý của quý khách, ngoại trừ các trường hợp theo yêu cầu của cơ quan pháp luật có thẩm quyền.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            3. Quyền của khách hàng
          </h2>
          <p>
            Quý khách hoàn toàn có quyền yêu cầu SRT Miền Trung chỉnh sửa, cập nhật hoặc xóa bỏ hoàn toàn dữ liệu cá nhân đã đăng ký khỏi hệ thống dữ liệu khách hàng của chúng tôi bất kỳ lúc nào bằng cách liên hệ trực tiếp với bộ phận chăm sóc khách hàng qua Hotline **0981 814 814**.
          </p>
        </div>
      </section>
    </>
  );
}
