import type { Metadata, Viewport } from "next";
import { Archivo_Narrow, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
  weight: ["500", "700"],
});

// Its dotted zero and serifed one are the reason it's here — every digit on
// the page is set in it.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  // TODO: point NEXT_PUBLIC_SITE_URL at the real domain so OG images resolve
  // to absolute URLs.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "FlipBit — A task is a bit.",
  description:
    "FlipBit is an iOS to-do app built on one idea: a task is a bit. It is 0 or 1. A day is a register you can read at a glance. Local-first, no account, no sync.",
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    type: "website",
    title: "FlipBit — A task is a bit.",
    description:
      "An iOS to-do app built on one idea: a task is 0 or 1. A day is a register. Local-first, no account, no sync.",
    images: ["/images/shot-week.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlipBit — A task is a bit.",
    description:
      "An iOS to-do app built on one idea: a task is 0 or 1. A day is a register. Local-first, no account, no sync.",
    images: ["/images/shot-week.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0D" },
  ],
};

// Runs before the body paints, so a stored theme never flashes the other one.
const themeScript = `try{var t=localStorage.getItem('flipbit-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivoNarrow.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
