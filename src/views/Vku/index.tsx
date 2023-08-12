import ShapeBottom from "../Common/ShapeBottom";
import ShapeTop from "../Common/ShapeTop";
import Contact from "../Common/Contact";
import Banner from "../Common/Banner";
import OurCourse from "../Common/OurCourse";
import Register from "../Common/Register";
import Requirement from "../Common/Requirement";

import { Images, Icons } from "../../utils/assets";
import {
  VkuWrapper
} from "./styled";

const Vku = () => {
  const bannerData = {
    title: 'Die Grundlage für mehr Sicherheit<br />im Strassenverkehr',
    description: 'Verkehrskunde - VKU',
    detail: `
    Wir legen grossen Wert auf eine entspannte Lernatmosphäre und gestalten unsere Kurse nach den modernsten Methoden und Konzepte. Unsere Instruktor:innen begleiten dich mit einem guten Mix aus Theorie und Praxis durch die Inhalte. Wir freuen uns auf dich!
    `,
    buttonText: 'Kursübersicht',
    link: '/vku#termine'
  }

  const ourCourseData = {
    title: 'Unsere Kurse',
    description: 'Für jeden das passende Modell - wir bieten unsere Kurse als Abendkurse, am Wochenende oder in Form von Intensivkursen an. Alle Kurse finden ab mind. 6 Teilnehmer:innen statt.',
    list: [
      {
        id: 1,
        title: 'Abendkurse',
        description: `
        <ul><li>4 x 2 Stunden, von 18:00 - 20:00 Uhr</li><li>Montag - Donnerstag</li></ul>
        `,
      },
      {
        id: 2,
        title: 'Intensivkurse',
        description: `
        <ul><li>2 x 4 Stunden, von 18:00 - 22:00 Uhr</li><li>Mittwoch - Donnerstag</li></ul>
        `,
      },
      {
        id: 3,
        title: 'Wochenendkurse',
        description: `
        <ul><li>2 x 4 Stunden</li><li>Freitag, 18:00 - 22:00 Uhr & Samstag 08:00 - 12:00 Uhr</li></ul>
        `,
      },
    ]
  }

  const requirementData = {
    title: 'Das Wichtigste in Kürze',
    description: `
    <p>Der Verkehrskundeunterricht (VKU), ist obligatorisch damit du einen Führerschein, für die Kategorie B (Auto), A (Motorrad) oder der Unterkategorie A1 (Moped) erwerben kannst. Um den VKU zu besuchen, musst du in Besitz eines Lernfahrausweises sein.</p>
    <br />
    <p>In diesem Kurs bereitest du dich durch praxisnahe Beispiele aus echten Fahrsituationen optimal auf den Strassenverkehr vor. Wir empfehlen den Kurs bereits vor deiner ersten Fahrstunden zu absolvieren.</p>
    <br />
    <p>Hier findest du das Wichtigste in Kürze. Solltest du trotzdem noch Fragen haben, kannst du dich gerne <a>telefonisch</a> oder über unser <a>Kontakt-Formular</a> bei uns melden.</p>
    `,
    image: Images.Thumb_5,
    icon: Icons.Memo,
    list: [
      {
        id: 1,
        title: 'Wie lange dauert der VKU?',
        description: `
        Seit Anfangs 2021 ist der VKU unbefristet gültig.
        `,
      },
      {
        id: 2,
        title: 'Was sind die Voraussetzungen?',
        description: `
        Seit Anfangs 2021 ist der VKU unbefristet gültig.
        `,
      },
      {
        id: 3,
        title: 'Was lerne ich im VKU?',
        description: `
        Seit Anfangs 2021 ist der VKU unbefristet gültig.
        `,
      },
      {
        id: 4,
        title: 'Wie lange ist der VKU gültig?',
        description: `
        Seit Anfangs 2021 ist der VKU unbefristet gültig.
        `,
      },
    ]
  }

  return (
    <VkuWrapper>
      <Banner data={bannerData} />
      <OurCourse data={ourCourseData} />
      <Register />
      <ShapeBottom
        bgColor="#f4f4f4"
        fillColor="#fff"
        height={60}
      />
      <Requirement data={requirementData} />
      <ShapeBottom
        bgColor="#fff"
        fillColor="#f4f4f4"
        height={60}
      />
      <Contact />
    </VkuWrapper>
  );
}

export default Vku;