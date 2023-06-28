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
    ]
  }
  
  return (
    <HomeWrapper>
      <Banner />
      <Intro />
      <ShapeBottom
        bgColor="#fff"
        fillColor="#f8f8f8"
        height={100}
      />
      <Course />
      <Reservation data={reservationData} />
      <ShapeTop
        bgColor="#f8f8f8"
        fillColor="#fff"
        height={70}
      />
      <Recommend />
      <Carousel />
      <Team data={teamData} />
      <ShapeBottom
        bgColor="#fff"
        fillColor="#f8f8f8"
        height={120}
      />
      <Contact />
    </HomeWrapper>
  );
};

export default Home;