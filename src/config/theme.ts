import { ButtonProps, MantineThemeOverride } from "@mantine/core"

const ButtonDefaultProps: Partial<ButtonProps> = {
  size: "md",
  variant: "filled",
}

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  fontFamily: "Lato",
  primaryColor: "indigo",
  components: {
    Button: { defaultProps: ButtonDefaultProps },
  },
}
