import { Images, Icons } from "../../../utils/assets";
import {
  RecommendWrapper
} from "./styled";

const Recommend = (): JSX.Element => {
  const list = [
    {
      id: 1,
      title: 'Motorrad Grundkurs',
      description: 'Im Motorrad Grundkurs lernst du die Grundlagen der Fahrzeugbedienung und das Fahren im Verkehr ...',
      buttonText1: 'Jetzt buchen',
      buttonText2: 'Mehr dazu',
      image: Images.Thumb_4,
      icon: Icons.Car,
    },
    {
      id: 2,
      title: 'Verkehrskunde',
      description: 'Im obligatorischen VKU vermitteln wir dir alle Informationen, damit du dich sicher im Strassenverkehr bewegen kannst ...',
      buttonText1: 'Jetzt buchen',
      buttonText2: 'Mehr dazu',
      image: Images.Thumb_5,
      icon: Icons.Memo,
    },
    {
      id: 3,
      title: 'Nothelfer',
      description: 'Um den Auto- oder Motorradführerschein zu machen benötigst du als Erstes einen gültigen Abschluss des Nothelferkurses ...',
      buttonText1: 'Jetzt buchen',
      buttonText2: 'Mehr dazu',
      image: Images.Thumb_6,
      icon: Icons.Hospital,
    },
  ];
  return (
    <RecommendWrapper>
      <div className="content">
        <div className="title">
          <h1>Unser Kursangebot</h1>
          <img src={Images.UnderlineGreen} alt="" />
        </div>
        <p class="desc">
        In unserem Kursangebot findest du alle benötigten Kurse die du für den erfolgreichen Abschluss deiner Fahrprüfung benötigst. Alle unsere Kurse finden in kleinen Gruppen statt, damit du maximal profitierst und wir individuell auf dich und deine Fragen eingehen können.
        </p>
        <div className="list">
        {list.map((data, index) =>
          <div key={index} className="one">
            <div className="pic">
              <img src={data.image} alt="" />
              <div className="icon">
                <img src={data.icon} alt="" />
              </div>
            </div>
            <div className="article">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <div className="buttons">
                <button>{data.buttonText1}</button>
                <button className="o-line">{data.buttonText1}</button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </RecommendWrapper>
  );
}

export default Recommend;