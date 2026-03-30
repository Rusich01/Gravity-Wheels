import { GoTrash } from "react-icons/go";

const ViewCart = () => {
  return (
    <div className="w-full max-w-2xl p-6 rounded-2xl shadow-2xl text-white">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Your Cart</h2>

      {/* Items */}
      <ul className="space-y-4 max-h-80 overflow-y-auto pr-2">
        <li className="flex items-center justify-between bg-gray-800  p-4 rounded-xl">
          {/* Info */}
          <div>
            <p className="font-medium">Bike Model </p>
            <p className="text-sm text-gray-400">$1200</p>
          </div>
          <GoTrash className="cursor-pointer hover:text-green-400 active:scale-95 duration-75 " />
        </li>
      </ul>

      <div className="my-6 border-t border-gray-700"></div>

      {/* Total */}
      <div className="flex justify-between text-lg font-semibold mb-6">
        <span>Total</span>
        <span>$3600</span>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="w-full py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition">
          Continue Shopping
        </button>

        <button className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 transition font-semibold">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ViewCart;
