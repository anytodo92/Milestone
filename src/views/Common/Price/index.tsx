import { Images } from "../../../utils/assets";
import {
  PriceWrapper
} from "./styled";

type PriceProps = {
  data: any
}

const Price1 = ({ data }: PriceProps): JSX.Element => {

  return (
    <PriceWrapper>
      <div className="content">
        <div className="title">
          <h1>{data.title}</h1>
          <img src={Images.UnderlineGreen} alt="" />
        </div>
        <div className="list">
        {data.list.map((data1: any, index: number) =>
          <div key={index} className="one">
            <h5>{data1.description}</h5>
            <div className="info">
              <p>{data1.info1}</p>
              <p>{data1.info2}</p>
            </div>
          </div>
        )}
        </div>
      </div>
    </PriceWrapper>
  );
}

export default Price1;