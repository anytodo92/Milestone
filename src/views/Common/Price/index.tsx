import { Images } from "../../../utils/assets";
import {
  PriceWrapper
} from "./styled";

type PriceProps = {
  data: any
}

const Price1 = ({ data }: PriceProps): JSX.Element => {

  return (
    <PriceWrapper className="price">
      <div className="content">
        <h2 className="title">{data.title}</h2>
        <div className="list">
        {data.list.map((data1: any, index: number) =>
          <div key={index} className="one">
            <p className="desc">{data1.description}</p>
            <div className="info">
              <h5>{data1.info1}</h5>
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