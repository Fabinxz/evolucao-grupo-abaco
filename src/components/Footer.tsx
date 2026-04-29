"use client";

import { ExternalLink, Terminal } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        relative w-full
        border-t border-white/[0.04]
        px-4 sm:px-6 md:px-8
        py-12 sm:py-16
        mt-10 sm:mt-20
        overflow-hidden
      "
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {/* ── Top accent glow ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,245,255,0.3), transparent)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[20px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(0,245,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        {/* Left — Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 mb-1">
            <Terminal className="w-4 h-4 text-[#00F5FF]/50" strokeWidth={1.5} />
            <p
              className="text-[11px] sm:text-xs tracking-[3px] uppercase font-bold"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Exposição Virtual Interativa
            </p>
          </div>
          <p
            className="text-[10px] tracking-[1px] uppercase"
            style={{ color: "rgba(0,245,255,0.3)" }}
          >
            ICMC USP São Carlos · {year}
          </p>
        </div>

        {/* Center — Decoration */}
        <div className="hidden md:flex items-center justify-center flex-1">
           <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Right — Links */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <p className="text-[10px] tracking-[1px] text-white/20 uppercase">
            Grupo Ábaco
          </p>
          <a
            href="https://github.com/Fabinxz/timeline-dantives"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1.5
              text-[10px] sm:text-[11px] tracking-[2px] uppercase
              transition-colors duration-300
              hover:text-[#00F5FF]
            "
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
            Código Fonte
          </a>
          <span
            className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            v2.0
          </span>
        </div>
      </div>
    </footer>
  );
}
