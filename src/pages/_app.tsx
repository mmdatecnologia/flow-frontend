import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@contexts/ThemeProvider'
import { theme } from '@root/stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  // TODO use the correct theme
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
