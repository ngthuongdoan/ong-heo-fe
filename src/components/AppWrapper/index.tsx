import { GlobalStyle } from "components/GlobalStyle"
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
