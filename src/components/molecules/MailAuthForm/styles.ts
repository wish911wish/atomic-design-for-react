/** @jsxImportSource @emotion/react */
import { css }  from '@emotion/react'
import { weight, size } from '../../../styles/font'
import { space } from '../../../styles'

const styles = {
  label: css({
    fontSize: size.s,
    fontWeight: weight.bold,
    lineHeight: 1,
    paddingBottom: `calc(${space} * 2)`
  }),
  textbox: css({
    marginRight: space,
    width: `calc(${space} * 60)`
  }),
  controls: css({
    display: 'flex',
    alignItems: 'center'
  })
}
export default styles
