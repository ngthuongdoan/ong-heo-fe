import { useRequiredAuth } from "hooks/useAuth"

const AuthWrapper: React.FC = ({ children }) => {
  useRequiredAuth()
  return <>{children}</>
}

export default AuthWrapper
