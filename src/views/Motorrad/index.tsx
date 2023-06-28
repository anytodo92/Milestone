import Banner from "../Common/Banner";
import OurCourse from "../Common/OurCourse";
import Register from "../Common/Register";
import Requirement from "../Common/Requirement";
import ShapeTop from "../Common/ShapeTop";
import Reservation from "../Common/Reservation";
import Contact from "../Common/Contact";

import { Images, Icons } from "../../utils/assets";

import {
  MotrradWrapper
} from "./styled";

const Motrrad = () => {
  const bannerData = {
    title: 'Mit dem Motorrad zur<br />Freiheit auf zwei Rädern',
    description: 'Grunddkurs und Einzellektionen',
    detail: `
    Wir vermitteln dir die nötige Sicherheit, damit du schon bald selbstbewusst mit deinem Motorrad oder Roller in die Kurven liegen kannst. Unsere Fahrlerer:innen stehen dir für Kurse oder Einzellektionen zur Verfügung.
    `,
    buttonText: 'Kursübersicht',
  }

  const ourCourseData = {
    title: 'Grundkurse und Lektionen',
    description: 'Wir bieten Grundkurse für alle Kategorien und auch Einzellektionen, damit du voller selbstvertrauen an deiner Fahrprüfung brillierst.',
    list: [
      {
        id: 1,
        title: '12 Stunden Grundkurs',
        description: `
        <ul><li>Kategorie AM (bis 50ccm, ab 15 Jahren)</li>
        <li>Kategorie A1 (bis 123ccm, ab 15 Jahren)</li>
        <li>Kategorie A2 (A beschränkt, über 11kW, max. 35kM, ab 18 Jahren) ohne Ausweis 
Kat. A1</li></ul>
        `,
      },
      {
        id: 2,
        title: '4 Stunden Grundkurs',
        description: `
        <p>Wer die Kategorie A erlangen will, bereits im Besitz der Kategorie A1 ist und den Grundkurs vor dem 01.01.2021 besucht hat, muss lediglich einen 4 Stündigen Grundkurs absolvieren. Personen die den Lernfahrausweis der Kat. A oder A- noch vor dem 01.01.2021 erhalten haben, müssen ebenfalls nur diesen Kurs absolvieren</p>
        `,
      },
      {
        id: 3,
        title: 'Einzellektionen',
        description: `
        <p>Wir bieten Einzellektionen oder Abos an, damit du nebst der Grundkurse zusätzliche Routine und Sicherheit erlangst. Nimm mit uns Kontakt auf für weitere Informationen.</p>
        `,
      },
    ]
  }

  const requirementData = {
    title: 'Das Wichtigste in Kürze',
    description: `
    <p>Die praktische Grundausbildung (PSG) ist der erste Schritt zum Roller- oder Motorradführerschein. Dieser Kurs mustt du innerhalb von vier Monaten nach Erhalt des Lernfahrausweises absoliveren und ist obligatorisch.</p>
    <br />
    <p>Hier findest du das Wichtigste in Kürze. Solltest du trotzdem noch Fragen haben, kannst du dich gerne <strong>telefonisch</strong> oder über unser <strong>Kontakt-Formular</strong> bei uns melden.</p>
    `,
    image: Images.Thumb_5,
    icon: Icons.Memo,
    list: [
      {
        id: 1,
        title: 'Was lerne ich in dem Kurs?',
        description: `
        Du kannst dich zur praktischen Prüfung anmelden, sobald du den Grundkurs absolviert hast und dich im Strassenverkehr sicher fühlst. Für die Kategorie A1 benötigst du keine praktische Prüfung sofern du im Besitz eines Auto-Führerausweises bist.
        `,
      },
      {
        id: 2,
        title: 'Was darf ich mit dem blauen “L-Schild”?',
        description: `
        Du kannst dich zur praktischen Prüfung anmelden, sobald du den Grundkurs absolviert hast und dich im Strassenverkehr sicher fühlst. Für die Kategorie A1 benötigst du keine praktische Prüfung sofern du im Besitz eines Auto-Führerausweises bist.
        `,
      },
      {
        id: 3,
        title: 'Kann mein Lernfahrausweis verlängert werden?',
        description: `
        Du kannst dich zur praktischen Prüfung anmelden, sobald du den Grundkurs absolviert hast und dich im Strassenverkehr sicher fühlst. Für die Kategorie A1 benötigst du keine praktische Prüfung sofern du im Besitz eines Auto-Führerausweises bist.
        `,
      },
      {
        id: 4,
        title: 'Wann kann ich zur praktischen Prüfung?',
        description: `
        Du kannst dich zur praktischen Prüfung anmelden, sobald du den Grundkurs absolviert hast und dich im Strassenverkehr sicher fühlst. Für die Kategorie A1 benötigst du keine praktische Prüfung sofern du im Besitz eines Auto-Führerausweises bist.
        `,
      },
    ]
  }

  const reservationData = {
    title: 'Einzellektionen für noch<br />mehr Sicherheit',
    sub_title: 'Für CHF 90.-',
    description: 'Einzellektionen',
    detail: 'Buche eine Einzellektion, um noch mehr Sicherheit und Selbstvertrauen zu erlangen oder lediglich als Kontrollfahrt vor deiner praktischen Prüfung',
    buttonText: 'Jetzt anfragen',
    image1: Images.Thumb_3,
    image2: Images.Thumb_1,
  }

  return (
    <MotrradWrapper>
      <Banner data={bannerData} />
      <OurCourse data={ourCourseData} />
      <Register />
      <ShapeTop
        bgColor="#f8f8f8"
        fillColor="#fff"
        height={60}
      />
      <Requirement data={requirementData} />
      <Reservation data={reservationData} />
      <Contact />
    </MotrradWrapper>
  );
}

export default Motrrad;