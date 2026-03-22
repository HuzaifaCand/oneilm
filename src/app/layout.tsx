import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "OneIlm | Infrastructure for A-Level Teachers",
  description:
    "We build the infrastructure that helps A-level teachers in Pakistan convert their audience into enrolled, paying students.",
  keywords: [
    "OneIlm",
    "A-Level teachers",
    "Pakistan",
    "teacher website",
    "student registration",
    "admin dashboard",
    "ed-tech",
  ],
  authors: [{ name: "OneIlm" }],
  creator: "OneIlm",
  publisher: "OneIlm",
  metadataBase: new URL("https://oneilm.org"),

  openGraph: {
    title: "OneIlm — Infrastructure for A-Level Teachers",
    description:
      "We build the infrastructure that helps A-level teachers convert their audience into enrolled, paying students.",
    url: "https://oneilm.org",
    siteName: "OneIlm",
    images: [
      {
        url: "https://oneilm.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "OneIlm — Infrastructure for A-Level Teachers",
      },
    ],
    locale: "en_PK",
    type: "website",
  },

  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${playfairDisplay.variable}`}
    >
      <body className="bg-background text-text-main font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
