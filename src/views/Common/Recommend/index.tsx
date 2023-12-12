import { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Images, Icons } from "../../../utils/assets";
import {
  RecommendWrapper
} from "./styled";

const Recommend = (): JSX.Element => {
  const [align, setAlign] = useState<string>("flex-start");
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      mode: "free",
      slides: {
        perView: "auto",
        spacing: 40
      },
    }
  )

  useEffect(() => {
    const handleWindowResize = () => {
      adjustAlign();
    };

    window.addEventListener('resize', handleWindowResize);

    adjustAlign();

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const adjustAlign = () => {
    const $slider = document.querySelector(".recommend .keen-slider");
    const $items = document.querySelectorAll(".recommend .keen-slider__slide");
    const innerWidth = $items.length * $items[0].clientWidth + 40 * ($items.length - 1);
    console.log($slider.clientWidth, innerWidth);
    if (($slider.clientWidth - 140) >= innerWidth) {
      setAlign("center");
    } else {
      setAlign("flex-start");
    }
  }

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
        <div className="list keen-slider" ref={sliderRef} style={{ justifyContent: align }}>          
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