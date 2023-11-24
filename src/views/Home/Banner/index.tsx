import { Images } from "../../../utils/assets";
import {
  BannerWrapper
} from "./styled";

const Banner = (): JSX.Element => {
  return (
    <BannerWrapper className="hero">
      <div className="bg" style={{backgroundImage: `url(${Images.Bg_5})`}}>
        <div className="mask"></div>
        <div className="lt"></div>
      </div>
      <div className="content">
        <div className="summary">
          <div className="contt">
            <div className="title">
              <h1>Deine Fahrschule in der<br />Region</h1>
              <svg width="241" height="39" viewBox="0 0 241 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M230.5 2C165.667 3.34545 33.7 8.72727 24.5 19.4909L318 6.70909C220.833 11.6424 21.4 25.0073 1 39" stroke="white" stroke-width="3"/>
              </svg>
            </div>
            <p className="detail">
              Wir begleiten dich ab der ersten Stunde bis zur erfolgreich absolvierten Fahrprüfung. Zusammen geben wir Gas und weichen allen Hindernissen erfolgreich aus.
            </p>
            <div className="icon">
              <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2.82843" y1="2" x2="14" y2="13.1716" stroke="white" stroke-width="4" stroke-linecap="round"/>
                <line x1="2" y1="-2" x2="17.799" y2="-2" transform="matrix(-0.707107 0.707107 0.707107 0.707107 28 2)" stroke="white" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="mark">
          <div className="wrapper">
            <a href="/ratenzahlung" aria-label="Ratenzahlung">
              <svg xmlns="http://www.w3.org/2000/svg" width="281" height="280" viewBox="0 0 281 280" fill="none">
                <g filter="url(#filter0_d_4838_6577)">
                  <circle cx="140.043" cy="137" r="123" fill="white"/>
                </g>
                <defs>
                  <filter id="filter0_d_4838_6577" x="0.0429688" y="0" width="280" height="280" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4838_6577"/>
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.625558 0 0 0 0 0.625558 0 0 0 0 0.625558 0 0 0 0.59 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4838_6577"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4838_6577" result="shape"/>
                  </filter>
                </defs>
              </svg>
              <span className="text">JETZT NEU: Ratenzahlung</span>
              <span className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 30 21" fill="none">
                  <line x1="5.17277" y1="2.25882" x2="14.3563" y2="15.1146" stroke="#84AF8C" stroke-width="4" stroke-linecap="round"/>
                  <line x1="2" y1="-2" x2="17.799" y2="-2" transform="matrix(-0.81371 0.581271 0.581271 0.81371 30.0039 6.39648)" stroke="#84AF8C" stroke-width="4" stroke-linecap="round"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
}

export default Banner;