import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/static/css/materialize.min.css"/>
          <link rel="stylesheet" href="/static/css/style.css"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
        <script src="static/js/materialize.min.js"></script>
        <script>
          M.AutoInit()
        </script>
      </html>
    )
  }
}