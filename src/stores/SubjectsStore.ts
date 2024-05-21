import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage/';

const KEYSTORAGE = 'SUBJECTSKEY';

interface States {
    subjects: Sub[]
}

interface Actions {
    setSubjects: (arg1: Sub) => void,
    addSubject: (arg1: Sub) => void,
    getSubjects: () => void,
    deleteSubject:(arg1: number) => void,
    deleteSubjects: () => void
}

export interface Sub {
    Title: string,
    Room: string,
    Block: string,
    Schedules: Schedule[]
  }

interface Schedule {
    DayOfWeek: string,
    Hour: string
  }

export const useSubjectStore = create<States & Actions>((set, get) => ({
  subjects: [],
  setSubjects: (arg1: Sub) => set(() => ({ subjects: [arg1] })),
  addSubject: async (arg1: Sub) => {
    set((state) => ({ subjects : [...state.subjects, arg1]}));
    await AsyncStorage.setItem(KEYSTORAGE, JSON.stringify(get().subjects));
  },
  getSubjects: async () => {
    const res = await AsyncStorage.getItem(KEYSTORAGE);
    if(res !== null)
      set({ subjects: JSON.parse(res)});
  },
  deleteSubject: async (index: number) => {
    const newSubjects = get().subjects;
    newSubjects.splice(index, 1);
    set(({ subjects: newSubjects}));
    await AsyncStorage.setItem(KEYSTORAGE, JSON.stringify(get().subjects));
  },
  deleteSubjects: async () => {
    await AsyncStorage.clear();
    set({ subjects: []});
  }
}));