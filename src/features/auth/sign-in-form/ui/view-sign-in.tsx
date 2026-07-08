import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaRegEye } from "react-icons/fa6";
import { motion } from "framer-motion";
import { UseUsersStore } from "@/store/use-users-store";
import { useAuthModal } from "@/store/use-auth-view";

const ViewSignIn = () => {
  const { loginUser, isLoading, error } = UseUsersStore();
  const { closeSign } = useAuthModal();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!email.trim() || !password) {
      setFormError("Please fill in all fields.");
      return;
    }

    const success = await loginUser(email, password);

    if (success) {
      setEmail("");
      setPassword("");
      closeSign();
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-3"
      noValidate
    >
      {(formError || error) && (
        <p className="text-red-400 text-sm text-center">
          {formError ?? error}
        </p>
      )}

      <input
        type="email"
        placeholder="Email"
        maxLength={40}
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        className="p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
      />

      <label className="relative">
        <input
          type={showPassword ? "text" : "password"}
          maxLength={40}
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
        disabled={isLoading}
        className="py-3 mt-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 cursor-pointer active:scale-95 duration-75 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </button>
    </motion.form>
  );
};

export default ViewSignIn;
