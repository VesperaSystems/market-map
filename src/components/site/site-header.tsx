import Link from "next/link";

import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/map", label: "Market Map" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 font-mono text-xs font-semibold tracking-[0.3em] text-cyan-200">
            VS
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">Vespera Systems</p>
            <p className="text-sm text-slate-200">Venture Market Map</p>
          </div>
        </Link>
        <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm text-slate-300 transition",
                "hover:bg-white/10 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
