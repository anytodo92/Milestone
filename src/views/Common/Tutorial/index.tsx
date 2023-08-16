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
      video_link: 'https://www.instagram.com/reel/CWjDVc_IMes/?igshid=NjFiZTE0ZDQ0ZQ%3D%3D',
      thumb_image: Images.Thumb_9,
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
    <TutorialWrapper className="tutorial">
      <div className="content">
        <div className="article">
          <h2 className="title">Milestone - Deine Fahrschule<br />von A bis Z</h2>
          <div className="desc">
            <p>Wie begleiten dich von A - Z und kümmern uns um alle Belangen auf dem Weg zu deinem Führerschein. Du musst dir keine Gedanken machen, wie und wo es mit deiner Fahrausbildung weitergeht. Wir übernehmen das für dich und führen dich durch das Fahrschuld-Labyrinth.</p>
            <p><br/></p>
            <p>Falls du noch Fragen hast, kannst du uns gerne via <a href="https://www.whatsapp.com">WhatsApp</a> oder per <a href="tel:123456">Telefon</a> kontaktieren.</p>
          </div>
          <div className="accordion">
          {list.map((data, index) =>
            <div key={index} className="one active">
              <div className="subject">
                <h5>{data.title}</h5>
                <span>
                  <img src={Icons.ArrowDown} alt="" />
                </span>
              </div>
              <div className="detail">
                <div className="text" dangerouslySetInnerHTML={{ __html: data.description }}></div>
                {(data.video_link && data.thumb_image)&&
                  <div className="thumb">
                    <p>Zum Video:</p>
                    <a href={data.video_link} target="_blank">
                      <img src={data.thumb_image} alt="" />
                      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.9023 49.8047C38.5254 49.8047 49.8047 38.501 49.8047 24.9023C49.8047 11.2793 38.501 0 24.8779 0C11.2793 0 0 11.2793 0 24.9023C0 38.501 11.3037 49.8047 24.9023 49.8047ZM24.9023 45.6543C13.3789 45.6543 4.1748 36.4258 4.1748 24.9023C4.1748 13.3789 13.3545 4.15039 24.8779 4.15039C36.4014 4.15039 45.6543 13.3789 45.6543 24.9023C45.6543 36.4258 36.4258 45.6543 24.9023 45.6543ZM20.3369 34.4482L34.2285 26.2207C35.2539 25.6348 35.2295 24.2188 34.2285 23.6084L20.3369 15.3809C19.2871 14.7705 17.8955 15.2344 17.8955 16.4307V33.3984C17.8955 34.5703 19.1895 35.1318 20.3369 34.4482Z" fill="white" fill-opacity="0.85"/>
                      </svg>
                    </a>
                  </div>
                }
              </div>
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
            <p>Badenerstrasse 1<br />5400 Baden</p>
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