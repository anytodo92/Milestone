import {
  Images
} from "../../../utils/assets";
import {
  FooterWrapper
} from "./styled";

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <section>
        <div className="content">
          <div className="col">
            <h5>Adresse</h5>
            <p>
              Fahrschule Milestone<br />
              Badenerstrasse 1<br />
              5400 Baden<br />
            </p>
          </div>
          <div className="col">
            <h5>Kontakt</h5>
            <p>
              <a className="link" href="mailto:kontakt@fahrschule-milestone.ch">kontakt@fahrschule-milestone.ch</a>
            </p>
            <p>
              <a className="link" href="tel:T +41 58 123 45 67">T +41 58 123 45 67</a>
            </p>
          </div>
          <div className="col">
            <h5>Rechtliches</h5>
            <p>
              <a className="link" href="/impressum">Impressum</a>
            </p>
              <a className="link" href="/datenschutz">Datenschutz</a>
            <p>
            </p>
            <p>
              <a className="link" href="/abg">Abg</a>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="content">
          <p>Copyright 2023 - Fahrschule Milestone GmbH</p>
        </div>
      </section>
    </FooterWrapper>
  );
};

export default Footer;
