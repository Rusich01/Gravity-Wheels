import { create } from "zustand";
import { InitialState } from "../data_bikes/bike";

const copyState = JSON.parse(JSON.stringify(InitialState));

export interface bikesType {
  img: string;
  title: string;
  price: number;
  id: string;
  quantity: number;
}

interface bikeStore {
  bikes: bikesType[];
  cart: bikesType[];
  isLoading: boolean;

  addToCart: (id: string) => void;
  removeCart: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
}

export const useBikeStore = create<bikeStore>((set) => ({
  bikes: copyState,
  cart: [],
  isLoading: false,

  addToCart: (id) =>
    set((state) => {
      const bike = state.bikes.find((item) => item.id === id);

      const includeBike = state.cart.find((item) => item.id === id);

      if (!bike || includeBike) return state;

      return { cart: [...state.cart, { ...bike, quantity: 1 }] };
    }),

  removeCart: (id) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== id);

      return { cart: newCart };
    }),

  increment: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),

  decrement: (id) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === id);
      if (!existing) return state;

      if (existing.quantity === 1)
        return { cart: state.cart.filter((it) => it.id !== id) };

      return {
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      };
    }),
}));
