"use client";

import { create } from "zustand";

import { defaultFilters } from "@/lib/market-map";
import { MarketMapFilters } from "@/types/venture";

interface MarketMapState {
  filters: MarketMapFilters;
  selectedNodeId: string | null;
  setFilter: <K extends keyof MarketMapFilters>(key: K, value: MarketMapFilters[K]) => void;
  resetFilters: () => void;
  selectNode: (nodeId: string | null) => void;
}

export const useMarketMapStore = create<MarketMapState>((set) => ({
  filters: defaultFilters,
  selectedNodeId: null,
  setFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    })),
  resetFilters: () => set({ filters: defaultFilters }),
  selectNode: (selectedNodeId) => set({ selectedNodeId }),
}));
