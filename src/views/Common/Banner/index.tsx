import { useLayoutEffect, useState } from "react";
import {
  BannerWrapper
} from "./styled";

type BannerPropsType = {
  data: any,
  page: string,
}
const Banner = ({ data, page }: BannerPropsType): JSX.Element => {
  // const [size, setSize] = useState([0, 0]);
  // useLayoutEffect(() => {
  //   function updateSize() {
  //     setSize([window.innerWidth, window.innerHeight]);
  //   }
  //   window.addEventListener('resize', updateSize);
  //   updateSize();
  //   return () => window.removeEventListener('resize', updateSize);
  // }, []);

  return (
    <BannerWrapper className={page}>
      <div className="outline-ellipse"></div>
      <div className="inline-ellipse">
        <div className="wrapper">
          <div className="bg"></div>
          {page === "startseite"&& <div className="thumb"></div>}
        </div>
      </div>
      <div className="content">
        <div className="txt">
          <div className="line"></div>
          <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;