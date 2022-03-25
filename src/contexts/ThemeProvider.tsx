import { createContext, ReactNode } from 'react'
import { normalize } from 'stitches-normalize-css'

import { StitchiesTheme, globalCss } from '@root/stitches.config'

interface Props {
  children: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any
}
const ThemeContext = createContext<StitchiesTheme | null>(null)

const ThemeProvider = ({ children, theme }: Props) => {
  globalCss(...normalize)
  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
