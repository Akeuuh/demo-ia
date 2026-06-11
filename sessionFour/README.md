# Session Four: The Token Economy — RTK & Caveman

**Format:** Interactive Slidev presentation (run with `npm run dev` in sessionFour/)
**Duration:** ~30–40 min
**Status:** 📅 Scheduled

---

## 🎯 Goal

Sessions 1–3 were about working *with* AI and fitting more into the context window.
Session 4 flips the question: **how do we spend fewer tokens in the first place?**

Tokens are money, latency, and context budget. We look at two free, opt-in tools that
attack the problem from opposite ends — and because they target different tokens, they stack.

| Tool | Cuts | How |
|------|------|-----|
| **RTK** (Rust Token Killer) | **Input** tokens | CLI proxy that compresses command output before it reaches the model |
| **Caveman** | **Output** tokens | Skill that makes the model answer terse — no filler, reasoning untouched |

---

## 🗺️ Structure (4 parts)

1. **The Token Economy** (~10 min) — what a token costs, input vs output, where the 118k tokens of a session actually go.
2. **RTK — cut the input** (~12 min) — what it is, the 4 compression strategies, the auto-rewrite hook, before/after, the numbers, install.
3. **Caveman — cut the output** (~10 min) — output-only compression, before/after, intensity levels (`lite`/`full`/`ultra`/`wenyan`), auto-clarity safety.
4. **Combine & decide** (~5 min) — RTK vs Caveman table, when to use what, live demo, caveats, action items.

---

## 🔑 Key numbers (from the projects)

**RTK**
- ~**−80%** tokens on a medium-project session (~118k → ~24k)
- Up to **−90%** on test runners, **−70%** on file reads
- **<10ms** overhead, **100+** commands, works with 14 AI tools

**Caveman**
- **~−65%** average output reduction (range 22–87%)
- Examples: React explanation −87%, auth fix −83%, Postgres pool −84%
- Output tokens only — *"Caveman make mouth smaller, not brain smaller."*

---

## 🎬 Live demo ideas

**RTK**
- `rtk gain` — show current savings analytics
- Run a test suite raw vs through `rtk`, compare line/token count
- `git push` before/after (~200 tokens → ~10)
- `rtk discover` on real Claude Code history

**Caveman**
- Same debug question in normal mode then `/caveman full`
- Compare token counts side by side
- Show auto-clarity kicking in on a destructive ("drop table") prompt

**Combined**
- Both running on one real ticket — measure the total drop.

---

## ⚠️ Honest caveats

- **RTK** is lossy by design — use `rtk proxy` when you need raw output. Native auto-rewrite hook is Linux/macOS only (Windows via WSL). Watch the `rtk` name collision (Rust Type Kit).
- **Caveman** affects style only — won't fix a bad prompt, and terse output reads worse for newcomers / shared transcripts. Use `lite` or off when onboarding.
- Both are **free, opt-in, reversible**. Try on a real task, measure, decide.

---

## 🔗 Resources

- RTK: https://github.com/rtk-ai/rtk
- Caveman: https://github.com/juliusbrussee/caveman

---

## 📝 Debrief (fill after the session)

- What worked well:
- Challenges:
- Questions raised:
- Action items:
  - [ ] Install RTK, run `rtk discover`
  - [ ] Try Caveman `lite` for a week
  - [ ] Run both on one real ticket, report the combined drop
  - [ ] Decide a team default: terse vs verbose
- Tools/resources shared:
