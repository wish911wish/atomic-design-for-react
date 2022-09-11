/** @jsxImportSource @emotion/react */
import { css }  from '@emotion/react'
import { ComponentPropsWithoutRef } from "react"
import { text, info, warning } from '../../../styles/color'
import { size } from '../../../styles/font'

const styles = {
  default: css({
    color: text,
  }),
  info: css({
    color: info,
  }),
  warning: css({
    color: warning,
  }),
  s: css({
    fontSize: size.s,
  }),
  m: css({
    fontSize: size.m,
  }),
  l: css({
    fontSize: size.l,
  })
}

type Type = 'default' | 'info' | 'warning';
type Props = ComponentPropsWithoutRef<"p"> & {
  size?: 's' | 'm' | 'l';
};

const txtFactory = (type: Type) => ({ className, size = 'm', ...props }: Props) => (
  <p css={[styles[type], styles[size]]} className={className} { ...props } />
);

const Txt = txtFactory('default');
export default Txt;

export const InfoTxt = txtFactory('info');
export const WarningTxt = txtFactory('warning');
