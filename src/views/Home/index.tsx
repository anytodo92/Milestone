import Banner from "./Banner";
import Intro from "../Common/Intro";
import ShapeBottom from "../Common/ShapeBottom";
import Course from "../Common/Course";
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
    </HomeWrapper>
  );
};

export default Home;