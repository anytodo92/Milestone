import Banner from "./Banner";
import Intro from "../Common/Intro";
import ShapeBottom from "../Common/ShapeBottom";
import ShapeTop from "../Common/ShapeTop";
import Course from "../Common/Course";
import Reservation from "../Common/Reservation";
import Recommend from "../Common/Recommend";
import Carousel from "../Common/Carousel";
import Team from "../Common/Team";
import Contact from "../Common/Contact";
import PackageIntro from "../Common/PackageIntro";
import {
  Images
} from "../../utils/assets";
import {
  HomeWrapper
} from "./styled";

const Home = (): JSX.Element => {
  
  const reservationData = {
    title: 'Noch nicht überzeugt?<br />Dann buche eine Probelektion!',
    sub_title: 'Für nur CHF 55.-',
    description: 'Probelektion in deiner Region',
    detail: 'Du hast einmalig die Möglichkeit eine Probelektion zu besuchen. Die Lektion dauert 45 Minuten und es entstehen keine weiteren Kosten',
    buttonText: 'Jetzt anfragen',
    image1: Images.Thumb_3,
    image2: Images.Thumb_1,
  }

  const teamData = {
    title: 'Die Profis, die dir zur<br />Seite stehen',
    description: 'Unser Team aus Fahrlerer:innen und Kursinstruktor:innen die dir bei deiner Ausbildung zur Seite stehen.',
    buttonText: 'Erfahre mehr Über Uns',
    list: [
      {
        id: 1,
        image: Images.Thumb_2,
        name: 'Mateen Saifullah'
      },
      {
        id: 2,
        image: Images.Thumb_2,
        name: 'Mateen Saifullah'
      },
      {
        id: 3,
        image: Images.Thumb_2,
        name: 'Mateen Saifullah'
      },
      {
        id: 4,
        image: Images.Thumb_2,
        name: 'Mateen Saifullah'
      },
    ]
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
    <HomeWrapper>
      <Banner />
      <Intro />
      <ShapeBottom
        bgColor="#fff"
        fillColor="#f4f4f4"
        height={120}
      />
      <Course />
      <PackageIntro data={packageIntroData} />
      <Reservation data={reservationData} />
      <ShapeBottom
        bgColor="#f4f4f4"
        fillColor="#fff"
        height={120}
      />
      <Recommend />
      {/*<Carousel />*/}
      <ShapeBottom
        bgColor="#fff"
        fillColor="#f4f4f4"
        height={94}
      />
      <Team data={teamData} />

      <ShapeBottom
        bgColor="#f4f4f4"
        fillColor="#fff"
        height={55}
      />
      <Contact />
    </HomeWrapper>
  );
};

export default Home;