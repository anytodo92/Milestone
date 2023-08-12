import Banner from "../Common/Banner";
import OurCourse from "../Common/OurCourse";
import Register from "../Common/Register";
import Requirement from "../Common/Requirement";
import ShapeTop from "../Common/ShapeTop";
import ShapeBottom from "../Common/ShapeBottom";
import Contact from "../Common/Contact";

import { Images, Icons } from "../../utils/assets";

import {
  NothelferWrapper
} from "./styled";

const Nothelfer = () => {
  const bannerData = {
    title: 'Gewusst wie -<br />Erste Hilfe rettet Leben',
    description: 'Nothelferkurs',
    detail: `
    Obligatorisch und durchaus sinnvoll. Du lernst Leben zu retten - wir vermitteln dir das nötige Selbstvertrauen und geben dir die Wekrzeuge und Techniken an die Hand, damit du schnell und vorallem richtig Handeln lernst.
    `,
    buttonText: 'Kursübersicht',
    link: '/nothelferkurs#termine'
  }

  const ourCourseData = {
    title: 'Unsere Kurse',
    description: 'Damit du mit deiner Ausbildung zum Auto- oder Motorradführerschein beginnen kannst, benötigst du einen gültigen Nothelferausweis. Bei Mileston findest du verschieden Formate, damit du möglichst schnell zu deinem Ausweis kommst.',
    list: [
      {
        id: 1,
        title: '2-Tägig',
        description: `
        <ul><li>4 x 2 Stunden, von 18:00 - 20:00 Uhr</li><li>Montag - Donnerstag</li></ul>
        `,
      },
      {
        id: 2,
        title: '3-Tägig',
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
    <p>Um einen Auto- oder Motorradführerschein zu erhalten, ist es obligatorisch einen Nothelferkurs absolviert zu haben.</p>
    <br />
    <p>In der Schweiz sind alle aus moralischer wie auch aus gesetzlicher Sicht dazu verpflichtet, Nothilfe zu leisten. In unserem Kurs eignest du dir das nötige Wissen an, um tatsächlich zu helfen und womöglich Leben zu retten.</p>
    <br />
    <p>Hier findest du das Wichtigste in Kürze. Solltest du trotzdem noch Fragen haben, kannst du dich gerne <a>telefonisch</a> oder über unser <a>Kontakt-Formular</a> bei uns melden.</p>
    `,
    image: Images.Thumb_5,
    icon: Icons.Memo,
    list: [
      {
        id: 1,
        title: 'Was lerne ich in dem Kurs?',
        description: `
        Ein Nothilfeausweis ist sechs Jahre lang gültig. 
        `,
      },
      {
        id: 2,
        title: 'Wann erhalte ich den Nothilfeausweis?',
        description: `
        Ein Nothilfeausweis ist sechs Jahre lang gültig. 
        `,
      },
      {
        id: 3,
        title: 'Kann ein Kurs abgesagt oder verschoben werden?',
        description: `
        Ein Nothilfeausweis ist sechs Jahre lang gültig. 
        `,
      },
      {
        id: 4,
        title: 'Wie lange ist der erworbene Ausweis gültig?',
        description: `
        Ein Nothilfeausweis ist sechs Jahre lang gültig. 
        `,
      },
    ]
  }

  return (
    <NothelferWrapper>
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
    </NothelferWrapper>
  );
}

export default Nothelfer;