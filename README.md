# Mapick Official Website

![Mapick Banner](public/mapick_banner.png)

> **Mapick website** v1.0.0
> · Persona system v1.5
> · Market plan v3.0
> · Last updated: 2026-04-14

Find the right Skills for the way you actually work.
Skill manager for OpenClaw and MCP-compatible tools — discover better-fit skills, clean up noisy setups, reduce wasted AI spend, and get your productivity persona.

Website: [mapick.ai](https://mapick.ai)

![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.x-yellow)
![Nodejs](https://img.shields.io/badge/node-20.x-green)

## What's your OpenClaw persona?

Mapick scans your real skill usage and tells you:

- Which skills you're actually using vs. collecting dust
- What your usage pattern says about how you work
- Your persona — 13 types based on real behavior
  (3AM Committer · Install First Ask Later · PR Approval Hoarder...)

Works with: OpenClaw · Claude Code · Cursor · Codex CLI · Windsurf · Gemini CLI

Try it → [mapick.ai](https://mapick.ai)

---

## Features

- **Personalized recommendations** — based on real usage signals, workflow patterns, and safety filters
- **Setup cleanup** — spots idle, duplicate, or low-fit Skills
- **Lower AI costs** — cleaner setups reduce wasted context and tool overhead
- **Safety filters** — quality and safety signals filter recommendations before they reach your shortlist
- **Workflow bundles** — role-based bundles fill missing pieces in partial workflows
- **Shareable persona** — generates a skill card from real usage with persona, proof points, and a copyable stack
- **Cross-platform** — one profile across OpenClaw, Claude Code, Cursor, Codex CLI, Windsurf, Gemini CLI

## Community Setups

Real stacks from real users. Updated weekly.

| #   | Role           | Installed → Kept | Persona                  | Link                                             |
| --- | -------------- | ---------------- | ------------------------ | ------------------------------------------------ |
| 001 | Marketer       | 30 → 4           | Install First, Ask Later | [mapick.ai/s/kim001](https://mapick.ai/s/kim001) |
| 002 | Full-stack Dev | 35 → 7           | PR Approval Hoarder      | coming soon                                      |

_Add yours → open an Issue with label `show-your-stack`_

## Tech Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**
- **next-intl** — i18n with 4 locales (English, Simplified Chinese, Traditional Chinese, Korean)
- **lucide-react** — icons

## Project Structure

```
web-official/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx      # Locale layout, metadata, fonts, JSON-LD
│   │   │   └── page.tsx        # Landing page (composes all sections)
│   │   ├── api/content/
│   │   │   └── route.ts        # Structured JSON API for AI agents
│   │   └── globals.css         # Design system, animations, responsive rules
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky header, language switcher
│   │   ├── Hero.tsx             # Title with shimmer, command box, particles
│   │   ├── Marquee.tsx          # Infinite scrolling feature keywords
│   │   ├── WhySteps.tsx         # Two-column: 5 reasons + 3 steps
│   │   ├── Report.tsx           # Persona card with stats, skills, share
│   │   ├── Scenarios.tsx        # Tabbed scenarios (Alice / Bob / Carol)
│   │   ├── SetupsAndPlatforms.tsx  # Role-based setups + MCP config
│   │   ├── FooterCTA.tsx        # Final CTA with privacy points
│   │   └── Reveal.tsx           # Scroll-triggered fade-in animation
│   └── i18n/                    # next-intl routing and config
├── messages/
│   ├── en.json                  # English
│   ├── zh-CN.json               # Simplified Chinese
│   ├── zh-TW.json               # Traditional Chinese
│   └── ko.json                  # Korean
└── public/                      # Static assets (logo, og-image, robots.txt)
```

## Getting Started

```bash
# Install dependencies (requires Node >= 22)
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Routes:

| Path     | Locale              |
| -------- | ------------------- |
| `/en`    | English             |
| `/zh-CN` | Simplified Chinese  |
| `/zh-TW` | Traditional Chinese |
| `/ko`    | Korean              |

## MCP Config (all supported clients)

```json
{
  "mcpServers": {
    "mapick": {
      "url": "https://mcp.mapick.ai",
      "env": { "MAPICK_KEY": "your-key" }
    }
  }
}
```

Paste this config into: OpenClaw · Claude Code · Cursor · Codex CLI · Windsurf · Gemini CLI

## Design

- Dark theme with cyan / sky / violet gradient accents
- Floating orb backgrounds, particle effects, shimmer text animations
- Responsive: desktop (1200px), tablet (1100/860px), mobile (720px)
- CJK-specific adaptations: adjusted letter-spacing, line-height, word-break rules, Noto Sans SC/KR fonts

## Related

- [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) — OpenClaw skill registry (5,400+ skills)
- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — Claude Code skills and tools
- [OpenClaw](https://github.com/openclaw/openclaw) — the AI agent Mapick runs on

## Metrics

![GitHub stars](https://img.shields.io/github/stars/mapick-ai/web-official)
![GitHub forks](https://img.shields.io/github/forks/mapick-ai/web-official)

Traffic and referring sites tracked via GitHub Insights.
Internal KPI checkpoint: Day 30 → Unique visitors > 500, Stars > 50.

## Star History

If Mapick helped you clean up your stack, a ⭐ helps others find it.

## License

MIT
