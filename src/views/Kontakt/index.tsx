import Banner from "../Common/Banner";
import ContactInfo from "../Common/ContactInfo";
import { Images, Icons } from "../../utils/assets";

import {
  KontaktWrapper,
} from "./styled";

const Kontakt = (): JSX.Element => {
  const bannerData = {
    title: 'Nimm mit uns<br />Kontakt auf',
    description: 'Immer für dich da',
    detail: `
    Solltest du weitere Fragen zu unsere Fahrschule haben, sind wir dür dich da. Fülle das untenstehende <strong>Kontaktformular</strong> aus oder nimm per <strong>Telefon</strong> oder <strong>Whats App</strong> mit uns Kontakt auf. Wir freuen uns, von dir zu hören.
    `,
    buttonText: 'Kursübersicht',
  }

  return (
    <KontaktWrapper>
      <Banner data={bannerData} />
      <ContactInfo />
    </KontaktWrapper>
  );
};

export default Kontakt;