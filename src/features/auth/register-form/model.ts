export type PasswordField = "password" | "repeat";

export type RegisterForm = {
  name: string;
  email: string;
  password: string;
  repeat: string;
};

export const INITIAL_FORM: RegisterForm = {
  name: "",
  email: "",
  password: "",
  repeat: "",
};
