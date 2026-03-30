import { FaSearch } from "react-icons/fa";
import { FaCartShopping, FaRegCircleUser } from "react-icons/fa6";
import { useAuthModal } from "../../../store/use-auth-view";

const HeaderIcons = () => {
  const { openSign, openCart } = useAuthModal();

  return (
    <ul className="flex gap-6 text-[#cccbcb]">
      <li className="relative group cursor-pointer">
        <FaSearch className="w-8 h-8 active:scale-95 duration-75 cursor-pointer hover:text-green-600" />

        <span
          className="absolute cursor-auto top-full mb-2 left-1/2 -translate-x-1/2
                   bg-black text-white text-xs rounded px-2 py-1 opacity-0
                   group-hover:opacity-100 transition-opacity duration-700"
        >
          Search
        </span>
      </li>

      <li className="relative group cursor-pointer">
        <FaRegCircleUser
          className="w-8 h-8 active:scale-95 duration-75 cursor-pointer hover:text-green-600"
          onClick={openSign}
        />

        <span
          className="absolute cursor-auto  top-full mb-4 left-1/2 -translate-x-1/2
                   bg-black text-white text-xs rounded px-2 py-1 opacity-0
                   group-hover:opacity-100 transition-opacity duration-700"
        >
          User
        </span>
      </li>

      <li className="relative group cursor-pointer">
        <FaCartShopping
          className="w-8 h-8 active:scale-95 duration-75 cursor-pointer hover:text-green-600"
          onClick={openCart}
        />

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
