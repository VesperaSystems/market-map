"use client";

import { useMemo, useState } from "react";

import { GraphCanvas } from "@/components/market-map/graph-canvas";
import { defaultFilters, getVisibleGraph } from "@/lib/market-map";

export function GraphDisplay({ clientLabel = "Demo Graph" }: { clientLabel?: string }) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const graph = useMemo(() => getVisibleGraph(defaultFilters), []);

  return (
    <div className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-4 py-4 lg:px-6">
      <div className="mb-4 flex items-center justify-between border border-white/10 bg-[rgba(255,255,255,0.02)] px-4 py-3">
        <div>
          <p className="hud-label">Graph</p>
          <h1 className="mt-2 text-2xl font-medium text-white">{clientLabel}</h1>
        </div>
        <div className="text-right text-sm text-zinc-400">
          <p>{graph.nodes.length} nodes</p>
          <p>{graph.edges.length} edges</p>
        </div>
      </div>
      <div className="flex-1">
        <GraphCanvas
          nodes={graph.nodes}
          edges={graph.edges}
          selectedNodeId={selectedNodeId}
          onSelectNode={setSelectedNodeId}
          compact
        />
      </div>
    </div>
  );
}
