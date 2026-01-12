# Demo: Create Tip Component

This demo shows two approaches to prompt composition.

---

## Option A: Self-Contained Sequential Prompts

Two specific prompts that work together:

```
1. /option-a/demo-create-tip      → Creates Tip component + translations
2. /option-a/demo-integrate-tip   → Adds Tip to App.tsx
```

**Best for:** Demos, tutorials, onboarding new team members

---

## Option B: Generic + Specific Composition

Reuse the generic component template with specific context:

```
1. /create-component Tip          → Use with /option-b/tip-spec context
2. /option-b/demo                 → Integrates Tip + adds translations
```

**Best for:** Teams with established patterns, reducing prompt duplication

---

## Comparison

| Aspect | Option A | Option B |
|--------|----------|----------|
| Self-contained | Yes | No (requires generic prompt) |
| Reusability | Low (Tip-specific) | High (generic pattern) |
| Learning curve | Lower | Higher |
| Maintenance | Update both prompts | Update generic once |

Choose based on your team's needs!
