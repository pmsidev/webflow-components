<!-- d33e3aa3-8414-49e2-8f5e-cde39ac6cd19 999d2e1b-5d1e-441f-8622-4756ab033222 -->
# Webflow DevLink Component Library Plan

## Overview

Build a production-ready component library that integrates Webflow DevLink with React, utilizing both Relume UI and ShadCN UI components. The structure will support easy maintenance, type safety, and seamless Webflow Designer integration.

## Project Structure

### Proposed Folder Structure

```
src/
├── components/           # Main component directory
│   ├── ui/              # Base UI components (ShadCN + Relume primitives)
│   │   ├── button/
│   │   ├── input/
│   │   ├── card/
│   │   └── ...
│   ├── banners/         # Banner components
│   │   ├── Banner1/
│   │   │   ├── Banner1.tsx
│   │   │   ├── Banner1.webflow.tsx
│   │   │   ├── Banner1.types.ts
│   │   │   ├── Banner1.constants.ts
│   │   │   └── index.ts
│   │   └── ...
│   ├── hero/            # Hero components
│   ├── forms/           # Form components
│   ├── navigation/      # Navigation components
│   ├── cards/           # Card components
│   ├── modals/          # Modal/Dialog components
│   └── tables/          # Table components
├── lib/                 # Shared utilities
│   ├── utils.ts         # Utility functions (cn, etc.)
│   ├── webflow/         # Webflow-specific utilities
│   │   └── prop-mapper.ts  # Helper for prop transformation
│   └── hooks/           # Shared React hooks
├── types/               # Global TypeScript types
│   └── webflow.ts       # Webflow-specific types
└── styles/              # Global styles
    └── globals.css       # ShadCN CSS variables
```

## Implementation Steps

### 1. Project Setup & Configuration

#### 1.1 ShadCN UI Initialization

- Install ShadCN CLI dependencies
- Create `components.json` configuration file
- Configure Tailwind to work with both Relume and ShadCN
- Set up CSS variables for ShadCN theming
- Update `tailwind.config.js` to include ShadCN content paths

**Files to create/modify:**

- `components.json` - ShadCN configuration
- `tailwind.config.js` - Update content paths and theme
- `src/styles/globals.css` - Add ShadCN CSS variables
- `package.json` - Add ShadCN dependencies

#### 1.2 TypeScript Configuration

- Ensure strict TypeScript settings
- Create shared type definitions for Webflow props
- Set up path aliases for cleaner imports

**Files to create/modify:**

- `tsconfig.json` - Add path aliases (@/components, @/lib, etc.)

### 2. Base UI Components Setup

#### 2.1 Install Core ShadCN Components

Install essential ShadCN components that complement Relume:

- Button (if needed beyond Relume)
- Input (if needed beyond Relume)
- Card
- Dialog/Modal
- Select
- Textarea
- Label
- Separator
- Badge
- Avatar

**Action:** Run `npx shadcn@latest add [component]` for each

#### 2.2 Create Shared Utilities

- `lib/utils.ts` - `cn()` function for className merging
- `lib/webflow/prop-mapper.ts` - Utilities for transforming nested props to flat Webflow props

### 3. Component Structure Pattern

Each component follows this pattern:

```
ComponentName/
├── ComponentName.tsx          # Main React component
├── ComponentName.webflow.tsx  # Webflow wrapper
├── ComponentName.types.ts    # TypeScript interfaces
├── ComponentName.constants.ts # Default values
├── ComponentName.test.tsx     # Tests (optional)
└── index.ts                   # Exports
```

**Key Patterns:**

- Main component accepts nested, well-structured props
- Webflow wrapper flattens props for Webflow Designer
- Types are exported for reuse
- Constants file contains default values
- Index file provides clean exports

### 4. Component Categories to Build

#### 4.1 Banners (Existing - Improve)

- ✅ Banner1 - Already exists, ensure it follows new structure
- Add Banner2, Banner3 variants

#### 4.2 Hero (Existing - Complete)

- ✅ Hero.tsx exists but missing Webflow wrapper
- Create `Hero.webflow.tsx` with proper prop mapping
- Add Hero variants (Hero1, Hero2, etc.)

#### 4.3 Buttons

- PrimaryButton, SecondaryButton, IconButton
- Use Relume Button as base, enhance with ShadCN variants if needed
- Webflow wrappers for each

#### 4.4 Cards

- Card (base component from ShadCN)
- CardWithImage, CardWithAction, CardGrid
- Webflow wrappers with image, title, description props

#### 4.5 Forms

- FormInput, FormTextarea, FormSelect, FormCheckbox
- FormGroup for field grouping
- FormValidation utilities
- Webflow wrappers for each field type

#### 4.6 Navigation

- Navbar, NavbarWithDropdown, MobileNav
- Breadcrumbs
- Pagination
- Webflow wrappers with link management

#### 4.7 Modals/Dialogs

- Modal (using ShadCN Dialog)
- AlertDialog
- ConfirmationDialog
- Webflow wrappers with trigger/content props

#### 4.8 Tables

- DataTable (using ShadCN Table)
- SortableTable
- Webflow wrappers for data display

### 5. Webflow Integration Best Practices

#### 5.1 Prop Mapping Strategy

- **Nested Props → Flat Props**: Transform complex objects to flat Webflow props
- **Type Safety**: Maintain TypeScript types for both React and Webflow versions
- **Default Values**: Always provide sensible defaults in Webflow props

**Example Pattern:**

```typescript
// React component expects: { button: { title: string, size: 'sm' | 'md' } }
// Webflow wrapper receives: { buttonTitle: string, buttonSize: 'sm' | 'md' }
```

#### 5.2 Component Declaration

- Use `declareComponent` from `@webflow/react`
- Provide meaningful `name`, `description`, and `group`
- Use appropriate prop types from `@webflow/data-types`:
  - `props.Text()` for strings
  - `props.Variant()` for enums
  - `props.Number()` for numbers
  - `props.Boolean()` for booleans
  - `props.Asset()` for images/files

### 6. Styling Strategy

#### 6.1 Tailwind Configuration

- Merge Relume and ShadCN Tailwind configs
- Ensure no class conflicts
- Use ShadCN CSS variables for theming
- Maintain Relume design tokens where applicable

#### 6.2 Component Styling

- Prefer Tailwind utility classes
- Use ShadCN components for complex interactions (Dialog, Dropdown, etc.)
- Use Relume components for design system consistency
- Create custom variants when needed

### 7. Type Safety & Developer Experience

#### 7.1 Type Definitions

- Export all component prop types
- Create shared types for common patterns (ImageProps, ButtonProps, etc.)
- Type Webflow prop transformations

#### 7.2 Export Structure

- Create barrel exports (`index.ts`) in each component folder
- Main `src/components/index.ts` for easy imports
- Separate exports for React and Webflow versions

### 8. Testing Strategy

#### 8.1 Component Tests

- Unit tests for component rendering
- Prop validation tests
- Webflow wrapper transformation tests
- Accessibility tests (optional but recommended)

### 9. Documentation

#### 9.1 Component Documentation

- JSDoc comments for all exported components
- Prop descriptions
- Usage examples
- Webflow integration notes

## Potential Pitfalls & Solutions

### Pitfall 1: CSS Class Conflicts

**Issue:** Relume and ShadCN may have conflicting Tailwind classes

**Solution:**

- Use CSS variables for theming
- Namespace component-specific classes
- Test thoroughly in both environments

### Pitfall 2: Prop Type Mismatches

**Issue:** Webflow requires flat props, React prefers nested

**Solution:**

- Create robust prop mapper utilities
- Type both interfaces explicitly
- Add runtime validation if needed

### Pitfall 3: Build Configuration

**Issue:** Webflow CLI needs specific file patterns

**Solution:**

- Ensure `webflow.json` correctly identifies `.webflow.tsx` files
- Test build process with `webflow build`
- Verify component discovery

### Pitfall 4: Bundle Size

**Issue:** Including both Relume and ShadCN may bloat bundle

**Solution:**

- Tree-shake unused components
- Use dynamic imports for heavy components
- Monitor bundle size during development

### Pitfall 5: TypeScript Strictness

**Issue:** Webflow props are less type-safe than React props

**Solution:**

- Create type guards for Webflow props
- Use discriminated unions where appropriate
- Add runtime prop validation

### Pitfall 6: Component Naming

**Issue:** Webflow has naming restrictions

**Solution:**

- Use PascalCase for component names
- Avoid special characters
- Keep names descriptive but concise

## File Organization Principles

1. **One Component Per Folder**: Each component gets its own directory
2. **Clear Separation**: React components separate from Webflow wrappers
3. **Shared Code**: Common utilities in `lib/` directory
4. **Type Safety**: Types exported and reusable
5. **Discoverability**: Clear naming and folder structure

## Next Steps After Implementation

1. Create Storybook or similar for component documentation
2. Set up CI/CD for automated testing
3. Version control strategy for component library
4. Contribution guidelines for team members
5. Performance monitoring and optimization

### To-dos

- [ ] Initialize ShadCN UI: create components.json, install CLI, configure Tailwind for both Relume and ShadCN, set up CSS variables
- [ ] Configure TypeScript: add path aliases, create shared type definitions, ensure strict mode
- [ ] Create shared utilities: lib/utils.ts (cn function), lib/webflow/prop-mapper.ts (prop transformation helpers)
- [ ] Install core ShadCN components: Button, Input, Card, Dialog, Select, Textarea, Label, Separator, Badge, Avatar
- [ ] Refactor Banner1 to new structure: move to components/banners/, add types and constants files, ensure proper exports
- [ ] Complete Hero component: create Hero.webflow.tsx wrapper, add types and constants files, move to components/hero/
- [ ] Create button components: PrimaryButton, SecondaryButton, IconButton with Webflow wrappers
- [ ] Create card components: base Card, CardWithImage, CardWithAction, CardGrid with Webflow wrappers
- [ ] Create form components: FormInput, FormTextarea, FormSelect, FormCheckbox, FormGroup with Webflow wrappers
- [ ] Create navigation components: Navbar, NavbarWithDropdown, MobileNav, Breadcrumbs, Pagination with Webflow wrappers
- [ ] Create modal/dialog components: Modal, AlertDialog, ConfirmationDialog using ShadCN Dialog with Webflow wrappers
- [ ] Create table components: DataTable, SortableTable using ShadCN Table with Webflow wrappers
- [ ] Create barrel exports: index.ts files for each component category and main components/index.ts
- [ ] Verify and update webflow.json to ensure all components are discoverable
- [ ] Test Webflow build process and verify component discovery works correctly