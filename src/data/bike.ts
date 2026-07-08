import bicycle01 from "@/assets/img/bikes/bicycle01.png";
import bicycle02 from "@/assets/img/bikes/bicycle02.png";
import bicycle03 from "@/assets/img/bikes/bicycle03.png";

interface InitialType {
  img: string;
  title: string;
  price: number;
  id: string;
}

export const InitialState: InitialType[] = [
  {
    img: bicycle01,
    title: "MTB",
    price: 1470,
    id: "01",
  },

  {
    img: bicycle02,
    title: "Gravel Bike",
    price: 1770,
    id: "02",
  },

  {
    img: bicycle03,
    title: "Retro Bike",
    price: 1260,
    id: "03",
  },
];
