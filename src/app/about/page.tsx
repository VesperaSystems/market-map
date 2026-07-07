export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16 lg:px-10 lg:py-20">
      <div className="rounded-[36px] border border-white/10 bg-slate-950/70 p-8 backdrop-blur-xl lg:p-12">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">About Vespera Systems</p>
        <h1 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
          Markets are networks of capital, people, incentives, and information.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Vespera Systems explores finance as a living system rather than a flat list of deals. This first product prototype turns venture activity into a navigable graph so we can study how founders, capital allocators, institutions, and sectors shape one another.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">System lens</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              We care about relationships, not just headline metrics: who funds whom, where expertise clusters, and how influence compounds.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Research mode</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The current release uses mocked data so we can iterate on clarity, interface, and systems thinking before adding a live backend.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Next horizon</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Future versions can add ingestion pipelines, persistent graph storage, richer temporal views, and collaborative research workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
