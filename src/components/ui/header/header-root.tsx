import HeaderIcons from "./header-icons";
import HeaderList from "./header-list";

const HeaderRoot = () => {
  const bgUrl = "src/assets/img/background/background-main-pages.png";

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <nav className="flex justify-between px-8 pt-6 ">
        <HeaderList />

        <HeaderIcons />
      </nav>

      <div className="text-[#cccbcb] absolute top-[20%] left-[8%]">
        <p className="text-2xl pb-10">new arrival</p>

        <h1 className="text-7xl pb-10">ROADSTER X</h1>

        <p className="text-2xl  pb-10">Experience Speed and Style</p>
      </div>
    </div>
  );
};

export default HeaderRoot;
