import { create } from "zustand";

const USER_API = "https://69cb66920b417a19e07a9e5c.mockapi.io/users";

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
}

interface UsersType {
  users: User[];
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;

  fetchUsers: () => Promise<void>;
  registerUser: (name: string, email: string, password: string) => Promise<boolean>;
  loginUser: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
}

export const UseUsersStore = create<UsersType>((set, get) => ({
  users: [],
  currentUser: null,
  isLoading: false,
  error: null,

  fetchUsers: async () => {
    set({ isLoading: true });

    try {
      const response = await fetch(USER_API);

      if (!response.ok) throw new Error("Failed to fetch users");

      const data = await response.json();

      set({ users: data, isLoading: false });
    } catch (error: unknown) {
      console.error(error);
      set({ isLoading: false });
    }
  },

  registerUser: async (name, email, password) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(USER_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) throw new Error("Failed to create account");

      const user: User = await response.json();

      set((state) => ({
        users: [...state.users, user],
        currentUser: user,
        isLoading: false,
      }));

      return true;
    } catch (error: unknown) {
      console.error(error);
      set({
        isLoading: false,
        error: "Could not create account. Please try again.",
      });
      return false;
    }
  },

  loginUser: async (email, password) => {
    set({ isLoading: true, error: null });

    try {
      let { users } = get();

      if (users.length === 0) {
        const response = await fetch(USER_API);
        if (!response.ok) throw new Error("Failed to fetch users");
        users = await response.json();
        set({ users });
      }

      const matchedUser = users.find(
        (user) => user.email === email && user.password === password,
      );

      if (!matchedUser) {
        set({ isLoading: false, error: "Invalid email or password." });
        return false;
      }

      set({ currentUser: matchedUser, isLoading: false });
      return true;
    } catch (error: unknown) {
      console.error(error);
      set({ isLoading: false, error: "Could not sign in. Please try again." });
      return false;
    }
  },

  logout: () => set({ currentUser: null }),

  clearError: () => set({ error: null }),
}));
