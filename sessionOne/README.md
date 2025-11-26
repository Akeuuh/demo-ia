# Session One: From Chatbot to Agent

**Date:** [To be filled]
**Duration:** 30 minutes
**Format:** Interactive presentation with live demos

## 🎯 Session Goals

This introductory session aims to:

1. **Shift mental models** - Move from thinking of AI as "code generator" to "context-aware partner"
2. **Demonstrate the context advantage** - Show how AI that reads your codebase produces better results
3. **Inspire adoption** - Get team members to try context-aware tools in their daily work
4. **Foster discussion** - Create a collaborative learning environment

## 📋 Agenda

### Part 1: AI Without Context (10 min)
- Understanding the ChatGPT web experience
- Live demo: Creating a button component
- Limitations: Generic code, manual adaptation required

### Part 2: AI With Context (10 min)
- Introduction to Claude Code, Cursor, Windsurf
- Live demo: Same prompt, context-aware results
- Key difference: Theme integration, i18n, pattern matching
- Direct file modification demonstrated

### Part 3: Discussion & Next Steps (10 min)
- Team experiences with AI tools
- Questions and challenges
- Weekly challenge: Try one context-aware task

## 🔧 Demo Application

This folder contains a React 19 + TypeScript + Vite application used for live demonstrations.

**Tech Stack:**
- React 19
- TypeScript
- Vite
- styled-components
- ESLint (Flat config)

**Key Files for Demo:**
- `src/theme.ts` - Theme system (colors, spacing, fonts)
- `src/global.ts` - Global styles and typography
- `src/App.tsx` - Root component

**Files Created During Demo:**
- `src/components/PrimaryButton.tsx` - Button component (demo output)
- `AGENTS.md` - Project guidelines for AI tools (created with context-aware AI)

**Running the Demo:**
```bash
yarn install
yarn dev        # Start dev server
yarn build      # Build for production
yarn lint       # Check code quality
```

## 🎓 Key Takeaways

**The Core Message:**
> Context transforms AI from a code generator into a development partner

**Two Levels of AI:**
1. **Without Context** (ChatGPT) - Generic code, copy/paste workflow
2. **With Context** (Claude Code, Cursor) - Convention-aware code, direct file modification

**What Makes the Difference:**
- AI reads your codebase
- Understands your patterns
- Uses your theme system
- Respects your conventions
- Modifies files directly

## 📊 Debrief

> **Note:** This section will be filled after the session with learnings, feedback, and next steps.

### What Worked Well
- [To be filled after session]

### Challenges Encountered
- [To be filled after session]

### Questions Raised
- [To be filled after session]

### Team Feedback
- [To be filled after session]

### Action Items
- [To be filled after session]

### Tools Tried by Team Members
- [To be filled after session - track adoption]

---

## 📚 Resources Shared

**Tools to Try:**
- [Claude Code](https://claude.ai/code) - Free CLI tool
- [Cursor](https://cursor.sh) - AI-first IDE (freemium)
- [Windsurf](https://codeium.com/windsurf) - New AI IDE
- [GitHub Copilot Workspace](https://githubnext.com/projects/copilot-workspace)

**Documentation:**
- [Slides Tool](https://github.com/maaslalani/slides) - Used for presentation
- [styled-components Docs](https://styled-components.com/)

---

**Next Session:** [To be announced based on team interest and feedback]
