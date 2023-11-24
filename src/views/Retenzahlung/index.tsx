import Banner from "../Common/Banner"
import {
  RatenzahlungWrapper
} from "./styled";

const Ratenzahlung = (): JSX.Element => {
  const bannerData = {
    title: 'Faire Preise, Fahrspass und<br />Kompetenz',
    detail: `
    Unsere erfahreren Fahreler:innen begleiten dich auf dem gesamten Weg zu deinem Führerschein. Ab der ersten Probelektion bis hin zur Prüfung.
    `,
    buttonText: 'Probelektion buchen',
    link: {
      text: "JETZT NEU: Ratenzahlung",
      url: "/ratenzahlung"
    }
  }

  return (
    <RatenzahlungWrapper>
      <Banner data={bannerData} />
    </RatenzahlungWrapper>
  );
};

export default Ratenzahlung;