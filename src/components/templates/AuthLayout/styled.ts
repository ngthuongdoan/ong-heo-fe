import { createStyles } from "@mantine/core"

export const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "100%",
    minHeight: "100vh",
    backgroundSize: "contain",
    backgroundImage: "url(/assets/images/login-background.jpg)",
  },

  content: {
    width: "60%",
    maxWidth: "500px",
    margin: "auto",
  },

  form: {
    position: "absolute",
    right: "0",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh",
    overflow: "auto",
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    width: "50%",
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100%",
    },
  },
}))
