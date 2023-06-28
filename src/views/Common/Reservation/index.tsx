import { Images } from "../../../utils/assets";
import {
  ReservationWrapper
} from "./styled";

const Reservation = (): JSX.Element => {
  return (
    <ReservationWrapper className="reservation">
      <div className="content">
        <div className="article">
          <div className="title">
            <h1>Noch nicht überzeugt?<br />Dann buche eine Probelektion!</h1>
            <img src={Images.UnderlineGreen} alt="" />
          </div>
          <div className="contt">
            <p className="desc">Probelektion in deiner Region</p>
            <h5>Für nur CHF 55.-</h5>
            <p className="detail">
              Du hast einmalig die Möglichkeit eine Probelektion zu besuchen. Die Lektion dauert 45 Minuten und es entstehen keine weiteren Kosten
            </p>
            <button>Jetzt anfragen</button>
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