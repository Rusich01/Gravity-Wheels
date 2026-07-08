import { Link } from "react-router-dom";
import { TbChevronRight, TbShoppingCart } from "react-icons/tb";
import { useBikeStore } from "@/store/use-bike-store";

const BestsellersSection = () => {
  const { bikes, addToCart } = useBikeStore();

  return (
    <section className="bg-black px-8 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
              Bestsellers
            </h2>
            <span className="mt-2 block h-1 w-10 rounded-full bg-green-500" />
          </div>

          <Link
            to="/bikes"
            className="flex items-center gap-1 text-sm font-semibold text-green-500 transition hover:text-green-400"
          >
            View all bikes
            <TbChevronRight className="text-base" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bikes.map(({ id, img, title, price }) => (
            <div
              key={id}
              className="group rounded-2xl bg-[#141414] p-4 transition duration-300"
            >
              <div className="mb-4 aspect-square overflow-hidden rounded-xl bg-[#1c1c1c]">
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <p className="mb-1 text-sm font-semibold uppercase text-white">
                {title}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm text-gray-400">
                  ${price.toLocaleString()}
                </p>

                <button
                  onClick={() => addToCart(id)}
                  className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-xs font-bold uppercase text-black transition duration-150 hover:bg-green-400 active:scale-95"
                >
                  Add to cart
                  <TbShoppingCart className="text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
