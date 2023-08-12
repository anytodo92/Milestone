import { useLayoutEffect, useState } from "react";
import {
  BannerWrapper
} from "./styled";


type BannerPropsType = {
  data: any,
}
const Banner = ({ data }: BannerPropsType): JSX.Element => {
  
  return (
    <BannerWrapper className="hero">

      <div className="content">
        <div className="summary">
          {/*data.description&&
            <div className="desc">{data.description}</div>
          */}
          <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          {data.detail&&
            <div className="detail" dangerouslySetInnerHTML={{ __html: data.detail }}></div>
          }
          {data.buttonText&&
            <a href={data.link}>{data.buttonText}</a> 
          }
        </div>
      </div>
      <div className="bg"></div>
    </BannerWrapper>
  );
};

export default Banner;