# Copilot Instructions for Session Two

This file is automatically loaded by GitHub Copilot to provide context about our project.
Share this file with your team by committing it to your repository.

## Project Overview

This is a React + TypeScript demo application showcasing prompt engineering concepts.
It's part of an AI development course teaching developers how to work effectively with AI tools.

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: styled-components with a centralized theme
- **Internationalization**: i18next with FR/EN support
- **Build Tool**: Vite

## Coding Conventions

### TypeScript

- Use strict TypeScript with explicit types
- Prefer interfaces over types for props
- Export types alongside components

### Components

- Use functional components with explicit return types
- Define Props interface with pattern `[ComponentName]Props`
- Export from index.ts barrel files
- Use styled-components for all styling

### File Structure

```
src/components/[ComponentName]/
├── index.ts           # Exports
└── [ComponentName].tsx # Implementation
```

### Styling

- Always use theme values from `theme.ts`:
  - Colors: `theme.colors.primary`, `theme.colors.text`, etc.
  - Spacing: `theme.spacing.small`, `theme.spacing.medium`, etc.
  - Fonts: `theme.fonts.main`, `theme.fonts.code`
- Use transient props with `$` prefix for styled-components

### Internationalization

- All user-facing text must use i18n translations
- Translation keys follow dot notation: `section.subsection.key`
- Always add translations to both `en.json` and `fr.json`

## Component Patterns

### Example Component Structure

```tsx
import styled from 'styled-components';

export interface ExampleProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const StyledExample = styled.div<{ $variant: ExampleProps['variant'] }>`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const Example: React.FC<ExampleProps> = ({
  variant = 'primary',
  children,
}) => {
  return <StyledExample $variant={variant}>{children}</StyledExample>;
};
```

## Common Tasks

### Creating a New Component

1. Create folder: `src/components/[Name]/`
2. Create `[Name].tsx` with Props interface and styled components
3. Create `index.ts` exporting the component and types
4. Add any translations to locale files

### Adding Translations

1. Add keys to `src/i18n/locales/en.json`
2. Add keys to `src/i18n/locales/fr.json`
3. Use with `const { t } = useTranslation(); t('key')`

## Constraints

When generating code for this project:

- DO: Use the theme system for all colors and spacing
- DO: Follow the existing component patterns
- DO: Use i18n for any user-visible text
- DO: Export from index.ts files
- DON'T: Use inline styles or hardcoded colors
- DON'T: Skip TypeScript types
- DON'T: Create components without proper exports
