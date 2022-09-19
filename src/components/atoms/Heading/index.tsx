/** @jsxImportSource @emotion/react */
import { css }  from '@emotion/react'
import { ComponentPropsWithoutRef } from 'react'
import { textOutlined } from '../../../styles/color'
import { size, weight } from '../../../styles/font'
import { space, border } from '../../../styles'

const styles = {
  h: {
    fontWeight: weight.bold,
    lineHeight: 1.5
  },
  h1: css({
    fontSize: size.xxxxl,
  }),
  h2: css({
    fontSize: size.xxxl,
  }),
  h3: css({
    fontSize: size.xxl,
  }),
  h4: css({
    fontSize: size.xl,
  }),
  h5: css({
    fontSize: size.l,
  }),
  h6: css({
    fontSize: size.m,
  }),
  underlined: css({
    borderBottom: border,
    paddingBottom: space
  }),
  outlined: css({
    color: textOutlined
  })
}

type HeadingTag = 'h1' | 'h2' |'h3' | 'h4' |'h5' | 'h6'
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type ComponentProps = ComponentPropsWithoutRef<HeadingTag> & {
  level: HeadingLevel;
  visualLevel?: HeadingLevel;
}
type PresenterProps = ComponentPropsWithoutRef<HeadingTag> & {
  tag: HeadingTag;
  visualLevel: HeadingLevel;
  className?: string
}
type ContainerProps = ComponentProps & {
  presenter: (props: PresenterProps) => JSX.Element
}

export const HeadingPresenter = ({
  tag:Tag,
  visualLevel,
  className,
  ...props
}: PresenterProps) => (
  <Tag className={className} { ...props } css={[styles.h, styles[Tag]]} />
);


export const HeadingUnderlinedPresenter = ({
  tag:Tag,
  visualLevel,
  className,
  ...props
}: PresenterProps) => (
  <Tag className={className} { ...props } css={[styles.h, styles[Tag], styles.underlined]} />
);

export const HeadingContainer = ({
  presenter,
  level = 2,
  visualLevel,
  ...props
}: ContainerProps) => {
    visualLevel = (typeof visualLevel !== 'undefined') ?  visualLevel : level;
    const tag = `h${ level }` as HeadingTag;
  
  return presenter({ tag, visualLevel, ...props})
};

const Heading = (props: ComponentProps) => (
  <HeadingContainer
    presenter={ presenterProps => <HeadingPresenter { ...presenterProps } /> }
    { ...props }
  />
)
export default Heading;

export const HeadingUnderlined = (props: ComponentProps) => (
  <HeadingContainer
    presenter={ presenterProps => <HeadingUnderlinedPresenter { ...presenterProps } /> }
    { ...props }
  />
)

