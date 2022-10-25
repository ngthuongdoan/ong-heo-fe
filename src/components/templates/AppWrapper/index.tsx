import { GlobalStyle } from "components/templates/GlobalStyle"
import { theme } from "config"
import { ThemeProvider } from "styled-components"

const AppWrapper: React.FC = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</>
	)
}

export default AppWrapper
