import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link type="image/png" href="/static/favicons/favicon.png" rel="shortcut icon" />
        <link
          rel="preconnect"
          href="https://cdn.usefathom.com"
          crossOrigin=""
        /> 
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}