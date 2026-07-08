import type { ReactNode } from "react";

export interface ModalProps {
  closeView: VoidFunction;
  children: ReactNode;
  isOpen: boolean;
}
