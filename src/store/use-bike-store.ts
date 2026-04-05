import { create } from "zustand";
import { InitialState } from "../data_bikes/bike";

export interface bikesType {
  img: string;
  title: string;
  price: number;
  id: string;
}

interface bikeStore {
  bikes: bikesType[];
  cart: bikesType[];
  isLoading: boolean;

  // function
  addToCart: (id: string) => void;
}

export const useBikeStore = create<bikeStore>((set) => ({
  bikes: InitialState,
  cart: [],
  isLoading: false,

  addToCart: (id) =>
    set((state) => {
      const bike = state.bikes.find((cr) => cr.id === id);

      if (!bike) return state;

      return { cart: [...state.cart, bike] };
    }),
}));
