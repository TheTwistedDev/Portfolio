import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head> 
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&family=Kaushan+Script&family=Patrick+Hand&display=swap" rel="stylesheet"/>
      </Head>
      <body className="my-14 bg-gradient-to-r from-violet-600 to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

