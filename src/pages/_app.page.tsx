import "../styles/index.scss"
import type { AppProps } from "next/app"
import AppWrapper from "components/templates/AppWrapper"

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppWrapper>
			<Component {...pageProps} />
		</AppWrapper>
	)
}
