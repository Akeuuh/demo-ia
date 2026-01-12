# Tip Component Specification

## Component: Tip

A callout component for displaying tips and warnings.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'tip' \| 'warning'` | `'tip'` | Color scheme (primary/warning) |
| `title` | `string` | - | Optional header text |
| `children` | `ReactNode` | - | Tip content |

### Styling Requirements

- Left border: 4px solid
  - `tip` variant: `theme.colors.primary`
  - `warning` variant: `theme.colors.warning`
- Background: `theme.colors.surface`
- Border radius: 8px
- Padding: `theme.spacing.medium`

### Accessibility

- Use `role="note"` on container
- Use `aria-label={title}` when title is provided

### Icon

Display a simple text icon in the header:
- `tip` variant: `*`
- `warning` variant: `!`
