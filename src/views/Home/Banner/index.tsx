import {
  BannerWrapper
} from "./styled";

const Banner = (): JSX.Element => {
  return (
    <BannerWrapper className="hero">
      <div className="bg">
        <div className="lt"></div>
        <div className="rt"></div>
      </div>
      <div className="content">
        <div className="summary">
          <div className="contt">
            <p className="desc">
            Fahrspass garantiert - Kompetent und auf dich zugeschnitten
            </p>
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
      </div>
    </BannerWrapper>
  );
}

export default Banner;