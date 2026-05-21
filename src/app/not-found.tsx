export default function RootNotFoundPage() {
  return (
    <html lang="vi">
      <body className="bg-[#071522] font-sans text-white antialiased">
        <main className="relative flex min-h-screen items-center overflow-hidden px-6 py-16 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(198,167,125,0.14),transparent_32%),linear-gradient(135deg,#071522_0%,#0B2545_54%,#11110F_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C6A77D]/40 to-transparent" />

          <div className="relative z-10 mx-auto grid w-full max-w-[1120px] gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-center">
            <div className="flex aspect-square max-w-[320px] items-center justify-center rounded-full border border-[#C6A77D]/20 bg-white/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.24)] backdrop-blur">
              <div className="text-center">
                <p className="font-serif text-[6rem] font-light leading-none text-[#C6A77D] lg:text-[7.5rem]">404</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-white/46">Not Found</p>
              </div>
            </div>

            <div>
              <p className="label-small mb-5 text-[#C6A77D]">Không tìm thấy trang</p>
              <h1
                className="font-serif max-w-3xl text-4xl font-normal leading-tight text-white md:text-6xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Trang bạn đang tìm không còn tồn tại
              </h1>
              <p className="mt-6 max-w-2xl text-sm font-medium leading-[1.85] text-white/64 md:text-base">
                Đường dẫn có thể đã thay đổi hoặc dự án đã được chuyển sang trang khác. Bạn có thể quay về trang chủ hoặc xem danh mục dự án đang được cập nhật.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/"
                  className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#C6A77D] px-7 text-xs font-bold uppercase tracking-[0.14em] text-[#111111] transition-colors hover:bg-white"
                >
                  Về trang chủ
                </a>
                <a
                  href="/du-an"
                  className="inline-flex h-12 items-center justify-center rounded-[4px] border border-white/22 px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#C6A77D] hover:text-[#C6A77D]"
                >
                  Xem dự án
                </a>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
