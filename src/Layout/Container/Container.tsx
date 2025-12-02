"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
};

export type ContainerProps = React.ComponentPropsWithoutRef<"div"> & Partial<Props>;

export const Container = (props: ContainerProps) => {
  const {
    size = "large",
    children,
    className,
    ...rest
  } = props;

  const sizeClass = {
    small: "container-small",
    medium: "container-medium",
    large: "container-large",
  }[size];

  return (
    <div
      className={cn(sizeClass, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

