import { create } from "zustand";

const useAllowanceStore = create((set) => ({
  allowance: 0,
  setAllowance: (newAllowance) => set({ allowance: newAllowance }),
  limit: 0,
  setLimit: (newLimit) => set({ limit: newLimit }),
}));

export default useAllowanceStore;

