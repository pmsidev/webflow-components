# Contributing to PMSI Components

This guide outlines our development workflow, coding standards, and contribution process.

## Table of Contents

- [Getting Started](#getting-started)
- [Git Workflow](#git-workflow)
- [Branch Naming Convention](#branch-naming-convention)
- [Commit Messages](#commit-messages)
- [Component Development](#component-development)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pmsi-components
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## Git Workflow

We follow a **feature-branch workflow** with PR-based code reviews.

### Workflow Steps

```
1. git checkout main && git pull origin main
2. git checkout -b <branch-type>/<branch-name>
3. Implement changes (following component patterns)
4. npm run lint && npm run test
5. git add . && git commit -m "<type>(<scope>): <description>"
6. git push -u origin <branch-name>
7. Create PR using the template
8. Address review feedback
9. Squash merge after approval
```

### Branch Lifecycle

```
main (protected)
  └── feature/ui-button
        ├── commit: "feat(ui): add Button component with variants"
        ├── commit: "test(ui): add Button component tests"
        └── PR → main (squash merge)
```

---

## Branch Naming Convention

| Type     | Pattern                      | Example                    | Use Case                        |
|----------|------------------------------|----------------------------|---------------------------------|
| Feature  | `feature/[category]-[name]`  | `feature/ui-button`        | New components or features      |
| Bugfix   | `fix/[description]`          | `fix/banner-close-btn`     | Bug fixes                       |
| Refactor | `refactor/[scope]`           | `refactor/banner1-shadcn`  | Code improvements               |
| Docs     | `docs/[topic]`               | `docs/contributing`        | Documentation updates           |
| Chore    | `chore/[task]`               | `chore/shadcn-deps`        | Build, deps, config changes     |

---

## Commit Messages

We use **Conventional Commits** for clear, automated changelog generation.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

| Type       | Description                                      |
|------------|--------------------------------------------------|
| `feat`     | New feature or component                         |
| `fix`      | Bug fix                                          |
| `refactor` | Code change without feature/fix                  |
| `style`    | Formatting, whitespace (no code change)          |
| `test`     | Adding or updating tests                         |
| `docs`     | Documentation only                               |
| `chore`    | Build process, dependencies, tooling             |
| `perf`     | Performance improvement                          |

### Examples

```bash
feat(ui): add Button component with size variants
fix(banner): resolve close button accessibility issue
test(hero): add rendering and interaction tests
docs(contributing): add PR workflow guide
chore(deps): install ShadCN dependencies
refactor(banner1): migrate to ShadCN primitives
```

---

## Component Development

### File Structure

Each component follows a **three-file pattern**:

```
src/components/[Category]/[ComponentName]/
├── ComponentName.tsx           # Main component (Client-First classes)
├── ComponentName.webflow.tsx   # DevLink wrapper for Webflow
├── ComponentName.test.tsx      # Component tests
└── index.ts                    # Re-exports
```

### Client-First Naming Convention

| Pattern                    | Example                              | Usage                        |
|----------------------------|--------------------------------------|------------------------------|
| `section_[name]`           | `section_hero`, `section_banner`     | Section wrapper              |
| `[name]_[element]`         | `hero_content`, `banner_form`        | Child elements               |
| `padding-global`           | `padding-global`                     | Standard horizontal padding  |
| `container-[size]`         | `container-small`, `container-large` | Container widths             |
| `[element]-wrapper`        | `hero_cta-wrapper`                   | Element groupings            |
| `heading-style-[h1-h6]`    | `heading-style-h1`                   | Typography                   |
| `text-size-[size]`         | `text-size-medium`                   | Text sizes                   |

### Using ShadCN Primitives

Import UI primitives from `@/components/ui`:

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
```

### Creating Webflow Wrappers

Webflow DevLink requires flat props. Nest them in the wrapper:

```tsx
// ComponentName.webflow.tsx
import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import { ComponentName } from './ComponentName';

const ComponentNameWrapper = (webflowProps) => {
  // Transform flat props to nested structure
  return <ComponentName {...transformedProps} />;
};

export default declareComponent(ComponentNameWrapper, {
  name: 'ComponentName',
  group: 'Category',
  props: { /* flat prop definitions */ }
});
```

---

## Testing

### Test Requirements

Each component should have tests covering:

- [ ] Renders without crashing
- [ ] Props are applied correctly
- [ ] User interactions work (clicks, inputs)
- [ ] Basic accessibility (roles, aria-labels)

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests for a specific file
npm run test -- Banner1.test.tsx
```

### Pre-PR Checklist

Before creating a PR, run:

```bash
npm run lint      # ESLint checks
npm run test      # Jest + React Testing Library
npm run build     # Verify build succeeds
```

---

## Pull Request Process

### Creating a PR

1. Push your branch to origin
2. Open a PR against `main`
3. Fill out the PR template completely
4. Request review from a team member

### PR Requirements

- [ ] Branch follows naming convention
- [ ] Commits follow conventional commit format
- [ ] All tests pass
- [ ] No lint errors
- [ ] PR template checklist completed
- [ ] Changes documented if needed

### Review Process

1. Reviewer checks code against standards
2. Feedback provided via PR comments
3. Author addresses feedback
4. Approval given when ready
5. Author squash merges to main

### After Merge

1. Delete the feature branch
2. Pull latest main locally
3. Start next task from fresh main

---

## Questions?

If you have questions about the contribution process, please reach out to the team lead or open a discussion issue.

