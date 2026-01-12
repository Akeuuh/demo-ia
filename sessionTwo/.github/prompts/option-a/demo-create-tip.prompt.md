# Create Tip Component

## Task

Create a "Tip" component for displaying helpful tips and warnings.

**Create these files:**
1. `src/components/Tip/Tip.tsx`
2. `src/components/Tip/index.ts`
3. Add translations to `src/i18n/locales/en.json` and `fr.json`

## Context

React + TypeScript project using styled-components and i18next.

### Theme Values

```ts
colors: { primary: '#646cff', warning: '#f59e0b', surface: '#242442', text: 'rgba(255, 255, 255, 0.87)' }
spacing: { small: '8px', medium: '16px', large: '24px' }
```

## Component Specification

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'tip' \| 'warning'` | `'tip'` | Color scheme |
| `title` | `string` | - | Optional header |
| `children` | `ReactNode` | - | Content |

**Styling:**
- Left border: 4px solid (primary for tip, warning for warning variant)
- Background: `theme.colors.surface`
- Border radius: 8px
- Padding: `theme.spacing.medium`
- ARIA: `role="note"`

## Translations to Add

**en.json** - add under root:
```json
"tips": {
  "iterate": {
    "title": "Pro Tip",
    "content": "Start simple and iterate. Your first prompt doesn't need to be perfect."
  },
  "responsibility": {
    "title": "Warning",
    "content": "You're responsible for what you commit. Always review AI-generated code."
  }
}
```

**fr.json** - add under root:
```json
"tips": {
  "iterate": {
    "title": "Astuce",
    "content": "Commencez simple et iterez. Votre premier prompt n'a pas besoin d'etre parfait."
  },
  "responsibility": {
    "title": "Attention",
    "content": "Vous etes responsable de ce que vous commitez. Relisez toujours le code genere par l'IA."
  }
}
```

## Example Pattern

```tsx
const Container = styled.div<{ $variant: TipVariant }>`
  background-color: ${({ theme }) => theme.colors.surface};
  border-left: 4px solid ${({ theme, $variant }) =>
    $variant === 'warning' ? theme.colors.warning : theme.colors.primary};
`;
```

Create the component files and add translations now.
