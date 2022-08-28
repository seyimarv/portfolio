import styled from 'styled-components'
import {
  space,
  typography as baseTypography,
  border,
  color as baseColor
} from 'styled-system'
import typography from './fonts'
import { devices as MediaQueries } from "../mediaQueries"
const fontObj = {}

Object.keys(typography).forEach(font => {
  fontObj[font] = font
})

const Typography = styled.div`
  font-style: ${({ font }) => typography[font]?.fontStyle || 'normal'};
  font-size: ${({ font }) => typography[font]?.fontSize};
  font-weight: ${({ font }) => typography[font]?.fontWeight};
  line-height: ${({ font }) => typography[font]?.lineHeight};
  color: ${({ color }) => color};
  letter-spacing: ${({ font }) => typography[font]?.letterSpacing || 'inherit'};
  text-align: ${({ align }) => align || 'left'};
  text-decoration: ${({ font }) => typography[font]?.textDecoration || 'auto'};
  text-transform: ${({ transform }) => transform || 'inherit'};
  word-break: ${({ breakWords }) => breakWords && 'break-word'};

  ${MediaQueries.down.phone} {
    font-size: ${({ font }) => typography[font]?.mobileSize};
    line-height: ${({ font }) => typography[font]?.mobileLineHeight};
  }
  ${space}
  ${baseTypography}
  ${border}
  ${baseColor}
`

Text.defaultProps = {
  color: 'textPrimary',
  font: 'h1Regular'
}

export default Typography
