# Beyond Context

## OpenCode: The Open-Source AI Orchestrator

```
    ┌─────────────────────────────────────────────────┐
    │                                                 │
    │   From Manual Orchestration                    │
    │   to Automated AI Workflows                    │
    │                                                 │
    └─────────────────────────────────────────────────┘
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

- Share what I've discovered about OpenCode
- Hear about your experiences with AI tools
- Discuss the evolution of AI coding assistants
- Make this session participative and interactive

**Please interrupt, ask questions, share your thoughts!**

---

## Recap: Our Journey So Far

```
┌──────────────────────────────────────────────────┐
│  SESSION 1: From Chatbot to Agent                │
│  • Context changes everything                    │
│  • ChatGPT vs Copilot/Cursor                     │
│  • Direct file modification                      │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│  SESSION 2: Prompt Engineering                   │
│  • The 5 Pillars of effective prompts            │
│  • Iterative refinement                          │
│  • Sharing prompts with the team                 │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│  SESSION 3: OpenCode (Today)                     │
│  • Understanding context window limits           │
│  • From single-agent to orchestration            │
│  • Multi-provider open-source freedom            │
└──────────────────────────────────────────────────┘
```

---

## Today's Journey

```
┌──────────────────────────────────────────────────┐
│  PART 1: Context Management                      │
│  • Understanding the context window              │
│  • 6 strategies to manage it effectively         │
│                                                  │
│  PART 2: GitHub Copilot - Where We Are           │
│  • Strengths & remaining limitations             │
│  • What's still missing for complex workflows    │
│                                                  │
│  PART 3: OpenCode - The Alternative              │
│  • Quick overview & key differentiators          │
│  • When to use what + getting started            │
│                                                  │
│  PART 4: Discussion & Q&A                        │
│  • Your experiences, questions, next steps       │
└──────────────────────────────────────────────────┘
```

---

## Part 1: Understanding the Limits

---

## The Context Window

### What is a Context Window?

```
┌────────────────────────────────────────────────────┐
│  CONTEXT WINDOW = AI's Working Memory              │
│                                                    │
│  Think of it like RAM for the AI model:            │
│  • Limited size (measured in tokens)               │
│  • Everything must fit: prompt + context + output  │
│  • Exceeding it = AI can't process                 │
└────────────────────────────────────────────────────┘
```

**Analogy:**

```
Your brain trying to remember a phone number:
• 7 digits? Easy! (555-1234)
• 20 digits? Impossible without writing it down

AI models have the same limitation, just with larger numbers
```

---

## Context Window Sizes (2026)

```
┌─────────────────────────────────────────────────┐
│  MODEL              CONTEXT WINDOW    ≈ FILES   │
├─────────────────────────────────────────────────┤
│  GPT-4o             128k tokens       ~100 files│
│  Claude 3.5 Sonnet  200k tokens       ~150 files│
│  Gemini 2.5 Flash   1M tokens         ~750 files│
│  Gemini 2.5 Pro     2M tokens         ~1500 files│
└─────────────────────────────────────────────────┘
```

**Reality check:**

- Small project: 50-100 files
- Medium project: 500-1000 files
- Large project: 5000+ files
- **Nova: 4448 files**

**Even with 1M tokens, you can't load everything at once**

---

## The Real Challenge

```
┌────────────────────────────────────────────────────┐
│  YOUR PROJECT                                      │
│  ├── src/ (500 files)                              │
│  ├── tests/ (200 files)                            │
│  ├── node_modules/ (10,000+ files)                 │
│  └── docs/ (50 files)                              │
│                                                    │
│  TOTAL: 10,750+ files                              │
└────────────────────────────────────────────────────┘

         ↓ Problem ↓

┌────────────────────────────────────────────────────┐
│  AI CONTEXT WINDOW                                 │
│  Can hold: ~150 files (Claude 3.5)                 │
│                                                    │
│  You MUST choose which files matter                │
└────────────────────────────────────────────────────┘
```

**The question:** How do you choose the right files?

---

## Managing Context: Best Practices

### Strategy 1: Configuration Files (CLAUDE.md, .cursorrules)

```
┌────────────────────────────────────────────────────┐
│  Create a "constitution" for your project          │
│                                                    │
│  CLAUDE.md or .cursorrules contains:               │
│  • Project architecture overview                   │
│  • Coding conventions and patterns                 │
│  • Key file locations                              │
│  • Commands to run tests/builds                    │
│                                                    │
│  Benefits:                                         │
│  ✅ Loaded automatically at session start          │
│  ✅ No need to repeat instructions                 │
│  ✅ Consistent AI behavior across sessions         │
└────────────────────────────────────────────────────┘
```

**Rule:** Keep it under 50KB (~12k tokens) to leave room for actual coding

---

## Managing Context: Best Practices (continued)

### Strategy 2: Code Maps (Summaries)

```
┌────────────────────────────────────────────────────┐
│  Instead of loading full files, create a map:      │
│                                                    │
│  // code-map.md                                    │
│  ## Authentication Module                          │
│  - login.ts: handles user login (OAuth, password)  │
│  - session.ts: JWT token management                │
│  - middleware.ts: route protection                 │
│                                                    │
│  ## API Layer                                      │
│  - client.ts: axios wrapper with interceptors      │
│  - endpoints/: one file per resource               │
│                                                    │
│  Token usage: ~500 tokens vs ~50,000 for full code │
└────────────────────────────────────────────────────┘
```

**Idea:** Give the AI a "table of contents" before diving into details

---

## Managing Context: Best Practices (continued)

### Strategy 3: Subagents (Parallel Workers)

```
┌────────────────────────────────────────────────────┐
│  Problem: Reading 20 files fills your context      │
│                                                    │
│  Solution: Delegate to subagents                   │
│                                                    │
│  Main Agent                    Subagent            │
│      │                            │                │
│      │─── "Find auth bug" ───────>│                │
│      │                            │── reads 20 files
│      │                            │── analyzes code │
│      │<── "Bug in session.ts:42" ─┤                │
│      │                                             │
│  Main context: clean            Subagent: disposed │
│                                                    │
│  Only the RESULT comes back, not all the files!   │
└────────────────────────────────────────────────────┘
```

**OpenCode & Claude Code:** Both support subagents natively

---

## Managing Context: Best Practices (continued)

### Strategy 4: Dynamic Scoping (Let AI Choose)

```
┌────────────────────────────────────────────────────┐
│  DON'T: Load everything "just in case"             │
│                                                    │
│  DO: Let the AI find what it needs                 │
│                                                    │
│  Bad approach:                                     │
│  "Here's my entire src/ folder, fix the bug"      │
│  → Context overflow, AI confused                   │
│                                                    │
│  Good approach:                                    │
│  "Fix the login bug where tokens expire early"     │
│  → AI searches for relevant files                  │
│  → AI reads only what's needed                     │
│  → Context stays clean                             │
└────────────────────────────────────────────────────┘
```

**Key insight:** More context ≠ better results. Focused context = better results.

---

## Managing Context: Best Practices (continued)

### Strategy 5: Chunking Large Tasks

```
┌────────────────────────────────────────────────────┐
│  Break down large tasks into focused steps         │
│                                                    │
│  Instead of:                                       │
│  "Refactor the entire authentication system"       │
│                                                    │
│  Do this:                                          │
│  1. "Analyze current auth architecture" (plan)     │
│  2. "Refactor token management" (focused)          │
│  3. "Update session handling" (focused)            │
│  4. "Migrate routes to new auth" (focused)         │
│                                                    │
│  Each step = fresh context, focused work           │
└────────────────────────────────────────────────────┘
```

---

## Managing Context: Best Practices (continued)

### Strategy 6: Session Continuity

```
┌────────────────────────────────────────────────────┐
│  Problem: Context resets between sessions          │
│                                                    │
│  Solution: External memory system                  │
│                                                    │
│  Create: docs/ai-context/                          │
│  ├── project-decisions.md   (architectural choices)│
│  ├── current-sprint.md      (active work)          │
│  └── session-logs/          (key decisions log)    │
│                                                    │
│  At session start:                                 │
│  "Read docs/ai-context/ to understand context"     │
│                                                    │
│  At session end:                                   │
│  "Summarize what we did in session-logs/"          │
└────────────────────────────────────────────────────┘
```

**Think of it as:** A shared notebook between you and the AI

---

## Context Management Summary

```
┌────────────────────────────────────────────────────┐
│  THE GOLDEN RULES                                  │
├────────────────────────────────────────────────────┤
│  1. Less is more                                   │
│     Focused context beats overloaded context       │
│                                                    │
│  2. Let AI explore                                 │
│     Don't pre-load, let it find what it needs      │
│                                                    │
│  3. Use configuration files                        │
│     CLAUDE.md = your project's AI constitution     │
│                                                    │
│  4. Delegate with subagents                        │
│     Keep main context clean, farm out research     │
│                                                    │
│  5. Chunk your work                                │
│     Big task = many focused sessions               │
│                                                    │
│  6. Maintain external memory                       │
│     Session logs survive context resets            │
└────────────────────────────────────────────────────┘
```

---

## Part 2: Where We Are Today

---

## Current State with GitHub Copilot

### How Copilot Handles Context

```
    You                 Copilot Chat         Codebase
     │                       │                   │
     │──── Prompt ──────────>│                   │
     │                       │                   │
     │                       │<─── #file:a.ts ───┤
     │                       │<─── #file:b.ts ───┤
     │                       │<─── @workspace ───┤
     │                       │                   │
     │<──── Response ────────┤                   │
```

**You manually specify:**

- `#file:src/components/Button.tsx` - Specific file
- `@workspace` - Workspace-wide search
- Open tabs - Files currently visible in editor

**You are the orchestrator**

---

## The Manual Orchestration Problem

### Example: Fix a Bug in Authentication

```
┌────────────────────────────────────────────────────┐
│  STEP 1: Figure out where the bug is               │
│  You: "Where is authentication handled?"           │
│  Copilot: *searches workspace*                     │
│                                                    │
│  STEP 2: Add relevant files to context             │
│  You: #file:src/auth/login.ts                      │
│       #file:src/auth/session.ts                    │
│       #file:src/api/auth.ts                        │
│                                                    │
│  STEP 3: Explain the bug                           │
│  You: "The session expires too early"              │
│                                                    │
│  STEP 4: Review the fix                            │
│  Copilot: "Here's the issue in session.ts..."     │
│                                                    │
│  STEP 5: Apply the fix                             │
│  You: *copy/paste or accept suggestion*            │
└────────────────────────────────────────────────────┘
```

**5 manual steps. You do the orchestration.**

---

## GitHub Copilot in 2026

```
┌────────────────────────────────────────────────────┐
│  WHAT COPILOT DOES WELL                            │
├────────────────────────────────────────────────────┤
│  ✅ Excellent inline suggestions                   │
│  ✅ Context-aware (files you specify)              │
│  ✅ Direct file editing in VS Code                 │
│  ✅ Subagents support (since Oct 2025)             │
│  ✅ Custom agents via .github/agents               │
└────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│  WHAT'S STILL LIMITING                             │
├────────────────────────────────────────────────────┤
│  ⚠️  No nested agents (subagent can't spawn another)│
│  ⚠️  Vendor lock-in (GitHub/Microsoft ecosystem)   │
│  ⚠️  Limited model choice (GitHub's selection)     │
│  ⚠️  No persistent sessions across restarts        │
│  ⚠️  No local/offline model option                 │
└────────────────────────────────────────────────────┘
```

**Question:** What if you want more freedom and control?

---

## Part 3: OpenCode - The Alternative

---

## What is OpenCode?

```
┌────────────────────────────────────────────────────┐
│  OpenCode is an open-source AI coding agent       │
│  that orchestrates your development workflow      │
│                                                    │
│  Created by: SST Team (Dax Raad, Jay V, Frank Wang)│
│  Launched: June 2025                              │
│  GitHub Stars: 93,000+                            │
│  Contributors: 660+                               │
└────────────────────────────────────────────────────┘
```

**Key Philosophy:**

- 🔓 Open source (no vendor lock-in)
- 🌍 Multi-provider (75+ LLM providers)
- 🔒 Privacy-first (no code storage)
- 🛠️ Developer-first (terminal native)

---

## OpenCode vs GitHub Copilot (2026)

```
┌────────────────────────────────────────────────────┐
│  FEATURE              COPILOT      OPENCODE        │
├────────────────────────────────────────────────────┤
│  Subagents            ✅ Yes       ✅ Yes          │
│  Nested Agents        ❌ No        ✅ Yes          │
│  Inline completion    ✅ Yes       ❌ No           │
│  Model Choice         ~5 models    75+ providers   │
│  Persistent Sessions  ❌ No        ✅ Yes          │
│  Open Source          ❌ No        ✅ Yes          │
│  Local/Offline Models ❌ No        ✅ Yes (Ollama) │
│  Vendor Lock-in       GitHub/MS    None            │
└────────────────────────────────────────────────────┘
```

**Key insight:** Copilot excels at inline completion. OpenCode excels at orchestration & freedom.

---

## The Nested Agents Advantage

```
┌────────────────────────────────────────────────────┐
│  COPILOT: Flat Structure                           │
│                                                    │
│  You ──► Copilot ──┬─► Subagent A                  │
│                    └─► Subagent B                  │
│                                                    │
│  ❌ Subagent A cannot spawn Subagent C             │
└────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│  OPENCODE: Tree Structure                          │
│                                                    │
│  You ──► Agent ──► Orchestrator ──┬─► Explorer     │
│                                   │     └─► Grep   │
│                                   └─► Security     │
│                                         └─► Fixer  │
│                                                    │
│  ✅ True multi-level orchestration                 │
│  ✅ Each level has its own context                 │
│  ✅ Can use different LLM per level                │
└────────────────────────────────────────────────────┘
```

**Why it matters:** Complex tasks need complex delegation chains

---

## The Multi-Provider Advantage

### Why Model Choice Matters

```
┌────────────────────────────────────────────────────┐
│  DIFFERENT MODELS = DIFFERENT STRENGTHS            │
├────────────────────────────────────────────────────┤
│  Claude 3.5/4 Sonnet  Best for: Architecture,     │
│                       refactoring, explanations    │
│                                                    │
│  GPT-4o / GPT-5       Best for: General coding,   │
│                       versatility                  │
│                                                    │
│  Gemini 2.5 Flash     Best for: Speed, large      │
│                       context (1M tokens)          │
│                                                    │
│  DeepSeek             Best for: Cost-efficiency,  │
│                       great price-performance      │
│                                                    │
│  Local Models         Best for: Privacy, offline  │
│  (Ollama)             work, experimentation       │
└────────────────────────────────────────────────────┘
```

**With OpenCode:** Choose the right model for the task
**With Zen (their inference provider):** Access models at reduced cost

---

## How OpenCode Works

### Automated Orchestration

```
    You              OpenCode Agent           Codebase
     │                    │                       │
     │─── "Fix login bug" │                       │
     │                    │                       │
     │                    │─── Explore ──────────>│
     │                    │    (find auth files)  │
     │                    │                       │
     │                    │<─── Found 3 files ────┤
     │                    │                       │
     │                    │─── Read files ───────>│
     │                    │                       │
     │                    │<─── File contents ────┤
     │                    │                       │
     │                    │─── Analyze bug        │
     │                    │                       │
     │                    │─── Propose fix ──────>│
     │                    │    (edit session.ts)  │
     │                    │                       │
     │<─── "Fixed" ───────┤                       │
```

**OpenCode does the orchestration automatically**

---

## Key Features

### 1. Built-in Specialized Agents

```
┌────────────────────────────────────────────────────┐
│  OpenCode ships with two powerful agents:          │
│                                                    │
│  "build" - Full access agent for development       │
│            Creates, modifies, deletes files        │
│            Runs commands and tests                 │
│                                                    │
│  "plan"  - Read-only agent for analysis            │
│            Explores codebase architecture          │
│            Plans changes without executing them    │
└────────────────────────────────────────────────────┘
```

### 2. Multi-Session Parallel Agents

```
┌────────────────────────────────────────────────────┐
│  Run multiple AI agents on the same project        │
│                                                    │
│  Terminal 1: Agent fixing bug in auth              │
│  Terminal 2: Agent writing tests                   │
│  Terminal 3: Agent refactoring components          │
│                                                    │
│  All working simultaneously on different tasks     │
└────────────────────────────────────────────────────┘
```

### 3. LSP Support

```
┌────────────────────────────────────────────────────┐
│  Automatically loads Language Server Protocol      │
│                                                    │
│  • Type checking as the AI writes code             │
│  • Immediate feedback when something breaks        │
│  • Real-time error detection and auto-fixing       │
└────────────────────────────────────────────────────┘
```

---

## Key Features (continued)

### 4. Share Sessions

```
┌────────────────────────────────────────────────────┐
│  Share a link to any session                       │
│                                                    │
│  Use case:                                         │
│  • Debugging with a teammate                       │
│  • Code review discussions                         │
│  • Documenting AI-assisted changes                 │
│                                                    │
│  Example: opencode.ai/session/abc123               │
└────────────────────────────────────────────────────┘
```

### 5. Privacy-First Architecture

```
┌────────────────────────────────────────────────────┐
│  OpenCode does NOT store:                          │
│  • Your code                                       │
│  • Your prompts                                    │
│  • Your context data                               │
│                                                    │
│  Everything stays local or goes directly to your   │
│  chosen LLM provider                               │
└────────────────────────────────────────────────────┘
```

---

## Available Interfaces

```
┌────────────────────────────────────────────────────┐
│  1. TERMINAL (CLI)                                 │
│     • Terminal-first experience                    │
│     • Fast, keyboard-driven                        │
│     • Multi-session support                        │
│                                                    │
│  2. DESKTOP APP (Beta)                             │
│     • macOS, Windows, Linux                        │
│     • GUI for those who prefer it                  │
│     • Session management UI                        │
│                                                    │
│  3. IDE EXTENSION                                  │
│     • VS Code extension available                  │
│     • Works alongside Copilot                      │
│     • Integrated workflow                          │
└────────────────────────────────────────────────────┘
```

**Choose the interface that fits your workflow**

---

## When to Use What?

```
┌────────────────────────────────────────────────────┐
│  GITHUB COPILOT                                    │
├────────────────────────────────────────────────────┤
│  ✅ Inline code completion while typing            │
│  ✅ Quick questions about open files               │
│  ✅ Single-file refactoring                        │
│  ✅ Learning new APIs (with chat)                  │
└────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│  OPENCODE                                          │
├────────────────────────────────────────────────────┤
│  ✅ Multi-file refactoring                         │
│  ✅ Complex bug hunts across modules               │
│  ✅ Architecture exploration (new codebase)        │
│  ✅ When you want model choice (Claude vs GPT)     │
│  ✅ Multiple parallel tasks                        │
│  ✅ Maximum privacy requirements                   │
└────────────────────────────────────────────────────┘
```

**They're complementary, not competitive**

---

## Cost & Privacy

```
┌────────────────────────────────────────────────────┐
│  COST                                              │
├────────────────────────────────────────────────────┤
│  Copilot: $10-19/month (fixed, unlimited*)         │
│                                                    │
│  OpenCode: Pay-per-use OR use existing subs        │
│  • Use your Copilot/ChatGPT subscription           │
│  • Or API: ~$5-20/month typical usage              │
│  • Or local models: FREE (Ollama)                  │
└────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│  PRIVACY                                           │
├────────────────────────────────────────────────────┤
│  Copilot: Code → GitHub → AI → Response            │
│           (metadata stored, Enterprise = no train) │
│                                                    │
│  OpenCode: Code → Directly to LLM provider         │
│            (no intermediate, or 100% local/offline)│
└────────────────────────────────────────────────────┘
```

**For TF1:** Both acceptable. OpenCode = more control.

---

## Getting Started

```bash
# 1. Install (choose one)
curl -fsSL https://opencode.ai/install | bash
npm install -g @opencode/cli
brew install opencode

# 2. Authenticate with your existing subscription
opencode auth github      # Use Copilot credits
opencode auth openai      # Use ChatGPT Plus/Pro

# 3. Start coding
cd ~/your-project && opencode
```

```
┌────────────────────────────────────────────────────┐
│  YOUR MISSION                                      │
├────────────────────────────────────────────────────┤
│  This week: Install + try ONE simple task          │
│  Next week: Use for a real multi-file task         │
│  Share findings: #itpv_dev_with_ai             │
└────────────────────────────────────────────────────┘
```

---

## Resources

### Official Documentation

```
• OpenCode Website:     https://opencode.ai
• GitHub Repository:    https://github.com/sst/opencode
• Documentation:        https://opencode.ai/docs
• Discord Community:    https://discord.gg/opencode
```

### TF1 Internal

```
• Slack Channel:        #itpv_dev_with_ai
• This Demo Repo:       github.com/Akeuuh/demo-ia
• Session Notes:        sessionThree/README.md
```

---

## Part 4: Discussion & Takeaways

---

## A Word of Caution (Dax Raad Opencode's creator)

```
┌────────────────────────────────────────────────────┐
│  "Be careful not to confuse FEELING productive    │
│   with ACTUALLY being productive."                 │
│                                                    │
│  • AI writes lots of code fast → feels productive │
│  • But is the code correct? Well-tested? Clean?   │
│                                                    │
│  → Always review AI-generated code                 │
│  → Run tests before trusting changes               │
│  → Understand what the AI did                      │
└────────────────────────────────────────────────────┘
```

**AI is a powerful tool, but YOU are still the engineer**

---

## Key Takeaways

```
┌────────────────────────────────────────────────────┐
│  1. Context = Limited Resource                     │
│     Learn to manage it: CLAUDE.md, subagents,      │
│     chunking, session logs                         │
│                                                    │
│  2. Less Context = Better Results                  │
│     Focused beats overloaded. Let AI explore.      │
│                                                    │
│  3. Copilot = Great for inline completion          │
│     OpenCode = Great for freedom & control         │
│                                                    │
│  4. Use Both Together                              │
│     They're complementary, not competitive.        │
└────────────────────────────────────────────────────┘
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

- Setting up OpenCode with our GitHub Copilot licenses
- Choosing the right model for different tasks
- Workflow integration strategies
- Combining Copilot and OpenCode effectively

---

## Thank You!

```
    ┌─────────────────────────────────────────────┐
    │                                             │
    │   Questions? Experiments? Discoveries?      │
    │                                             │
    │   Share in #itpv_dev_with_ai                │
    │                                             │
    └─────────────────────────────────────────────┘
```

**Let's keep learning together!**
