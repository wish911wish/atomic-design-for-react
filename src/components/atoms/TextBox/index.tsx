/** @jsxImportSource @emotion/react */
import { css }  from '@emotion/react'
import { ComponentPropsWithoutRef, forwardRef } from "react"
import { text } from '../../../styles/color'
import { border, radius, space } from '../../../styles'

const style = css({
  border: border,
  borderRadius: radius,
  color: text,
  padding: space
})

export const TextBox = forwardRef<HTMLInputElement,ComponentPropsWithoutRef<"input">>(
  ({ ...props }, ref) => (<input type="text" {...props} ref={ref} css={style}/>)
);

export default TextBox;
