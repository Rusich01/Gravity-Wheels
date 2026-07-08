import { motion } from "framer-motion";
import bgUrl from "@/assets/img/background/background-main-pages.png";
import TitleH2 from "@/shared/title/title-h2";

const STATS = [
  { label: "Years of Experience", value: "12+" },
  { label: "Bikes Sold", value: "8,400+" },
  { label: "Happy Riders", value: "6,900+" },
];

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="relative w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <h1 className="text-5xl text-[#cccbcb]">About Us</h1>
      </div>

      <div className="px-4 mt-16 max-w-4xl mx-auto text-center">
        <TitleH2>OUR STORY</TitleH2>

        <p className="mt-10 text-[#3b3b3b] leading-relaxed">
          Gravity Wheels started as a small workshop for riders who refused to
          compromise on speed or style. Today we design and build bikes for the
          road, the trail, and everything in between &mdash; obsessing over
          every weld, gear ratio, and finish so you can focus on the ride.
        </p>
      </div>

      <div className="px-4 mt-16 flex flex-wrap justify-center gap-6">
        {(STATS ?? []).map(({ label, value }) => (
          <div
            key={label}
            className="w-56 bg-gray-800 text-white rounded-2xl p-8 text-center"
          >
            <p className="text-4xl font-semibold text-green-500">{value}</p>
            <p className="mt-2 text-sm text-gray-400">{label}</p>
          </div>
        ))}
      </div>

      <div className="px-4 my-20 max-w-3xl mx-auto text-center">
        <TitleH2>OUR MISSION</TitleH2>

        <p className="mt-10 text-[#3b3b3b] leading-relaxed">
          We believe a great bike should disappear beneath you &mdash; no
          rattles, no hesitation, just speed and style working together. Every
          model we release is tested by our own team on the roads and trails we
          ride every day.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutPage;
