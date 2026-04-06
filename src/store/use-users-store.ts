import { create } from "zustand";

const USER_API = "https://69cb66920b417a19e07a9e5c.mockapi.io/users";

interface User {
  name: string;
  email: string;
  password: number;
}
interface UsersType {
  users: User[];
  isLoading: boolean;

  fetchUsers: () => Promise<void>;
}

export const UseUsersStore = create<UsersType>((set) => ({
  users: [],
  isLoading: false,

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
}));
