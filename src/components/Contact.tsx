"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { sendContactEmail } from "@/app/actions";

export default function Contact() {
  const { ref, isInView } = useInView(0.1);
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    const result = await sendContactEmail(form);
    
    if (result.success) {
      setStatus("success");
      setForm({ name: "", contact: "", message: "" });
      
      // Reset success status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 sm:py-36 px-6 sm:px-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <h2
          className={`fade-up ${isInView ? "visible" : ""} font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl text-primary mb-12 sm:mb-16`}
        >
          Get In Touch
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`fade-up fade-up-delay-1 ${isInView ? "visible" : ""} space-y-5`}
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-text-muted text-sm mb-2 tracking-wide"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-5 py-3.5 text-primary placeholder:text-text-faint text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
              placeholder="Your name"
            />
          </div>

          {/* Contact */}
          <div>
            <label
              htmlFor="contact"
              className="block text-text-muted text-sm mb-2 tracking-wide"
            >
              Email or WhatsApp Number
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              value={form.contact}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-border rounded-xl px-5 py-3.5 text-primary placeholder:text-text-faint text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
              placeholder="email@example.com or +92 300 1234567"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-text-muted text-sm mb-2 tracking-wide"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full bg-surface border border-border rounded-xl px-5 py-3.5 text-primary placeholder:text-text-faint text-sm resize-none focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
              placeholder="Tell us about your teaching setup and what you're looking for..."
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="group relative inline-flex items-center gap-2 bg-accent text-background font-semibold text-sm px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] hover:scale-[1.03] disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none disabled:cursor-not-allowed cursor-pointer mt-2"
          >
            <span className="relative z-10">
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "Message Sent!"
                  : status === "error"
                    ? "Failed — Try Again"
                    : "Send Message"}
            </span>
            {status === "idle" && (
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
            )}
            {status === "success" && (
               <svg 
                  className="relative z-10 w-4 h-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            )}
          </button>
        </form>

        {/* WhatsApp secondary CTA */}
        <div
          className={`fade-up fade-up-delay-3 ${isInView ? "visible" : ""} mt-12 pt-10 border-t border-border`}
        >
          <a
            href="https://wa.me/923379222339"
            target="_blank"
            className="group inline-flex items-center gap-3 text-text-muted hover:text-accent transition-colors duration-300"
          >
            {/* WhatsApp icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="text-sm font-medium">
              Or message us directly on WhatsApp
            </span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
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
          </a>
        </div>
      </div>
    </section>
  );
}
