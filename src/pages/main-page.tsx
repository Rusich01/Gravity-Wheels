import HeaderRoot from "../components/ui/header/header-root";
import MainRoot from "../components/ui/main/main-root";
import ViewCart from "../components/ui/modal-views/view-cart";
import ViewSignIn from "../components/ui/modal-views/view-sign-in";
import ModalView from "../modal-view/modal-view";
import { useAuthModal } from "../store/use-auth-view";

const MainPage = () => {
  const { isOpenSign, closeSign, isOpenCart, closeCart } = useAuthModal();

  return (
    <div className="bg-[#d6d6d6]">
      <HeaderRoot />

      <MainRoot />

      <ModalView isOpen={isOpenSign} closeView={closeSign}>
        <ViewSignIn />
      </ModalView>

      <ModalView isOpen={isOpenCart} closeView={closeCart}>
        <ViewCart />
      </ModalView>
    </div>
  );
};

export default MainPage;
