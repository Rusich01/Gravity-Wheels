import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";

const ViewSignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="flex flex-col gap-3">
      <input
        type="email"
        placeholder="Email"
        maxLength={40}
        className="p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
      />

      <label className="relative">
        <input
          type={showPassword ? "text" : "password"}
          maxLength={40}
          placeholder="Password"
          className="w-full p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
        />

        <span>
          <FaRegEye
            className="absolute top-4 right-3 active:scale-95 duration-75 cursor-pointer hover:text-green-600"
            onClick={() => setShowPassword((pr) => !pr)}
          />
        </span>
      </label>

      <button
        type="submit"
        className="py-3 mt-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 cursor-pointer active:scale-95 duration-75"
      >
        Sign In
      </button>
    </form>
  );
};

export default ViewSignIn;
