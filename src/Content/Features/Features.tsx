"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type FeatureItem = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

type Props = {
  tagline?: string;
  heading: string;
  description?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
};

export type FeaturesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Features = (props: FeaturesProps) => {
  const { tagline, heading, description, features, columns = 3, className, ...rest } = {
    ...FeaturesDefaults,
    ...props,
  };

  const gridClass = {
    2: "features_grid-2col",
    3: "features_grid-3col",
    4: "features_grid-4col",
  }[columns];

  return (
    <section
      className={cn("section_features", className)}
      {...rest}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            {/* Header */}
            <div className="features_header">
              {tagline && (
                <p className="features_tagline">{tagline}</p>
              )}
              <h2 className="features_heading">{heading}</h2>
              {description && (
                <p className="features_description">{description}</p>
              )}
            </div>

            {/* Features Grid */}
            <div className={cn("features_grid", gridClass)}>
              {features.map((feature, index) => (
                <div key={index} className="features_item">
                  {feature.icon && (
                    <div className="features_icon-wrapper">
                      {feature.icon}
                    </div>
                  )}
                  <h3 className="features_item-title">{feature.title}</h3>
                  <p className="features_item-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeaturesDefaults: Props = {
  tagline: "Features",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  columns: 3,
  features: [
    {
      title: "Feature one",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      title: "Feature two",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      title: "Feature three",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ],
};

