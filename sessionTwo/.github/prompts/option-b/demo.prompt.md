# Integrate Tip Component

## Task

Integrate the existing Tip component into App.tsx and add the required translations.

**Files to modify:**
1. `src/App.tsx` - Import and use Tip
2. `src/i18n/locales/en.json` - Add English translations
3. `src/i18n/locales/fr.json` - Add French translations

## App.tsx Changes

### 1. Add Import

```tsx
import { Tip } from './components/Tip';
```

### 2. Add TipsGrid Styled Component

```tsx
const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;
```

### 3. Add to JSX (after PillarsSection, before PromptComparison)

```tsx
<TipsGrid>
  <Tip variant="tip" title={t('tips.iterate.title')}>
    {t('tips.iterate.content')}
  </Tip>
  <Tip variant="warning" title={t('tips.responsibility.title')}>
    {t('tips.responsibility.content')}
  </Tip>
</TipsGrid>
```

## Translations to Add

**en.json:**
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

**fr.json:**
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

Apply all changes now.
