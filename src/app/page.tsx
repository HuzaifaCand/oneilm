import Hero from "@/components/home/Hero";
import OnlinePresence from "@/components/home/OnlinePresence";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | OneIlm",
};

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}
