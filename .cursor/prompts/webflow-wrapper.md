# Webflow DevLink Wrapper Guide

You are creating DevLink wrappers to expose React components to Webflow Designer. Follow these patterns exactly.

## Purpose

Webflow DevLink wrappers:
1. Expose React components to Webflow Designer
2. Flatten nested props for Webflow's flat prop system
3. Map Webflow data types to React props
4. Organize components into groups for the Designer panel

## Wrapper File Pattern (`ComponentName.webflow.tsx`)

```tsx
import { ComponentName } from './ComponentName';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';
import React from 'react';

// 1. Create wrapper to transform flat Webflow props to nested component props
const ComponentNameWrapper = (webflowProps: {
  heading?: string;
  description?: string;
  imageUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonTitle?: string;
  buttonVariant?: 'default' | 'outline' | 'ghost';
}) => {
  const {
    heading,
    description,
    imageUrl,
    imageSrc,
    imageAlt,
    buttonTitle,
    buttonVariant,
  } = webflowProps;

  // 2. Transform flat props to nested structure
  const componentProps = {
    heading,
    description,
    image: {
      url: imageUrl,
      src: imageSrc,
      alt: imageAlt,
    },
    button: {
      title: buttonTitle,
      variant: buttonVariant,
    },
  };

  return <ComponentName {...componentProps} />;
};

// 3. Declare component for Webflow with flat props
export default declareComponent(ComponentNameWrapper, {
  name: 'ComponentName',
  description: 'Brief description of what the component does',
  group: 'Category', // Banners, Hero, Navigation, Content, Forms, Cards, Layout
  props: {
    // Text props
    heading: props.Text({
      name: 'Heading',
      defaultValue: 'Default heading text',
    }),
    description: props.Text({
      name: 'Description',
      defaultValue: 'Default description text.',
    }),

    // Image props (flattened)
    imageUrl: props.Text({
      name: 'Image Link URL',
      defaultValue: '#',
    }),
    imageSrc: props.Text({
      name: 'Image Source',
      defaultValue: 'https://placeholder.com/image.jpg',
    }),
    imageAlt: props.Text({
      name: 'Image Alt Text',
      defaultValue: 'Image description',
    }),

    // Button props (flattened)
    buttonTitle: props.Text({
      name: 'Button Text',
      defaultValue: 'Click me',
    }),
    buttonVariant: props.Variant({
      name: 'Button Style',
      options: ['default', 'outline', 'ghost'],
      defaultValue: 'default',
    }),
  },
});
```

## Webflow Data Types

Use the correct `props` type for each value:

| Webflow Type | Usage | Example |
|--------------|-------|---------|
| `props.Text()` | String values | Headings, descriptions, URLs |
| `props.Number()` | Numeric values | Counts, sizes |
| `props.Boolean()` | Toggle options | Show/hide elements |
| `props.Variant()` | Enum options | Sizes, variants, styles |
| `props.Link()` | Webflow links | Navigation links |
| `props.RichText()` | Rich text content | Formatted content |
| `props.Image()` | Webflow images | CMS-connected images |

## Prop Flattening Rules

Webflow requires flat props. Flatten nested objects:

### Before (React nested props)
```tsx
type Props = {
  logo: {
    url: string;
    src: string;
    alt: string;
  };
  button: {
    title: string;
    size: 'sm' | 'md' | 'lg';
  };
};
```

### After (Webflow flat props)
```tsx
props: {
  logoUrl: props.Text({ name: 'Logo URL', defaultValue: '#' }),
  logoSrc: props.Text({ name: 'Logo Image', defaultValue: '...' }),
  logoAlt: props.Text({ name: 'Logo Alt', defaultValue: 'Logo' }),
  buttonTitle: props.Text({ name: 'Button Text', defaultValue: 'Click' }),
  buttonSize: props.Variant({
    name: 'Button Size',
    options: ['sm', 'md', 'lg'],
    defaultValue: 'md'
  }),
}
```

## Component Groups

Organize components into these groups:

| Group | Components |
|-------|------------|
| `Banners` | Banner1, Banner2, AlertBanner |
| `Hero` | Hero1, Hero2, HeroSplit |
| `Navigation` | Navbar, Footer, Sidebar |
| `Content` | Features, Testimonials, Pricing, Team |
| `Forms` | ContactForm, Newsletter, LoginForm |
| `Cards` | BlogCard, ProductCard, ProfileCard |
| `Layout` | Section, Container, Grid |

## Handling Optional Props

For optional nested objects, check existence in wrapper:

```tsx
const ComponentNameWrapper = (webflowProps) => {
  const componentProps = {
    heading: webflowProps.heading,
    // Only include image if src is provided
    ...(webflowProps.imageSrc && {
      image: {
        url: webflowProps.imageUrl,
        src: webflowProps.imageSrc,
        alt: webflowProps.imageAlt,
      },
    }),
  };

  return <ComponentName {...componentProps} />;
};
```

## Handling Slots (Children)

For components with slot content:

```tsx
export default declareComponent(ComponentNameWrapper, {
  name: 'ComponentName',
  props: {
    // Regular props...
    slotContent: props.Slot({
      name: 'Content Slot',
    }),
  },
});

// In wrapper:
const ComponentNameWrapper = ({ slotContent, ...props }) => {
  return (
    <ComponentName {...transformedProps}>
      {slotContent}
    </ComponentName>
  );
};
```

## Naming Conventions

| Convention | Example |
|------------|---------|
| Wrapper function | `ComponentNameWrapper` |
| Export | `export default declareComponent(...)` |
| Prop names | camelCase, descriptive |
| Display names | Title Case with spaces |

## Checklist Before Completing

- [ ] Wrapper transforms flat props to nested structure
- [ ] All nested objects are flattened
- [ ] Correct Webflow data types used
- [ ] Default values provided for all props
- [ ] Component assigned to correct group
- [ ] Props have clear display names
- [ ] Optional props handled correctly
