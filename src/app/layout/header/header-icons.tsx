import { FaCartShopping, FaRegCircleUser } from "react-icons/fa6";
import { useAuthModal } from "@/store/use-auth-view";
import { useBikeStore } from "@/store/use-bike-store";
import { UseUsersStore } from "@/store/use-users-store";

const HeaderIcons = () => {
  const { openSign, openCart } = useAuthModal();
  const { cart } = useBikeStore();
  const { currentUser, logout } = UseUsersStore();

  return (
    <ul className="flex gap-6 text-[#cccbcb]">
      <li className="relative group cursor-pointer">
        <FaRegCircleUser
          className="w-8 h-8 active:scale-95 duration-75 cursor-pointer hover:text-green-600"
          onClick={currentUser ? logout : openSign}
        />

        <span
          className="absolute cursor-auto  top-full mb-4 left-1/2 -translate-x-1/2
                   bg-black text-white text-xs rounded px-2 py-1 opacity-0
                   group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap"
        >
          {currentUser ? `${currentUser.name} (logout)` : "User"}
        </span>
      </li>

      <li className="relative group cursor-pointer">
        <FaCartShopping
          className="w-8 h-8 active:scale-95 duration-75 cursor-pointer hover:text-green-600"
          onClick={openCart}
        />
        <span className="absolute -top-3.5 -right-5.5 animate-pulse text-green-500">
          {cart.length > 0 && cart.length}
        </span>

        <span
          className="absolute cursor-auto  top-full mb-4 left-1/2 -translate-x-1/2
                   bg-black text-white text-xs rounded px-2 py-1 opacity-0
                   group-hover:opacity-100 transition-opacity duration-700"
        >
          Shopping-Cart
        </span>
      </li>
    </ul>
  );
};

export default HeaderIcons;
