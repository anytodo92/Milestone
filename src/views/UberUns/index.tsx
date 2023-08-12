import Banner from "../Common/Banner";
import Intro from "../Common/Intro";
import ShapeBottom from "../Common/ShapeBottom";
import ShapeTop from "../Common/ShapeTop";
import Contact from "../Common/Contact";
import Team from "../Common/Team";

import { Images } from "../../utils/assets";
import {
  UberUnsWrapper
} from "./styled";

const UberUns = (): JSX.Element => {
  const bannerData = {
    title: 'Milestone Fahrschule<br />Mit Drive zum Ziel',
    description: 'Die Fahrschule mit der nötigen Portion Spass',
    detail: `
    Bei uns bekommst du alles was du brauchst, um erfolgreich zu deinem Führerschein zu kommen. Immer mit der nötigen Portion Spass, fairen Preisen, Transparenz und Sicherheit. Erfahre mehr über unsere Farschule und unsere Fahrlerer:innen.
    `,
    buttonText: 'Das Team',
  }

  const teamData = {
    title: 'Diese Personen<br />stecken hinter Milestone',
    description: 'Unser Team aus Fahrlerer:innen und Kursinstruktor:innen die dir bei deiner Ausbildung zur Seite stehen.',
    list: [
      {
        id: 1,
        image: Images.Thumb_2,
        name: 'Mateen Saifullah',
        description: 'Fahrlerer / Kursinstruktor',
        detail: `
        <ul><li>Tesla Model S</li><li>846 abgeschlossene Fahrprüfungen</li><li>Deutsch / Englisch / Kurdisch</li><li>Deutsch / Englisch / Kurdisch</li></ul>
        `,
        email: 'mateen@milestone-fahrschule.ch',
        phone: '079 601 88 88',
        buttonText: 'Mehr anzeigen'
      },
      {
        id: 2,
        image: Images.Thumb_2,
        name: 'Mateen Saifullah',
        description: 'Fahrlerer / Kursinstruktor',
        detail: `
        <ul><li>Tesla Model S</li>
        <li>846 abgeschlossene Fahrprüfungen</li>
        <li>Deutsch / Englisch / Kurdisch</li></ul>
        `,
        email: 'mateen@milestone-fahrschule.ch',
        phone: '079 601 88 88',
        buttonText: 'Mehr anzeigen'
      },
      {
        id: 3,
        image: Images.Thumb_2,
        name: 'Mateen Saifullah',
        description: 'Fahrlerer / Kursinstruktor',
        detail: `
        <ul><li>Tesla Model S</li>
        <li>846 abgeschlossene Fahrprüfungen</li>
        <li>Deutsch / Englisch / Kurdisch</li></ul>
        `,
        email: 'mateen@milestone-fahrschule.ch',
        phone: '079 601 88 88',
        buttonText: 'Mehr anzeigen'
      },
      {
        id: 4,
        image: Images.Thumb_2,
        name: 'Mateen Saifullah',
        description: 'Fahrlerer / Kursinstruktor',
        detail: `
        <ul><li>Tesla Model S</li>
        <li>846 abgeschlossene Fahrprüfungen</li>
        <li>Deutsch / Englisch / Kurdisch</li></ul>
        `,
        email: 'mateen@milestone-fahrschule.ch',
        phone: '079 601 88 88',
        buttonText: 'Mehr anzeigen'
      },
    ]
  }

  return (
    <UberUnsWrapper>
      <Banner data={bannerData} />
      <Intro />
      <ShapeBottom
        bgColor="#f4f4f4"
        fillColor="#fff"
        height={120}
      />
      <Team data={teamData} />
      <ShapeBottom
        bgColor="#fff"
        fillColor="#f4f4f4"
        height={74}
      />
      <Contact />
    </UberUnsWrapper>
  );
} 

export default UberUns;