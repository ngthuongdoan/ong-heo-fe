import { useRequiredAuth } from "hooks/useAuth"
import React from "react"
import { useAuthStore } from "store/auth/index.store"

type AuthWrapperProps = {
  children?: React.ReactNode
}
const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const user = useAuthStore((s) => s.user)
  useRequiredAuth()
  if (!user) return null
  return <>{children}</>
}

export default AuthWrapper
