/** @jsxImportSource @emotion/react */
import { css }  from '@emotion/react'
import { ComponentPropsWithoutRef } from "react"
import { card, cardHeader } from '../../../styles/color'
import { space } from '../../../styles'

const style = {
  card: css({
    backgroundColor: card,
    padding: `calc(${space} * 3)`,
  }),
  header: css({
    backgroundColor: cardHeader,
    margin: `calc(${space} * -3) calc(${space} * -3) calc(${space} * 3)`,
    padding: `${space} calc(${space} * 3);`
  })
}

const Card = ({ ...props }: ComponentPropsWithoutRef<'section'>) => (
  <section  { ...props } css={style.card} />
);
export default Card;

export const CardHeader = ({ ...props }: ComponentPropsWithoutRef<'div'>) => (
  <div { ...props } css={style.header} />
);
