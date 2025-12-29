# Design System

This directory contains the design system recipes and configurations for Panda CSS.

## Structure

```
design-system/
├── recipes/           # Panda CSS recipe definitions
│   ├── button.recipe.ts
│   └── index.ts
└── README.md
```

## Recipes

Recipes are reusable style configurations that define variants and sizes for components. They are defined using Panda CSS's `defineRecipe` API and imported into `panda.config.ts`.

### Button Recipe

The button recipe provides multiple variants and sizes:

**Variants:**

- `primary` - Primary action button with blue background
- `secondary` - Secondary action button with white/gray background
- `tertiary` - Tertiary button with transparent background
- `link-gray` - Link-style button with gray text
- `link-color` - Link-style button with brand color
- `danger` - Destructive action button with red background
- `secondary-danger` - Secondary destructive button
- `tertiary-danger` - Tertiary destructive button
- `link-danger` - Link-style destructive button

**Sizes:**

- `sm` - Small button (px: 3, py: 2, text: sm)
- `md` - Medium button (px: 3.5, py: 2.5, text: sm)
- `lg` - Large button (px: 4, py: 2.5, text: md)
- `xl` - Extra large button (px: 4.5, py: 3, text: md)

## Usage

### 1. Define a Recipe

Create a new recipe file in `recipes/`:

```typescript
import { defineRecipe } from "@pandacss/dev";

export const myRecipe = defineRecipe({
  className: "my-component",
  description: "My component styles",
  base: {
    // Base styles
  },
  variants: {
    variant: {
      primary: {
        /* styles */
      },
      secondary: {
        /* styles */
      },
    },
    size: {
      sm: {
        /* styles */
      },
      md: {
        /* styles */
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
```

### 2. Export the Recipe

Add the recipe to `recipes/index.ts`:

```typescript
export { myRecipe } from "./my-recipe.recipe";
```

### 3. Register in Panda Config

Import and register in `panda.config.ts`:

```typescript
import { myRecipe } from "./src/design-system/recipes";

export default defineConfig({
  theme: {
    extend: {
      recipes: {
        myComponent: myRecipe,
      },
    },
  },
});
```

### 4. Generate Types

Run the Panda codegen:

```bash
npm run prepare
# or
npx panda codegen
```

### 5. Use in Components

```tsx
import { myComponent } from "../../../styled-system/recipes";

export const MyComponent = ({ variant, size }) => {
  return <div className={myComponent({ variant, size })}>Content</div>;
};
```

## Benefits

- **Type Safety**: Full TypeScript support for all variants and sizes
- **Zero Runtime**: All styles are generated at build time
- **Atomic CSS**: Generates optimized, atomic CSS classes
- **Maintainability**: Centralized style definitions
- **Consistency**: Ensures design consistency across components
