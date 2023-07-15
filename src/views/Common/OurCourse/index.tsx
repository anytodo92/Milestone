import { Images, Icons } from "../../../utils/assets";

import {
  OurCourseWrapper
} from "./styled";

type OurCourseProps = {
  data: any,
}

const OurCourse = ({ data }: OurCourseProps): JSX.Element => {
  
  return (
    <OurCourseWrapper className="our-course">
      <div className="content">
        <div className="article">
          <div className="title">
            <h2>{data.title}</h2>
            <img src={Images.UnderlineGreen} alt="" />
          </div>
          <div className="desc" dangerouslySetInnerHTML={{ __html: data.description }}>
          </div>
          <div className="list">
          {data.list.map((data1: any, index: number) =>
            <div key={index} className="one">
              <h5>{data1.title}</h5>
              <div
                className="detail"
                dangerouslySetInnerHTML={{ __html: data1.description }}
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

