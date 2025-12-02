"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type PricingFeature = {
  text: string;
  included: boolean;
};

type PricingPlan = {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: PricingFeature[];
  buttonText: string;
  buttonUrl: string;
  buttonVariant?: "default" | "secondary" | "outline";
  highlighted?: boolean;
  badge?: string;
};

type Props = {
  tagline?: string;
  heading: string;
  description?: string;
  plans: PricingPlan[];
};

export type PricingProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Pricing = (props: PricingProps) => {
  const { tagline, heading, description, plans, className, ...rest } = {
    ...PricingDefaults,
    ...props,
  };

  return (
    <section
      className={cn("section_pricing", className)}
      {...rest}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            {/* Header */}
            <div className="pricing_header">
              {tagline && (
                <p className="pricing_tagline">{tagline}</p>
              )}
              <h2 className="pricing_heading">{heading}</h2>
              {description && (
                <p className="pricing_description">{description}</p>
              )}
            </div>

            {/* Pricing Grid */}
            <div className="pricing_grid">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={cn(
                    "pricing_card",
                    plan.highlighted && "pricing_card-highlighted"
                  )}
                >
                  {plan.badge && (
                    <Badge className="pricing_badge">{plan.badge}</Badge>
                  )}
                  <div className="pricing_card-header">
                    <h3 className="pricing_plan-name">{plan.name}</h3>
                    <p className="pricing_plan-description">{plan.description}</p>
                  </div>
                  <div className="pricing_price-wrapper">
                    <span className="pricing_price">{plan.price}</span>
                    {plan.period && (
                      <span className="pricing_period">/{plan.period}</span>
                    )}
                  </div>
                  <ul className="pricing_features">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={cn(
                          "pricing_feature",
                          !feature.included && "pricing_feature-excluded"
                        )}
                      >
                        <Check className="pricing_feature-icon" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.buttonVariant || "default"}
                    className="pricing_button"
                    asChild
                  >
                    <a href={plan.buttonUrl}>{plan.buttonText}</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PricingDefaults: Props = {
  tagline: "Pricing",
  heading: "Simple, transparent pricing",
  description: "Choose the plan that works best for you.",
  plans: [
    {
      name: "Basic",
      description: "Best for small projects",
      price: "$9",
      period: "month",
      features: [
        { text: "Feature one", included: true },
        { text: "Feature two", included: true },
        { text: "Feature three", included: false },
      ],
      buttonText: "Get Started",
      buttonUrl: "#",
      buttonVariant: "outline",
    },
    {
      name: "Pro",
      description: "Best for growing teams",
      price: "$29",
      period: "month",
      features: [
        { text: "Feature one", included: true },
        { text: "Feature two", included: true },
        { text: "Feature three", included: true },
      ],
      buttonText: "Get Started",
      buttonUrl: "#",
      buttonVariant: "default",
      highlighted: true,
      badge: "Popular",
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "$99",
      period: "month",
      features: [
        { text: "Feature one", included: true },
        { text: "Feature two", included: true },
        { text: "Feature three", included: true },
      ],
      buttonText: "Contact Sales",
      buttonUrl: "#",
      buttonVariant: "outline",
    },
  ],
};

