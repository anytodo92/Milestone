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
    <IntroWrapper className="intro">
      <div className="content">
        <div className="wrapper">
          <div className="pic">
            <div className="bg1" style={{ backgroundImage: `url(${Images.Thumb_3})` }}></div>
            <div className="bg2" style={{ backgroundImage: `url(${Images.Thumb_1})` }}></div>
          </div>
          <div className="article">
            <h2 className="title">Das erwartet dich bei der<br />Fahrschule Milestone</h2>
            <div className="desc">
              Wie begleiten dich von A - Z und kümmern uns um alle Belangen auf dem Weg zu deinem Führerschein. 
            </div>
            <div className="pic">
              <div className="bg1" style={{ backgroundImage: `url(${Images.Thumb_3})` }}></div>
              <div className="bg2" style={{ backgroundImage: `url(${Images.Thumb_1})` }}></div>
            </div>
            <div className="panel">
              <div className="list">
              {items.map((data, index) =>
                <div key={index} className="one">
                  <div className="top">
                    <div className="icon">
                      <img src={Icons.Check} alt="" />                      
                    </div>
                    <h5 dangerouslySetInnerHTML={{ __html: data.title }}></h5>
                  </div>
                  <div className="desc">{data.desc}</div>
                </div>
              )}
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" height="81" viewBox="0 0 767 81"  preserveAspectRatio="none" width="100%" fill="none">
                <path d="M767 0V2.467C766.5 18.247 754.276 31.33 738.532 32.399L32.5319 80.327C15.2034 81.503 0.5 67.764 0 50.395V0Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </IntroWrapper>
  )
}

export default Intro;