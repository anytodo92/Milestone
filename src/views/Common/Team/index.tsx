import { Images, Icons } from "../../../utils/assets";
import {
  TeamWrapper
} from "./styled";

type TeamProps = {
  data: any;
}
const Team = ({ data }: TeamProps): JSX.Element => {
  
  return (
    <TeamWrapper className="team">
      <div className="content">
        <div className="title">
          <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <img src={Images.UnderlineGreen} alt="" />
        </div>
        <p className="desc">{data.description}</p>
        <div className="list">
        {data.list.map((data1: any, index: number) =>
          <div key={index} className="one">
            <div className="pic">
              <div className="bg"></div>
              <img src={data1.image} alt="" />              
            </div>
            <div className="wrapper">
              {data1.description&&
                <p className="desc">{data1.description}</p>
              }
              <h1>{data1.name}</h1>
              {data1.detail&&
                <div
                  className="detail"
                  dangerouslySetInnerHTML={{ __html: data1.detail }}
                ></div>
              }
              {data1.email&&
                <p className="email">{data1.email}</p>
              }
            </div>
          </div>
        )}  
        </div>
        {data.buttonText&&
          <div className="buttons">
            <button>{data.buttonText}</button>
          </div>
        }
      </div>
    </TeamWrapper>
  );
}

export default Team;