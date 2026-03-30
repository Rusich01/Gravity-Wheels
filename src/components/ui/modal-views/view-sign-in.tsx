import { useAuthModal } from "../../../store/use-auth-view";

const ViewSignIn = () => {
  const { activeTab, setActiveTab } = useAuthModal();
  return (
    <div className="fixed w-full max-w-md text-white  top-40">
      <div className="flex mb-6 border-b border-gray-700">
        <button
          onClick={() => setActiveTab("login")}
          className={`flex-1 pb-2 ${
            activeTab === "login"
              ? "border-b-2 border-green-500 text-green-400"
              : "text-gray-400 hover:text-green-200 active:scale-95 duration-75 cursor-pointer"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab("register")}
          className={`flex-1 pb-2 ${
            activeTab === "register"
              ? "border-b-2 border-green-500 text-green-400"
              : "text-gray-400 hover:text-green-200 active:scale-95 duration-75 cursor-pointer"
          }`}
        >
          Register
        </button>
      </div>

      {activeTab === "login" && (
        <form className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className="p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
          />

          <button className="py-3 mt-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 cursor-pointer active:scale-95 duration-75">
            Sign In
          </button>
        </form>
      )}

      {activeTab === "register" && (
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
          />

          <button className="py-3 mt-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 cursor-pointer active:scale-95 duration-75">
            Create Account
          </button>
        </form>
      )}
    </div>
  );
};

export default ViewSignIn;
