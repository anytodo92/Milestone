import ShapeBottom from "../Common/ShapeBottom";
import ShapeTop from "../Common/ShapeTop";
import Course from "../Common/Course";
import Reservation from "../Common/Reservation";
import Carousel from "../Common/Carousel";
import Contact from "../Common/Contact";
import Banner from "../Common/Banner";
import Tutorial from "../Common/Tutorial";

import { Images } from "../../utils/assets";
import {
  AutoWrapper
} from "./styled";

const Auto = (): JSX.Element => {
  const bannerData = {
    title: 'Faire Preise, Fahrspass und<br />Kompetenz',
    detail: `
    Unsere erfahreren Fahreler:innen begleiten dich auf dem gesamten Weg zu deinem Führerschein. Ab der ersten Probelektion bis hin zur Prüfung.
    `,
    buttonText: 'Probelektion buchen',
  }

  const reservationData = {
    title: 'Noch nicht überzeugt?<br />Dann buche eine Probelektion!',
    sub_title: 'Für nur CHF 55.-',
    description: 'Probelektion in deiner Region',
    detail: 'Du hast einmalig die Möglichkeit eine Probelektion zu besuchen. Die Lektion dauert 45 Minuten und es entstehen keine weiteren Kosten',
    buttonText: 'Jetzt anfragen',
    image1: Images.Thumb_3,
    image2: Images.Thumb_1,
  }

  return (
    <AutoWrapper>
      <Banner data={bannerData} />
      <Tutorial />
      <ShapeBottom
        bgColor="#f4f4f4"
        fillColor="#fff"
        height={77}
      />
      <Course />
      <Reservation data={reservationData} />      
      <ShapeBottom
        bgColor="#fff"
        fillColor="#f4f4f4"
        height={115}
      />
      {/*<Carousel />*/}
      <Contact />
    </AutoWrapper>
  );
};

export default Auto;