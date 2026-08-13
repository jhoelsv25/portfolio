"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Play, Terminal, Sparkles, Flame } from "lucide-react";
import { toast } from "sonner";

const codeSnippets = {
  "profile.ts": `// Jhoel Silvestre — Systems Engineer & Full Stack Dev
const developer = {
  name: "Jhoel Silvestre Vargas",
  location: "Huancayo, Perú 🇵🇪",
  role: "Full Stack & AI Engineer",
  experience: "+3 years",
  specialties: [
    "NestJS & Modular Microservices",
    "Next.js 15 & Angular Enterprise Apps",
    "AI Agents, Chatbots RAG & Tool Calling",
    "High-Speed Web Scraping & Pipelines",
    "PostgreSQL, TypeORM & Prisma"
  ],
  status: "Available for high-impact projects 🚀"
};`,
  "ai_agent.ts": `// Autonomous Agent Pipeline
import { AgentRunner, OpenAI, PgVector } from "@/lib/ai";

export async function runAgentWorkflow(task: string) {
  const agent = new AgentRunner({
    tools: [webSearch, databaseQuery, scrapingTool],
    memory: new PgVector({ namespace: "portfolio-context" }),
    model: "claude-3-7-sonnet"
  });

  const response = await agent.execute({
    prompt: task,
    autonomousLevel: "full"
  });
  return response.insights;
}`,
  "scraper.ts": `// High-Speed Distributed Crawler
import { chromium } from "playwright";
import { ProxyRotator } from "@/utils/proxies";

export async function scrapeTarget(url: string) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    proxy: ProxyRotator.getRandom(),
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)..."
  });
  
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  const data = await page.$$eval(".item", (el) => el.map(e => e.innerText));
  
  await browser.close();
  return data;
}`,
};

type TabKey = keyof typeof codeSnippets;

export function HeroTerminal() {
  const [activeTab, setActiveTab] = React.useState<TabKey>("profile.ts");
  const [copied, setCopied] = React.useState(false);
  const [running, setRunning] = React.useState(false);
  const [output, setOutput] = React.useState<string | null>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    toast.success("Código copiado al portapapeles");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setRunning(true);
    setOutput(null);
    setTimeout(() => {
      setRunning(false);
      if (activeTab === "profile.ts") {
        setOutput(
          "✓ Developer profile loaded successfully: Ready to build amazing products!",
        );
      } else if (activeTab === "ai_agent.ts") {
        setOutput(
          "✓ Agent initialized [3 tools active] • Autonomous execution completed in 420ms.",
        );
      } else {
        setOutput(
          "✓ Scraper launched with stealth proxies • Extracted 1,250 records successfully.",
        );
      }
      toast.success("Ejecución simulada completada");
    }, 800);
  };

  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-orange-200/70 bg-[#0d0f17] text-left font-mono text-slate-100 shadow-xl dark:border-orange-500/20">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between border-b border-white/5 bg-[#141824] px-4 py-2.5 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="inline-block size-3 rounded-full bg-rose-500/80" />
            <span className="inline-block size-3 rounded-full bg-amber-500/80" />
            <span className="inline-block size-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="mx-1 h-4 w-px bg-white/10" />
          <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400">
            <Terminal className="size-3 text-orange-400" /> jhoel-workspace
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleRun}
            disabled={running}
            className="flex items-center gap-1 rounded-md bg-orange-500/20 px-2 py-0.5 text-[11px] font-semibold text-orange-400 transition-colors hover:bg-orange-500/30 disabled:opacity-50"
            title="Ejecutar simulación"
          >
            <Play
              className={`size-3 fill-orange-400 ${running ? "animate-spin" : ""}`}
            />
            {running ? "Ejecutando..." : "Run"}
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-200"
            title="Copiar código"
          >
            {copied ? (
              <Check className="size-3.5 text-emerald-400" />
            ) : (
              <Copy className="size-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex scrollbar-none items-center gap-1 overflow-x-auto border-b border-white/5 bg-[#10141f] px-3 pt-2">
        {(Object.keys(codeSnippets) as TabKey[]).map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOutput(null);
              }}
              className={`relative flex items-center gap-1.5 rounded-t-lg px-3 py-1.5 text-xs transition-all ${
                isActive
                  ? "border-x border-t border-white/10 bg-[#0d0f17] font-bold text-orange-400"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              {tab === "profile.ts" && (
                <Sparkles className="size-3 text-amber-400" />
              )}
              {tab === "ai_agent.ts" && (
                <Flame className="size-3 text-orange-400" />
              )}
              {tab === "scraper.ts" && (
                <Terminal className="size-3 text-emerald-400" />
              )}
              <span>{tab}</span>
            </button>
          );
        })}
      </div>

      {/* Code Editor Body */}
      <div className="min-h-55 overflow-x-auto p-4 text-xs leading-relaxed sm:p-5">
        <AnimatePresence mode="wait">
          <motion.pre
            key={activeTab}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="font-mono text-[11px] whitespace-pre text-slate-300 sm:text-xs"
          >
            <code>{codeSnippets[activeTab]}</code>
          </motion.pre>
        </AnimatePresence>

        {/* Live Output Drawer */}
        {output && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3 flex items-center gap-2 rounded-lg border border-t border-white/10 bg-emerald-950/20 p-2.5 pt-3 text-[11px] text-emerald-400"
          >
            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
            {output}
          </motion.div>
        )}
      </div>
    </div>
  );
}
