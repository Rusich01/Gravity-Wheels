import { Link } from "react-router-dom";
import {
  TbArrowRight,
  TbFeather,
  TbGauge,
  TbMountain,
  TbShieldCheck,
} from "react-icons/tb";
import bgUrl from "@/assets/img/background/background-main-pages.png";

const FEATURES = [
  {
    icon: TbFeather,
    title: "Lightweight",
    text: "Premium materials for ultimate speed.",
  },
  {
    icon: TbShieldCheck,
    title: "Durable",
    text: "Built to last in any condition.",
  },
  {
    icon: TbGauge,
    title: "Performance",
    text: "Precision engineering for maximum efficiency.",
  },
  {
    icon: TbMountain,
    title: "Versatile",
    text: "From city streets to mountain trails.",
  },
];

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/70 to-black/30" />

      <div className="relative flex min-h-screen flex-col justify-center px-8 pb-28 md:px-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-green-500 md:text-sm">
          Built for speed. Designed for life.
        </p>

        <h1 className="mb-6 max-w-2xl text-5xl font-black uppercase leading-[1.05] text-white md:text-7xl">
          Ride Beyond
          <br />
          Limits
        </h1>

        <p className="mb-8 max-w-md text-base text-gray-300 md:text-lg">
          High-performance bikes engineered for those who chase the next
          horizon.
        </p>

        <Link
          to="/bikes"
          className="flex w-fit items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-black transition duration-150 hover:bg-green-400 active:scale-95"
        >
          Shop Bikes
          <TbArrowRight className="text-lg" />
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-8 py-6 md:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="mt-0.5 shrink-0 text-2xl text-green-500" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white">
                  {title}
                </p>
                <p className="mt-1 text-xs text-gray-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
