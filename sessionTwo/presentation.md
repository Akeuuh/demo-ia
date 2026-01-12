# Prompt Engineering
## The Art of Communicating with AI

```
    ┌─────────────────────────────────────────────────┐
    │                                                 │
    │   "The quality of your output depends on       │
    │    the quality of your input"                  │
    │                                                 │
    │   PROMPT  ─────────►  AI  ─────────►  OUTPUT   │
    │                                                 │
    └─────────────────────────────────────────────────┘
```

---

## Recap: Session One

```
┌──────────────────────────────────────────────────┐
│  From Chatbot to Agent                           │
│                                                  │
│  • Without context: Generic code                 │
│  • With context: Production-ready code           │
│  • Context-aware tools read your codebase        │
│  • Direct file modification = autonomy           │
└──────────────────────────────────────────────────┘
```

**Today's focus: How to write better prompts**

---

## What is Prompt Engineering?

```
┌──────────────────────────────────────────────────────┐
│  PROMPT ENGINEERING                                  │
│                                                      │
│  The practice of crafting inputs to AI models       │
│  to get the most useful, accurate, and relevant     │
│  outputs for your specific needs.                   │
│                                                      │
│  It's NOT about "hacking" AI                        │
│  It's about COMMUNICATING effectively               │
└──────────────────────────────────────────────────────┘
```

Think of it like writing good requirements:
- The clearer you are, the better the result
- Ambiguity leads to unexpected outputs
- Context matters

---

## Why Does It Matter?

### Same AI, Different Results

```
┌─────────────────────────────────────────────────────┐
│  VAGUE PROMPT                                       │
│  "Make a login form"                               │
│                                                     │
│  Result: Basic HTML form, no validation,           │
│          hardcoded strings, no error handling      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  ENGINEERED PROMPT                                  │
│  "Create a login form component for React with:    │
│   - Email and password fields with validation      │
│   - Loading state during submission                │
│   - Error message display                          │
│   - Accessibility (ARIA labels, focus management)  │
│   - Use our theme system for styling"              │
│                                                     │
│  Result: Production-ready component                │
└─────────────────────────────────────────────────────┘
```

---

## The 5 Pillars of Effective Prompts

```
    ┌───────────────────────────────────────────────┐
    │                                               │
    │   1. PERSONA     Who should the AI be?       │
    │                                               │
    │   2. TASK        What do you want done?      │
    │                                               │
    │   3. CONTEXT     What info is relevant?      │
    │                                               │
    │   4. FORMAT      How should output look?     │
    │                                               │
    │   5. EXAMPLES    Show what you want          │
    │                                               │
    └───────────────────────────────────────────────┘
```

Let's explore each one...

---

## Pillar 1: Persona (Use Sparingly)

### Tell the AI WHO to be — but don't overdo it

```
┌─────────────────────────────────────────────────────┐
│  WITHOUT PERSONA                                    │
│  "Explain this code"                               │
│                                                     │
│  → Generic explanation                             │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  WITH PERSONA                                       │
│  "As a code reviewer, explain this code focusing   │
│   on best practices and potential improvements."   │
│                                                     │
│  → More focused review with actionable insights    │
└─────────────────────────────────────────────────────┘
```

**Reality check:**
- Personas have **diminishing returns** vs. clear task instructions
- A simple role hint is often enough — no need for elaborate backstories
- Task clarity and context matter **more** than persona

**When personas help:**
- Security review (shifts focus to vulnerabilities)
- Documentation (adjusts language complexity)
- Code review (emphasizes best practices)

---

## Pillar 2: Task

### Be Specific About What You Want

```
┌─────────────────────────────────────────────────────┐
│  VAGUE TASK                                         │
│  "Fix this bug"                                    │
│                                                     │
│  → AI doesn't know what the bug IS                 │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  SPECIFIC TASK                                      │
│  "The login form throws 'undefined' error when    │
│   submitting with empty password field. The form   │
│   should show a validation message instead.        │
│   Fix the handleSubmit function."                  │
│                                                     │
│  → Targeted fix with context                       │
└─────────────────────────────────────────────────────┘
```

**Good tasks include:**
- The specific problem or goal
- Where the issue is (file, function, line)
- Expected vs actual behavior

---

## Pillar 3: Context

### Provide Relevant Background

```
┌─────────────────────────────────────────────────────┐
│  WITHOUT CONTEXT                                    │
│  "Create a button component"                       │
│                                                     │
│  → Generic component, may not fit your app        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  WITH CONTEXT                                       │
│  "Create a button component for our React app.    │
│   We use:                                          │
│   - styled-components for styling                  │
│   - Our theme has colors.primary and colors.text  │
│   - Existing buttons have variants: primary,      │
│     secondary, outline                             │
│   - We use i18next for translations"              │
│                                                     │
│  → Component that fits your architecture          │
└─────────────────────────────────────────────────────┘
```

**Pro tip:** AI tools with codebase access provide context automatically!

---

## Pillar 4: Format

### Specify the Output Structure

```
┌─────────────────────────────────────────────────────┐
│  WITHOUT FORMAT                                     │
│  "List the problems in this code"                  │
│                                                     │
│  → Wall of text, hard to action                   │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  WITH FORMAT                                        │
│  "List the problems in this code using this       │
│   format for each issue:                           │
│                                                     │
│   **Issue:** [description]                         │
│   **Location:** [file:line]                        │
│   **Severity:** Critical/High/Medium/Low          │
│   **Fix:** [suggested solution]"                  │
│                                                     │
│  → Structured, actionable list                    │
└─────────────────────────────────────────────────────┘
```

**Format options:** Bullet points, tables, code blocks, JSON, step-by-step

---

## Pillar 5: Examples

### Show, Don't Just Tell

```
┌─────────────────────────────────────────────────────┐
│  WITHOUT EXAMPLE                                    │
│  "Write commit messages in conventional style"     │
│                                                     │
│  → May not match your team's conventions          │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  WITH EXAMPLE                                       │
│  "Write commit messages following these examples: │
│                                                     │
│   feat(auth): add password reset functionality    │
│   fix(api): handle null response in user endpoint │
│   refactor(ui): extract Button into component     │
│                                                     │
│  Format: type(scope): description"                │
│                                                     │
│  → Consistent with your team style                │
└─────────────────────────────────────────────────────┘
```

**Few-shot prompting:** 2-3 examples are usually enough

---

## Prompt Patterns: Chain of Thought

### Make AI "Think" Step by Step

```
┌─────────────────────────────────────────────────────┐
│  DIRECT PROMPT                                      │
│  "Is this code secure?"                            │
│                                                     │
│  → "Yes" or "No" with little explanation          │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  CHAIN OF THOUGHT                                   │
│  "Analyze this code for security issues.          │
│   Think through it step by step:                   │
│   1. First, identify all user inputs              │
│   2. Then, check how each input is validated      │
│   3. Look for potential injection points          │
│   4. Check authentication and authorization       │
│   5. Finally, summarize your findings"            │
│                                                     │
│  → Thorough analysis with reasoning               │
└─────────────────────────────────────────────────────┘
```

**When to use:** Complex analysis, debugging, architecture decisions

---

## Prompt Patterns: Constraints

### Define Boundaries for Better Results

```
┌─────────────────────────────────────────────────────┐
│  WITHOUT CONSTRAINTS                                │
│  "Refactor this function"                          │
│                                                     │
│  → May completely rewrite, change behavior        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  WITH CONSTRAINTS                                   │
│  "Refactor this function with these constraints:  │
│                                                     │
│   DO:                                              │
│   - Improve readability                            │
│   - Extract repeated logic                         │
│   - Add TypeScript types                           │
│                                                     │
│   DON'T:                                           │
│   - Change the function signature                  │
│   - Modify existing behavior                       │
│   - Add new dependencies"                         │
│                                                     │
│  → Controlled, predictable changes                │
└─────────────────────────────────────────────────────┘
```

---

## Iterative Refinement

### Prompting is Rarely One-Shot

```
┌─────────────────────────────────────────────────────┐
│  THE REALITY OF PROMPT ENGINEERING                  │
│                                                     │
│  First prompt  ──►  Partial result                 │
│       │                                             │
│       ▼                                             │
│  Refine prompt ──►  Better result                  │
│       │                                             │
│       ▼                                             │
│  Add examples  ──►  Good result                    │
│       │                                             │
│       ▼                                             │
│  Fine-tune     ──►  Great result                   │
└─────────────────────────────────────────────────────┘
```

**Iteration strategies:**
1. **Start simple** — add complexity only if needed
2. **Analyze failures** — what did the AI misunderstand?
3. **Add constraints** — if output is too broad
4. **Add examples** — if output style is wrong
5. **Break it down** — if the task is too complex

---

## Troubleshooting Failed Prompts

### When AI Gives Wrong Results

```
┌─────────────────────────────────────────────────────┐
│  SYMPTOM                    LIKELY CAUSE            │
│                                                     │
│  Output is too generic  →  Missing context         │
│  Wrong code style       →  No examples provided    │
│  Incomplete solution    →  Task too vague          │
│  Hallucinated APIs      →  No codebase context     │
│  Ignores requirements   →  Prompt too long         │
│  Inconsistent results   →  Ambiguous instructions  │
└─────────────────────────────────────────────────────┘
```

**Debugging checklist:**
- [ ] Is your task specific enough?
- [ ] Did you provide relevant context?
- [ ] Is the prompt under ~2000 tokens?
- [ ] Did you show examples of desired output?
- [ ] Are your constraints clear (DO/DON'T)?

---

## Prompt Anti-Patterns

### What NOT to Do

```
┌─────────────────────────────────────────────────────┐
│  ANTI-PATTERN 1: The Novel                         │
│                                                     │
│  "You are an incredibly talented senior developer  │
│   with 20 years of experience who has worked at    │
│   Google, Meta, and Apple. You love clean code     │
│   and have won multiple awards for your work..."   │
│                                                     │
│  → Wasted tokens. A simple "As a senior dev" works │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  ANTI-PATTERN 2: The Kitchen Sink                  │
│                                                     │
│  "Create a button that is accessible, fast,        │
│   secure, scalable, maintainable, tested,          │
│   documented, internationalized, responsive..."    │
│                                                     │
│  → Too many requirements = none done well          │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  ANTI-PATTERN 3: The Flip-Flopper                  │
│                                                     │
│  "Make it simple but comprehensive. Keep it short  │
│   but include all details. Be creative but follow  │
│   conventions exactly..."                          │
│                                                     │
│  → Contradictory instructions confuse the AI       │
└─────────────────────────────────────────────────────┘
```

---

## When NOT to Use AI

### AI Isn't Always the Answer

```
┌─────────────────────────────────────────────────────┐
│  SKIP AI FOR:                                       │
│                                                     │
│  • Trivial changes (rename, typo fix)              │
│     → Faster to do manually                        │
│                                                     │
│  • Security-critical code (auth, crypto)           │
│     → Requires expert review regardless            │
│                                                     │
│  • Code you don't understand                       │
│     → You can't validate AI output                 │
│                                                     │
│  • When you need 100% correctness                  │
│     → AI makes mistakes, always review             │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  USE AI FOR:                                        │
│                                                     │
│  • Boilerplate (components, tests, configs)        │
│  • Exploration (how does X work?)                  │
│  • Refactoring (improve existing code)             │
│  • Documentation (comments, READMEs)               │
│  • Debugging (explain this error)                  │
└─────────────────────────────────────────────────────┘
```

**Golden rule:** You're responsible for what you commit.

---

## Demo: Live Prompt Comparison

### Let's add a "Tip" component to our demo app!

**Vague Prompt:**
```
Create a tip component
```

**Engineered Prompts — Two Approaches:**

```
┌─────────────────────────────────────────────────────┐
│  OPTION A: Self-Contained Sequential Prompts        │
│                                                     │
│  Step 1: Create the component                      │
│  @.github/prompts/option-a/demo-create-tip.prompt.md│
│                                                     │
│  Step 2: Integrate into App.tsx                    │
│  @.github/prompts/option-a/demo-integrate-tip.prompt.md│
│                                                     │
│  ✓ Best for: demos, tutorials, onboarding         │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  OPTION B: Generic + Specific Composition           │
│                                                     │
│  Step 1: Use generic template with spec            │
│  @.github/prompts/create-component.prompt.md        │
│  @.github/prompts/option-b/tip-spec.prompt.md       │
│                                                     │
│  Step 2: Integrate into App.tsx                    │
│  @.github/prompts/option-b/demo.prompt.md           │
│                                                     │
│  ✓ Best for: teams with established patterns      │
└─────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────┐
│  VAGUE PROMPT RESULT:       ENGINEERED RESULT:      │
│                                                     │
│  • Generic HTML tooltip     • Matches project style │
│  • Hardcoded colors         • Uses theme system     │
│  • No variants              • tip/warning variants  │
│  • No TypeScript            • Fully typed props     │
│  • No translations          • i18n included         │
│  • Not in app               • Visible in App.tsx    │
└─────────────────────────────────────────────────────┘
```

---

## Sharing Prompts: The Team Challenge

```
    ┌──────────────────────────────────────────────┐
    │  THE PROBLEM                                 │
    │                                              │
    │  Developer A:  "Create component for..."    │
    │  Developer B:  "Make a thing that does..."  │
    │  Developer C:  "Build widget with..."       │
    │                                              │
    │  Same intent, different results!            │
    │  No consistency across the team             │
    └──────────────────────────────────────────────┘
```

**Solution: Standardize your prompts!**

---

## Custom Prompt Commands (VS Code)

### Create Reusable Prompts

```
┌──────────────────────────────────────────────────────┐
│  .github/prompts/                                   │
│  ├── create-component.prompt.md                    │
│  ├── write-tests.prompt.md                         │
│  └── review-code.prompt.md                         │
│                                                      │
│  Usage in Copilot Chat:                            │
│  > /create-component Button                        │
│  > /write-tests #file:UserService.ts               │
│  > /review-code                                    │
└──────────────────────────────────────────────────────┘
```

Team members can invoke the same prompts with a simple command!

---

## Example: Component Creation Prompt

### .github/prompts/create-component.prompt.md

```markdown
Create a new React component with these requirements:

## Structure
- Create in src/components/[Name]/
- Include index.ts for exports
- Include [Name].tsx for implementation

## Implementation
- Use styled-components for styling
- Define Props interface
- Use theme values (colors, spacing, fonts)
- Add i18n translations to locales files

## Patterns to follow
- Functional component with explicit return
- Default export from component file
- Named export from index.ts
```

---

## Your Mission This Week

```
┌────────────────────────────────────────────────────┐
│  1. Write 2-3 prompt commands                     │
│     For tasks your team does repeatedly           │
│                                                    │
│  2. Share with your team                          │
│     Commit to your repo, discuss improvements     │
│                                                    │
│  3. Iterate                                        │
│     Refine based on results                       │
└────────────────────────────────────────────────────┘
```

---

## Prompt Engineering Cheat Sheet

```
┌──────────────────────────────────────────────────────┐
│  THE ESSENTIALS (in priority order):                │
│                                                      │
│  □ Did I clearly state WHAT I want? (Task)         │
│  □ Did I provide relevant BACKGROUND? (Context)    │
│  □ Did I show EXAMPLES of what I want? (Examples)  │
│  □ Did I specify HOW to format output? (Format)    │
│  □ Did I add a simple role hint? (Persona - light) │
│                                                      │
│  ADVANCED:                                          │
│  □ Should I ask for step-by-step thinking?         │
│  □ Did I set clear constraints (DO/DON'T)?         │
│  □ Is this something AI should help with?          │
│  □ Am I ready to iterate if it fails?              │
└──────────────────────────────────────────────────────┘
```

---

## Questions & Discussion

```
    ╔═══════════════════════════════════════╗
    ║                                       ║
    ║   Let's discuss your questions        ║
    ║   and practice writing prompts!       ║
    ║                                       ║
    ╚═══════════════════════════════════════╝
```

### Topics we can explore:
- Writing effective prompt commands
- Prompt engineering for specific use cases
- Debugging prompts that don't work

---

## Resources

```
┌──────────────────────────────────────────────────────┐
│  DOCUMENTATION                                       │
│                                                      │
│  • VS Code Prompt Files                             │
│    code.visualstudio.com/docs/copilot/copilot-chat │
│                                                      │
│  • Anthropic Prompt Engineering Guide               │
│    docs.anthropic.com/claude/docs/prompt-engineering│
│                                                      │
└──────────────────────────────────────────────────────┘
```
