import bgUrl from "@/assets/img/background/background-main-pages.png";

const HeaderRoot = () => {
  return (
    <header
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="text-[#cccbcb] absolute top-[20%] left-[8%]">
        <p className="text-2xl pb-10">new arrival</p>

        <h1 className="text-7xl pb-10">ROADSTER X</h1>

        <p className="text-2xl  pb-10">Experience Speed and Style</p>
      </div>
    </header>
  );
};

export default HeaderRoot;
