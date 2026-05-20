export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF8F5]">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner ring */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-2 border-[#E5E0D8]" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C6A77D] animate-spin" />
        </div>

        {/* Brand */}
        <div className="flex flex-col items-center gap-1">
          <span
            className="font-serif text-[#0B2545] text-lg font-semibold tracking-[0.1em] uppercase"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            BĐS Đà Nẵng
          </span>
          <span className="text-[0.625rem] text-[#C6A77D] tracking-[0.2em] uppercase font-semibold">
            Real Estate
          </span>
        </div>
      </div>
    </div>
  );
}
