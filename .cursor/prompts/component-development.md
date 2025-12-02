# Component Development Guide

You are an expert React and Webflow developer building components for the PMSI Components library. Follow these patterns exactly.

## File Structure

Every component must follow the **three-file pattern**:

```
src/components/[Category]/[ComponentName]/
├── ComponentName.tsx           # Main React component
├── ComponentName.webflow.tsx   # DevLink wrapper for Webflow
├── ComponentName.test.tsx      # Component tests
└── index.ts                    # Re-exports
```

## Main Component Pattern (`ComponentName.tsx`)

```tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// 1. Define image/asset prop types
type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

// 2. Define component props with clear types
type Props = {
  heading: string;
  description?: string;
  image?: ImageProps;
  // Use specific types, not 'any'
};

// 3. Export the props type for external use
export type ComponentNameProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

// 4. Main component with destructured props and defaults
export const ComponentName = (props: ComponentNameProps) => {
  const { heading, description, image, className, ...rest } = {
    ...ComponentNameDefaults,
    ...props,
  };

  return (
    <section 
      className={cn("section_component-name", className)}
      {...rest}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="component-name_grid">
            {/* Content using Client-First classes */}
            <div className="component-name_content">
              <h2 className="heading-style-h2">{heading}</h2>
              {description && (
                <p className="text-size-medium">{description}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. Default props object
export const ComponentNameDefaults: Props = {
  heading: "Default heading text",
  description: "Default description text.",
};
```

## Client-First CSS Class Naming

ALWAYS use these patterns for class names:

| Pattern | Usage | Example |
|---------|-------|---------|
| `section_[name]` | Section wrapper | `section_hero`, `section_banner` |
| `[name]_[element]` | Child elements | `hero_content`, `banner_form` |
| `padding-global` | Standard padding | Applied to inner container |
| `container-[size]` | Container widths | `container-small`, `container-large` |
| `[element]-wrapper` | Element groups | `hero_cta-wrapper` |
| `heading-style-[h1-h6]` | Typography | `heading-style-h1` |
| `text-size-[size]` | Text sizes | `text-size-medium`, `text-size-large` |

## Using ShadCN Primitives

Import UI primitives from `@/components/ui`:

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
```

Use with Client-First wrapper classes:

```tsx
<div className="hero_cta-wrapper">
  <Button variant="default" size="lg">Primary CTA</Button>
  <Button variant="outline" size="lg">Secondary CTA</Button>
</div>
```

## Using the `cn()` Utility

Always use `cn()` for conditional/merged classes:

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "section_hero",
  hasBackground && "hero_has-background",
  className
)}>
```

## Index Export Pattern (`index.ts`)

```tsx
export { ComponentName, ComponentNameDefaults } from './ComponentName';
export type { ComponentNameProps } from './ComponentName';
```

## Component Categories

Place components in the correct category folder:

- `Banners/` - Banner and alert sections
- `Hero/` - Hero sections
- `Navigation/` - Navbar, Sidebar, Footer
- `Content/` - Features, Testimonials, Pricing, Team
- `Forms/` - Contact, Newsletter, Login forms
- `Cards/` - Blog, Product, Profile cards
- `Layout/` - Grid, Container, Section primitives
- `ui/` - ShadCN primitive components (lowercase filenames)

## Checklist Before Completing

- [ ] Component uses Client-First class naming
- [ ] Props are properly typed (no `any`)
- [ ] Default props provided
- [ ] Uses ShadCN primitives where appropriate
- [ ] Uses `cn()` for class merging
- [ ] Includes proper TypeScript exports
- [ ] File structure follows three-file pattern

