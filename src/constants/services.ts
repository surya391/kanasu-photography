import {
  BookOpen,
  Baby,
  Clapperboard,
  Flower2,
  Frame,
  Heart,
  Sparkles,
} from "lucide-react";
import type { Service } from "@/types";

export const SERVICES: readonly Service[] = [
  {
    slug: "wedding-photography",
    title: "Wedding Photography",
    short: "Every ritual, glance and happy tear — kept for good.",
    description:
      "From the first haldi ceremony to the last farewell, we document the whole celebration candidly and with care, so you can relive it exactly as it felt.",
    includes: [
      "Candid and traditional coverage",
      "Family and group portraits",
      "Rituals, details and décor",
      "Photo & video options",
    ],
    icon: Heart,
    image: "/portfolio/haldi-02.jpg",
    imageAlt: "Haldi ceremony candid",
  },
  {
    slug: "pre-post-wedding",
    title: "Pre & Post Wedding",
    short: "Couple stories shot at your pace, in places you love.",
    description:
      "Relaxed, directed-but-natural shoots for the weeks before or after the big day — at a location that means something to the two of you.",
    includes: [
      "Location & outfit planning",
      "Guided posing, no stiffness",
      "Cinematic stills and short films",
      "Save-the-date material",
    ],
    icon: Sparkles,
    image: "/portfolio/prewedding-01.jpg",
    imageAlt: "Couple walking hand in hand",
  },
  {
    slug: "baby-shoot",
    title: "Baby Shoot",
    short: "Tiny details, soft light, patient hands.",
    description:
      "Gentle, unhurried sessions that capture the little hands, first smiles and milestones you will want to remember long after they've grown.",
    includes: [
      "Newborn & milestone sessions",
      "Props and themed set-ups",
      "Parent and sibling portraits",
      "Comfort-first scheduling",
    ],
    icon: Baby,
    image: "/portfolio/baby-05.jpg",
    imageAlt: "Toddler in a magenta frock outdoors",
  },
  {
    slug: "maternity-shoot",
    title: "Maternity Shoot",
    short: "Celebrate the wait with portraits you'll treasure.",
    description:
      "A calm, comfortable shoot that celebrates this chapter — flattering light, thoughtful posing and time to just enjoy it.",
    includes: [
      "Indoor and outdoor options",
      "Couple and family frames",
      "Wardrobe guidance",
      "Soft, natural look",
    ],
    icon: Flower2,
    image: "/portfolio/maternity-01.jpg",
    imageAlt: "Expecting couple portrait",
  },
  {
    slug: "album-design",
    title: "Album Design",
    short: "Your story, laid out page by page.",
    description:
      "Thoughtfully sequenced album layouts that read like a story — designed in-house and refined with you before anything is printed.",
    includes: [
      "Custom page layouts",
      "Review and revisions",
      "Premium print finishes",
      "Wedding, baby & maternity albums",
    ],
    icon: BookOpen,
    image: "/portfolio/engagement-03.jpg",
    imageAlt: "Engagement couple among palm leaves",
  },
  {
    slug: "video-photo-editing",
    title: "Video / Photo Editing",
    short: "Colour, cuts and polish that make it feel finished.",
    description:
      "Professional colour grading, retouching and video editing — for our shoots or for footage you already have.",
    includes: [
      "Colour grading & retouching",
      "Highlight reels and full edits",
      "Music-synced storytelling",
      "Reels and social cuts",
    ],
    icon: Clapperboard,
    image: "/portfolio/pics-01.jpg",
    imageAlt: "Colour-graded portrait at sunset",
  },
  {
    slug: "photo-frames",
    title: "Photo Frames",
    short: "All photo frames available, ready to hang.",
    description:
      "Bring your favourite moments home. Choose from a range of frames and sizes and we'll print and finish them for you.",
    includes: [
      "Wide range of sizes & styles",
      "Print-ready colour matching",
      "Gifting-ready finishing",
      "Wall and table options",
    ],
    icon: Frame,
    image: "/portfolio/design-01.jpg",
    imageAlt: "Framed 12x18 collage of a couple",
  },
];

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title) as [
  string,
  ...string[],
];
