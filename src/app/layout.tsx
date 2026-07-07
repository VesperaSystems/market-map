import type { Metadata } from "next";
import { Toaster } from "sonner";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vespera Systems | Venture Market Map",
  description:
    "Interactive mock market map for exploring startups, investors, valuations, funding rounds, and capital relationships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(GeistSans.variable, GeistMono.variable)}
    >
      <body className={cn("min-h-dvh bg-background font-sans text-foreground antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(244,114,182,0.12),transparent_22%),linear-gradient(180deg,hsl(var(--background))_0%,hsl(222_47%_8%)_48%,hsl(224_71%_4%)_100%)]">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:5rem_5rem]" />
            <div className="relative z-10 flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex flex-1 flex-col">{children}</main>
              <SiteFooter />
            </div>
          </div>
          <Toaster position="top-center" theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}
