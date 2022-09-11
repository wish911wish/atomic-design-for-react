/** @jsxImportSource @emotion/react */

import Txt, { InfoTxt } from '../atoms/Txt'
import Time from '../atoms/Time'

const Notification = () => {
  return (
    <div>
      <Txt>Txt component</Txt>
      <InfoTxt size='s'>InfoTxt component</InfoTxt>
      <InfoTxt size='l'>InfoTxt l component</InfoTxt>
      <Time>{(new Date()).getTime()}</Time>
    </div>
  );
}

export default Notification;
