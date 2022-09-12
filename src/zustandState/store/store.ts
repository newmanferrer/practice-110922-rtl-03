import create from 'zustand';

interface IuseStore {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const useStore = create<IuseStore>(set => ({
  counter: 0,
  increment: () => set(state => ({ counter: state.counter + 1 })),
  decrement: () => set(state => ({ counter: state.counter - 1 }))
}));
