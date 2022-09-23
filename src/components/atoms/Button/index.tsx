/** @jsxImportSource @emotion/react */
import { css }  from '@emotion/react'
import { ComponentPropsWithoutRef } from "react"
import { info, primary, textOutlined, warning } from '../../../styles/color'
import { radius, border } from '../../../styles'
import { weight, size } from '../../../styles/font'
import { hover } from '../../../styles/animation'

type Type = 'default' | 'primary' | 'warning';
type Props = ComponentPropsWithoutRef<'button'>

const styles = {
  button: css({
    borderRadius: radius,
    borderWidth: 0,
    lineHeight: 1,
    display: 'inline-flex',
    fontWeight: weight.bold,
    fontSize: size.m,
    padding: '.8rem',
    textDecoration: 'none',
    transition: `opacity ${hover}`,
    '&:hover': {
      opacity: .7
    }
  }),

  default: css({
    backgroundColor: 'inherit',
    border: border,
    color: info,
  }),
  primary: css({
    backgroundColor: primary,
    color: textOutlined
  }),
  warning: css({
    backgroundColor: warning,
    color: textOutlined
  })
}

const buttonFactory = (type: Type) => ({ children, ...props }: Props) => (
  <button { ...props } css={[styles.button, styles[type]]}>{ children }</button>
)

export const Button = buttonFactory('default');
export const PrimaryButton = buttonFactory('primary');
export const WarningButton = buttonFactory('warning');

export default Button;
