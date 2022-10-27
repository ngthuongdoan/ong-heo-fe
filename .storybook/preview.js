import { ThemeProvider } from "styled-components"
import { theme } from "../src/config"

export const decorators = [
	(Story) => {
		return (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		)
	},
]

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
