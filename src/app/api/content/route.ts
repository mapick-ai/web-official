import { NextResponse } from "next/server";

/**
 * GET /api/content
 *
 * Machine-readable Mapick product data for AI Agents and MCP tool calls.
 * Returns structured JSON — no HTML parsing required.
 */
export async function GET() {
  const content = {
    product: {
      name: "Mapick",
      tagline: "The longer you use it, the better it knows you",
      description:
        "Cross-platform MCP Skill butler and AI model routing engine. 13,000+ Skills — Mapick analyzes your workflow habits and only recommends the ones you actually need.",
      install: "openclaw skills install mapick",
      url: "https://mapick.ai",
      llms_txt: "https://mapick.ai/llms.txt",
    },
    modules: [
      {
        id: "M1",
        name: "Skill Lifecycle Management",
        description: "Tracks the full install/activate/invoke/uninstall lifecycle, auto-detects zombie Skills unused for 14 days, one-click cleanup",
        key_features: ["Zombie Skill detection", "Permission audit", "Security score improvement", "No terminal required"],
      },
      {
        id: "M2",
        name: "5-Layer Recommendation Engine",
        description: "Collaborative filtering + task classifier + social graph + security filter + real-time feedback",
        stats: {
          system_ctr: "~12%",
          mapick_ctr: "~35%",
          improvement: "~3x CTR improvement",
        },
      },
      {
        id: "M3",
        name: "Scenario Bundles",
        description: "11 pre-defined Skill bundles, one-click install of complete workflows by role",
        bundles: [
          { name: "Full-Stack Developer", skills: ["GitHub Ops", "Docker Management", "CI/CD Pipeline", "AI Code Review"], cost_usd_month: 1.20 },
          { name: "Content Creator", skills: ["Doc Generator", "Slide Maker", "SEO Optimizer", "Image Processor"], cost_usd_month: 0.90 },
          { name: "pnpm Monorepo", skills: ["pnpm Workspace Helper", "Lockfile Conflict Resolver", "Cross-Package Dependency Manager", "Monorepo Publisher"], cost_usd_month: 0.50 },
          { name: "Data Analyst", skills: ["Data Analyzer", "Chart Generator", "CSV Cleaner", "Report Builder"], cost_usd_month: 1.50 },
          { name: "DevOps Engineer", skills: ["Server Monitor", "Log Analyzer", "Deploy Automator", "Backup Manager"], cost_usd_month: 0.80 },
          { name: "Second Brain", skills: ["Obsidian Note Integration", "Summarize", "Ontology Knowledge Graph", "Web Clipper"], cost_usd_month: 0.70 },
          { name: "Workflow Automation", skills: ["n8n Workflow", "Composio 860+ Integrations", "Cron Scheduler", "Webhook Manager"], cost_usd_month: 0.60 },
          { name: "Deep Research", skills: ["Tavily Search", "Exa Search", "Long-Form Summarizer", "Citation Manager"], cost_usd_month: 0.90 },
          { name: "Security Audit", skills: ["Reverse Engineering", "Skill Vetter", "Network Analyzer", "Vulnerability Scanner"], cost_usd_month: 1.20 },
          { name: "Google Workspace", skills: ["Google Suite Integration", "Gmail Manager", "Calendar Sync", "Drive Organizer"], cost_usd_month: 0.50 },
          { name: "Multi-Platform Messaging", skills: ["Telegram Bot", "WhatsApp CLI", "Slack Integration", "ElevenLabs Voice"], cost_usd_month: 0.80 },
        ],
      },
      {
        id: "M4",
        name: "Security Scoring",
        description: "3-tier scoring system: A (no known risk) / B (low risk) / C (high risk, auto-filtered)",
        key_features: ["Permission audit", "Publisher verification", "Static code analysis", "Auto-filter grade C from recommendations"],
      },
      {
        id: "M5",
        name: "Social Recommendation Graph",
        description: "Connect friends on Telegram / Discord / Lark — friend-based recommendations have 3x higher CTR than system recommendations",
        privacy: {
          local_storage: true,
          e2e_encrypted: true,
          cloud_social_data: false,
          conversation_leaves_device: false,
          cloud_data: "Only anonymous structured signals (skill_id, timestamp, task classification result)",
        },
      },
      {
        id: "M7",
        name: "Developer Data API",
        description: "Raw JSON, unlimited calls — retention, uninstall reasons, task classification, and earnings data",
        pricing: { price_usd_month: 19, unlimited_calls: true },
        endpoints: [
          {
            path: "/v1/dev/skills/:skill_id/stats",
            method: "GET",
            returns: ["installs", "active_30d", "retention_30d", "uninstall_reasons", "task_categories"],
          },
          {
            path: "/v1/dev/skills/:skill_id/earnings",
            method: "GET",
            returns: ["calls", "earnings_usd", "payout_status"],
          },
        ],
        example_curl: "curl https://api.mapick.ai/v1/dev/skills/summarize/stats -H \"Authorization: Bearer mk-xxxxxxxxxxxx\"",
      },
    ],
    compatible_platforms: [
      { name: "Claude Code", vendor: "Anthropic", install: "claude mcp add mapick https://mcp.mapick.ai" },
      { name: "Codex CLI", vendor: "OpenAI", install: "codex mcp add mapick https://mcp.mapick.ai" },
      { name: "OpenClaw", vendor: "OpenClaw", install: "openclaw skills install mapick" },
      { name: "Cursor", vendor: "Anysphere", install: "Settings → MCP → Add Server" },
      { name: "Windsurf", vendor: "Codeium", install: ".mcp/config.json → mcpServers" },
      { name: "Cline", vendor: "Community", install: "MCP Servers → Add → mapick" },
      { name: "Continue", vendor: "Continue.dev", install: "config.json → mcpServers" },
      { name: "Gemini CLI", vendor: "Google", install: "gemini mcp add mapick https://mcp.mapick.ai" },
      { name: "Zed", vendor: "Zed Industries", install: "settings.json → assistant.context_servers" },
    ],
    mcp_config: {
      description: "Universal MCP configuration, compatible with most platforms",
      json: {
        mcpServers: {
          mapick: {
            url: "https://mcp.mapick.ai",
            env: { MAPICK_KEY: "your-key" },
          },
        },
      },
    },
    how_to_use: [
      { step: 1, action: "Install Mapick in any MCP-compatible Agent tool", commands: { openclaw: "openclaw skills install mapick", others: "claude mcp add mapick https://mcp.mapick.ai" } },
      { step: 2, action: "Mapick starts recording your workflow", detail: "Analyzes installs, usage, and sequence patterns in the background to build your usage profile" },
      { step: 3, action: "Gets more accurate over time", detail: "Recommendation accuracy keeps improving — until it's more accurate than what you'd think of yourself" },
    ],
    social_invite: {
      description: "Invite friends to improve your own recommendations — friends are your most similar users",
      commands: {
        openclaw: "openclaw skills install mapick --invite=<invite_code>",
        others: "mcp add mapick https://mcp.mapick.ai --invite=<invite_code>",
      },
      note: "Friends only need to run the command once in any Agent tool to connect",
    },
  };

  return NextResponse.json(content, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Content-Type": "application/json; charset=utf-8",
      // Allow any origin to fetch this — AI agents need cross-origin access
      "Access-Control-Allow-Origin": "*",
    },
  });
}
