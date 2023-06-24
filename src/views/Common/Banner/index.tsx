import { useLayoutEffect, useState } from "react";
import {
  BannerWrapper
} from "./styled";


type BannerPropsType = {
  data: any,
  page: string,
}
const Banner = ({ data, page }: BannerPropsType): JSX.Element => {
  
  return (
    <BannerWrapper className={page}>
      
    </BannerWrapper>
  );
};

export default Banner;