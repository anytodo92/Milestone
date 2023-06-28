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
      <Reservation />
      <ShapeTop
        bgColor="#f8f8f8"
        fillColor="#fff"
        height={70}
      />
      <Recommend />
      <Carousel />
      <Team />
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