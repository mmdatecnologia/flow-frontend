import { ThemeProvider } from '@contexts/ThemeProvider'
import Home from '@pages/index'
import { theme } from '@root/stitches.config'
import { render } from '@testing-library/react'

const ThemeProviderTest = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
)

describe('<ThemeProviderTest />', () => {
  it('should render context', () => {
    const { container } = render(<ThemeProviderTest />)

    expect(container).toBeInTheDocument()
    expect(container).not.toBeNull()
  })
})
