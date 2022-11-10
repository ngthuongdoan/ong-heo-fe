import { GlobalStyle } from "components/templates/GlobalStyle"
import { theme } from "config"
import { MantineProvider } from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"

const AppWrapper: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <NotificationsProvider>{children}</NotificationsProvider>
      </MantineProvider>
    </>
  )
}

export default AppWrapper
