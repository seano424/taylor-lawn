import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`${process.env.DEV_MODE && 'debug-screens'} scroll-smooth`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
