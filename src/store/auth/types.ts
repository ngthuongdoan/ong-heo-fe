import { User } from "firebase/auth"

export type AuthStoreType = {
  user: User | null
  setUser(newUser: User | null): void
}
