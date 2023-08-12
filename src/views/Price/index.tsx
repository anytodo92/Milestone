import Banner from "../Common/Banner";
import Contact from "../Common/Contact";
import Price1 from "../Common/Price";
import ShapeBottom from "../Common/ShapeBottom";

import { Images, Icons } from "../../utils/assets";
import {
  PriceWrapper
} from "./styled";

const Price = () => {
  const bannerData = {
    title: 'Lektionen, Kurse<br />und weitere Gebühren',
    description: 'Unsere Preise',
    detail: `
    Wir setzen auf Transparenz und faire Preise. Hier findest du eine Kostenübersicht von unseren Preisen und weitere Gebühren, die für den Erwerb eines Führerscheins anfallen.
    `,
    buttonText: '',
  }

  const priceData1 = {
    title: 'Fahrstunden',
    list: [
      {
        description: 'Einzellektionen / Probelektion',
        info1: 'Auto (Kat. B) / Motorrad',
        info2: 'Für CHF 90.-'
      },
      {
        description: 'Einzellektionen',
        info1: 'Taxi BPT',
        info2: 'Für CHF 90.-'
      },
      {
        description: '10er Abo',
        info1: 'CHF 85 pro Lektion',
        info2: 'Für CHF 850.-'
      },
      {
        description: '20er Abo',
        info1: 'CHF 85 pro Lektion',
        info2: 'Für CHF 1600.-'
      }
    ],
  }

  const priceData2 = {
    title: 'Kurse',
    list: [
      {
        description: 'Verkehrskunde (VKU)',
        info1: '2- oder 4 tägig',
        info2: 'Für CHF 90.-'
      },
      {
        description: 'Nothelfer',
        info1: '2- oder 3 tätgig',
        info2: 'Für CHF 90.-'
      },
      {
        description: 'Motorrad Grundkurs',
        info1: '12 Stunden',
        info2: 'Für CHF 850.-'
      },
      {
        description: 'Motorrad Grundkurs',
        info1: '4 Stunden',
        info2: 'Für CHF 1600.-'
      }
    ],
  }

  const priceData3 = {
    title: 'Weitere Kosten',
    list: [
      {
        description: 'Einmalige Kosten',
        info1: 'Administration / Versicherung',
        info2: 'Für CHF 90.-'
      },
      {
        description: 'Pro Termin',
        info1: 'Prüfungspauschale',
        info2: 'Für CHF 90.-'
      }
    ],
  }

  return (
    <PriceWrapper>
      <Banner data={bannerData} />
      <Price1 data={priceData1} />
      <Price1 data={priceData2} />
      <Price1 data={priceData3} />
      <div style={{ height: 50 }}></div>
      <ShapeBottom
        bgColor="#f4f4f4"
        fillColor="#fff"
        height={77}
      />
      <Contact />
    </PriceWrapper>
  );
}

export default Price;