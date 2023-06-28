import ShapeBottom from "../Common/ShapeBottom";
import ShapeTop from "../Common/ShapeTop";
import Contact from "../Common/Contact";
import Banner from "../Common/Banner";
import OurCourse from "../Common/OurCourse";
import Register from "../Common/Register";
import Requirement from "../Common/Requirement";
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
  }
  return (
    <VkuWrapper>
      <Banner data={bannerData} />
      <OurCourse />
      <Register />
      <ShapeTop
        bgColor="#f8f8f8"
        fillColor="#fff"
        height={60}
      />
      <Requirement />
      <Contact />
      
    </VkuWrapper>
  );
}

export default Vku;