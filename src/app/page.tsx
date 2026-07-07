import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-16 lg:px-10 lg:py-24">
      <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.32em] text-cyan-300">Vespera Systems</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.04em] text-white text-balance sm:text-6xl lg:text-7xl">
            Map how capital moves.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Venture Market Map is a premium research interface for exploring how startups, investors, founders, sectors, and institutions connect across a fictional venture ecosystem.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="cyan" size="xl" className="rounded-full">
              <Link href="/map">Enter the Market Map</Link>
            </Button>
            <Button asChild variant="glass" size="xl" className="rounded-full">
              <Link href="/about">Learn the thesis</Link>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_120px_rgba(34,211,238,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.14),transparent_34%)]" />
          <div className="relative grid gap-4">
            <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/8 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">Signals</p>
              <p className="mt-3 text-3xl text-white">20 companies</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">With sample valuations, sectors, funding stages, and relationship metadata.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">Network entities</p>
                <p className="mt-3 text-3xl text-white">58 nodes</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">Capital relationships</p>
                <p className="mt-3 text-3xl text-white">112 edges</p>
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">What the first release proves</p>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-300">
                <li>Filter the market by valuation, sector, geography, stage, investor, and year.</li>
                <li>Inspect who founded, funded, advised, studied with, or acquired whom.</li>
                <li>Explore finance as a system of incentives, information flows, and power.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
