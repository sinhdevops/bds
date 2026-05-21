import {
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";
import type { IconType } from "react-icons";

export type LeadFormState = {
  name: string;
  phone: string;
  email: string;
};

export type ContactFormState = LeadFormState & {
  project: string;
  interest: string;
  channel: string;
  message: string;
};

export const HOTLINE_DISPLAY = "0702252678";
export const HOTLINE_TEL = "tel:0702252678";
export const ZALO_HREF = "https://zalo.me/0702252678";
export const CONTACT_EMAIL = "sinh.dev.ops@gmail.com";
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;
export const OFFICE_ADDRESS = "04 Bình Minh 5, Đà Nẵng";

export const INITIAL_LEAD_FORM: LeadFormState = {
  name: "",
  phone: "",
  email: "",
};

export const INITIAL_CONTACT_FORM: ContactFormState = {
  ...INITIAL_LEAD_FORM,
  email: "",
  project: "",
  interest: "Nhận bảng giá",
  channel: "Gọi điện",
  message: "",
};

export const CONTACT_CARDS: {
  icon: IconType;
  label: string;
  value: string;
  meta: string;
  href?: string;
}[] = [
  {
    icon: FiPhone,
    label: "Hotline",
    value: HOTLINE_DISPLAY,
    meta: "Tư vấn 24/7",
    href: HOTLINE_TEL,
  },
  {
    icon: FiMail,
    label: "Email",
    value: CONTACT_EMAIL,
    meta: "Phản hồi trong ngày",
    href: CONTACT_EMAIL_HREF,
  },
  {
    icon: FiMapPin,
    label: "Văn phòng",
    value: OFFICE_ADDRESS,
    meta: "Tiếp khách theo lịch hẹn",
  },
];

export const CONTACT_NOTES: { icon: IconType; text: string }[] = [
  {
    icon: FiClock,
    text: "Ưu tiên phản hồi các yêu cầu có số điện thoại rõ ràng.",
  },
  {
    icon: FiMessageCircle,
    text: "Có thể tư vấn qua Zalo cho khách cần xem nhà từ xa.",
  },
];

export const INTEREST_OPTIONS = [
  "Nhận bảng giá",
  "Xem nhà mẫu",
  "Tư vấn đầu tư",
  "Hỗ trợ vay vốn",
];

export const CHANNEL_OPTIONS = ["Gọi điện", "Zalo", "Email"];

export const PROJECT_OPTIONS = [
  { label: "Chưa xác định", value: "" },
  { label: "Sun Symphony Residence", value: "Sun Symphony Residence" },
  { label: "Sun Solar Residence", value: "Sun Solar Residence" },
  { label: "Sun Ponte Residence", value: "Sun Ponte Residence" },
  { label: "Capital Square Đà Nẵng", value: "Capital Square Đà Nẵng" },
];
