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
          <h2 className="title" dangerouslySetInnerHTML={{ __html: data.title }}></h2>
          <div className="panel">
            <div className="contt">
              <div className="desc">{data.description}</div>
              <h5>{data.sub_title}</h5>
              <div className="detail">{data.detail}</div>
              <button>{data.buttonText}</button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="81" viewBox="0 0 767 81"  preserveAspectRatio="none" width="100%" fill="none">
              <path d="M767 0V2.467C766.5 18.247 754.276 31.33 738.532 32.399L32.5319 80.327C15.2034 81.503 0.5 67.764 0 50.395V0Z" fill="#f4f4f4"/>
            </svg>
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