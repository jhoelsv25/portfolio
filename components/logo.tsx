import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  compact?: boolean;
  className?: string;
  href?: string;
};

export function Logo({
  compact = false,
  className,
  href = "#inicio",
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex shrink-0 items-center gap-2.5 transition-transform outline-none select-none hover:scale-105",
        className,
      )}
      aria-label="Jhoel Silvestre - Portafolio Dev"
    >
      {/* Modern Dev Logo Mark (Geometric Squircle with glowing JS & Code Brackets) */}
      <div className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-rose-500 p-[1.5px] shadow-sm shadow-orange-500/20 transition-all duration-300 group-hover:shadow-md group-hover:shadow-orange-500/30 sm:size-10">
        <div className="bg-card flex size-full items-center justify-center rounded-[10px] transition-colors dark:bg-[#120f0d]">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 text-orange-500 transition-transform duration-300 group-hover:scale-110"
          >
            {/* Left Bracket < */}
            <path
              d="M10 9L4 16L10 23"
              stroke="url(#orange-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right Bracket > */}
            <path
              d="M22 9L28 16L22 23"
              stroke="url(#orange-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Monogram J / S slash inside */}
            <path
              d="M18 8L14 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-foreground/80 dark:text-foreground"
            />
            <defs>
              <linearGradient
                id="orange-grad"
                x1="4"
                y1="9"
                x2="28"
                y2="23"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f97316" />
                <stop offset="0.5" stopColor="#f59e0b" />
                <stop offset="1" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Logotype */}
      <div className="flex flex-col justify-center text-left">
        <div className="flex items-center">
          <span className="text-foreground font-mono text-base font-black tracking-tight sm:text-lg">
            jhoel<span className="font-extrabold text-orange-500">.dev</span>
          </span>
          <span className="ml-1 inline-block size-1.5 animate-pulse rounded-full bg-emerald-500" />
        </div>
        {!compact && (
          <span className="text-muted-foreground font-mono text-[9px] font-bold tracking-[0.18em] uppercase transition-colors group-hover:text-orange-500">
            Full Stack & AI
          </span>
        )}
      </div>
    </Link>
  );
}
