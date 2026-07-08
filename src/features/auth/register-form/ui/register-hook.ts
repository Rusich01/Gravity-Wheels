import { useState, type ChangeEvent, type FormEvent } from "react";
import { UseUsersStore } from "@/store/use-users-store";
import { useAuthModal } from "@/store/use-auth-view";
import {
  INITIAL_FORM,
  type PasswordField,
  type RegisterForm,
} from "@/features/auth/register-form/model";

export const useRegisterHook = () => {
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

  return {
    handleSubmit,
    handleChange,
    togglePassword,
    formError,
    form,
    showPassword,
    isLoading,
    error,
  };
};
