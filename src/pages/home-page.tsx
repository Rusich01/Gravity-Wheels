import { motion } from "framer-motion";
import HeroSection from "@/ui/home/hero-section";
import BestsellersSection from "@/ui/home/bestsellers-section";
import AboutSection from "@/ui/home/about-section";
import NewsletterSection from "@/ui/home/newsletter-section";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      <BestsellersSection />
      <AboutSection />
      <NewsletterSection />
    </motion.div>
  );
};

export default HomePage;
