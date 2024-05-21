import { create } from 'zustand';

interface State {
    BlurViewVisible: boolean
}

interface Actions {
    setBlurViewVisible: (arg1: boolean) => void
}

export const useGlobalStore = create<State & Actions>((set) => ({
  BlurViewVisible: false,
  setBlurViewVisible: (arg1: boolean) => set(() => ({BlurViewVisible: arg1}))
}));