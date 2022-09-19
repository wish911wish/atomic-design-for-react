/** @jsxImportSource @emotion/react */
import { css }  from '@emotion/react'
import { ComponentPropsWithoutRef } from "react"
import { text } from '../../../styles/color'
import { border, radius, space } from '../../../styles'

const style = css({
  border: border,
  borderRadius: radius,
  color: text,
  padding: space
})

const TextBox = ({ ...props }: ComponentPropsWithoutRef<'input'>) => (
  <input type="text" { ...props } css={style} />
);

export default TextBox;
