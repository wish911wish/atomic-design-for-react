/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef } from "react"

type ComponentProps = ComponentPropsWithoutRef<'img'> & {
  src: string,
  width: number,
  height: number
}
type PresenterProps = ComponentPropsWithoutRef<'img'> & {
  src: string,
  srcSet: string,
  webpSrcSet?: string,
  alt?: string,
  width: number,
  height: number
}
type ContainerProps = ComponentProps & {
  presenter: (props: PresenterProps) => JSX.Element
}

export const ImgPresenter = ({
  src,
  srcSet,
  webpSrcSet,
  alt,
  width,
  height,
  ...props
}: PresenterProps) => (
  <picture { ...props }>
    <source srcSet={ webpSrcSet } type="image/webp" />
    <img src={ src }
      alt={ alt }
      srcSet={ srcSet }
      width={ width }
      height={ height } />
  </picture>
);


const riasRegexp = /images\/([0-9]+)\/([0-9]+)/;

function createSrc(src: string, width: number, height: number) {
  if (!width || !height) return src;
  
  const ratio = window.devicePixelRatio || 1;
  const w = width * ratio;
  const h = height * ratio;
  return src.replace(riasRegexp, (match, p1, p2) => `images/${ w }/${ h }`);
}

function createSrcSet(src: string, width: number, height: number, extension?: string) {
  if (/^http.*$/.test(src)) return src
  if (extension) {
    src = src.replace(/\.[a-z0-9]+[^#?]?/, `.${ extension }`);
  }
  if (
    !riasRegexp.test(src) ||
    !width ||
    !height
  ) return src;

  const [ path, rest ] = src.split('images/')
  const regExpMatchArray = rest.match(".+/(.+?)([?#;].*)?$")
  if (!regExpMatchArray) return src

  const file = regExpMatchArray[1]

  return [ 1, 1.5, 2, 3, 4 ]
    .map(dpr => `${ path }images/${ width * dpr }/${ height * dpr }/${ file } ${ dpr }x`)
    .join(', ');
}

const ImgContainer = ({presenter, src, width, height, ...props }: ContainerProps) => {
  const srcSet = createSrcSet(src, width, height);
  const webpSrcSet = createSrcSet(src, width, height, 'webp');
  src = createSrc(src, width, height);
  return presenter({ src, srcSet, webpSrcSet, width, height, ...props });
};

export const Img = (props: ComponentProps) => (
  <ImgContainer
    presenter={ presenterProps => <ImgPresenter { ...presenterProps } /> }
    { ...props }
  />
)

export default Img;
