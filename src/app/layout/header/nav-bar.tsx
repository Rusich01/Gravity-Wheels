import HeaderIcons from "@/app/layout/header/header-icons";
import HeaderList from "@/app/layout/header/header-list";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 transparent">
      <HeaderList />

      <HeaderIcons />
    </nav>
  );
};

export default NavBar;
