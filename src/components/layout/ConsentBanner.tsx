"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "bds-consent-v1";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setVisible(window.localStorage.getItem(STORAGE_KEY) !== "granted");
    }, 0);

    return () => window.clearTimeout(id);
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "granted");
    window.gtag?.("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
    setVisible(false);
  };

  const reject = () => {
    window.localStorage.setItem(STORAGE_KEY, "denied");
    window.gtag?.("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[120] mx-auto max-w-[720px] rounded-[6px] border border-[#E5E0D8] bg-white p-4 shadow-[0_14px_40px_rgba(10,18,28,0.16)]">
      <p className="text-sm font-semibold text-[#111111]">Quyền riêng tư và đo lường quảng cáo</p>
      <p className="mt-2 text-xs font-medium leading-relaxed text-[#555555]">
        Website sử dụng cookie và thẻ đo lường để ghi nhận hiệu quả quảng cáo, xử lý yêu cầu tư
        vấn và cải thiện nội dung. Bạn có thể từ chối các mục không cần thiết.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={reject}
          className="rounded-[4px] border border-[#D8D0C5] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#555555] transition-colors hover:bg-[#F5F1EB]"
        >
          Từ chối
        </button>
        <button
          type="button"
          onClick={accept}
          className="rounded-[4px] bg-[#0B2545] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#C6A77D]"
        >
          Đồng ý
        </button>
      </div>
    </div>
  );
}
