import { create } from "zustand";
import { InitialState } from "../data_bikes/bike";

export interface bikesType {
  img: string;
  title: string;
  price: number;
  id: string;
}

interface bikeStore {
  bikes: Partial<bikesType>[];

  isLoading: boolean;
}

export const useBikeStore = create<bikeStore>((set) => ({
  bikes: InitialState,
  isLoading: false,
}));
