import { User } from "firebase/auth"
import create from "zustand"
import { AuthStoreType } from "./types"

export const useAuthStore = create<AuthStoreType>((set) => ({
  user: null,
  setUser(newUser: User | null) {
    set({ user: newUser })
  },
}))
