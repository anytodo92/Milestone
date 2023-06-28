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
  return (
    <AutoWrapper>
      <Banner data={bannerData} />
      <Tutorial />
      <ShapeTop
        bgColor="#f8f8f8"
        fillColor="#fff"
        height={90}
      />
      <Course />
      <ShapeBottom
        bgColor="#fff"
        fillColor="#f8f8f8"
        height={70}
      />
      <Reservation />
      <ShapeTop
        bgColor="#f8f8f8"
        fillColor="#fff"
        height={50}
      />
      <Carousel />
      <Contact />
    </AutoWrapper>
  );
};

export default Auto;