import React from "react";

interface InfoCardProps {
  title: string;
  paragraph: string;
  icon: React.ReactNode;
  flipped?: boolean;
}

export default function InfoCard({
  title,
  paragraph,
  icon,
  flipped = false,
}: InfoCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center 
        ${flipped ? "md:flex-row-reverse" : ""}`}
    >
      {/* Icon Section */}
      <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-full bg-background border border-secondary text-white relative z-10">
        {icon}
      </div>

      {/* Connector Line */}
      <div className="hidden md:block flex-grow w-36 h-[0.5px] bg-secondary" />

      {/* Text Section */}
      <div className="text-center md:text-left bg-background border border-secondary w-full rounded-2xl">
        <div className="py-4 px-6">
          <h3 className="text-sm sm:text-lg text-primary font-semibold mb-1">
            {title}
          </h3>
          <p className="text-secondary text-[10px] sm:text-xs text-secondary">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}
