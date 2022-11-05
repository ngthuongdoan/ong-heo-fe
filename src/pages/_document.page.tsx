import Document, { DocumentContext } from "next/document"
import { ServerStyleSheet } from "styled-components"
import { ServerStyles, createStylesServer } from "@mantine/next"

/** optional: you can provide your cache
 * as a fist argument in createStylesServer
 * function */
const stylesServer = createStylesServer()
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          initialProps.styles,
          sheet.getStyleElement(),
          <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />,
        ],
      }
    } finally {
      sheet.seal()
    }
  }
}
