"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  padding?: "none" | "small" | "medium" | "large";
  background?: "primary" | "secondary" | "alternative";
  children: React.ReactNode;
};

export type SectionProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Section = (props: SectionProps) => {
  const {
    padding = "medium",
    background = "primary",
    children,
    className,
    ...rest
  } = props;

  const paddingClass = {
    none: "",
    small: "padding-section-small",
    medium: "padding-section-medium",
    large: "padding-section-large",
  }[padding];

  const backgroundClass = {
    primary: "background-color-primary",
    secondary: "background-color-secondary",
    alternative: "background-color-alternative",
  }[background];

  return (
    <section
      className={cn("section_layout", backgroundClass, className)}
      {...rest}
    >
      <div className="padding-global">
        <div className={cn("container-large", paddingClass)}>
          {children}
        </div>
      </div>
    </section>
  );
};

