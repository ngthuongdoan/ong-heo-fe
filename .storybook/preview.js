import "../src/styles/index.scss"
// This make tailwind works on Storybook
import "../src/styles/tailwind.scss"
import * as NextImage from "next/image"
import { MantineProvider } from "@mantine/core"
// import theme object you've exported in previous step
import { theme } from "../src/config/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

// Create a wrapper component that will contain all your providers.
// Usually you should render all providers in this component:
// MantineProvider, NotificationsProvider, ModalsProvider, SpotlightProvider, etc.
function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      {props.children}
    </MantineProvider>
  )
}

// enhance your stories with decorator that uses ThemeWrapper
export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>]
