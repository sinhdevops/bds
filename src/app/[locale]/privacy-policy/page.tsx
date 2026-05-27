import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ROUTES, absoluteUrl, breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo";

const title = "Chính Sách Bảo Mật - BĐS Đà Nẵng";
const description =
  "Chính sách bảo mật thông tin khách hàng khi đăng ký nhận bảng giá, tư vấn dự án và cập nhật chính sách bán hàng tại BĐS Đà Nẵng.";

export const metadata: Metadata = createMetadata({
  title: "Chính Sách Bảo Mật - BĐS Đà Nẵng",
  description:
    "Chính sách bảo mật thông tin khách hàng khi đăng ký nhận bảng giá, tư vấn dự án và cập nhật chính sách bán hàng tại BĐS Đà Nẵng.",
  path: ROUTES.privacy,
});

const schemas = [
  webPageSchema({
    id: `${absoluteUrl(ROUTES.privacy)}/#webpage`,
    url: absoluteUrl(ROUTES.privacy),
    name: title,
    description,
  }),
  breadcrumbSchema([
    { name: "Trang chủ", url: absoluteUrl(ROUTES.home) },
    { name: "Chính sách bảo mật", url: absoluteUrl(ROUTES.privacy) },
  ]),
];

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
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

          {/* Intro */}
          <div className="rounded-[8px] bg-[#F0EDE8] border border-[#E5E0D8] px-6 py-5 text-sm text-[#555555] leading-relaxed">
            <p>
              <strong className="text-[#0B2545]">BĐS Đà Nẵng</strong> là đơn vị môi giới bất động sản độc lập, không thuộc chủ đầu tư hay chủ sở hữu dự án.
              Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của quý khách
              theo quy định tại <strong>Nghị định 13/2023/NĐ-CP</strong> về bảo vệ dữ liệu cá nhân.
            </p>
            <p className="mt-3 text-xs text-[#888]">
              Ngày có hiệu lực: 01/01/2025 &nbsp;·&nbsp; Cập nhật lần cuối: 27/05/2026
            </p>
          </div>

          {/* 1 */}
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
            1. Thông tin chúng tôi thu thập
          </h2>
          <p>Chúng tôi thu thập thông tin khi quý khách chủ động điền vào biểu mẫu trên website, bao gồm:</p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li><strong>Thông tin định danh:</strong> họ tên, số điện thoại, địa chỉ email.</li>
            <li><strong>Thông tin nhu cầu:</strong> loại căn hộ quan tâm, ngân sách dự kiến, kênh liên hệ ưu tiên.</li>
            <li><strong>Dữ liệu kỹ thuật:</strong> địa chỉ IP, loại trình duyệt, trang web giới thiệu và thời gian truy cập thông qua cookie phân tích ẩn danh.</li>
          </ul>
          <p>Chúng tôi <strong>không thu thập</strong> số CMND/CCCD, thông tin tài chính hay dữ liệu nhạy cảm khác.</p>

          {/* 2 */}
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            2. Mục đích sử dụng thông tin
          </h2>
          <p>Thông tin thu thập được sử dụng cho các mục đích sau:</p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Liên hệ tư vấn dự án theo yêu cầu của quý khách.</li>
            <li>Gửi bảng giá, chính sách bán hàng và tài liệu dự án liên quan.</li>
            <li>Đặt lịch xem nhà mẫu hoặc hỗ trợ thủ tục vay vốn.</li>
            <li>Cải thiện chất lượng dịch vụ tư vấn thông qua phân tích dữ liệu nặc danh.</li>
          </ul>
          <p>Chúng tôi <strong>không sử dụng</strong> thông tin của quý khách cho mục đích tiếp thị ngoài phạm vi bất động sản mà quý khách đã đăng ký quan tâm.</p>

          {/* 3 */}
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            3. Cam kết bảo mật và không chia sẻ
          </h2>
          <p>
            Chúng tôi cam kết bảo mật dữ liệu cá nhân của quý khách. Thông tin <strong>không được chia sẻ</strong> với bên thứ ba
            vì mục đích thương mại, trừ các trường hợp sau:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Theo yêu cầu của cơ quan nhà nước có thẩm quyền.</li>
            <li>Chủ đầu tư dự án (chỉ khi quý khách đồng ý tiến hành ký hợp đồng đặt cọc/mua bán).</li>
            <li>Đơn vị hỗ trợ tài chính/ngân hàng theo đề nghị của quý khách.</li>
          </ul>

          {/* 4 */}
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            4. Thời gian lưu trữ dữ liệu
          </h2>
          <p>
            Dữ liệu cá nhân được lưu trữ trong thời gian tối đa <strong>24 tháng</strong> kể từ lần liên hệ cuối cùng.
            Sau thời gian này, dữ liệu sẽ được xóa hoặc ẩn danh hóa vĩnh viễn.
            Quý khách có thể yêu cầu xóa dữ liệu sớm hơn theo quy định tại mục 5.
          </p>

          {/* 5 */}
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            5. Quyền của khách hàng
          </h2>
          <p>Theo Nghị định 13/2023/NĐ-CP, quý khách có các quyền sau:</p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li><strong>Quyền truy cập:</strong> yêu cầu xem dữ liệu cá nhân chúng tôi đang lưu trữ.</li>
            <li><strong>Quyền chỉnh sửa:</strong> yêu cầu cập nhật thông tin không chính xác.</li>
            <li><strong>Quyền xóa:</strong> yêu cầu xóa toàn bộ dữ liệu cá nhân.</li>
            <li><strong>Quyền phản đối:</strong> từ chối việc xử lý dữ liệu cho mục đích tiếp thị.</li>
            <li><strong>Quyền rút lại đồng ý:</strong> thu hồi sự đồng ý bất kỳ lúc nào.</li>
          </ul>
          <p>
            Để thực hiện các quyền trên, vui lòng liên hệ qua{" "}
            <a href="tel:0352787777" className="text-[#0B2545] underline font-medium">0352.787777</a>{" "}
            hoặc email{" "}
            <a href="mailto:lienhe@bdsdanang.vn" className="text-[#0B2545] underline font-medium">lienhe@bdsdanang.vn</a>.
            Chúng tôi sẽ phản hồi trong vòng <strong>5 ngày làm việc</strong>.
          </p>

          {/* 6 */}
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            6. Cookie và công nghệ theo dõi
          </h2>
          <p>
            Website sử dụng cookie kỹ thuật (cần thiết cho hoạt động của trang) và cookie phân tích ẩn danh
            (Google Analytics) nhằm cải thiện trải nghiệm người dùng. Cookie không chứa thông tin định danh cá nhân.
          </p>
          <p>
            Quý khách có thể tắt cookie trong cài đặt trình duyệt. Việc tắt cookie kỹ thuật có thể ảnh hưởng đến
            một số tính năng của website.
          </p>

          {/* 7 */}
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            7. Bảo mật dữ liệu
          </h2>
          <p>
            Dữ liệu được truyền qua kết nối HTTPS mã hóa. Thông tin lưu trữ trên hệ thống được bảo vệ bằng các
            biện pháp kỹ thuật và quản trị phù hợp. Truy cập vào dữ liệu khách hàng bị giới hạn chỉ đối với
            nhân sự được ủy quyền.
          </p>

          {/* 8 */}
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            8. Thay đổi chính sách
          </h2>
          <p>
            Chúng tôi có thể cập nhật chính sách này theo thay đổi của pháp luật hoặc quy trình nội bộ.
            Phiên bản mới nhất luôn được công bố tại trang này kèm ngày hiệu lực.
            Việc tiếp tục sử dụng website sau khi chính sách thay đổi đồng nghĩa với việc quý khách chấp nhận phiên bản mới.
          </p>

          {/* 9 */}
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            9. Liên hệ về bảo mật
          </h2>
          <p>
            Mọi thắc mắc liên quan đến chính sách bảo mật, vui lòng liên hệ:
          </p>
          <div className="rounded-[6px] border border-[#E5E0D8] bg-white px-5 py-4 flex flex-col gap-2 text-sm">
            <p><strong>BĐS Đà Nẵng</strong> — Đơn vị môi giới bất động sản độc lập</p>
            <p>Địa chỉ: 04 Bình Minh 5, Hòa Xuân, Cẩm Lệ, Đà Nẵng</p>
            <p>Hotline: <a href="tel:0352787777" className="text-[#0B2545] font-medium underline">0352.787777</a></p>
            <p>Email: <a href="mailto:lienhe@bdsdanang.vn" className="text-[#0B2545] font-medium underline">lienhe@bdsdanang.vn</a></p>
          </div>

          <div className="border-t border-[#E5E0D8] pt-6 flex gap-4 text-xs text-[#888]">
            <Link href="/vi/terms" className="hover:text-[#0B2545] underline">Điều khoản sử dụng</Link>
            <Link href="/vi" className="hover:text-[#0B2545] underline">Trang chủ</Link>
          </div>
        </div>
      </section>
    </>
  );
}
