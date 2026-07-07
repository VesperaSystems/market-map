export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16 lg:px-10 lg:py-20">
      <div className="hud-panel p-8 lg:p-12">
        <p className="hud-label">About Vespera Systems</p>
        <h1 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
          Markets are networks of capital, people, incentives, and information.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Vespera Systems explores finance as a living system rather than a flat list of deals. This first product prototype turns venture activity into a navigable graph so we can study how founders, capital allocators, institutions, and sectors shape one another.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="border border-white/10 bg-[rgba(255,255,255,0.02)] p-6">
            <p className="hud-label">System Lens</p>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              We care about relationships, not just headline metrics: who funds whom, where expertise clusters, and how influence compounds.
            </p>
          </div>
          <div className="border border-white/10 bg-[rgba(255,255,255,0.02)] p-6">
            <p className="hud-label">Research Mode</p>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              The current release uses mocked data so we can iterate on clarity, interface, and systems thinking before adding a live backend.
            </p>
          </div>
          <div className="border border-white/10 bg-[rgba(255,255,255,0.02)] p-6">
            <p className="hud-label">Client Routes</p>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              The apex route can remain a demo graph, while client-specific graph displays can live at routes like /rbs, /sjp, or /ubs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
