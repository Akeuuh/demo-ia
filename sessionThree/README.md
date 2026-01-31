# Session Three: Beyond Context - OpenCode

**Date:** TBD
**Duration:** 30-40 minutes
**Format:** Interactive presentation with discussion

## Session Goals

This session builds on Sessions One and Two and aims to:

1. **Understand context limits** - Learn what the context window is and why it matters
2. **Master context management** - 6 strategies to work effectively within the limits
3. **Discover OpenCode** - An open-source alternative to GitHub Copilot
4. **Compare tools objectively** - Understand when to use Copilot vs OpenCode

## Agenda

### Part 1: Context Management (15 min)

- What is a context window? (AI's working memory)
- Context window sizes: GPT-4o, Claude, Gemini 2.5
- The real challenge: Your project has 5000+ files, AI can hold ~150
- **6 strategies to manage context:**
  1. Configuration files (CLAUDE.md, .cursorrules)
  2. Code maps (summaries instead of full files)
  3. Subagents (parallel workers with isolated context)
  4. Dynamic scoping (let AI find what it needs)
  5. Chunking large tasks
  6. Session continuity (external memory)

### Part 2: GitHub Copilot - Where We Are (5 min)

- What Copilot does well (inline suggestions, subagents since Oct 2025)
- Remaining limitations:
  - No nested agents (subagent can't spawn another)
  - Vendor lock-in (GitHub/Microsoft ecosystem)
  - Limited model choice
  - No persistent sessions
  - No local/offline models

### Part 3: OpenCode - The Alternative (10 min)

- What is OpenCode? (SST team, 93k+ GitHub stars)
- Key differentiators:
  - **Nested agents** - True multi-level orchestration
  - **75+ LLM providers** - Use any model
  - **Open source** - No vendor lock-in
  - **Persistent sessions** - Workspaces survive restarts
  - **Local models** - 100% offline with Ollama
- When to use what (complementary, not competitive)
- Quick start: Installation & setup

### Part 4: Discussion (10 min)

- A word of caution from Dax Raad (OpenCode creator)
- Key takeaways
- Q&A and team experiences

## Key Takeaways

**The Core Message:**

> Context is a limited resource. Learn to manage it, not fight it.

**The Golden Rules:**

1. **Less is more** - Focused context beats overloaded context
2. **Let AI explore** - Don't pre-load, let it find what it needs
3. **Use configuration files** - CLAUDE.md = your project's AI constitution
4. **Delegate with subagents** - Keep main context clean
5. **Chunk your work** - Big task = many focused sessions

**Tool Comparison:**

| Feature | Copilot | OpenCode |
|---------|---------|----------|
| Inline completion | ✅ Yes | ❌ No |
| Nested agents | ❌ No | ✅ Yes |
| Model choice | ~5 models | 75+ providers |
| Open source | ❌ No | ✅ Yes |
| Local models | ❌ No | ✅ Yes (Ollama) |

**Bottom Line:** Use both. Copilot for inline completion, OpenCode for complex orchestration.

## Debrief

*To be completed after the session*

### What Worked Well

- TBD

### Challenges Encountered

- TBD

### Questions Raised

- TBD

### Action Items

| Action | Owner | Deadline |
|--------|-------|----------|
| Install OpenCode and try one task | Team | 1 week after session |
| Share findings in #itpv_dev_with_ai | Team | 2 weeks after session |
| Document preferred workflows | Team | 3 weeks after session |

---

## Additional Resources

**OpenCode:**

- [OpenCode Website](https://opencode.ai)
- [GitHub Repository](https://github.com/sst/opencode)
- [Documentation](https://opencode.ai/docs)
- [Discord Community](https://discord.gg/opencode)

**Context Management:**

- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [Understanding Context Windows](https://block.github.io/goose/blog/2025/08/18/understanding-context-windows/)

**Previous Sessions:**

- [Session One: From Chatbot to Agent](../sessionOne/README.md)
- [Session Two: Prompt Engineering](../sessionTwo/README.md)

---
