import TitleH2 from "../../blocks/title-h2";

const MainList = () => {
  return (
    <div>
      <TitleH2>OUR BESTSELLERS</TitleH2>

      <ul className="flex gap-4 my-16">
        <li
          className="group flex flex-col bg-cover text-[#d2d2d2] bg-center rounded-2xl p-4 transition duration-300"
          style={{ backgroundImage: 'url("/img/background/background.png")' }}
        >
          <div className="aspect-square w-full overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              src="/img/bikes/bicycle01.png"
              alt="bicycle"
            />
          </div>

          <p className="mt-4 font-semibold">MTB</p>
          <p>1470 $</p>

          <button className="mt-auto w-full bg-green-600 p-2 text-sm text-white rounded-lg hover:bg-green-500 active:scale-95 transition cursor-pointer">
            add in cart
          </button>
        </li>

        <li
          className="group flex flex-col bg-cover text-[#d2d2d2] bg-center rounded-2xl p-4 transition duration-300"
          style={{ backgroundImage: 'url("/img/background/background.png")' }}
        >
          <div className="aspect-square w-full overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              src="/img/bikes/bicycle02.png"
              alt="bicycle"
            />
          </div>

          <p className="mt-4 font-semibold">Gravel Bike</p>
          <p>1470 $</p>

          <button className="mt-auto w-full bg-green-600 p-2 text-sm text-white rounded-lg hover:bg-green-500 active:scale-95 transition cursor-pointer">
            add in cart
          </button>
        </li>

        <li
          className="group flex flex-col bg-cover text-[#d2d2d2] bg-center rounded-2xl p-4 transition duration-300"
          style={{ backgroundImage: 'url("/img/background/background.png")' }}
        >
          <div className="aspect-square w-full overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              src="/img/bikes/bicycle03.png"
              alt="bicycle"
            />
          </div>

          <p className="mt-4 font-semibold">Retro Bike</p>
          <p>1470 $</p>

          <button className="mt-auto w-full bg-green-600 p-2 text-sm text-white rounded-lg hover:bg-green-500 active:scale-95 transition cursor-pointer">
            add in cart
          </button>
        </li>
      </ul>
      <TitleH2>#RIDEWITHPASSION</TitleH2>
    </div>
  );
};

export default MainList;
