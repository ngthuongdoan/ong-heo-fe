// Hook (use-auth.js)
import { auth } from "config/firebase/init"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as signOutFirebase,
  sendPasswordResetEmail as sendPasswordResetEmailFirebase,
  confirmPasswordReset as confirmPasswordResetFirebase,
} from "firebase/auth"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuthStore } from "store/auth/index.store"
// Provider hook that creates auth object and handles state

export function useProvideAuth() {
  const setUser = useAuthStore((s) => s.setUser)
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password).then((response) => {
      setUser(response.user)
    })
  }
  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password).then((response) => {
      setUser(response.user)
      return response.user
    })
  }

  const signOut = () => {
    return signOutFirebase(auth).then(() => {
      setUser(null)
    })
  }

  const sendPasswordResetEmail = (email: string) => {
    return sendPasswordResetEmailFirebase(auth, email).then(() => {
      return true
    })
  }

  const confirmPasswordReset = (code: string, password: string) => {
    return confirmPasswordResetFirebase(auth, code, password).then(() => {
      return true
    })
  }
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])
  // Return the user object and auth methods
  return {
    signIn,
    signUp,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset,
  }
}

export const useRequiredAuth = (redirectUrl = "/auth/log-in") => {
  const user = useAuthStore((s) => s.user)
  const router = useRouter()

  useEffect(() => {
    if (user === null) {
      router.replace(redirectUrl)
    }
  }, [user, router])
}
