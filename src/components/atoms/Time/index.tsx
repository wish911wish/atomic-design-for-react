/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef } from "react"
import * as dateFns from "date-fns"
import ja from 'date-fns/locale/ja';

type Props = ComponentPropsWithoutRef<"time">
type ContainerProps = Props & {
  format?: string
  presenter: (props: Props) => JSX.Element
}
export const TimePresenter = (props: Props) => <time { ...props } />;

export const TimeContainer = ({presenter, children:value, format = 'MM月dd日(E)HH:mm', dateTime, ...props}: ContainerProps) => {
  value = parseInt(value?.toString() || '', 10);

  var children;
  if (!dateFns.isValid(value)) {
    children = '有効な時間表現ではありません';
  } else {
    children = formatDatetime(value, format);
  }

  if (dateTime) {
    dateTime = formatDatetime(value);
  }
  return presenter({ children, dateTime, ...props})
};

const Time = (props: Props) => (
  <TimeContainer
    presenter={ presenterProps => <TimePresenter { ...presenterProps } /> }
    { ...props }
  />
);
export default Time

function formatDatetime(datetime: number, format = "yyyy-MM-DD'T'HH:mm") {
  return dateFns.format((new Date(datetime)), format, { locale: ja })
}
