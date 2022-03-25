import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import { baseTheme } from '@themes/base'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  prefix: 'mmda-',
  theme: {
    ...baseTheme,
  },
  utils: {
    // Abbreviated margin properties
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value: Stitches.ScaleValue<'sizes'>) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: Stitches.ScaleValue<'colors'>) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: Stitches.ScaleValue<'space'>) => ({
      borderRadius: value,
    }),
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1440px)',
  },
})

export type CSS = Stitches.CSS<typeof config>
export type StitchiesTheme = Partial<typeof config.theme>
