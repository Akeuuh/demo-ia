# Integrate Tip Component into App

## Task

Add the Tip component to `src/App.tsx` so it's visible in the app.

**Modify this file:**
- `src/App.tsx`

## Changes Required

### 1. Add Import

```tsx
import { Tip } from './components/Tip';
```

### 2. Add Styled Component

Add this after the existing styled components:

```tsx
const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;
```

### 3. Add Tips to JSX

Insert this block **after** the `</PillarsSection>` closing tag and **before** the first `<PromptComparison>`:

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

## Expected Result

The app should display two tip boxes between the Pillars section and the Prompt Comparisons:
- A blue "Pro Tip" about iterating on prompts
- An orange "Warning" about reviewing AI code

Apply these changes to App.tsx now.
