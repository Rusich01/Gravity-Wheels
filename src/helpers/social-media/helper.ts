import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import type { SocialMedia } from "@/types/social-media";

export const year = new Date().getFullYear();

export const socialMedia: SocialMedia[] = [
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com",
  },
];
