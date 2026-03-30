import { createPortal } from "react-dom";
import { useEffect, type ReactNode } from "react";

interface ModalProps {
  closeView: VoidFunction;
  children: ReactNode;
  isOpen: boolean;
}

const ModalView = ({ children, isOpen, closeView }: ModalProps) => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeView();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, closeView]);

  const signInWindow = document.getElementById("modal-root");
  if (!isOpen || !signInWindow) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={closeView}
    >
      <div
        className="relative w-full max-w-lg p-6 bg-transparent rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,

    signInWindow,
  );
};

export default ModalView;
