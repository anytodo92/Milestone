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
        {(data.link?.text && data.link?.url)&&
          <div className="mark">
            <div className="wrapper">
              <a href="/ratenzahlung" aria-label="Ratenzahlung">
                <svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 280 280" fill="none">
                  <g filter="url(#filter0_d_4838_5986)">
                    <circle cx="140" cy="137" r="123" fill="#84AF8C"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_4838_5986" x="0" y="0" width="280" height="280" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4838_5986"/>
                      <feOffset dy="3"/>
                      <feGaussianBlur stdDeviation="6"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.737718 0 0 0 0 0.737718 0 0 0 0 0.737718 0 0 0 0.59 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4838_5986"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4838_5986" result="shape"/>
                    </filter>
                  </defs>
                </svg>
                <span className="text">JETZT NEU: Ratenzahlung</span>
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 30 21" fill="none">
                    <line x1="5.12981" y1="2.25882" x2="14.3133" y2="15.1146" stroke="white" stroke-width="4" stroke-linecap="round"/>
                    <line x1="2" y1="-2" x2="17.799" y2="-2" transform="matrix(-0.81371 0.581271 0.581271 0.81371 29.9609 6.39648)" stroke="white" stroke-width="4" stroke-linecap="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        }
      </div>
      <div className="bg"></div>
    </BannerWrapper>
  );
};

export default Banner;