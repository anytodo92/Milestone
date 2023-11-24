import ShapeBottom from "../Common/ShapeBottom";
import ShapeTop from "../Common/ShapeTop";
import Course from "../Common/Course";
import Reservation from "../Common/Reservation";
import Carousel from "../Common/Carousel";
import Contact from "../Common/Contact";
import Banner from "../Common/Banner";
import Tutorial from "../Common/Tutorial";
import PackageIntro from "../Common/PackageIntro";

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
    link: {
      text: "JETZT NEU: Ratenzahlung",
      url: "/ratenzahlung"
    }
  }

  const reservationData = {
    title: 'Noch nicht überzeugt?<br />Dann buche eine Probelektion!',
    sub_title: 'Für nur CHF 55.-',
    description: 'Probelektion in deiner Region',
    detail: 'Du hast einmalig die Möglichkeit eine Probelektion zu besuchen. Die Lektion dauert 45 Minuten und es entstehen keine weiteren Kosten',
    buttonText: 'Jetzt anfragen',
    image1: Images.Thumb_3,
    image2: Images.Thumb_1,
  };

  const packageIntroData = {
    title: "Dein Paket auf Raten",
    link: {
      text: "Jetzt beantragen",
      url: "#",
    },
    detail: {
      title : "3, 6 oder 12 Monate",
      description: "Verteile die Kosten",
      detail: `
      Du möchtest gleich mit einem unserer Pakete durchstarten und die Kosten auf die nächsten Monate verteilen? Kein Problem - wähle ein 5er, 10er oder 20er Abo und beantrage eine Ratenzahlung.
      `
    }
  };

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
      <PackageIntro data={packageIntroData} />
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