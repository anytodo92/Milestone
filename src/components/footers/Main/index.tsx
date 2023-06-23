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
          <img src={Images.WhiteLogoUrl} />
          <p className="mt-4">Bruggerstrasse 26</p>
          <p>5400 Baden</p>
          <p>&nbsp;</p>
          <p><strong>Kontakt:</strong></p>
          <p><a className="link" href="mailto:info@dfm-regional.ch">info@dfm-regional.ch</a></p>
          <p><a className="link" href="tel:056 225 12 12">056 225 12 12</a></p>
        </div>
      </section>
      <section>
        <div className="content">
          <div>©Copyright 2023 - DFM Regional AG</div>
          <div className="policy">
            <a className="link" href="/impressum">Impressum</a>
            <a className="link" href="/datenschutz">Datenschutz</a>
          </div>
        </div>
      </section>
    </FooterWrapper>
  );
};

export default Footer;
