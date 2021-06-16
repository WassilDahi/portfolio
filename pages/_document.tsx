import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gradient-to-r from-gray-400 via-gray-400 to-gray-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument