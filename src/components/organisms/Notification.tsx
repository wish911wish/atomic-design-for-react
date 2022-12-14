/** @jsxImportSource @emotion/react */
import Txt, { InfoTxt } from '../atoms/Txt'
import Time from '../atoms/Time'
import Img from '../atoms/Img'
import Heading, {HeadingUnderlined, HeadingOutlined} from '../atoms/Heading'
import Card, { CardHeader } from '../atoms/Card';

const Notification = () => {
  return (
    <div>
      <Heading level={ 3 }>Heading component</Heading>
      <HeadingUnderlined level={ 3 }>HeadingUnderlined component</HeadingUnderlined>
      <Img src="https://dummyimage.com/600x400/15c22f/ffffff.jpg" width={128} height={72}  />
      <Txt>Txt component</Txt>
      <InfoTxt size='s'>InfoTxt component</InfoTxt>
      <InfoTxt size='l'>InfoTxt l component</InfoTxt>
      <Time>{(new Date()).getTime()}</Time>
      <Card>
        <CardHeader>
          <HeadingOutlined level={ 6 }>HeadingUnderlined component</HeadingOutlined>
        </CardHeader>
        <div>Card no card</div>
      </Card>
    </div>
  );
}

export default Notification;
