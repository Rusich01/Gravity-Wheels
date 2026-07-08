import { Link } from "react-router-dom";
import { TbArrowRight, TbAward, TbHeart, TbWorld } from "react-icons/tb";
import background from "@/assets/img/background/background-bike.png";

const STATS = [
  { icon: TbAward, value: "5+", label: "Years of experience" },
  { icon: TbHeart, value: "10K+", label: "Happy riders" },
  { icon: TbWorld, value: "30", label: "Countries shipped to" },
];

const AboutSection = () => {
  return (
    <section className="bg-black px-8 py-20 md:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl bg-[#141414]">
          <img src={background} alt="Background" />
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-500">
            About us
          </p>

          <h2 className="mb-5 text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
            We build bikes for real riders
          </h2>

          <p className="mb-8 leading-relaxed text-gray-400">
            Gravity Wheels is more than a brand &mdash; it&apos;s a passion for
            cycling. Every bike we build is the result of cutting-edge
            engineering, rider feedback, and a love for the open road.
          </p>

          <div className="mb-8 flex flex-wrap gap-8">
            {(STATS ?? []).map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="text-2xl text-green-500" />
                <div>
                  <p className="text-lg font-bold text-white">{value}</p>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase text-white transition hover:border-green-500 hover:text-green-500"
          >
            Learn more about us
            <TbArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
