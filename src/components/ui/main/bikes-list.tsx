import { useBikeStore } from "../../../store/use-bike-store";
import TitleH2 from "../../blocks/title-h2";

const BikesList = () => {
  const { bikes, addToCart } = useBikeStore();

  return (
    <div>
      <TitleH2>OUR BESTSELLERS</TitleH2>

      <ul className="flex gap-4 my-16">
        {bikes.length > 0 &&
          bikes.map(({ id, img, title, price }) => (
            <li
              key={id}
              className="group flex flex-col bg-cover text-[#d2d2d2] bg-center rounded-2xl p-4 transition duration-300"
              style={{
                backgroundImage:
                  'url("src/assets/img/background/background.png")',
              }}
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  src={img}
                  alt="bicycle"
                />
              </div>

              <p className="mt-4 font-semibold">{title}</p>

              <p>{price} $</p>

              <button
                className="mt-auto w-full bg-green-600 p-2 text-sm text-white rounded-lg hover:bg-green-500 active:scale-95 transition cursor-pointer"
                onClick={() => addToCart(id)}
              >
                add in cart
              </button>
            </li>
          ))}
      </ul>
      <TitleH2>#RIDEWITHPASSION</TitleH2>
    </div>
  );
};

export default BikesList;
