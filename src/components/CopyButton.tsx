"use client";

import { Copy } from "lucide-react";

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {}
}

export function CopyButton({
  text,
  label,
  variant = "default",
}: {
  text: string;
  label?: string;
  variant?: "default" | "inline" | "primary";
}) {
  if (variant === "inline") {
    return (
      <button
        onClick={() => copyText(text)}
        className="ml-2 rounded-xl border border-cyan-300/15 bg-cyan-300/10 p-2 text-cyan-300 transition hover:bg-cyan-300/15"
      >
        <Copy className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      onClick={() => copyText(text)}
      className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-cyan-300/15 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-300/15"
    >
      <Copy className="h-4 w-4" />
      {label}
    </button>
  );
}

export function CopyFullButton({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={() => copyText(text)}
      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-5 text-lg font-semibold text-black transition hover:bg-cyan-200"
    >
      {children}
    </button>
  );
}
