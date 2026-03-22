"use client";

import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Animated mesh gradient background ── */}
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #ffffff 50%, #bae6fd 75%, #f0f9ff 100%)",
          backgroundSize: "400% 400%",
          animation: "mesh-drift 20s ease infinite",
        }}
      />

      {/* ── Floating orbs ── */}
      <div
        className="absolute top-[15%] left-[10%] w-[420px] h-[420px] rounded-full -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
          animation: "float-slow 18s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)",
          animation: "float-slower 22s ease-in-out infinite",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-[60%] left-[55%] w-[250px] h-[250px] rounded-full -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(125, 211, 252, 0.1) 0%, transparent 70%)",
          animation: "float-slow 15s ease-in-out infinite",
          animationDelay: "-5s",
          filter: "blur(50px)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
        {/* Overline */}
        <p
          className={`fade-up ${isInView ? "visible" : ""} text-accent-dim text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 sm:mb-8 font-medium`}
        >
          For A-Level Teachers in Pakistan
        </p>

        {/* Headline */}
        <h1
          className={`fade-up fade-up-delay-1 ${isInView ? "visible" : ""} font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.08] tracking-tight mb-6 sm:mb-8`}
        >
          Your Audience Is Already There.
          <br />
          <span className="italic text-accent">Now Convert Them.</span>
        </h1>

        {/* Paragraph */}
        <p
          className={`fade-up fade-up-delay-2 ${isInView ? "visible" : ""} text-text-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12`}
        >
          We build the infrastructure that helps A-level teachers convert their
          audience into enrolled, paying students.
        </p>

        {/* CTA */}
        <div className={`fade-up fade-up-delay-3 ${isInView ? "visible" : ""}`}>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative inline-flex items-center gap-2 bg-accent text-background font-semibold text-sm sm:text-base px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,162,255,0.3)] hover:scale-[1.03] cursor-pointer"
          >
            <span className="relative z-10">Get In Touch</span>
            <svg
              className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Bottom gradient fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
