import {
  CourseWrapper
} from "./styled";
import {
  Images
} from "../../../utils/assets";

const Course = (): JSX.Element => {
  const list = [
    {
      id: 1,
      title: 'CHF 90 pro Lektion',
      description: 'Einzellektion',
      detail: `
      Du brauchst lediglich ein paar wenige Lektionen zur Auffrischung oder möchtest lieber einzeln bezahlen?
      `,
      buttonText: 'Jetzt anfragen',
      image: '',
    },
    {
      id: 2,
      title: 'CHF 85 pro Lektion',
      description: '10er Abo für CHF 850.-',
      detail: `
      <ul><li>10 Fahrstunden</li><li>CHF 30 Gutschein für VKU oder Nothelfer</li><li>Fehrlehrer deiner Wahl</li></ul>
      `,
      buttonText: 'Jetzt anfragen',
      image: Images.Thumb_7,
    },
    {
      id: 3,
      title: 'CHF 80 pro Lektion',
      description: '20er Abo für CHF 1600.-',
      detail: `
      <ul><li>20 Fahrstunden</li><li>CHF 30 Gutschein für VKU oder Nothelfer</li><li>Fehrlehrer deiner Wahl</li></ul>
      `,
      buttonText: 'Jetzt anfragen',
      image: '',
    },
  ];
  return (
    <CourseWrapper className="course">
      <div className="content">
        <div className="title">
          <h1>Einzellektionen & Pakete der<br />Fahrschule Milestone</h1>
          <img src={Images.UnderlineGreen} alt="" />
        </div>
        <div className="list">
        {list.map((data, index) =>
          <div key={index} className={`one ${index === 1 ? 'spec' : ''}`}>
            <div className="wrapper">
              <div className="pic">
                {index === 1&& <>
                  <img src={data.image} alt="" />
                  <img className="mask" src={Images.Mask} alt="" />
                </>}
              </div>
              <div className="article">
                <div className="desc">{data.description}</div>
                <h5>{data.title}</h5>
                <div
                  className="detail"
                  dangerouslySetInnerHTML={{ __html: data.detail }}
                >
                </div>
                <button>{data.buttonText}</button>
              </div>
            </div>
          </div>
        )}
        </div>
        <div className="more">
          Eine Administrationspauschale von CHF 90 kommt einmalig dazu. Diese Pauschale gilt nicht für Probelektionen.<br />
          Mehr Informationen zu den EInzelpreisen findest du&nbsp; 
          <a href="#" className="link">hier</a>.
        </div>
      </div>
    </CourseWrapper>
  );
}

export default Course;