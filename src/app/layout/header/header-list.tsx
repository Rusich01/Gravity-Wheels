import { NavLink } from "react-router-dom";
import { NAV_ITEMS_LIST } from "@/app/router/router";

const HeaderList = () => {
  return (
    <ul className="flex gap-4 text-[#cccbcb] ">
      {NAV_ITEMS_LIST.map(({ label, to }) => (
        <li
          key={to}
          className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full transition-colors duration-700 cursor-pointer"
        >
          <NavLink
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex active:scale-95 duration-75 cursor-pointer ${
                isActive
                  ? "text-green-400 after:w-full"
                  : "text-[#cccbcb] after:w-0 hover:after:w-full"
              }`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default HeaderList;
