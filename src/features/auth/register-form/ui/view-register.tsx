import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaRegEye } from "react-icons/fa6";
import { motion } from "framer-motion";
import { UseUsersStore } from "@/store/use-users-store";
import { useAuthModal } from "@/store/use-auth-view";
import {
  INITIAL_FORM,
  type PasswordField,
  type RegisterForm,
} from "@/features/auth/register-form/model";

const ViewRegister = () => {
  const { registerUser, isLoading, error } = UseUsersStore();
  const { closeSign } = useAuthModal();

  const [form, setForm] = useState<RegisterForm>(INITIAL_FORM);
  const [formError, setFormError] = useState<string | null>(null);
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!form.name.trim() || !form.email.trim() || !form.password) {
      setFormError("Please fill in all fields.");
      return;
    }

    if (form.password !== form.repeat) {
      setFormError("Passwords do not match.");
      return;
    }

    const success = await registerUser(form.name, form.email, form.password);

    if (success) {
      setForm(INITIAL_FORM);
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
        <p className="text-red-400 text-sm text-center">{formError ?? error}</p>
      )}

      <input
        type="text"
        name="name"
        maxLength={40}
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
      />

      <input
        type="email"
        name="email"
        maxLength={40}
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="p-3 text-white bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-green-500"
      />

      <label className="relative">
        <input
          type={showPassword.password ? "text" : "password"}
          name="password"
          maxLength={40}
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
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
          name="repeat"
          maxLength={40}
          placeholder="repeat password"
          value={form.repeat}
          onChange={handleChange}
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
        disabled={isLoading}
        className="py-3 mt-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 cursor-pointer active:scale-95 duration-75 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? "Creating..." : "Create Account"}
      </button>
    </motion.form>
  );
};

export default ViewRegister;
