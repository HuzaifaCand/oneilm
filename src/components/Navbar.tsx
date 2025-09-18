"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/our-work" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        <div className="flex justify-between max-w-5xl mx-auto h-25 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/ilm.svg"
                alt="Ilm Logo"
                width={60}
                height={30}
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex text-sm space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "relative font-medium hover:text-secondary transition-colors duration-200",
                  "after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[0.5px] after:bg-secondary after:transition-all after:duration-300",
                  isActive(link.href)
                    ? "after:w-full text-secondary"
                    : "after:w-0 hover:after:w-full text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex text-center">
            <Link
              href="/pricing"
              className="bg-accent font-medium  rounded-lg w-50 py-2.5 text-sm text-primary shadow-sm font-medium"
            >
              Free Consultation
            </Link>
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setSidebarOpen(true)} aria-label="Open Menu">
              <Menu className="text-primary w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/40 transition-opacity duration-300",
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar Menu */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-64 bg-blueText shadow-xl transform transition-transform overflow-y-auto duration-300",
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/oneilm.png"
              alt="SS Logo"
              width={70}
              height={30}
              className="rounded-md"
              priority
            />
          </Link>
          <button onClick={() => setSidebarOpen(false)} aria-label="Close Menu">
            <X className="text-white w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col space-y-4 mt-6 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setSidebarOpen(false)}
              className={clsx(
                "relative text-xs font-light transition-colors duration-200",
                isActive(link.href) ? "text-accent" : "text-white"
              )}
            >
              <div>
                {link.name}
                <hr className="mt-4 text-white/10"></hr>
              </div>
            </Link>
          ))}

          <Link
            href="/pricing"
            className="bg-accent font-medium  mt-4 text-center rounded-lg w-full py-2.5 text-xs text-primary shadow-sm font-medium"
          >
            Free Consultation
          </Link>
          <Link
            href="/pricing"
            className="bg-secondary font-medium text-center rounded-lg w-full py-2.5 text-xs text-white shadow-sm font-medium"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
