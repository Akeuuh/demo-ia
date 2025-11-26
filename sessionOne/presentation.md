# From Chatbot to Agent
## The Evolution of AI in Development

```
    ┌─────────────────────┐            ┌─────────────────────┐
    │   Without Context   │   ────>    │    With Context     │
    │                     │            │                     │
    │   ChatGPT (web)     │            │   Copilot           │
    │   Copy/Paste        │            │   Cursor            │
    │                     │            │   Direct file edit  │
    └─────────────────────┘            └─────────────────────┘
```

---

## Before We Start

### Let's Be Clear

```
    ┌──────────────────────────────────────────────┐
    │  I'm not an AI expert or guru                │
    │                                              │
    │  I'm a developer who's passionate about      │
    │  exploring these tools and discovering       │
    │  how they can help us work better            │
    │                                              │
    │  This session is about learning together     │
    └──────────────────────────────────────────────┘
```

**What I want:**
- Share what I've discovered
- Hear about your experiences
- Discuss together what works and what doesn't
- Make this session participative and interactive

**Please interrupt, ask questions, share your thoughts!**

---

## Today's Journey

```
┌──────────────────────────────────────────────────┐
│  1. AI Without Context (ChatGPT)                 │
│     Understanding the limitations                │
│     Copy/paste workflow                          │
│                                                  │
│  2. AI With Context (Copilot / Cursor)           │
│     The power of codebase awareness              │
│     Direct file modification                     │
│     Autonomous task execution                    │
└──────────────────────────────────────────────────┘
```

---

## Part 1: AI Without Context

### The ChatGPT Experience

```
   You                ChatGPT              Your Project
    │                    │                      │
    │──── Prompt ───────>│                      │
    │                    │                      │
    │<──── Code ─────────┤                      │
    │                    │                      │
    │────── Copy/Paste ───────────────────────> │
    │                    │                      │
    │<────── Error (theme mismatch) ────────────┤
    │                    │                      │
    │──── Manual Fix ────────────────────────> │
```

**What happens:**
- AI generates generic code
- No knowledge of your project structure
- No awareness of your conventions
- Requires manual adaptation

---

## Demo: Create a Button Component

### Prompt to ChatGPT:
```
"Create a reusable button component
for a React application"
```

### What we get:
- A working button component
- Generic styling
- Hard-coded values
- No theme integration
- No internationalization

**This is code generation without context**

---

## Part 2: AI With Context

### The Co-Pilot Experience

```
   You                AI Tool               Your Codebase
    │                   │                         │
    │──── Prompt ──────>│                         │
    │                   │                         │
    │                   │<──── Reads files ───────┤
    │                   │<──── AGENTS.md          |
    │                   │<──── theme.ts ──────────┤
    │                   │<──── i18n/ ─────────────┤
    │                   │<──── components/ ───────┤
    │                   │                         │
    │                   │──── Writes code ───────>│
    │                   │  (uses theme,           │
    │                   │   follows patterns,     │
    │                   │   includes i18n)        │
    │                   │                         │
    │                   │                         │
    │<──── Ready to use ─────────────────────────┤
```

---

## Demo: Same Prompt, Different Tool

### Using Copilot / Cursor:
```
"Create a reusable button component
for a React application"
```

### What changes:
- AI reads your project files first
- Discovers your theme system
- Finds your internationalization setup
- Understands your component patterns
- Respects your styling approach

**This is context-aware development**

---

## The Key Difference: Context

```
┌─────────────────────────────────────────────────────────┐
│                    WITHOUT CONTEXT                      │
├─────────────────────────────────────────────────────────┤
│  • AI knows: General programming patterns               │
│  • AI doesn't know: Your project specifics              │
│  • Result: Generic code requiring adaptation            │
   • Good for: Learning, quick snippets 
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                     WITH CONTEXT                        │
├─────────────────────────────────────────────────────────┤
│  • AI knows: Your theme system                          │
│  • AI knows: Your component patterns                    │
│  • AI knows: Your internationalization setup            │
│  • AI knows: Your coding conventions                    │
│  • Result: Production-ready code matching your style    │
   • Good for: Daily development, real projects  
└─────────────────────────────────────────────────────────┘
```

---

## What Context Enables

### Understanding Your Code
```
Developer: "Explain this component"

AI reads:
├── component file
├── imported dependencies
├── custom hooks used
└── related types

Result: Accurate explanation of YOUR code
```

### Refactoring with Precision
```
Developer: "Refactor using our patterns"

AI understands:
├── existing patterns in codebase
├── naming conventions
├── file organization
└── architectural choices

Result: Consistent refactoring
```

---

## How Context-Aware AI Works

### Direct File Modification

```
┌──────────────────────────────────────────────────────┐
│  WITHOUT CONTEXT (ChatGPT)                           │
│                                                      │
│  You: "Create a button component"                   │
│  AI: "Here's generic button code..."                │
│  You: *copies to clipboard*                         │
│  You: *creates new file*                            │
│  You: *pastes code*                                 │
│  You: *adapts to your theme*                        │
│  You: *adds i18n*                                   │
│                                                      │
│  Multiple manual steps required                      │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  WITH CONTEXT (Copilot / Cursor)                     │
│                                                      │
│  You: "Create a button component"                   │
│  Agent: *reads your theme system*                   │
│  Agent: *checks i18n setup*                         │
│  Agent: *finds component patterns*                  │
│  Agent: *creates file directly*                     │
│  Agent: *writes context-aware code*                 │
│  Agent: "Done. Button.tsx created."                 │
│                                                      │
│  Ready to use immediately                            │
└──────────────────────────────────────────────────────┘
```

**Context + Direct file access = Autonomous agent**

---

## Why Context Matters

### Impact on Your Workflow

```
                 Without Context     With Context
                 ───────────────     ────────────
Prompt Length    ████████            ███
Manual Edits     ███████             █
Time to Deploy   ████████            ██
Code Quality     ████                ████████
Consistency      ██                  █████████
```

**Context transforms AI from a code generator
into a development partner**

---

## Your Mission This Week

```
┌────────────────────────────────────────────────────┐
│  Choose ONE context-aware AI tool:                 │
│                                                    │
│  • Copilot        (CLI/IDE, subscription)         │
│  • Cursor         (IDE, freemium)                 │
│  • Windsurf       (IDE, new)                      │
│  • Claude Code    (CLI, free alternative)         │
└────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│  Try ONE task that requires context:               │
│                                                    │
│  ► Refactor a complex function                    │
│  ► Generate tests for an existing component       │
│  ► Ask it to explain a challenging file           │
│  ► Create a component matching your patterns      │
└────────────────────────────────────────────────────┘
```

---

## Getting Started

### Installation Example (Copilot)
```bash
# Install GitHub Copilot CLI
npm install -g copilot

# Navigate to your project
cd your-project

# Start using context-aware AI
copilot
```

### First Commands to Try
```
"Explain the architecture of this project"
"Refactor this component to use our custom hooks"
"Generate unit tests for components/Button.tsx"
"Create a new screen following our existing patterns"
```

---

## Questions & Discussion

```
    ╔═══════════════════════════════════╗
    ║                                   ║
    ║    Let's discuss your questions   ║
    ║    and experiences with AI tools  ║
    ║                                   ║
    ╚═══════════════════════════════════╝
```

### Topics we can explore:
• Setting up context-aware tools
• Best practices for prompting
• Privacy and security considerations
• Integrating AI into team workflows
