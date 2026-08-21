/**************** Menu Sidebar ******************* */

import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type MenuSidebarProp = {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  openSection: string | null;
  setOpenSection: (section: string | null) => void;
  navItems: NavItemsType[];
};

export type ItemType = {
  label: string;
  description?: string;
  href: string;
}[];

export type NavItemsType = {
  label: string;
  href?: string;
  items?: ItemType;
};

export type MobileAccordionItemProps = {
  item: NavItemsType;
  open: boolean;
  onToggle: () => void;
  setMobileOpen: (open: boolean) => void;
};

/**************** Custom Button ******************* */

export type CustomButtonProps = {
  width?: string;
  height?: string;
  textColor?: string;
  bgColor?: string;
  label: string;
  icon?: React.ReactNode;
  fontSize?: number;
  fontWeight?: number;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  loader?: boolean;
  loaderColor?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Type for onClick
  disabled?: boolean;
};

/**************** Cta Banner ******************* */

export type CtaBannerProps = {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  description?: string;
};

/**************** Margin Wrapper ******************* */

export type MarginWrapperProps = {
  children: ReactNode;
  outterWrapperClassName?: string;
  innerWrapperClassName?: string;
  wrapperbgcolor?: string;
  firstSectionGradient?: boolean;
  otherSectionGradient?: boolean;
  showTrBlDecorativelines?: boolean;
  showBrDecorativelines?: boolean;
};

/**************** Feature Grid ******************* */

export type FeatureGridItem = {
  icon: ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
  iconColor?: string;
};

export type FeatureGridProps = {
  eyebrow?: string;
  heading: string;
  backgroundColor?: string;
  headingAccent?: string;
  items: FeatureGridItem[];
  columns?: 2 | 3;
  breakLine?: boolean;
};

/**************** Testimonials ******************* */

export type TestimonialProps = {
  quote: string;
  name: string;
  role?: string;
  avatar: StaticImageData | string;
};

/**************** Step Item ******************* */

export type StepItem = {
  title: string;
  description: string;
};

export type StepTimelineProps = {
  eyebrow?: string;
  heading: string;
  backgroundColor?: string;
  headingAccent?: string;
  steps: StepItem[];
};

/**************** Faq ******************* */

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqProps = {
  eyebrow?: string;
  heading: string;
  backgroundColor?: string;
  items: FaqItem[];
  allowMultipleOpen?: boolean;
};

/**************** Card Grid ******************* */

export type CardGridItem = {
  icon: ReactNode;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  highlighted?: boolean;
};

export type CardGridProps = {
  eyebrow?: string;
  heading: string;
  backgroundColor?: string;
  headingAccent?: string;
  items: CardGridItem[];
};

/**************** Narrative Text ******************* */

export type TextSegment = {
  text: string;
  variant: "primary" | "accent" | "muted";
  break?: boolean;
};

export type NarrativeTextProps = {
  segments: TextSegment[];
};

/**************** Row ******************* */

export type Cell = string | "check" | "dash";

export type Row = {
  feature: string;
  starter: Cell;
  growth: Cell;
  enterprise: Cell;
};

/**************** Split Hero ******************* */

export type HeadingSegment = {
  text: string;
  /** "bold" = plain bold sans (default). "accent" = italic serif green. */
  variant?: "bold" | "accent";
  /** Start a new line before this segment. */
  break?: boolean;
};

export type HeroImage = {
  src: StaticImageData | string;
  alt: string;
};

export type FloatingCard = {
  icon?: ReactNode;
  title: string;
  subtitle: string;
  position?: "bottom-left" | "top-right";
};

export type SplitHeroProps = {
  eyebrow: string;
  heading: HeadingSegment[];
  description: string;
  secondaryCta?: { label: string; href: string };
  image: HeroImage;
  /** Two small stacked images beside the main image (see the "For SMEs" variant). */
  collageImages?: HeroImage[];
  floatingCard?: FloatingCard;
};

/**************** Rounds Section ******************* */

export type RoundsFeature = {
  icon: ReactNode;
  title: string;
  description: string;
};

export type RoundsSectionProps = {
  eyebrow: string;
  heading: HeadingSegment[];
  description: string;
  list?: {
    title: string;
    body: string;
  }[];
};

/**************** Gallery Images ******************* */

export type GalleryImagesProps = {
  src: StaticImageData;
  alt: string;
}[];

export type ChecklistItem = {
  title: string;
  description: string;
};

/**************** Split Feature ******************* */

export type SplitFeatureProps = {
  eyebrow: string;
  heading: HeadingSegment[];
  description: string | string[];
  checklist?: ChecklistItem[];
  action?: {
    label: string;
    href: string;
    style?: "button" | "link";
  };
  image: { src: StaticImageData | string; alt: string };
  imagePosition?: "left" | "right";
  backgroundColor?: string;
};

/**************** Wait list ******************* */

export type WaitlistModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**************** Checklist Item ******************* */

export type Tab = {
  key: string;
  label: string;
  heading: string;
  description: string;
  checklist: ChecklistItem[];
  image: { src: StaticImageData; alt: string };
};
