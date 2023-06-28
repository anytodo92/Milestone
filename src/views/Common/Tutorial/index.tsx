import { Images, Icons } from "../../../utils/assets";
import {
  TutorialWrapper
} from "./styled";

const Tutorial = (): JSX.Element => {
  const list = [
    {
      id: 1,
      title: 'Was erwartet mich in einer Probelektion?',
      description: `
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      `,
    },
    {
      id: 2,
      title: 'Wieviele Fahrstunden werden benötigt?',
      description: `
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      `,
    },
    {
      id: 3,
      title: 'Schalten oder Automat?',
      description: `
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      `,
    },
    {
      id: 4,
      title: 'Kann ich private Lernfahrten machen?',
      description: `
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      `,
    },
  ];
  return (
    <TutorialWrapper>
      <div className="content">
        <div className="article">
          <div className="title">
            <h1>Milestone - Deine Fahrschule<br />von A bis Z</h1>
            <img src={Images.UnderlineGreen} alt="" />
          </div>
          <div className="desc">
            <p>Wie begleiten dich von A - Z und kümmern uns um alle Belangen auf dem Weg zu deinem Führerschein. Du musst dir keine Gedanken machen, wie und wo es mit deiner Fahrausbildung weitergeht. Wir übernehmen das für dich und führen dich durch das Fahrschuld-Labyrinth.</p>
            <p><br/></p>
            <p>Falls du noch Fragen hast, kannst du uns gerne via <strong>WhatsApp</strong> oder per <strong>Telefon</strong> kontaktieren.</p>
          </div>
          <div className="accordion">
          {list.map((data, index) =>
            <div className="one">
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
        <div className="location">
          <div className="map">
            <img src={Images.Map_1} alt="" />
          </div>
          <div className="info">
            <h5>Fahrschule Milestone</h5>
            <p className="mt-20">Badenerstrasse 1<br />5400 Baden</p>
            <p className="mt-20">
              <a href="mailto:info@milestone-fahrschule.ch">info@milestone-fahrschule.ch</a>
            </p>
            <p>
              <a href="tel: 056 222 12 34">056 222 12 34</a>
            </p>
          </div>
        </div>
      </div>
    </TutorialWrapper>
  );
}

export default Tutorial;