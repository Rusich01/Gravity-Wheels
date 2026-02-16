import {
  GlobeAsiaAustraliaIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/16/solid";

const HeaderIcons = () => {
  return (
    <ul className="flex gap-6 text-[#cccbcb]">
      <li className="relative group cursor-pointer">
        <GlobeAsiaAustraliaIcon className="w-8 h-8" />

        <span
          className="absolute cursor-auto top-full mb-2 left-1/2 -translate-x-1/2
                   bg-black text-white text-xs rounded px-2 py-1 opacity-0
                   group-hover:opacity-100 transition-opacity duration-700"
        >
          Search
        </span>
      </li>

      <li className="relative group cursor-pointer">
        <UserIcon className="w-8 h-8 " />

        <span
          className="absolute cursor-auto  top-full mb-4 left-1/2 -translate-x-1/2
                   bg-black text-white text-xs rounded px-2 py-1 opacity-0
                   group-hover:opacity-100 transition-opacity duration-700"
        >
          User
        </span>
      </li>

      <li className="relative group cursor-pointer">
        <ShoppingCartIcon className="w-8 h-8 " />

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
