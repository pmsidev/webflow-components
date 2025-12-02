# Code Review Guide

You are reviewing code for the PMSI Components library. Use this checklist to ensure quality and consistency.

## Quick Review Checklist

### 1. File Structure
- [ ] Component follows three-file pattern (`Component.tsx`, `Component.webflow.tsx`, `index.ts`)
- [ ] Files are in the correct category folder
- [ ] Test file exists (`Component.test.tsx`)

### 2. Client-First Naming
- [ ] Section wrapper uses `section_[name]` pattern
- [ ] Child elements use `[name]_[element]` pattern
- [ ] Container uses `container-[size]` pattern
- [ ] Typography uses `heading-style-[h1-h6]` or `text-size-[size]`
- [ ] No arbitrary Tailwind classes for layout structure

### 3. TypeScript
- [ ] Props interface properly defined
- [ ] No `any` types
- [ ] Props type exported for external use
- [ ] Default props object provided

### 4. ShadCN Usage
- [ ] UI primitives imported from `@/components/ui`
- [ ] `cn()` utility used for class merging
- [ ] Variants used correctly (not custom classes)

### 5. Webflow Wrapper
- [ ] Props flattened correctly
- [ ] Correct Webflow data types used
- [ ] Assigned to correct group
- [ ] Display names are clear

### 6. Accessibility
- [ ] Interactive elements are keyboard accessible
- [ ] Images have alt text
- [ ] Form inputs have labels
- [ ] Proper heading hierarchy

---

## Detailed Review Criteria

### Component Structure

**Good:**
```tsx
export const Hero = (props: HeroProps) => {
  const { heading, description, className, ...rest } = {
    ...HeroDefaults,
    ...props,
  };

  return (
    <section className={cn("section_hero", className)} {...rest}>
      {/* content */}
    </section>
  );
};
```

**Bad:**
```tsx
export const Hero = ({ heading = "Default", description = "Text" }) => {
  return (
    <section className="flex flex-col items-center p-8">
      {/* Using arbitrary Tailwind instead of Client-First */}
    </section>
  );
};
```

### Client-First Classes

**Good:**
```tsx
<section className="section_hero">
  <div className="padding-global">
    <div className="container-large">
      <div className="hero_content">
        <h1 className="heading-style-h1">{heading}</h1>
        <p className="text-size-medium">{description}</p>
      </div>
    </div>
  </div>
</section>
```

**Bad:**
```tsx
<section className="flex flex-col items-center px-4 py-16">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-4xl font-bold">{heading}</h1>
    <p className="text-lg text-gray-600">{description}</p>
  </div>
</section>
```

### Props Typing

**Good:**
```tsx
type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description?: string;
  image: ImageProps;
};

export type HeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
```

**Bad:**
```tsx
type Props = {
  heading: any;
  data: object;
  config: {};
};
```

### Webflow Wrapper Flattening

**Good:**
```tsx
const HeroWrapper = (webflowProps: {
  heading?: string;
  imageUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
}) => {
  const heroProps = {
    heading: webflowProps.heading,
    image: {
      url: webflowProps.imageUrl,
      src: webflowProps.imageSrc,
      alt: webflowProps.imageAlt,
    },
  };
  return <Hero {...heroProps} />;
};
```

**Bad:**
```tsx
// Passing nested objects directly - Webflow can't handle this
const HeroWrapper = (props) => {
  return <Hero image={{ url: props.url, src: props.src }} />;
};
```

### ShadCN Primitives

**Good:**
```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">
  Get Started
</Button>
```

**Bad:**
```tsx
// Custom button instead of using ShadCN
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Get Started
</button>
```

---

## Common Issues to Flag

### 1. Missing Default Props
```tsx
// Missing defaults - will cause undefined issues
export const Hero = ({ heading, description }: HeroProps) => {
```

**Fix:** Always spread defaults
```tsx
const { heading, description } = { ...HeroDefaults, ...props };
```

### 2. Arbitrary Tailwind for Structure
```tsx
// Using Tailwind for layout instead of Client-First
<div className="flex flex-col md:flex-row gap-8">
```

**Fix:** Use Client-First patterns
```tsx
<div className="hero_grid hero_grid-two-column">
```

### 3. Missing cn() for Dynamic Classes
```tsx
// Hard to extend with additional classes
<section className="section_hero">
```

**Fix:** Use cn() for extensibility
```tsx
<section className={cn("section_hero", className)}>
```

### 4. Incorrect Webflow Data Types
```tsx
// Using Text for a boolean
showButton: props.Text({ name: 'Show Button', defaultValue: 'true' }),
```

**Fix:** Use correct type
```tsx
showButton: props.Boolean({ name: 'Show Button', defaultValue: true }),
```

---

## Review Response Template

```markdown
## Review Summary

**Status:** [Approved / Changes Requested / Needs Discussion]

### What's Good
- 
- 

### Issues Found
1. **[Category]:** Description of issue
   - Location: `file.tsx:line`
   - Suggestion: How to fix

### Questions
- 

### Optional Improvements
- 
```

---

## Severity Levels

| Level | Action | Examples |
|-------|--------|----------|
| **Blocker** | Must fix before merge | Type errors, broken functionality, security issues |
| **Major** | Should fix before merge | Wrong patterns, missing tests, accessibility issues |
| **Minor** | Can fix in follow-up | Naming improvements, code style, documentation |
| **Suggestion** | Optional improvement | Performance optimizations, refactoring ideas |

