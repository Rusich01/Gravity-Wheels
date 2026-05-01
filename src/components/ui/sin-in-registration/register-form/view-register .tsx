import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";

type PasswordField = "password" | "repeat";

const ViewRegister = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    repeat: false,
  });

  const togglePassword = (field: PasswordField) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        maxLength={40}
        placeholder="Name"
        className="p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
      />

      <input
        type="email"
        maxLength={40}
        placeholder="Email"
        className="p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
      />

      <label className="relative">
        <input
          type={showPassword.password ? "text" : "password"}
          maxLength={40}
          placeholder="Password"
          className="w-full p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
        />

        <span>
          <FaRegEye
            className="absolute top-4 right-3 active:scale-95 duration-75 cursor-pointer hover:text-green-600"
            onClick={() => togglePassword("password")}
          />
        </span>
      </label>

      <label className="relative">
        <input
          type={showPassword.repeat ? "text" : "password"}
          maxLength={40}
          placeholder="repeat password"
          className="w-full p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
        />

        <span>
          <FaRegEye
            className="absolute top-4 right-3 active:scale-95 duration-75 cursor-pointer hover:text-green-600"
            onClick={() => togglePassword("repeat")}
          />
        </span>
      </label>

      <button
        type="submit"
        className="py-3 mt-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 cursor-pointer active:scale-95 duration-75"
      >
        Create Account
      </button>
    </form>
  );
};

export default ViewRegister;
