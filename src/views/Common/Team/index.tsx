import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Images, Icons } from "../../../utils/assets";
import {
  TeamWrapper
} from "./styled";

type TeamProps = {
  data: any;
}
const Team = ({ data }: TeamProps): JSX.Element => {
  const [align, setAlign] = useState<string>("flex-start");
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      mode: "free",
      slides: {
        perView: "auto",
        spacing: 40
      },
    });

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
    const $slider = document.querySelector(".team .keen-slider");
    const $items = document.querySelectorAll(".team .keen-slider__slide");
    const innerWidth = $items.length * $items[0].clientWidth + 40 * ($items.length - 1);
    // console.log($slider.clientWidth, innerWidth);
    if (($slider.clientWidth - 140) >= innerWidth) {
      setAlign("center");
    } else {
      setAlign("flex-start");
    }
  }

  return (
    <TeamWrapper className="team">
      <div className="content">
        <h2 className="title" dangerouslySetInnerHTML={{ __html: data.title }}></h2>
        <p className="desc">{data.description}</p>
      </div>
      <div className="slide">
        <div className="list keen-slider" ref={sliderRef} style={{ justifyContent: align }}>
          {data.list.map((data1: any, index: number) =>
          <div key={index} className="one keen-slider__slide">
            <div className="pic">
              <div className="bg"></div>
              <img src={data1.image} alt="" />              
            </div>
            <div className={`article ${data1.buttonText ? '' : 'full'}`}>
              <div className="wrapper">
                <h2>{data1.name}</h2>
                {data1.email&&
                  <p className="email">{data1.email}</p>
                }
                {data1.phone&&
                  <p className="phone">{data1.phone}</p>
                }
                {data1.description&&
                  <p className="desc">{data1.description}</p>
                }
                {data1.detail&&
                  <div
                    className="detail"
                    dangerouslySetInnerHTML={{ __html: data1.detail }}
                  ></div>
                }
                {data1.buttonText&&
                  <button className="btn-view-mode">
                  {data1.buttonText}
                  <svg width="22" height="11" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="2.82843" y1="2" x2="14" y2="13.1716" stroke="#84AF8C" stroke-width="4" stroke-linecap="round"/>
                  <line x1="2" y1="-2" x2="17.799" y2="-2" transform="matrix(-0.707107 0.707107 0.707107 0.707107 28 2)" stroke="#84AF8C" stroke-width="4" stroke-linecap="round"/>
                  </svg>
                  </button>
                }
              </div>
            </div>
          </div>
          )} 
        </div> 
      </div>
      <div className="content">
      {data.buttonText&&
        <div className="buttons">
          <a href="/uber-uns">{data.buttonText}</a>
        </div>
      }
      </div>
    </TeamWrapper>
  );
}

export default Team;