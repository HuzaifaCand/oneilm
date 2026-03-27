"use client";

import { useInView } from "@/hooks/useInView";

const cards = [
  {
    title: "Teacher Website",
    description: "Professional presence that converts visitors into enquiries.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8h4" />
        <path d="M7 11h2" />
      </svg>
    ),
  },
  {
    title: "Student Registration System",
    description: "Capture and manage every lead automatically.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6" />
        <path d="M22 11h-6" />
      </svg>
    ),
  },
  {
    title: "Admin Dashboard",
    description:
      "Your entire student pipeline, payments, and follow-ups in one place.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
  {
    title: "Automations",
    description:
      "Save hours by automating routine administrative tasks and workflows.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Course Management Systems",
    description: "Sell your recorded lectures with your own system.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M10 16l6-4-6-4v8z" />
      </svg>
    ),
  },

  {
    title: "Custom Builds",
    description: "Tailor-made solutions to fit your exact teaching workflow.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

export default function WhatWeBuild() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 sm:py-36 px-6 sm:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2
          className={`fade-up ${isInView ? "visible" : ""} font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-primary mb-16 sm:mb-20`}
        >
          What We Build
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`fade-up ${isInView ? "visible" : ""} group relative bg-surface border border-border rounded-2xl p-8 sm:p-10 transition-all duration-500 hover:border-accent/30 hover:bg-surface-hover`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-accent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-accent mb-6">{card.icon}</div>

                {/* Title */}
                <h3 className="text-primary font-semibold text-lg mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
