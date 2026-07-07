import { formatCurrency, formatTypeLabel } from "@/lib/market-map";
import { VentureEdge, VentureNode } from "@/types/venture";

interface DetailPanelProps {
  node: VentureNode | null;
  edges: VentureEdge[];
}

export function DetailPanel({ node, edges }: DetailPanelProps) {
  if (!node) {
    return (
      <aside className="flex h-full flex-col rounded-[28px] border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Details</p>
        <div className="mt-6 flex flex-1 items-center justify-center rounded-[24px] border border-dashed border-white/10 bg-white/5 p-6 text-center text-slate-400">
          Select a node in the graph to inspect valuation, geography, stage, and relationship signals.
        </div>
      </aside>
    );
  }

  return (
    <aside className="flex h-full flex-col rounded-[28px] border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Details</p>
      <div className="mt-4 rounded-[24px] border border-white/10 bg-white/5 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-medium text-white">{node.name}</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-400">
              {node.type}
            </p>
          </div>
          <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
            {node.country ?? "Global"}
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-300">{node.description}</p>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <dt className="text-slate-400">Valuation</dt>
          <dd className="mt-2 text-base text-white">{formatCurrency(node.valuationGBP)}</dd>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <dt className="text-slate-400">Stage</dt>
          <dd className="mt-2 text-base text-white">{node.stage ?? "N/A"}</dd>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <dt className="text-slate-400">Sector</dt>
          <dd className="mt-2 text-base text-white">{node.sector ?? "N/A"}</dd>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <dt className="text-slate-400">Founded</dt>
          <dd className="mt-2 text-base text-white">{node.foundedYear ?? "N/A"}</dd>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <dt className="text-slate-400">Influence</dt>
          <dd className="mt-2 text-base text-white">{node.metrics.influenceScore}</dd>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <dt className="text-slate-400">Funding</dt>
          <dd className="mt-2 text-base text-white">{formatCurrency(node.metrics.totalFundingGBP)}</dd>
        </div>
      </dl>

      <div className="mt-5 rounded-[24px] border border-white/10 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Connected relationships</p>
        <div className="mt-4 space-y-3">
          {edges.slice(0, 8).map((edge) => {
            const direction = edge.source === node.id ? "Out" : "In";
            return (
              <div key={edge.id} className="rounded-2xl border border-white/8 bg-slate-950/70 p-3">
                <p className="text-sm text-white">{edge.label}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                  {direction} · {formatTypeLabel(edge.type)} · {edge.year}
                </p>
              </div>
            );
          })}
          {edges.length === 0 ? (
            <p className="text-sm text-slate-400">No relationships in the current filtered view.</p>
          ) : null}
        </div>
      </div>

      <div className="mt-5 rounded-[24px] border border-white/10 bg-cyan-400/8 p-4 text-sm leading-6 text-slate-300">
        <p className="font-medium text-cyan-100">Tags</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {node.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-cyan-400/20 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-100">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
