# Create Tip Component

## Persona

You are a senior React developer specialized in building reusable, accessible components with styled-components and TypeScript.

## Task

Create a "Tip" component that displays helpful tips or pro-tips in the sessionTwo application. This component will be used to highlight important information during the prompt engineering presentation.

## Context

This is a React + TypeScript project using:
- styled-components for styling with a centralized theme
- i18next for internationalization (FR/EN)
- Barrel exports from index.ts files

### Theme Available

```ts
colors: {
  primary: '#646cff',
  secondary: '#a855f7',
  success: '#22c55e',
  warning: '#f59e0b',
  background: '#1a1a2e',
  surface: '#242442',
  text: 'rgba(255, 255, 255, 0.87)',
  textMuted: 'rgba(255, 255, 255, 0.5)',
}
spacing: { small: '8px', medium: '16px', large: '24px', xlarge: '32px' }
fonts: { main: '...', code: '...' }
```

### Requirements

1. **Variants**: `tip` (default, uses primary color) and `warning` (uses warning color)
2. **Props**: `variant`, `title` (optional), `children` for content
3. **Style**: Left border accent (like the PromptCard component), icon prefix
4. **Accessibility**: Use appropriate ARIA role

## Format

Provide the code in this order:
1. `src/components/Tip/Tip.tsx` - Component implementation
2. `src/components/Tip/index.ts` - Barrel export
3. Translations to add to `en.json` and `fr.json`
4. Usage example in App.tsx

## Example

Here's how a similar component (PromptCard) is structured in this project:

```tsx
const Card = styled.div<{ $type: PromptType }>`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.large};
  border-left: 4px solid
    ${({ theme, $type }) => ($type === 'vague' ? theme.colors.warning : theme.colors.success)};
`;
```

Now create the Tip component.
