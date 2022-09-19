/** @jsxImportSource @emotion/react */

import Txt, { InfoTxt } from '../atoms/Txt'
import Time from '../atoms/Time'
import Heading, {HeadingUnderlined} from '../atoms/Heading'

const Notification = () => {
  return (
    <div>
      <Heading level={ 3 }>Heading component</Heading>
      <HeadingUnderlined level={ 3 }>HeadingUnderlined component</HeadingUnderlined>
      <Txt>Txt component</Txt>
      <InfoTxt size='s'>InfoTxt component</InfoTxt>
      <InfoTxt size='l'>InfoTxt l component</InfoTxt>
      <Time>{(new Date()).getTime()}</Time>
    </div>
  );
}

export default Notification;
