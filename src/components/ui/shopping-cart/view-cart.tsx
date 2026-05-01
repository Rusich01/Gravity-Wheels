import { GoTrash } from "react-icons/go";
import { useBikeStore } from "../../../store/use-bike-store";
import { FaMinus, FaPlus } from "react-icons/fa6";

type ViewCartProps = { closeView: VoidFunction };

const ViewCart = ({ closeView }: ViewCartProps) => {
  const { cart, removeCart, increment, decrement } = useBikeStore();

  const totalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((item, acc) => item + acc, 0);

  return (
    <div className="w-full max-w-2xl p-6 rounded-2xl shadow-2xl text-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {cart.length === 0 ? " Add product to cart" : "Your Cart"}
      </h2>

      {cart.length > 0 && (
        <>
          <ul className="space-y-4 max-h-80 overflow-y-auto pr-2">
            {cart.map(({ id, title, price, quantity }) => (
              <li
                key={id}
                className="flex items-center justify-between bg-gray-800  p-4 rounded-xl"
              >
                <div className="flex flex-col flex-1 w-30 overflow-hidden">
                  <p className="font-medium ">{title}</p>
                  <p className="text-sm text-gray-400">${price}</p>
                </div>

                <div className=" flex flex-row items-center gap-2 flex-1  ">
                  <button
                    className="text-xs hover:text-green-600 cursor-pointer active:scale-85 duration-75"
                    onClick={() => decrement(id)}
                  >
                    <FaMinus />
                  </button>

                  <span className="text-xl">{quantity}</span>

                  <button
                    className="text-xs hover:text-green-600 cursor-pointer active:scale-85 duration-75"
                    onClick={() => increment(id)}
                  >
                    <FaPlus />
                  </button>
                </div>

                <button
                  onClick={() => removeCart(id)}
                  className="cursor-pointer hover:text-green-400 active:scale-95 duration-75 flex flex-0"
                >
                  <GoTrash />
                </button>
              </li>
            ))}
          </ul>
          <div className="my-6 border-t border-gray-700"></div>

          <div className="flex justify-between text-lg font-semibold mb-6">
            <span>Total</span>

            <span>${totalPrice}</span>
          </div>
        </>
      )}

      <div className="flex gap-4">
        <button
          className="w-full py-3 rounded-xl bg-gray-700 hover:bg-gray-600 cursor-pointer active:scale-95 duration-75"
          onClick={closeView}
        >
          Continue Shopping
        </button>

        <button
          disabled={cart.length === 0}
          className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 font-semibold cursor-pointer active:scale-95 duration-75 disabled:scale-0"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ViewCart;
