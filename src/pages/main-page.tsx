import ModalViewRoot from "../components/common/modal-view/modal-view";
import HeaderRoot from "../components/ui/header/header-root";
import MainRoot from "../components/ui/main/main-root";
import ViewCart from "../components/ui/shopping-cart/view-cart";
import ViewSingInRegisterRoot from "../components/ui/sin-in-registration/view-sing-in-register-root";

import { useAuthModal } from "../store/use-auth-view";

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
