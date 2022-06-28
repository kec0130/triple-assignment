import { createGlobalStyle } from 'styled-components'

import reset from './base/reset'
import more from './base/more'
import fonts from './base/fonts'

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${more}
  ${fonts}
`

export default GlobalStyle
