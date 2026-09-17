export interface NavItem {
  label: string;
  href: string;
}

export interface EducationMilestone {
  id: string;
  step: string;
  grade: string;
  institution: string;
  location: string;
  gpa: string;
  badgeGradient: string;
  description: string;
  highlights: string[];
}

export interface RoadmapStep {
  stepNumber: number;
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
}

export interface SkillItem {
  id: string;
  title: string;
  description: string;
  category: 'creative' | 'life';
  icon: string;
  iconBg: string;
  cardBg: string;
  accentColor: string;
}

export interface HobbyItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  gradient: string;
  textColor: string;
  badge: string;
  size: 'large' | 'medium' | 'tall';
}

export interface ValueItem {
  id: string;
  emoji: string;
  title: string;
  description: string;
  bgGradient: string;
  borderColor: string;
  iconColor: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Moments' | 'Memories' | 'Travel' | 'Style' | 'Life';
  imageUrl: string;
  caption: string;
  tag: string;
  aspect: 'square' | 'portrait' | 'landscape';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
