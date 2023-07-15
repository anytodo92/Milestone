import { Images, Icons } from "../../../utils/assets";
import {
  ContactWrapper 
} from "./styled";

const Contact = (): JSX.Element => {
  return (
    <ContactWrapper className="contact">
      <div className="content">
        <div className="pic">
          <img src={Images.Phone} alt="" />
        </div>
        <div className="article">
          <div className="title">
            <h2>Du möchtest mehr erfahren?<br />Kontaktiere Uns!</h2>
            <img src={Images.UnderlineGreen} alt="" />
          </div>
          <div className="desc">
          Wir sind für dich da! Melde dich telefonisch oder über unser Kontaktformular.
          </div>
          <a>Kontaktieren</a>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;