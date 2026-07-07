import Link from "next/link";

import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Graph" },
  { href: "/config", label: "Config" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(5,5,5,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div>
            <p className="hud-label">Vespera Systems</p>
            <p className="text-sm text-zinc-200">Mathematical Graph Display</p>
          </div>
        </Link>
        <nav className="flex items-center gap-2 border border-white/10 bg-[rgba(255,255,255,0.02)] p-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm text-zinc-300 transition",
                "hover:bg-[rgba(255,255,255,0.06)] hover:text-white",
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
