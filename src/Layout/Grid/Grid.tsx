"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  columns?: 1 | 2 | 3 | 4;
  gap?: "small" | "medium" | "large";
  children: React.ReactNode;
};

export type GridProps = React.ComponentPropsWithoutRef<"div"> & Partial<Props>;

export const Grid = (props: GridProps) => {
  const {
    columns = 3,
    gap = "medium",
    children,
    className,
    ...rest
  } = props;

  const columnsClass = {
    1: "grid_1-col",
    2: "grid_2-col",
    3: "grid_3-col",
    4: "grid_4-col",
  }[columns];

  const gapClass = {
    small: "grid_gap-small",
    medium: "grid_gap-medium",
    large: "grid_gap-large",
  }[gap];

  return (
    <div
      className={cn("grid_layout", columnsClass, gapClass, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

