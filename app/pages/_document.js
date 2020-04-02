import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />
          <link href="https://cdn.materialdesignicons.com/5.0.45/css/materialdesignicons.min.css" rel="stylesheet" />
          <link rel='stylesheet' href='https://res.cloudinary.com/blahblah/raw/upload/v1585466398/styles/styles.min.css' crossOrigin='anonymous' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
