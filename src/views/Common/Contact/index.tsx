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
            <h1>Du möchtest mehr erfahren?<br />Kontaktiere Uns!</h1>
            <img src={Images.UnderlineGreen} alt="" />
          </div>
          <p>
          Wir sind für dich da! Melde dich telefonisch oder über unser Kontaktformular.
          </p>
          <button>Kontaktieren</button>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;