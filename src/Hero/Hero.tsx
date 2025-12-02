"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  enableSecondColumn?: boolean;
  secondColumnContent?: React.ReactNode;
  ctaButtons?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

export type HeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Hero = (props: HeroProps) => {
  const {
    title,
    subtitle,
    description,
    backgroundImage,
    backgroundImageAlt,
    enableSecondColumn = false,
    secondColumnContent,
    ctaButtons,
    size = 'large',
    className,
    ...rest
  } = {
    ...HeroDefaults,
    ...props,
  };

  // Dynamic background image requires inline style - valid use case
  const sectionStyle = backgroundImage
    ? ({ '--hero-bg-image': `url(${backgroundImage})` } as React.CSSProperties)
    : undefined;

  return (
    <section
      className={cn(
        "section_hero",
        backgroundImage && "hero_has-background",
        className
      )}
      style={sectionStyle}
      {...rest}
    >
      {backgroundImage && (
        <div
          className="hero_background"
          role="img"
          aria-label={backgroundImageAlt || 'Hero background'}
        />
      )}
      <div className="padding-global">
        <div className={cn("padding-section-large", `container-${size}`)}>
          <div className={cn(
            "hero_grid",
            enableSecondColumn ? "hero_grid-two-column" : "hero_grid-single-column"
          )}>
            {/* Main Content Column */}
            <div className="hero_content">
              {subtitle && (
                <div className="hero_subtitle-wrapper">
                  <p className="text-size-small text-weight-semibold">{subtitle}</p>
                </div>
              )}

              <div className="hero_title-wrapper">
                <h1 className="heading-style-h1">{title}</h1>
              </div>

              {description && (
                <div className="hero_description-wrapper">
                  <p className="text-size-medium">{description}</p>
                </div>
              )}

              {ctaButtons && (
                <div className="hero_cta-wrapper">
                  {ctaButtons}
                </div>
              )}
            </div>

            {/* Optional Second Column */}
            {enableSecondColumn && secondColumnContent && (
              <div className="hero_column">
                {secondColumnContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroDefaults: Props = {
  title: "Medium length hero heading goes here",
  subtitle: "Tagline",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  size: "large",
  enableSecondColumn: false,
};
