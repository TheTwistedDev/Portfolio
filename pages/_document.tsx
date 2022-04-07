import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head> 
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&family=Kaushan+Script&family=Patrick+Hand&display=swap" rel="stylesheet"/>
      </Head>
      <body className="bg-gradient-to-r from-violet-500 to-blue-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

