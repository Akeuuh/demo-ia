# Session Two: Prompt Engineering

**Date:** 13/01/2026
**Duration:** 30 minutes
**Format:** Interactive presentation with live demos

## Session Goals

This session builds on Session One and aims to:

1. **Master prompt structure** - Learn the 5 Pillars of effective prompts
2. **Avoid common mistakes** - Understand anti-patterns and when NOT to use AI
3. **Iterate effectively** - Learn to refine prompts when results aren't perfect
4. **Share prompts as a team** - Use `.github/prompts/` for reusable prompt commands

## Agenda

### Part 1: The 5 Pillars (10 min)

- **Task** - Be specific about what you want (most important)
- **Context** - Provide relevant background
- **Examples** - Show, don't just tell
- **Format** - Specify output structure
- **Persona** - Simple role hints (use sparingly)

### Part 2: Advanced Patterns (10 min)

- Chain of Thought - Step-by-step reasoning
- Constraints - DO/DON'T boundaries
- Iterative Refinement - Prompting is rarely one-shot
- Anti-Patterns - What NOT to do
- When NOT to use AI

### Part 3: Live Demo & Discussion (10 min)

- Creating a Tip component with vague vs engineered prompts
- Two approaches: Self-contained vs Composable prompts
- Team discussion and Q&A

## Demo Application

This folder contains a React 19 + TypeScript + Vite application used for live demonstrations.

**Tech Stack:**

- React 19
- TypeScript
- Vite
- styled-components
- i18next (FR/EN)
- ESLint (Flat config)

**Key Files for Demo:**

- `src/theme.ts` - Theme system (colors, spacing, fonts)
- `src/components/` - Existing components to reference
- `.github/prompts/` - Reusable prompt templates
- `.github/copilot-instructions.md` - Project-wide AI context

**Running the Demo:**

```bash
yarn install
yarn dev        # Start dev server
yarn build      # Build for production
yarn lint       # Check code quality
```

## Prompt Files Structure

```
.github/prompts/
├── DEMO-README.md                    # Documentation (not executable)
├── create-component.prompt.md        # Generic component template
│
├── option-a/                         # Self-contained approach
│   ├── demo-create-tip.prompt.md     # Creates Tip component
│   └── demo-integrate-tip.prompt.md  # Integrates into App.tsx
│
└── option-b/                         # Composable approach
    ├── tip-spec.prompt.md            # Tip specification
    └── demo.prompt.md                # Integration prompt
```

### Using Prompts

**In Terminal (Copilot, etc.):**

```
@.github/prompts/option-a/demo-create-tip.prompt.md
```

**Combining prompts:**

```
@.github/prompts/create-component.prompt.md @.github/prompts/option-b/tip-spec.prompt.md
Create the Tip component
```

## Key Takeaways

**The Core Message:**

> The quality of your output depends on the quality of your input

**Priority Order for Prompts:**

1. **Task** - Clear, specific instructions (most impact)
2. **Context** - Relevant background and constraints
3. **Examples** - Show the desired output format
4. **Format** - Structure requirements
5. **Persona** - Light role hints (least impact)

**What to Avoid:**

- "The Novel" - Elaborate persona backstories (wasted tokens)
- "The Kitchen Sink" - Too many requirements at once
- "The Flip-Flopper" - Contradictory instructions

**Golden Rule:**

> You're responsible for what you commit. Always review AI-generated code.

## Enabling VS Code Prompt Commands

1. Open Settings (Cmd + ,)
2. Search for `chat.promptFiles`
3. Enable the setting
4. Reload VS Code
5. Type `/` in Copilot Chat to see custom commands

## Debrief

### What Worked Well

- TBD after session

### Challenges Encountered

- TBD after session

### Action Items

- [ ] Create `copilot-instructions.md` for your project
- [ ] Write 2-3 reusable prompt commands
- [ ] Share prompts with your team via git
- [ ] Iterate and refine based on results

---

## Additional Resources

**Documentation:**

- [GitHub Copilot Instructions](https://docs.github.com/copilot/customizing-copilot)
- [VS Code Prompt Files](https://code.visualstudio.com/docs/copilot/copilot-chat)
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/claude/docs/prompt-engineering)

**Previous Session:**

- [Session One: From Chatbot to Agent](../sessionOne/README.md)

---

**Next Session:** TBD based on team feedback
