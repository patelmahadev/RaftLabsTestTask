// import create from "zustand";

import { create } from "zustand";

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
}

export const useSearchStore = create<SearchState>((set:any) => ({
  query: "",
  setQuery: (query:any) => set({ query }),
}));
