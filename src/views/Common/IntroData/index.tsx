import {
  IntroDataWrapper
} from "./styled";

type IntroDataPropsType = {
  data: any,
  page: string,
}
const IntroData = ({ data, page }: IntroDataPropsType): JSX.Element => {
  return (
    <IntroDataWrapper className={page}>
      <div className="content">
        <div className="intro">
          <div className="art">
            <div className="line"></div>
            <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
            <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
            {data.link.name.length > 0&& <a href="#" className="btn">{data.link.name}</a>}            
          </div>
          <div className="pic"><img src={data.image} /></div>
        </div>
        {data.options.length > 0&&
          <div className={`options ${data.options.length === 2 ? "col" : ""}`}>
            {data.options.map((option: any, index1: number) =>
              <div className="one">
                <div className="icon"></div>
                <p className="contt">{option}</p>
              </div>
            )}
          </div>
        }
      </div>
    </IntroDataWrapper>
  );
};

export default IntroData;