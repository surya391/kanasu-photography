import type { NavLink } from "@/types";

export const SITE = {
  name: "Kanasu Photography",
  owner: "Pavan Gowda B R",
  tagline: "Every dream deserves a frame.",
  description:
    "Kanasu Photography in Mandya — wedding photography, pre & post wedding shoots, baby and maternity shoots, album design, photo & video editing and photo frames.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "kanasuphotography05@gmail.com",
  phones: [
    { display: "81054 28469", tel: "+918105428469", wa: "918105428469" },
    { display: "96203 66763", tel: "+919620366763", wa: "919620366763" },
  ],
  instagram: {
    handle: "_kanasu_photography_05_",
    url: "https://www.instagram.com/_kanasu_photography_05_/",
  },
  address: {
    lines: ["Halebudanur, 1st Cross", "Near Kalwe Hanuman Temple"],
    city: "Mandya",
    region: "Karnataka",
    country: "IN",
  },
} as const;

export const MAPS_URL =
  "https://www.google.com/maps/@12.5487271,76.9601441,687a,75y,180h,92.48t/data=!3m7!1e1!3m5!1sMvvqF_pw5ZcUr5Dhvu25nw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-2.4777569339019863%26panoid%3DMvvqF_pw5ZcUr5Dhvu25nw%26yaw%3D180!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MTExNy4wIKXMDSoASAFQAw%3D%3D";

export const NAV_LINKS: readonly NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
