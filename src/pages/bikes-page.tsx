import { motion } from "framer-motion";
import BikesList from "@/ui/catalog/bikes-list";
import bgUrl from "@/assets/img/background/background-main-pages.png";

const BikesPage = () => {
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
        <h1 className="text-5xl text-[#cccbcb]">Our Bikes</h1>
      </div>

      <div className="px-4 mt-14 pb-16">
        <BikesList title="FULL CATALOG" />
      </div>
    </motion.div>
  );
};

export default BikesPage;
