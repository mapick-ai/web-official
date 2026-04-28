import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Icon = {
  lock: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="16" r="1.2" />
    </svg>
  ),
  target: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  broom: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M14 3 10 9" />
      <path d="m16 5-1 2" />
      <path d="M6 20h12l2-8H8L6 20Z" />
      <path d="M9 12v8M13 12v8M17 12v8" />
    </svg>
  ),
  radar: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  ),
  shield: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3 4 6v6c0 4.5 3.3 8.4 8 9 4.7-.6 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  idcard: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11" r="2.2" />
      <path d="M14 10h5M14 13h4M5 16h8" />
    </svg>
  ),
  layers: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 18l9 5 9-5" />
    </svg>
  ),
  eyeOff: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 3 21 21" />
      <path d="M6.7 6.7C4.6 8 2.9 10 2 12c2 4 6 7 10 7 2 0 3.8-.7 5.3-1.7" />
      <path d="M10 5.2C10.7 5 11.3 5 12 5c4 0 8 3 10 7-.5 1-1.2 2-2 2.9" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
    </svg>
  ),
  doc: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  ),
  check: (p: IconProps) => (
    <svg {...base} {...p} strokeWidth={1.8}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  ),
} as const;

export type IconName = keyof typeof Icon;
