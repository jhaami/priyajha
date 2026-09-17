import heroDoctorImg from "../assets/images/1.png";
import studyNightImg from "../assets/images/3.jpg";
import pinkFestiveImg from "../assets/images/4.jpg";
import greenDanceImg from "../assets/images/5.jpg";
import peachLehengaImg from "../assets/images/6.jpg";
import laptopStudyImg from "../assets/images/7.jpg";
import deskStudyImg from "../assets/images/8.jpg";
import casualPortraitImg from "../assets/images/9.jpeg";

import {
  EducationMilestone,
  GalleryPhoto,
  HobbyItem,
  NavItem,
  RoadmapStep,
  SkillItem,
  ValueItem,
} from "../types";

export const portfolioImages = {
  heroDoctor: heroDoctorImg,
  studyNight: studyNightImg,
  pinkFestive: pinkFestiveImg,
  greenDance: greenDanceImg,
  peachLehenga: peachLehengaImg,
  laptopStudy: laptopStudyImg,
  deskStudy: deskStudyImg,
  casualPortrait: casualPortraitImg,
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const educationMilestones: EducationMilestone[] = [
  {
    id: "grade-10",
    step: "01",
    grade: "Grade 10 (SEE)",
    institution: "Monastic Boarding School",
    location: "Janakpurdham, Nepal",
    gpa: "3.64",
    badgeGradient: "from-[#5B3A82] to-[#B9A1E8]",
    description:
      "Completed secondary schooling with foundational excellence in science, mathematics, and analytical reasoning.",
    highlights: [
      "Distinction GPA of 3.64",
      "Active participant in inter-school science quizzes",
      "Consistent academic merit awardee",
    ],
  },
  {
    id: "grade-12",
    step: "02",
    grade: "Grade 12 (+2 Science)",
    institution: "Monastic Boarding School",
    location: "Janakpurdham, Nepal",
    gpa: "3.74",
    badgeGradient: "from-[#E96B8A] to-[#B9A1E8]",
    description:
      "Successfully graduated higher secondary education majoring in Biology & Physical Sciences, building the core conceptual pillars for medical entrance success.",
    highlights: [
      "Remarkable 3.74 GPA",
      "Deep focus on Anatomy, Physiology & Botany",
      "Dedicated MBBS entrance preparation foundation",
    ],
  },
];

export const roadmapSteps: RoadmapStep[] = [
  {
    stepNumber: 1,
    icon: "📚",
    title: "Prepare",
    subtitle:
      "Relentless revision of Physics, Chemistry, Biology & Mental Agility with high-yield MCQs.",
    color: "#5B3A82",
    bgColor: "bg-purple-50 border-purple-200",
  },
  {
    stepNumber: 2,
    icon: "🧠",
    title: "Learn",
    subtitle:
      "Deepening conceptual clarity, conceptual mastery, and disciplined daily test performance.",
    color: "#E96B8A",
    bgColor: "bg-pink-50 border-pink-200",
  },
  {
    stepNumber: 3,
    icon: "🎯",
    title: "Qualify",
    subtitle:
      "Clearing Nepal’s competitive Medical Education Commission (MEC) Common Entrance Examination.",
    color: "#55B7AD",
    bgColor: "bg-teal-50 border-teal-200",
  },
  {
    stepNumber: 4,
    icon: "🩺",
    title: "Become a Doctor",
    subtitle:
      "Earning the stethoscope, wearing the white coat, and undertaking rigorous clinical residency.",
    color: "#5B3A82",
    bgColor: "bg-purple-50 border-purple-200",
  },
  {
    stepNumber: 5,
    icon: "❤️",
    title: "Serve & Make a Difference",
    subtitle:
      "Healing communities in Nepal with ethical care, scientific rigor, and boundless empathy.",
    color: "#E96B8A",
    bgColor: "bg-rose-50 border-rose-200",
  },
];

export const skillsList: SkillItem[] = [
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    description:
      "Mastering traditional and modern bridal beauty techniques with finesse, precision, and personalized aesthetics.",
    category: "creative",
    icon: "Sparkles",
    iconBg: "bg-pink-100 text-[#E96B8A]",
    cardBg: "bg-gradient-to-br from-white to-pink-50/40",
    accentColor: "#E96B8A",
  },
  {
    id: "mehendi-art",
    title: "Mehendi Art",
    description:
      "Intricate Rajasthani, Arabic, and contemporary bridal henna patterns drawn with organic symmetry.",
    category: "creative",
    icon: "Feather",
    iconBg: "bg-amber-100 text-amber-700",
    cardBg: "bg-gradient-to-br from-white to-amber-50/40",
    accentColor: "#B9A1E8",
  },
  {
    id: "fashion-designing",
    title: "Fashion Designing",
    description:
      "Crafting ethnic ensembles, color harmonies, and modern festive drapes reflecting cultural heritage.",
    category: "creative",
    icon: "Scissors",
    iconBg: "bg-purple-100 text-[#5B3A82]",
    cardBg: "bg-gradient-to-br from-white to-purple-50/40",
    accentColor: "#5B3A82",
  },
  {
    id: "creative-styling",
    title: "Creative Styling",
    description:
      "Visual balance, wardrobe curation, and photoshoot aesthetic direction with fresh youthful flair.",
    category: "creative",
    icon: "Palette",
    iconBg: "bg-teal-100 text-[#55B7AD]",
    cardBg: "bg-gradient-to-br from-white to-teal-50/40",
    accentColor: "#55B7AD",
  },
  {
    id: "communication",
    title: "Communication",
    description:
      "Active listening, empathetic speech, and clear articulation essential for future patient-centered healthcare.",
    category: "life",
    icon: "MessageSquare",
    iconBg: "bg-indigo-100 text-indigo-600",
    cardBg: "bg-gradient-to-br from-white to-indigo-50/40",
    accentColor: "#5B3A82",
  },
  {
    id: "time-management",
    title: "Time Management",
    description:
      "Balancing intense 10-hour entrance study regimens, revision routines, and personal creative pursuits.",
    category: "life",
    icon: "Clock",
    iconBg: "bg-rose-100 text-rose-600",
    cardBg: "bg-gradient-to-br from-white to-rose-50/40",
    accentColor: "#E96B8A",
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    description:
      "Systematic deduction for tricky organic chemistry mechanisms, biological pathways, and diagnostic logic.",
    category: "life",
    icon: "Brain",
    iconBg: "bg-teal-100 text-[#55B7AD]",
    cardBg: "bg-gradient-to-br from-white to-teal-50/40",
    accentColor: "#55B7AD",
  },
  {
    id: "self-learning",
    title: "Self Learning",
    description:
      "Curious self-starter mindset, breaking down dense medical syllabi and staying consistently self-motivated.",
    category: "life",
    icon: "BookOpen",
    iconBg: "bg-purple-100 text-[#5B3A82]",
    cardBg: "bg-gradient-to-br from-white to-purple-50/40",
    accentColor: "#B9A1E8",
  },
];

export const hobbiesList: HobbyItem[] = [
  {
    id: "reading",
    title: "Reading Books",
    subtitle:
      "Discovering new ideas, inspiring biographies, and medical perspectives beyond routine syllabi.",
    icon: "BookMarked",
    gradient: "from-[#B9A1E8]/25 via-purple-50 to-white",
    textColor: "text-[#5B3A82]",
    badge: "Intellect",
    size: "large",
  },
  {
    id: "music",
    title: "Listening to Music",
    subtitle:
      "Music is my little escape, source of daily study energy, calm focus, and creative inspiration.",
    icon: "Headphones",
    gradient: "from-[#E96B8A]/20 via-pink-50 to-white",
    textColor: "text-[#E96B8A]",
    badge: "Soul & Energy",
    size: "medium",
  },
  {
    id: "travelling",
    title: "Travelling",
    subtitle:
      "Exploring new sacred temples, mountain landscapes, and vibrant cultures across Nepal.",
    icon: "Compass",
    gradient: "from-[#55B7AD]/25 via-teal-50 to-white",
    textColor: "text-[#55B7AD]",
    badge: "Wanderlust",
    size: "medium",
  },
  {
    id: "dancing",
    title: "Dancing",
    subtitle:
      "Expressing high energy, stage confidence, and joyful rhythm through cultural movements.",
    icon: "Music2",
    gradient: "from-[#E96B8A]/25 via-rose-50 to-white",
    textColor: "text-rose-600",
    badge: "Expression",
    size: "large",
  },
  {
    id: "mehendi-hobby",
    title: "Mehendi Design",
    subtitle:
      "A creative art form that transforms delicate strokes and pure imagination into wearable festive art.",
    icon: "Sparkle",
    gradient: "from-[#B9A1E8]/20 via-amber-50 to-white",
    textColor: "text-[#5B3A82]",
    badge: "Artistry",
    size: "medium",
  },
  {
    id: "fashion-hobby",
    title: "Fashion & Drapes",
    subtitle:
      "Exploring personal aesthetics, modern ethnic style, graceful color palettes, and self-expression.",
    icon: "Crown",
    gradient: "from-pink-100/60 via-pink-50 to-white",
    textColor: "text-[#E96B8A]",
    badge: "Style & Elegance",
    size: "tall",
  },
];

export const valuesList: ValueItem[] = [
  {
    id: "ambitious",
    emoji: "💜",
    title: "Ambitious",
    description:
      "I believe in setting bigger goals, stepping out of comfort zones, and relentlessly working toward them.",
    bgGradient: "bg-gradient-to-br from-purple-50 to-purple-100/50",
    borderColor: "border-purple-200",
    iconColor: "text-[#5B3A82]",
  },
  {
    id: "curious",
    emoji: "🌱",
    title: "Curious",
    description:
      "Always interested in learning something new, questioning mechanisms, and continuously evolving.",
    bgGradient: "bg-gradient-to-br from-teal-50 to-teal-100/50",
    borderColor: "border-teal-200",
    iconColor: "text-[#55B7AD]",
  },
  {
    id: "creative",
    emoji: "🎨",
    title: "Creative",
    description:
      "I enjoy expressing myself through art, styling, fashion, and aesthetic visual experiments.",
    bgGradient: "bg-gradient-to-br from-pink-50 to-pink-100/50",
    borderColor: "border-pink-200",
    iconColor: "text-[#E96B8A]",
  },
  {
    id: "compassionate",
    emoji: "❤️",
    title: "Compassionate",
    description:
      "I want my future work in medicine to touch lives, heal communities, and bring genuine warmth to patients.",
    bgGradient: "bg-gradient-to-br from-rose-50 to-rose-100/50",
    borderColor: "border-rose-200",
    iconColor: "text-rose-600",
  },
];

export const defaultGalleryPhotos: GalleryPhoto[] = [
  {
    id: "photo-1",
    title: "The Stethoscope & The Dream",
    category: "Moments",
    imageUrl: heroDoctorImg,
    caption:
      "With the stethoscope draped around my neck — a constant reminder of the white coat that awaits.",
    tag: "MBBS Aspirant",
    aspect: "square",
  },
  {
    id: "photo-2",
    title: "Late Night Anatomy Review",
    category: "Memories",
    imageUrl: studyNightImg,
    caption:
      "Quiet hours under the desk lamp with anatomy notes and highlighters. Passion fueled by dedication.",
    tag: "Study Grind",
    aspect: "square",
  },
  {
    id: "photo-3",
    title: "Festive Colors & Warmth",
    category: "Style",
    imageUrl: pinkFestiveImg,
    caption:
      "Celebration of culture and festive joy in traditional magenta pink and delicate embroidery.",
    tag: "Culture",
    aspect: "portrait",
  },
  {
    id: "photo-4",
    title: "Emerald Grace & Dance Mudra",
    category: "Style",
    imageUrl: greenDanceImg,
    caption:
      "Graceful classical posture in emerald sequined sharara, where art meets rhythm and expression.",
    tag: "Dance Art",
    aspect: "portrait",
  },
  {
    id: "photo-5",
    title: "Blush Lehenga Celebration",
    category: "Moments",
    imageUrl: peachLehengaImg,
    caption:
      "Cherishing joyful family occasions in Janakpurdham, dressed in delicate peach pastels.",
    tag: "Janakpurdham",
    aspect: "portrait",
  },
  {
    id: "photo-6",
    title: "Digital Learning & Curiosity",
    category: "Life",
    imageUrl: laptopStudyImg,
    caption:
      "Online lectures, mock tests, and interactive medical conceptual notes from home.",
    tag: "Lifelong Learner",
    aspect: "portrait",
  },
  {
    id: "photo-7",
    title: "MBBS High-Yield Bookshelf",
    category: "Memories",
    imageUrl: deskStudyImg,
    caption:
      'BD Chaurasia Anatomy, Guyton Physiology, and sticky note affirmations: "12th Passed But Dream MBBS".',
    tag: "Med Books",
    aspect: "square",
  },
  {
    id: "photo-8",
    title: "Natural Simplicity & Smile",
    category: "Life",
    imageUrl: casualPortraitImg,
    caption:
      "Everyday authenticity. Staying grounded, kind, and focused on becoming a better version of myself.",
    tag: "Authenticity",
    aspect: "portrait",
  },
];
