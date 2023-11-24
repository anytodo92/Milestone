import {
  PackageIntroWrapper
} from "./styled";

type PackageIntroProps = {
  data: any;
}

const PackageIntro = ({ data }: PackageIntroProps): JSX.Element => {
  return (
    <PackageIntroWrapper className="package-intro">
      <div className="content">
        <div className="wrapper">
          <div className="lt">
            <h2 className="title">{data.title}</h2>
            <div className="buttons">
              <a href={data.link.url}>{data.link.text}</a>
            </div>
          </div>
          <div className="rt">
            <p className="desc">{data.detail.description}</p>
            <h5>{data.detail.title}</h5>
            <div className="detail" dangerouslySetInnerHTML={{ __html: data.detail.detail }}></div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="56" preserveAspectRatio="none" viewBox="0 0 1311 56" fill="none">
          <path d="M0 0 1311 0 1311 30.0001V0.038C1311 16.37 1297.94 29.701 1281.61 30.032L30.6077 55.38C13.8048 55.72 0 42.192 0 25.386V30Z" fill="#F4F4F4"/>
        </svg>
      </div>
    </PackageIntroWrapper>
  );
};

export default PackageIntro;