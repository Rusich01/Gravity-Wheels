import { useAuthModal } from "../../../store/use-auth-view";
import ViewRegister from "./register-form/view-register ";
import ViewSignIn from "./sign-in-form/view-sign-in";

const ViewSingInRegisterRoot = () => {
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

      {activeTab === "login" && <ViewSignIn />}

      {activeTab === "register" && <ViewRegister />}
    </div>
  );
};

export default ViewSingInRegisterRoot;
