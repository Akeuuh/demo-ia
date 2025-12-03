# Session One: From Chatbot to Agent

**Date:** 02/12/2025
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
2. **With Context** (GitHub Copilot) - Convention-aware code, direct file modification

**What Makes the Difference:**

- AI reads your codebase
- Understands your patterns
- Uses your theme system
- Respects your conventions
- Modifies files directly

## 📊 Debrief

### What Worked Well

- Context advantage clearly demonstrated through live examples
- Team understood the value of providing context to AI models
- Direct file editing eliminates copy-paste errors

### Challenges Encountered

- Privacy concerns regarding data sent to AI models
- Uncertainty about control over what data is shared with external models

### Questions Raised

- What is the level of privacy copilot offers?
- Does Copilot control what data is sent to AI models like Sonnet 4.5?
- How does this work with Next.js, SSR, and server-side components?

### Team Feedback

- Positive reception - team members see the value proposition
- Interest in creating a Slack channel to share experiences and troubleshoot
- Request to experiment with the tools and discuss findings in next session
- Recognition that TypeScript works especially well with these models due to training data

### Action Items

- Create a Slack channel for ongoing discussion about AI tools usage
- Team members to experiment with GitHub Copilot (editor extension + CLI)
- Try refactoring, code explanation, and documentation tasks
- Share experiences and learnings before next session
- Demo project available on GitHub for team members to experiment with

---

## 🛠️ GitHub Copilot - Our Company Tool

**Overview:**
GitHub Copilot is our company-approved AI coding assistant, available in two complementary forms:

### 1. **Copilot in Editor** (VS Code Extension)

- **Inline suggestions** - Code completions as you type
- **Chat interface** - Ask questions, get explanations, refactor code
- **Context-aware** - Reads open files and workspace
- **File editing** - Direct modifications to your codebase
- **Slash commands** - Quick actions like `/explain`, `/fix`, `/tests`

**Key Features:**

- Autocomplete functions, classes, and entire code blocks
- Generate unit tests for selected code
- Explain complex code in natural language
- Refactor code following your project's patterns
- Fix bugs and suggest improvements

### 2. **Copilot CLI** (Command Line Interface)

- **Terminal integration** - AI assistance in your shell
- **Command suggestions** - Natural language to shell commands
- **Git operations** - AI-powered git workflows
- **Script generation** - Create bash/powershell scripts from descriptions

**Getting Started:**

```bash
# Install Copilot CLI
npm install -g @github/copilot

# Launching the CLI
copilot
```

### Privacy & Security

- Enterprise-grade security with our company license
- Code suggestions based on public repositories and your context
- No code stored or used for model training (with business license)
- Complies with company data governance policies

**Best Practices:**

- Use `@workspace` in chat to reference entire project
- Reference specific files with `#file:path/to/file.ts`
- Use descriptive variable names for better suggestions
- Review and understand all generated code before accepting

---

## 📚 Additional Resources

**GitHub Copilot Documentation:**

- [Copilot in VS Code](https://docs.github.com/en/copilot/using-github-copilot/getting-started-with-github-copilot)
- [Copilot CLI](https://github.com/features/copilot/cli)
- [Copilot Chat](https://docs.github.com/en/copilot/github-copilot-chat)

**Demo Documentation:**

- [Slides Tool](https://github.com/maaslalani/slides) - Used for presentation
- [styled-components Docs](https://styled-components.com/)

---

**Next Session:** [To be announced based on team interest and feedback]
