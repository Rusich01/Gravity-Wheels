import { createPortal } from "react-dom";
import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import type { ModalProps } from "@/shared/modal-view/type";

const ModalViewRoot = ({ children, isOpen, closeView }: ModalProps) => {
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeView();
      }
    },
    [closeView],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleEsc]);

  const signInWindow = document.getElementById("modal-root");
  if (!isOpen || !signInWindow) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={closeView}
    >
      <div
        className="relative w-full max-w-lg p-6 bg-transparent rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </motion.div>,

    signInWindow,
  );
};

export default ModalViewRoot;
