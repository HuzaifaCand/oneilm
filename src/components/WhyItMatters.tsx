"use client";

import { useInView } from "@/hooks/useInView";

const statements = [
  "Stop losing students in your DMs.",
  "Know exactly who\u2019s registered, who\u2019s paid, and who needs a follow-up.",
  "Spend your time teaching, not managing.",
];

export default function WhyItMatters() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 sm:py-36 px-6 sm:px-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading — visually hidden but semantically present */}
        <h2 className="sr-only">Why It Matters</h2>

        <div className="space-y-16 sm:space-y-24">
          {statements.map((statement, i) => (
            <div
              key={i}
              className={`fade-up ${isInView ? "visible" : ""} flex items-start gap-6 sm:gap-10`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Muted number */}
              <span className="text-text-faint text-5xl sm:text-7xl lg:text-8xl font-[family-name:var(--font-display)] leading-none select-none shrink-0 tabular-nums w-16 sm:w-24 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Statement */}
              <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.15] tracking-tight pt-2 sm:pt-4">
                {statement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
