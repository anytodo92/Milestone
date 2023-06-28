import { Images, Icons } from "../../../utils/assets";

import {
  RequirementWrapper
} from "./styled";

const Requirement = (): JSX.Element => {
  const list = [
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
  ];

  return (
    <RequirementWrapper>
      <div className="content">
        <div className="pic">
          <img src={Images.Thumb_5} alt="" />
          <div className="icon">
            <img src={Icons.Memo} alt="" />
          </div>
        </div>
        <div className="article">
          <div className="title">
            <h1>Das Wichtigste in Kürze</h1>
            <img src={Images.UnderlineGreen} alt="" />
          </div>
          <div className="desc">
            <p>Der Verkehrskundeunterricht (VKU), ist obligatorisch damit du einen Führerschein, für die Kategorie B (Auto), A (Motorrad) oder der Unterkategorie A1 (Moped) erwerben kannst. Um den VKU zu besuchen, musst du in Besitz eines Lernfahrausweises sein.</p>
            <br />
            <p>In diesem Kurs bereitest du dich durch praxisnahe Beispiele aus echten Fahrsituationen optimal auf den Strassenverkehr vor. Wir empfehlen den Kurs bereits vor deiner ersten Fahrstunden zu absolvieren.</p>
            <br />
            <p>Hier findest du das Wichtigste in Kürze. Solltest du trotzdem noch Fragen haben, kannst du dich gerne <strong>telefonisch</strong> oder über unser <strong>Kontakt-Formular</strong> bei uns melden.</p>
          </div>
          <div className="accordion">
          {list.map((data, index) =>
            <div key={index} className="one">
              <div className="subject">
                <h5>{data.title}</h5>
                <span>
                  <img src={Icons.ArrowDown} alt="" />
                </span>
              </div>
              <div
                className="detail"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>
            </div>
          )}
          </div>
        </div>
      </div>
    </RequirementWrapper>
  );
}

export default Requirement;