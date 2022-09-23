/** @jsxImportSource @emotion/react */
import { css }  from '@emotion/react'
import { weight, size } from '../../../styles/font'
import { space } from '../../../styles'

const styles = {
  module: css({
    border: 'none',
    maxWidth: '640px',
  }),
  title: css({
    display: 'block',
    fontWeight: weight.bold,
    marginBottom: `calc(${space} * 2)`
  }),
  textbox: css({
    display: 'block',
    width: '100%',
    fontSize: size.xxl,
  }),
  // textboxError: css({
  //   borderColor: red,
  // }),
  bottom: css({
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: size.xl,
    minHeight: `calc(${space} * 4)`,
    paddingTop: `calc(${space} * 1)`
  }),
  description: css({
  }),
  error: css({
    flexGrow: 1,
    textAlign: 'right'
  }),
}
export default styles
