/**
 * PMSI Components Library
 *
 * A React component library built with ShadCN UI primitives,
 * Client-First naming conventions, and Webflow DevLink integration.
 */

// =============================================================================
// UI Primitives (ShadCN)
// =============================================================================
export {
  Button,
  buttonVariants,
  Input,
  Label,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  badgeVariants,
  Separator,
} from './components/ui';

export type { ButtonProps, InputProps, BadgeProps } from './components/ui';

// =============================================================================
// Banner Components
// =============================================================================
export { Banner1, Banner1Defaults } from './Banners';
export type { Banner1Props } from './Banners';

// =============================================================================
// Hero Components
// =============================================================================
export { Hero, HeroDefaults } from './Hero';
export type { HeroProps } from './Hero';

// =============================================================================
// Navigation Components
// =============================================================================
export { Navbar, NavbarDefaults, Footer, FooterDefaults } from './Navigation';
export type { NavbarProps, FooterProps } from './Navigation';

// =============================================================================
// Content Section Components
// =============================================================================
export {
  Features,
  FeaturesDefaults,
  Testimonials,
  TestimonialsDefaults,
  Pricing,
  PricingDefaults,
} from './Content';

export type { FeaturesProps, TestimonialsProps, PricingProps } from './Content';

// =============================================================================
// Form Components
// =============================================================================
export {
  ContactForm,
  ContactFormDefaults,
  Newsletter,
  NewsletterDefaults,
} from './Forms';

export type { ContactFormProps, NewsletterProps } from './Forms';

// =============================================================================
// Card Components
// =============================================================================
export {
  BlogCard,
  BlogCardDefaults,
  ProductCard,
  ProductCardDefaults,
  ProfileCard,
  ProfileCardDefaults,
} from './Cards';

export type { BlogCardProps, ProductCardProps, ProfileCardProps } from './Cards';

// =============================================================================
// Layout Components
// =============================================================================
export { Section, Container, Grid } from './Layout';
export type { SectionProps, ContainerProps, GridProps } from './Layout';

// =============================================================================
// Utilities
// =============================================================================
export { cn } from './lib/utils';
