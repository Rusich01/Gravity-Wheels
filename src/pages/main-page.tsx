import ModalViewRoot from "../components/ui/modal-views/modal-view-root";
import HeaderRoot from "../components/ui/header/header-root";
import MainRoot from "../components/ui/main/main-root";
import ViewCart from "../components/ui/modal-views/view-cart";

import { useAuthModal } from "../store/use-auth-view";
import ViewSingInRegisterRoot from "../components/ui/modal-views/view-sign-in-register/view-sing-in-register-root";

const MainPage = () => {
  const { isOpenSign, closeSign, isOpenCart, closeCart } = useAuthModal();

  return (
    <div className="bg-[#d6d6d6]">
      <HeaderRoot />

      <MainRoot />

      <ModalViewRoot isOpen={isOpenSign} closeView={closeSign}>
        <ViewSingInRegisterRoot />
      </ModalViewRoot>

      <ModalViewRoot isOpen={isOpenCart} closeView={closeCart}>
        <ViewCart closeView={closeCart} />
      </ModalViewRoot>
    </div>
  );
};

export default MainPage;
