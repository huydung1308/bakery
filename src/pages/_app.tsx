import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from '@mui/material/styles'
import theme from 'styles/global'

import '../../public/fonts/fonts.css'
import CssBaseline from '@mui/material/CssBaseline'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
