import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Images, Icons } from "../../../utils/assets";
import {
  RecommendWrapper
} from "./styled";

const Recommend = (): JSX.Element => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      mode: "free",
      slides: {
        perView: 1,
        spacing: 40
      },
      breakpoints: {
        "(min-width: 375px)": {
          slides: {
            perView: 1.2,
            spacing: 40
          },
        },
        "(min-width: 480px)": {
          slides: {
            perView: 1.3,
            spacing: 40
          },
        },
        "(min-width: 570px)": {
          slides: {
            perView: 1.5,
            spacing: 40
          },
        },
        "(min-width: 768px)": {
          slides: {
            perView: 2,
            spacing: 40
          },
        },        
        "(min-width: 900px)": {
          slides: {
            perView: 2.3,
            spacing: 40
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 2.6,
            spacing: 40
          },
        },

        "(min-width: 1280px)": {
          slides: {
            perView: 3,
            spacing: 40
          },
        },
      },
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ]
  )

  const list = [
    {
      id: 1,
      title: 'Motorrad Grundkurs',
      description: 'Im Motorrad Grundkurs lernst du die Grundlagen der Fahrzeugbedienung und das Fahren im Verkehr ...',
      buttonText1: 'Jetzt buchen',
      buttonText2: 'Mehr dazu',
      link1: '/motorrad#termine',
      link2: '/motorrad',
      image: Images.Thumb_4,
      icon: Icons.Car,
    },
    {
      id: 2,
      title: 'Verkehrskunde',
      description: 'Im obligatorischen VKU vermitteln wir dir alle Informationen, damit du dich sicher im Strassenverkehr bewegen kannst ...',
      buttonText1: 'Jetzt buchen',
      buttonText2: 'Mehr dazu',
      link1: '/vku#termine',
      link2: '/vku',
      image: Images.Thumb_5,
      icon: Icons.Memo,
    },
    {
      id: 3,
      title: 'Nothelfer',
      description: 'Um den Auto- oder Motorradführerschein zu machen benötigst du als Erstes einen gültigen Abschluss des Nothelferkurses ...',
      buttonText1: 'Jetzt buchen',
      buttonText2: 'Mehr dazu',
      link1: '/nothelferkurs#termine',
      link2: '/nothelferkurs',
      image: Images.Thumb_6,
      icon: Icons.Hospital,
    },
  ];
  return (
    <RecommendWrapper className="recommend">
      <div className="content">
        <h2 className="title">Unser Kursangebot</h2>
        <div className="desc">
        In unserem Kursangebot findest du alle benötigten Kurse die du für den erfolgreichen Abschluss deiner Fahrprüfung benötigst. Alle unsere Kurse finden in kleinen Gruppen statt, damit du maximal profitierst und wir individuell auf dich und deine Fragen eingehen können.
        </div>
      </div>
      <div className="slide">
        <div className="list keen-slider" ref={sliderRef}>          
          {list.map((data, index) =>
            <div key={index} className="one keen-slider__slide">
              <div className="pic">
                <img src={data.image} alt="" />
                <div className="icon">
                  <img src={data.icon} alt="" />
                </div>
              </div>
              <div className="article">
                <h2>{data.title}</h2>
                <div className="desc">{data.description}</div>
                <div className="buttons">
                  <a href={data.link1}>{data.buttonText1}</a>
                  <a href={data.link2} className="o-line">{data.buttonText1}</a>
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