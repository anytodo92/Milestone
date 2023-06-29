import { useRef, useEffect, useState } from "react";
import { Images, Icons } from "../../../utils/assets";

import {
  CarouselWrapper
} from "./styled";

const Carousel = (): JSX.Element => {
  const elRef = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!elRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      setWidth((elRef.current as any).clientWidth);
    });
    resizeObserver.observe(elRef.current);
  }, []);

  const list = [
    {
      id: 1,
      image: Images.Thumb_8,
      icon: Icons.Play,
      title: 'Einblick in unsere Fahrschule<br />Das sagen unsere Schüler:innen',
      detail: `
      Die Fahrschule Milestone ist sehr flexibel um Oragnisieren - oft sehr ausgebucht, trotzdem konnte man immer einen passenden Termin mit dem Fahrlerer seiner Wahl finden. Mateen ist auf jeden Fall ein sehr kompetenter Fahrlerer, bei dem auch der Spass nicht zu kurz kommt. Er hat mich perfekt auf die Prüfung vorbereitet. Ich kann Mateen und die Fahrschule Milestone mit gutem Gewissen weiterempfehlen!
      `,
      name: 'Mirco B.'
    },
    {
      id: 2,
      image: Images.Thumb_8,
      icon: Icons.Play,
      title: 'Einblick in unsere Fahrschule<br />Das sagen unsere Schüler:innen',
      detail: `
      Die Fahrschule Milestone ist sehr flexibel um Oragnisieren - oft sehr ausgebucht, trotzdem konnte man immer einen passenden Termin mit dem Fahrlerer seiner Wahl finden. Mateen ist auf jeden Fall ein sehr kompetenter Fahrlerer, bei dem auch der Spass nicht zu kurz kommt. Er hat mich perfekt auf die Prüfung vorbereitet. Ich kann Mateen und die Fahrschule Milestone mit gutem Gewissen weiterempfehlen!
      `,
      name: 'Mirco B.'
    },
    {
      id: 3,
      image: Images.Thumb_8,
      icon: Icons.Play,
      title: 'Einblick in unsere Fahrschule<br />Das sagen unsere Schüler:innen',
      detail: `
      Die Fahrschule Milestone ist sehr flexibel um Oragnisieren - oft sehr ausgebucht, trotzdem konnte man immer einen passenden Termin mit dem Fahrlerer seiner Wahl finden. Mateen ist auf jeden Fall ein sehr kompetenter Fahrlerer, bei dem auch der Spass nicht zu kurz kommt. Er hat mich perfekt auf die Prüfung vorbereitet. Ich kann Mateen und die Fahrschule Milestone mit gutem Gewissen weiterempfehlen!
      `,
      name: 'Mirco B.'
    }
  ];
  return (
    <CarouselWrapper className="carousel">
      <div className="content">
        <div className="wrapper">
          <div className="navbtn">
            <div className="left">
              <img src={Icons.ArrowLeft} alt="" />
            </div>
            <div className="right">
              <img src={Icons.ArrowRight} alt="" />
            </div>
          </div>
          <div ref={elRef} className="slide">
            <div className="list" style={{ width: list.length * width }}>
            {list.map((data, index) =>
              <div key={index} className="one" style={{ width: width }}>
                <div className="pic">
                  <img src={data.image} alt="" />
                  <div className="icon">
                    <img src={data.icon} alt="" />
                  </div>
                </div>
                <div className="article">
                  <div className="title">
                    <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
                    <img src={Images.UnderlineGreen} alt="" />
                  </div>
                  <div className="contt">
                    <div className="detail">{data.detail}</div>
                    <span>{data.name}</span>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
          <ul className="indicator">
          {list.map((_, index) =>
            <li key={index} className={index === 0 ? 'active' : ''}></li>
          )}
          </ul>
        </div>
      </div>
    </CarouselWrapper>
  );
}

export default Carousel;
