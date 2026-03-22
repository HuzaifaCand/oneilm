"use client";

import { useInView } from "@/hooks/useInView";

const screenshots = [
  { label: "Teacher Homepage", span: false, mockType: "landing" },
  { label: "Registration Form", span: false, mockType: "form" },
  { label: "Student Dashboard", span: false, mockType: "dashboard" },
  { label: "Admin Overview — Pipeline & Analytics", span: true, mockType: "analytics" },
  { label: "Payment Tracking", span: false, mockType: "table" },
  { label: "Student Profile", span: false, mockType: "profile" },
];

function MockContent({ type }: { type: string }) {
  switch (type) {
    case "landing":
      return (
        <div className="p-5 space-y-4">
          <div className="w-2/3 h-3 rounded-full bg-text-faint/30" />
          <div className="w-full h-2 rounded-full bg-text-faint/15" />
          <div className="w-5/6 h-2 rounded-full bg-text-faint/15" />
          <div className="mt-6 w-24 h-8 rounded-lg bg-accent/20 border border-accent/20" />
          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="h-16 rounded-lg bg-text-faint/10" />
            <div className="h-16 rounded-lg bg-text-faint/10" />
            <div className="h-16 rounded-lg bg-text-faint/10" />
          </div>
        </div>
      );
    case "form":
      return (
        <div className="p-5 space-y-3">
          <div className="w-1/2 h-3 rounded-full bg-text-faint/30" />
          <div className="space-y-2 mt-4">
            <div className="w-full h-8 rounded-md bg-text-faint/8 border border-text-faint/15" />
            <div className="w-full h-8 rounded-md bg-text-faint/8 border border-text-faint/15" />
            <div className="w-full h-8 rounded-md bg-text-faint/8 border border-text-faint/15" />
            <div className="w-full h-16 rounded-md bg-text-faint/8 border border-text-faint/15" />
          </div>
          <div className="w-28 h-8 rounded-lg bg-accent/25 border border-accent/20 mt-2" />
        </div>
      );
    case "dashboard":
      return (
        <div className="p-5 space-y-4">
          <div className="flex gap-3 mb-4">
            <div className="flex-1 h-14 rounded-lg bg-accent/10 border border-accent/10 p-2">
              <div className="w-8 h-2 rounded bg-text-faint/30 mb-1.5" />
              <div className="w-12 h-4 rounded bg-text-faint/20" />
            </div>
            <div className="flex-1 h-14 rounded-lg bg-text-faint/8 border border-text-faint/10 p-2">
              <div className="w-8 h-2 rounded bg-text-faint/30 mb-1.5" />
              <div className="w-10 h-4 rounded bg-text-faint/20" />
            </div>
            <div className="flex-1 h-14 rounded-lg bg-text-faint/8 border border-text-faint/10 p-2">
              <div className="w-8 h-2 rounded bg-text-faint/30 mb-1.5" />
              <div className="w-14 h-4 rounded bg-text-faint/20" />
            </div>
          </div>
          <div className="w-full h-24 rounded-lg bg-text-faint/8" />
        </div>
      );
    case "analytics":
      return (
        <div className="p-5 space-y-4">
          <div className="flex items-end gap-2 h-24">
            {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 72].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-accent/20 border-t border-x border-accent/15"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="grid grid-cols-4 gap-3 mt-2">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-10 rounded-md bg-text-faint/8 border border-text-faint/10 p-2">
                <div className="w-8 h-1.5 rounded bg-text-faint/30 mb-1" />
                <div className="w-6 h-3 rounded bg-text-faint/20" />
              </div>
            ))}
          </div>
        </div>
      );
    case "table":
      return (
        <div className="p-5 space-y-2">
          <div className="w-1/3 h-3 rounded-full bg-text-faint/30 mb-4" />
          {[1, 2, 3, 4, 5].map((row) => (
            <div key={row} className="flex gap-4 py-2 border-b border-text-faint/8">
              <div className="w-1/4 h-2 rounded bg-text-faint/20" />
              <div className="w-1/3 h-2 rounded bg-text-faint/15" />
              <div className="w-1/6 h-2 rounded bg-accent/20" />
              <div className="w-1/6 h-2 rounded bg-text-faint/10" />
            </div>
          ))}
        </div>
      );
    case "profile":
      return (
        <div className="p-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/20" />
            <div className="space-y-1.5">
              <div className="w-24 h-3 rounded bg-text-faint/30" />
              <div className="w-32 h-2 rounded bg-text-faint/15" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-full h-2 rounded bg-text-faint/12" />
            <div className="w-4/5 h-2 rounded bg-text-faint/12" />
            <div className="w-3/4 h-2 rounded bg-text-faint/12" />
          </div>
          <div className="mt-5 flex gap-2">
            <div className="w-16 h-6 rounded bg-accent/15 border border-accent/15" />
            <div className="w-16 h-6 rounded bg-text-faint/10 border border-text-faint/10" />
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function TheWork() {
  const { ref, isInView } = useInView(0.05);

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
          The Work
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((item, i) => (
            <div
              key={item.label}
              className={`fade-up ${isInView ? "visible" : ""} ${
                item.span ? "sm:col-span-2" : ""
              } group transition-all duration-500 hover:scale-[1.02]`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Browser chrome wrapper */}
              <div className="rounded-xl border border-border bg-surface overflow-hidden shadow-lg shadow-black/20 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-black/30 group-hover:border-accent/20">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background-alt/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-text-faint/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-text-faint/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-text-faint/30" />
                  </div>
                  <span className="text-text-faint text-[11px] tracking-wide ml-2">
                    {item.label}
                  </span>
                </div>

                {/* Mock content area */}
                <div className="min-h-[180px] bg-background-alt/30">
                  <MockContent type={item.mockType} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
