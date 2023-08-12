import Banner from "../Common/Banner";
import ContactInfo from "../Common/ContactInfo";
import ContactForm from "../Common/ContactForm";
import Map from "../Common/Map";
import ShapeBottom from "../Common/ShapeBottom";

import { Images, Icons } from "../../utils/assets";

import {
  KontaktWrapper,
} from "./styled";

const Kontakt = (): JSX.Element => {
  const bannerData = {
    title: 'Nimm mit uns<br />Kontakt auf',
    description: 'Immer für dich da',
    detail: `
    Solltest du weitere Fragen zu unsere Fahrschule haben, sind wir dür dich da. Fülle das untenstehende <a>Kontaktformular</a> aus oder nimm per <a>Telefon</a> oder <a>Whats App</a> mit uns Kontakt auf. Wir freuen uns, von dir zu hören.
    `,
    buttonText: '',
  }

  return (
    <KontaktWrapper>
      <Banner data={bannerData} />
      <ContactForm />
      <ShapeBottom
        bgColor="#f4f4f4"
        fillColor="#fff"
        height={25}
      />
      <ContactInfo />
      <Map />
    </KontaktWrapper>
  );
};

export default Kontakt;