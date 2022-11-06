import { Paper } from "@mantine/core"
import { useStyles } from "./styled"

type AuthLayoutProps = {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { classes } = useStyles()
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        {children}
      </Paper>
    </div>
  )
}

export default AuthLayout
