import { Metadata } from "next";
import Hero from "@/components/Hero";
import WhatWeBuild from "@/components/WhatWeBuild";
import TheWork from "@/components/TheWork";
import WhyItMatters from "@/components/WhyItMatters";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "OneIlm | Infrastructure for A-Level Teachers",
  description:
    "We build the infrastructure that helps A-level teachers in Pakistan convert their audience into enrolled, paying students — without the admin headache.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeBuild />
      <TheWork />
      <WhyItMatters />
      <Contact />
    </main>
  );
}
