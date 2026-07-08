import { Outlet } from "react-router-dom";

import ModalViewRoot from "@/shared/modal-view/modal-view";
import Footer from "@/app/layout/footer/footer";
import { useAuthModal } from "@/store/use-auth-view";
import NavBar from "@/app/layout/header/nav-bar";
import { lazy, Suspense } from "react";
import Loader from "@/shared/loader/loader";

const ViewCart = lazy(() => import("@/ui/shopping-cart/view-cart"));
const ViewSingInRegisterRoot = lazy(
  () => import("@/features/auth/auth-root"),
);

const LayoutRoot = () => {
  const { isOpenSign, closeSign, isOpenCart, closeCart } = useAuthModal();

  return (
    <Suspense fallback={<Loader />}>
      <div className="bg-[#d6d6d6] min-h-screen flex flex-col">
        <div className="absolute top-0 left-0 w-full z-50">
          <NavBar />
        </div>
        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />

        <ModalViewRoot isOpen={isOpenSign} closeView={closeSign}>
          <ViewSingInRegisterRoot />
        </ModalViewRoot>

        <ModalViewRoot isOpen={isOpenCart} closeView={closeCart}>
          <ViewCart closeView={closeCart} />
        </ModalViewRoot>
      </div>
    </Suspense>
  );
};

export default LayoutRoot;
