import { headers } from "next/headers";
import Link from "next/link";

const proofPoints = [
  { value: "24/7", label: "continuous analytical coverage across markets, legal work, and internal workflows" },
  { value: "1", label: "graph-native system for research, legal, chat, agents, and decision support" },
  { value: "0", label: "patience for scattered notes, missed signals, or repeated prep work" },
];

const capabilityCards = [
  {
    title: "Research coverage",
    body: "Turn market notes, investment questions, and recurring brief requests into a persistent analytical layer instead of a string of one-off analyst tasks.",
  },
  {
    title: "Legal intelligence",
    body: "Keep diligence threads, policy shifts, and contract risk summaries in the same system as the investment question they affect.",
  },
  {
    title: "Graph context",
    body: "Model companies, investors, founders, sectors, and relationships directly so teams can see structure, not just isolated records.",
  },
  {
    title: "Agent workflows",
    body: "Package the repetitive work around preparation, monitoring, synthesis, and follow-up so the team gets leverage without losing judgment.",
  },
];

const outcomes = [
  "Give principals and partners better prepared answers when time matters.",
  "Expand analytical coverage without automatically expanding headcount.",
  "Preserve institutional memory across research, legal review, and productised workflows.",
];

const process = [
  ["01", "Graph the firm workflow", "Identify where coverage is thin, preparation is repetitive, and high-value judgment is being slowed down by fragmented context."],
  ["02", "Build the analytical layer", "Shape graph, legal, chat, agent, and research workflows around the exact questions the team needs answered quickly and repeatedly."],
  ["03", "Deploy the flagship system", "Present the company clearly at vesperasystems.com, then move qualified operators into vespera.systems to use the live product."],
];

const audienceCards = [
  ["Venture", "Continuous coverage across founders, sectors, portfolios, legal diligence, and partner prep."],
  ["Asset Management", "A sharper path from raw information to usable judgment across internal research workflows."],
  ["Family Offices", "Institutional-grade leverage for lean teams that still need serious analytical coverage."],
];

export default async function HomePage() {
  const headersList = await headers();
  const host = headersList.get("host") || "vesperasystems.com";
  const isCompanyDomain = host.includes("vesperasystems.com");

  return (
    <div className="min-h-screen text-stone-50">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-[1.2rem] border border-amber-200/30 bg-amber-200/10 text-sm font-semibold text-amber-100 shadow-[0_0_40px_rgba(251,191,36,0.14)]">
            VS
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Vespera Systems
            </span>
            <span className="block text-xs text-stone-400 transition group-hover:text-amber-100">
              Graph-native intelligence for investment firms
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://vespera.systems"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-100 transition hover:border-amber-200/40 hover:bg-amber-200/10 sm:px-5 sm:tracking-[0.22em]"
          >
            Enter product
          </a>
          <a
            href="mailto:hello@vespera.systems?subject=Vespera%20Systems%20private%20demo"
            className="rounded-full bg-amber-200 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-stone-950 transition hover:bg-amber-100 sm:px-5 sm:tracking-[0.22em]"
          >
            Request demo
          </a>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-16 pt-8 lg:grid-cols-[1.06fr_0.94fr] lg:px-10 lg:pb-24 lg:pt-16">
        <div>
          <div className="inline-flex rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-amber-100">
            {isCompanyDomain ? "Company site" : "Company front door"}
          </div>
          <h1 className="mt-8 max-w-6xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
            Want a junior analyst that never sleeps?
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-300 sm:text-xl">
            Vespera Systems builds graph-native intelligence infrastructure for investment firms. Research, legal intelligence, conversational workflows, and agents come together in an always-on analytical layer designed for better preparation and better judgment.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-stone-400">
            Built for venture firms, asset managers, and family offices that need more coverage without more operational drag.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:hello@vespera.systems?subject=Vespera%20Systems%20private%20demo"
              className="inline-flex items-center justify-center rounded-full bg-amber-200 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-stone-950 shadow-[0_0_44px_rgba(251,191,36,0.2)] transition hover:bg-amber-100"
            >
              Request a private demo
            </a>
            <a
              href="https://vespera.systems"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Enter Vespera
            </a>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point.label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-white">{point.value}</p>
                <p className="mt-2 text-sm leading-6 text-stone-400">{point.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-[56px] bg-amber-200/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-stone-950/90 p-5 shadow-[0_0_130px_rgba(251,191,36,0.1)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.16),transparent_30%)]" />
            <div className="relative rounded-[32px] border border-amber-200/20 bg-black/35 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-amber-100">Operating thesis</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">
                    The analytical layer between information and action
                  </h2>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
                  Live
                </span>
              </div>
              <div className="mt-5 grid gap-3">
                {[
                  ["Research", "Continuous coverage", "Markets, sectors, portfolios, notes, and recurring questions kept in one persistent system."],
                  ["Legal", "Risk in context", "Diligence, contracts, and policy shifts attached directly to the investment question."],
                  ["Graph", "Structure made visible", "Relationships between companies, capital, people, and incentives shown as a living graph."],
                ].map(([label, title, body]) => (
                  <article key={label} className="rounded-3xl border border-white/[0.08] bg-white/[0.045] p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber-100">{label}</p>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-400">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilityCards.map((offer) => (
            <article key={offer.title} className="rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <p className="text-xs uppercase tracking-[0.24em] text-amber-100">Capability</p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">{offer.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">{offer.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-6 rounded-[38px] border border-white/10 bg-stone-950/75 p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-amber-100">What Vespera changes</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              More coverage. Better preparation. Less drift.
            </h2>
            <p className="mt-5 text-base leading-7 text-stone-300">
              Vespera is not another dashboard or flat database. It is infrastructure for teams that need stronger synthesis, better continuity, and faster movement from information to action.
            </p>
          </div>
          <div className="grid gap-3">
            {outcomes.map((outcome) => (
              <div key={outcome} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 text-lg leading-7 text-stone-100">
                {outcome}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {audienceCards.map(([title, body]) => (
            <article key={title} className="rounded-[30px] border border-white/10 bg-white/[0.045] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-amber-100">Built for</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10">
        <div className="overflow-hidden rounded-[38px] border border-amber-200/20 bg-amber-200/10 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-amber-100">How Vespera sells</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                From company narrative to a working flagship product.
              </h2>
            </div>
            <div className="grid gap-3">
              {process.map(([step, title, body]) => (
                <article key={step} className="grid gap-4 rounded-[28px] border border-white/10 bg-black/20 p-5 sm:grid-cols-[4rem_1fr]">
                  <div className="font-mono text-sm text-amber-100">{step}</div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-300">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-stone-300">
              Use vesperasystems.com to establish the company. Use vespera.systems to let institutions experience the flagship system under load.
            </p>
            <a
              href="mailto:hello@vespera.systems?subject=Vespera%20Systems%20private%20demo"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-stone-950 transition hover:bg-amber-100"
            >
              Request a private demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
