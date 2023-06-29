import { Icons } from "../../../utils/assets";
import {
  ContactInfoWrapper
} from "./styled";

const ContactInfo = (): JSX.Element => {
  return (
    <ContactInfoWrapper>
      <div className="content">
        <div className="list">
          <div className="one">
            <div className="title">
              <span className="icon">
                <img src={Icons.Envelope} alt="" />
              </span>
              <h3>Kontakt</h3>
            </div>
            <p>info@milestone-fahrschule.ch</p>
          </div>
          <div className="one">
            <div className="title">
              <span className="icon">
                <img src={Icons.Phone_2} alt="" />
              </span>
              <h3>Whats App</h3>
            </div>
            <p>044 586 70 71</p>
          </div>
          <div className="one">
            <div className="title">
              <span className="icon">
                <img src={Icons.Ribbon} alt="" />
              </span>
              <h3>Standort</h3>
            </div>
            <p>Badenerstrasse 1, 5400 Baden</p>
          </div>
        </div>
      </div>
    </ContactInfoWrapper>
  );
}

export default ContactInfo;