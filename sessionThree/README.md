# Session Three: Beyond Context - OpenCode

**Date:** TBD
**Duration:** 30-40 minutes
**Format:** Interactive Slidev presentation with discussion

## Viewing the Presentation

This session uses [Slidev](https://sli.dev) for an interactive presentation experience.

**Quick Start:**

```bash
cd sessionThree
npm install  # First time only
npm run dev  # Opens on http://localhost:3030
```

**Export to PDF:**

```bash
npm run export  # Creates slides-export.pdf
```

**Files:**

- `slides.md` - Main Slidev presentation (36 slides)
- `presentation.md` - Original markdown format (backup/reference)
- `package.json` - Slidev dependencies
- `SLIDEV.md` - Slidev usage guide

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

- What Copilot does well (inline suggestions, chat, subagents)
- What's missing for TF1:
  - No MCP support (on current GitHub plan)
  - No nested agents (flat orchestration only)
  - Limited model choice
  - No persistent sessions

### Part 3: OpenCode - The Alternative (10 min)

- What is OpenCode? (SST team, 93k+ GitHub stars)
- Key differentiators for TF1:
  - **MCP Support** - Connect to Jira, databases, Slack, custom APIs
  - **Nested agents** - True multi-level orchestration
  - **75+ LLM providers** - Use any model
  - **Open source** - No vendor lock-in
  - **Persistent sessions** - Workspaces survive restarts
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

| Feature                | Copilot   | OpenCode      |
| ---------------------- | --------- | ------------- |
| Inline completion      | ✅ Yes    | ❌ No         |
| MCP Support (TF1 plan) | ❌ No     | ✅ Yes        |
| Nested agents          | ❌ No     | ✅ Yes        |
| Model choice           | ~5 models | 75+ providers |
| Open source            | ❌ No     | ✅ Yes        |

**Bottom Line:** Use both. Copilot for inline completion, OpenCode for complex orchestration and MCP integrations.

## Getting Started with OpenCode

### Installation

**Option 1: VS Code Extension (Recommended)**

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "OpenCode"
4. Click Install
5. Reload VS Code

**Option 2: Command Line Interface**

```bash
# Install globally via curl
curl -fsSL https://opencode.ai/install | bash

# Verify installation
opencode --version
```

**Option 3: Desktop Application**

Download from [opencode.ai/download](https://opencode.ai/download) for macOS, Windows, or Linux.

### Connecting GitHub Copilot Account

To use your existing GitHub Copilot credentials with OpenCode via CLI:

1. **Start OpenCode**
   ```bash
   # Launch OpenCode in your terminal
   opencode
   ```

2. **Use the /connect command**
   ```bash
   # In the OpenCode prompt, type:
   /connect
   
   # This will show you available providers to connect
   # Select "GitHub Copilot" from the list
   ```

3. **Authenticate with GitHub**
   - OpenCode will provide you with a device code and URL
   - Open the URL in your browser
   - Enter the device code
   - Authorize OpenCode to access your GitHub Copilot subscription

4. **Verify the connection**
   ```bash
   # List available models with the /models command
   /models
   
   # You should see models from GitHub Copilot like:
   # - gpt-4o (GPT-4 Optimized)
   # - claude-3.5-sonnet (Claude Sonnet via GitHub)
   # - o1-preview (OpenAI O1)
   # - gemini-2.0-flash (Gemini Flash)
   ```

5. **Switch between models**
   ```bash
   # Use the /model command to change the active model
   /model claude-3.5-sonnet
   
   # Or use /model to see a list and select interactively
   /model
   ```

**Useful Commands:**
- `/connect` - Connect to a provider (GitHub Copilot, Anthropic, OpenAI, etc.)
- `/models` - List all available models from connected providers
- `/model <name>` - Switch to a specific model


### Verify Your Setup

Test your configuration with a simple prompt:

```bash
# Using CLI
opencode "Write a hello world function in TypeScript"

# Or in VS Code
# Open OpenCode panel and type the same prompt
```

If everything is configured correctly, you should see a response from your selected model.

### Troubleshooting

**Issue: "No models available"**
- Ensure you have an active GitHub Copilot subscription
- Check that you've authorized OpenCode in GitHub settings
- Try disconnecting and reconnecting the provider

**Issue: "Rate limit exceeded"**
- You're using the same quota as GitHub Copilot
- Check your usage at: Settings → Providers → GitHub Copilot → View Usage
- Consider using OpenCode credits for additional capacity

**Issue: "Authentication failed"**
- Revoke access in [GitHub Settings → Applications](https://github.com/settings/applications)
- Reconnect the provider in OpenCode

## Debrief
*Session 3 - AI Tools and Context Management*

### What Worked Well
* Clear explanation of context window concept and its importance in AI interactions
* Good demonstration of OpenCode capabilities and comparison with GitHub Copilot
* Practical examples of managing context window through 6 different strategies
* Successfully introduced the concept of agents and sub-agents for task delegation
* Emphasis on treating AI as a junior developer requiring code review resonated well

### Challenges Encountered
* Two PRs from previous sessions still not reviewed or merged (context agent and atomic commits)
* GitHub Copilot limitations: no sub-agent support and no MCP (Model Context Protocol) access on enterprise plan
* License limitations restricting available models and features
* Request quota consumption increases rapidly with larger models
* Maintaining context across multiple sessions remains complex

### Questions Raised
* How to maintain global vision when splitting tasks into multiple contexts?
* Can we use local models (like Ollama) with OpenCode while maintaining enterprise security?
* What is the best approach for using different model sizes (Opus vs Sonnet vs Haiku) for different tasks?
* Is it possible to connect VS Code directly to local AI models?
* Should we prioritize merging existing PRs before they become outdated with new learnings?

### Action Items

| Action | Owner | Deadline |
|--------|-------|----------|
| Review and merge the context agent PR from Session 1 | Team | Before Session 4 |
| Review and merge the atomic commits PR from Session 2 | Team | Before Session 4 |
| Request GitHub Copilot access for team members who need it via Slack channel | Interested team members | This week |
| Test OpenCode installation and GitHub Copilot connection | Individual team members | TBD |
| Consider future session on model comparison (Opus/Sonnet/Haiku usage) | Session organizer | TBD |
| Explore MCP (Model Context Protocol) possibilities in future session | Session organizer | TBD |

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
