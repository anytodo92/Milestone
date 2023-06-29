import { Images } from "../../../utils/assets";
import {
  ReservationWrapper
} from "./styled";

type ReservationProps = {
  data: any
}

const Reservation = ({ data }: ReservationProps): JSX.Element => {
  return (
    <ReservationWrapper className="reservation">
      <div className="content">
        <div className="article">
          <div className="title">
            <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
            <img src={Images.UnderlineGreen} alt="" />
          </div>
          <div className="contt">
            <div className="desc">{data.description}</div>
            <h5>{data.sub_title}</h5>
            <div className="detail">{data.detail}</div>
            <button>{data.buttonText}</button>
          </div>
        </div>
        <div className="pic">
          <div className="bg1" style={{ backgroundImage: `url(${Images.Thumb_3})` }}></div>
          <div className="bg2" style={{ backgroundImage: `url(${Images.Thumb_1})` }}></div>
        </div>
      </div>
    </ReservationWrapper>
  )
}

export default Reservation;