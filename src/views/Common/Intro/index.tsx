import {
  IntroWrapper
} from "./styled";
import { Images, Icons } from "../../../utils/assets";
const Intro = (): JSX.Element => {
  const items = [
    {
      id: 1,
      title: 'Sicherheit',
      desc: 'Deine Sicherheit steht an erster Stelle. '
    },
    {
      id: 2,
      title: 'Kompetenz',
      desc: 'Unsere Fahrlehrer bilden sich regelmässig weiter - für dich.',
    },
    {
      id: 3,
      title: 'Faire Preise',
      desc: 'Deine Sicherheit steht an erster Stelle. ',
    },
    {
      id: 4,
      title: 'Die nötige Portion Spass',
      desc: 'Unsere Fahrlehrer bilden sich regelmässig weiter - für dich.'
    },
    {
      id: 5,
      title: 'Zuverlässig',
      desc: 'Deine Sicherheit steht an erster Stelle. ',
    },
    {
      id: 6,
      title: 'Transparent',
      desc: 'Unsere Fahrlehrer bilden sich regelmässig weiter - für dich.',
    },
  ]
  return (
    <IntroWrapper>
      <div className="content">
        <div className="pic">
          <div className="bg1" style={{ backgroundImage: `url(${Images.Thumb_3})` }}></div>
          <div className="bg2" style={{ backgroundImage: `url(${Images.Thumb_1})` }}></div>
        </div>
        <div className="article">
          <div className="title">
            <h1>Das erwartet dich bei der<br />Fahrschule Milestone</h1>
            <img src={Images.UnderlineGreen} alt="" />
          </div>
          <p>
            Wie begleiten dich von A - Z und kümmern uns um alle Belangen auf dem Weg zu deinem Führerschein. 
          </p>
          <div className="list">
          {items.map((data, index) =>
            <div key={index} className="one">
              <div className="icon">
                <img src={Icons.Check} alt="" />
              </div>
              <div className="contt">
                <h5 dangerouslySetInnerHTML={{ __html: data.title }}></h5>
                <p>{data.desc}</p>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </IntroWrapper>
  )
}

export default Intro;