import type { bikesType } from "../store/use-bike-store";

export const InitialState: bikesType[] = [
  {
    img: "src/assets/img/bikes/bicycle01.png",
    title: "MTB",
    price: 1470,
    id: "01",
  },

  {
    img: "src/assets/img/bikes/bicycle02.png",
    title: "Gravel Bike",
    price: 1770,
    id: "02",
  },

  {
    img: "src/assets/img/bikes/bicycle03.png",
    title: "Retro Bike",
    price: 1260,
    id: "03",
  },
];
