import { Images, Icons } from "../../../utils/assets";

import {
  OurCourseWrapper
} from "./styled";

const OurCourse = (): JSX.Element => {
  const list = [
    {
      id: 1,
      title: 'Abendkurse',
      description: `
      <ul><li>4 x 2 Stunden, von 18:00 - 20:00 Uhr</li>
      <li>Montag - Donnerstag</li></ul>
      `,
    },
    {
      id: 2,
      title: 'Intensivkurse',
      description: `
      <ul><li>2 x 4 Stunden, von 18:00 - 22:00 Uhr</li>
      <li>Mittwoch - Donnerstag</li></ul>
      `,
    },
    {
      id: 3,
      title: 'Wochenendkurse',
      description: `
      <ul><li>2 x 4 Stunden</li>
      <li>Freitag, 18:00 - 22:00 Uhr & Samstag 08:00 - 12:00 Uhr</li></ul>
      `,
    },
  ];
  return (
    <OurCourseWrapper>
      <div className="content">
        <div className="article">
          <div className="title">
            <h1>Unsere Kurse</h1>
            <img src={Images.UnderlineGreen} alt="" />
          </div>
          <div className="desc">
            Für jeden das passende Modell - wir bieten unsere Kurse als Abendkurse, am Wochenende oder in Form von Intensivkursen an. Alle Kurse finden ab mind. 6 Teilnehmer:innen statt.
          </div>
          <div className="list">
          {list.map((data, index) =>
            <div key={index} className="one">
              <h5>{data.title}</h5>
              <div
                className="detail"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>
            </div>
          )}
          </div>
          <div className="txt">* Tage und Uhrzeiten können variieren</div>
        </div>
        <div className="info">
          <h4>Kursorte</h4>
          <div className="wrapper">
            <div className="map">
              <img src={Images.Map_2} alt="" />
            </div>
            <div className="control">
               <div className="left">
                 <img src={Icons.ArrowLeft_2} alt="" />
               </div>
               <h5>Badenerstrasse 1, 5400 Baden</h5>
               <div className="right">
                 <img src={Icons.ArrowRight_2} alt="" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </OurCourseWrapper>
  );
}

export default OurCourse;

