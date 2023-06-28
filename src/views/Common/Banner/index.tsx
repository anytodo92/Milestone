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
          <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
          <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
          <button>{data.buttonText}</button> 
        </div>
      </div>
      <div className="bg"></div>
    </BannerWrapper>
  );
};

export default Banner;