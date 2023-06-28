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
          {data.description&&
            <p className="desc">{data.description}</p>
          }
          <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <p className="detail" dangerouslySetInnerHTML={{ __html: data.detail }}></p>
          {data.buttonText&&
            <button>{data.buttonText}</button> 
          }
        </div>
      </div>
      <div className="bg"></div>
    </BannerWrapper>
  );
};

export default Banner;