import { createStyles } from "@mantine/core"

export const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "100%",
    minHeight: "100vh",
    backgroundSize: "contain",
    backgroundImage: "url(/assets/images/login-background.jpg)",
  },

  form: {
    position: "absolute",
    right: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    minHeight: "100vh",
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    width: "40%",
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: "'Press Start 2P', cursive",
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}))
