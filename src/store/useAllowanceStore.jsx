import { create } from "zustand";

const useAllowanceStore = create((set) => ({
  allowance: 0,
  setAllowance: (newAllowance) => set({ allowance: newAllowance }),
}));

export default useAllowanceStore;

