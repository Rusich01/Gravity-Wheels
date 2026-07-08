import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-32 gap-4 text-[#3b3b3b]"
    >
      <p className="text-3xl font-semibold">404</p>
      <p>Page not found.</p>
    </motion.div>
  );
};

export default NotFoundPage;
