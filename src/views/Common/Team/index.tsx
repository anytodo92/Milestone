import { Images, Icons } from "../../../utils/assets";
import {
  TeamWrapper
} from "./styled";

const Team = (): JSX.Element => {
  const list = [
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
  ];
  return (
    <TeamWrapper>
      <div className="content">
        <div className="title">
          <h1>Die Profis, die dir zur<br />Seite stehen</h1>
          <img src={Images.UnderlineGreen} alt="" />
        </div>
        <p className="desc">
        Unser Team aus Fahrlerer:innen und Kursinstruktor:innen die dir bei deiner Ausbildung zur Seite stehen.
        </p>
        <div className="list">
        {list.map((data, index) =>
          <div key={index} className="one">
            <div className="pic">
              <div className="bg"></div>
              <img src={data.image} alt="" />
              
            </div>
            <h1>{data.name}</h1>
          </div>
        )}  
        </div>
        <div className="buttons">
          <button>Erfahre mehr Über Uns</button>
        </div>
      </div>
    </TeamWrapper>
  );
}

export default Team;