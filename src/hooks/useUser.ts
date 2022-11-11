import { auth } from "config/firebase/init"
import { getUserFromCookie, removeUserCookie, setUserCookie } from "config/firebase/userCookies"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuthStore } from "store/auth/index.store"
// Provider hook that creates auth object and handles state

const useUser = () => {
  const router = useRouter()
  const user = useAuthStore((s) => s.user)

  const setUser = useAuthStore((s) => s.setUser)
  const logout = async () => {
    try {
      await auth.signOut()
      removeUserCookie()
      router.push("/auth/log-in")
    } catch (e: any) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const cancelAuthListener = auth.onIdTokenChanged((user) => {
      if (user) {
        setUserCookie(user)
        setUser(user)
      } else {
        removeUserCookie()
        setUser(null)
      }
    })

    const userFromCookie = getUserFromCookie()
    if (!userFromCookie) {
      router.push("/")
      return
    }
    setUser(userFromCookie)

    return () => {
      cancelAuthListener()
    }
  }, [])

  return { user, logout }
}

export { useUser }
