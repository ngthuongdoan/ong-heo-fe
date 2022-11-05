import { GlobalStyle } from "components/templates/GlobalStyle"
import { theme } from "config"
import { MantineProvider } from "@mantine/core"

const AppWrapper: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        {children}
      </MantineProvider>
    </>
  )
}

export default AppWrapper
