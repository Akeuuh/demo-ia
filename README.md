# AI-Assisted Development Learning Sessions

```
    ╔══════════════════════════════════════════════════╗
    ║                                                  ║
    ║   From Chatbot to Co-Pilot:                     ║
    ║   Learning to Build Better Code with AI         ║
    ║                                                  ║
    ╚══════════════════════════════════════════════════╝
```

Welcome to our team's journey into AI-assisted development. This repository contains hands-on sessions demonstrating how context-aware AI tools can help us write better code, faster, while maintaining our standards and conventions.

## 🎯 Purpose

This isn't about replacing developers with AI. It's about:
- Understanding the difference between generic AI and context-aware AI
- Learning to work **with** AI as a development partner
- Discovering tools that respect our codebase conventions
- Sharing experiences and building collective knowledge

## 📚 Repository Structure

Each session lives in its own folder:

```
demo-ia/
├── sessionOne/              # From Chatbot to Agent
│   ├── presentation.md      # Slides for the session
│   ├── README.md            # Session goals & debrief
│   └── src/                 # Demo code
├── sessionTwo/              # Prompt Engineering
│   ├── presentation.md      # Slides for the session
│   ├── README.md            # Session goals & debrief
│   ├── .github/prompts/     # Reusable prompt templates
│   └── src/                 # Demo code
├── sessionThree/            # Beyond Context - OpenCode
│   ├── slides.md            # Slidev presentation
│   ├── presentation.md      # Original markdown (backup)
│   ├── README.md            # Session goals & debrief
│   └── package.json         # Slidev dependencies
└── ...
```

**How sessions work:**
1. Each folder contains slides (markdown or Slidev format)
2. The session `README.md` describes goals and is updated post-session with learnings
3. Code examples demonstrate concepts in practice

## 📖 Sessions

### Session One: From Chatbot to Agent
**[View Presentation](./sessionOne/presentation.md)** | **[Session Details](./sessionOne/README.md)**

**Quick Brief:**
Introduction to context-aware AI development. We demonstrate the difference between using ChatGPT (no context) and tools like Claude Code or Cursor (with context). Through live demos creating a React button component, we show how AI that reads your codebase produces code that already follows your theme system, styling patterns, and conventions - ready to use immediately.

**Key Topics:**
- AI without context vs. AI with context
- Live demo: Same prompt, different results
- Understanding context-aware tools (Claude Code, Cursor, Windsurf)
- Direct file modification and autonomous agents

**Status:** ✅ Completed

---

### Session Two: Prompt Engineering
**[View Presentation](./sessionTwo/presentation.md)** | **[Session Details](./sessionTwo/README.md)**

**Quick Brief:**
Learn how to write effective prompts that get better results from AI. We cover the 5 Pillars (Task, Context, Examples, Format, Persona), advanced patterns like Chain of Thought and Constraints, and common anti-patterns to avoid. Through live demos, we create reusable prompt templates that can be shared across the team.

**Key Topics:**
- The 5 Pillars of effective prompts
- Iterative refinement - prompting is rarely one-shot
- Prompt anti-patterns (The Novel, The Kitchen Sink, The Flip-Flopper)
- When NOT to use AI
- Sharing prompts with `.github/prompts/` and `copilot-instructions.md`

**Status:** ✅ Completed

---

### Session Three: Beyond Context - OpenCode
**[View Presentation](./sessionThree/slides.md)** | **[Session Details](./sessionThree/README.md)**

**Quick Brief:**
Understanding context window limits and how to manage them effectively. We explore 6 strategies for context management, compare GitHub Copilot's limitations with OpenCode's capabilities (MCP support, nested agents, multi-provider), and discuss when to use each tool.

**Key Topics:**
- Context window limits and the real challenge (your project vs AI memory)
- 6 strategies: CLAUDE.md, code maps, subagents, dynamic scoping, chunking, session continuity
- GitHub Copilot in 2026: strengths and what's missing for TF1 (no MCP on current plan)
- OpenCode: MCP integrations, nested agents, 75+ providers, open source
- Practical guidance: when to use Copilot vs OpenCode

**Format:** Interactive Slidev presentation (run with `npm run dev` in sessionThree/)

**Status:** 📅 Scheduled

---

## 🚀 Getting Started

### For Session Attendees

1. Clone this repository:
   ```bash
   git clone git@github.com:Akeuuh/demo-ia.git
   cd demo-ia
   ```

2. Navigate to the session folder:
   ```bash
   cd sessionOne  # or sessionTwo, sessionThree, etc.
   ```

3. View the presentation:
   - **For markdown presentations** (Session One & Two):
     ```bash
     slides presentation.md
     ```
     *Requires [slides](https://github.com/maaslalani/slides) to be installed*
   
   - **For Slidev presentations** (Session Three):
     ```bash
     npm install  # First time only
     npm run dev  # Opens on http://localhost:3030
     ```

4. Try the demo code:
   ```bash
   yarn install
   yarn dev
   ```

### For Session Leaders

After each session:
1. Update the session's `README.md` with:
   - What worked well
   - Challenges encountered
   - Questions raised
   - Action items for the team
   - Tools/resources shared

2. Add any demo code or examples created during the session

## 🤝 Contributing

This is a collaborative learning space. If you discover useful AI techniques, tools, or patterns:

1. Share in the session's README debrief
2. Add examples to the relevant session folder
3. Suggest topics for future sessions

## 📌 Resources

**Context-Aware AI Tools:**
- [GitHub Copilot](https://github.com/features/copilot) - Popular, paid (company license)
- [OpenCode](https://opencode.ai) - Open-source, multi-provider, nested agents
- [Claude Code](https://claude.ai/code) - CLI tool, free
- [Cursor](https://cursor.sh) - AI-first IDE, freemium
- [Windsurf](https://codeium.com/windsurf) - New AI IDE

**Learning Materials:**
- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Effective Prompting Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)

## 📝 Session Template

When creating a new session, use this structure:

```
sessionN/
├── presentation.md      # Slides using maaslalani/slides format
├── README.md           # Session goals + debrief (update after session)
├── AGENTS.md           # Context file for AI tools (optional)
└── [demo code]         # Any code examples
```

---

**Remember:** This is about learning together. There are no "experts" here - just developers exploring new tools and sharing discoveries.

Let's see what we can build. 🚀
