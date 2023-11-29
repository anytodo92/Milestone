import { useState } from "react";

import Banner from "../Common/Banner";
import Contact from "../Common/Contact";
import ShapeBottom from "../Common/ShapeBottom";
import ShapeTop from "../Common/ShapeTop";

import PhotoCapture from "../../components/modals/PhotoCapture";
import {
  RatenzahlungWrapper,
  RatenzahlungFormWrapper,
} from "./styled";

const Ratenzahlung = (): JSX.Element => {
  const [photoCapturePopupOptions, setPhotoCapturePopupOptions] = useState<any>({ opened: false, id: 0 });
  const [hasPhoto1, setHasPhoto1] = useState<boolean>(false);
  const [hasPhoto2, setHasPhoto2] = useState<boolean>(false);

  const bannerData = {
    title: 'Dein Paket auf<br/>Raten',
    detail: `
    Du möchtest gleich mit einem unserer Pakete durchstarten und die Kosten auf die nächsten Monate verteilen? Kein Problem - wähle ein 5er, 10er oder 20er Abo und beantrage eine Ratenzahlung.
    `
  };

  const packageList = [
    {
      id: 1,
      title: "5er Abo",
      description: "Ab CHF 41.20 pro Monat",
    },
    {
      id: 2,
      title: "10er Abo",
      description: "Ab CHF 77.85 pro Monat",      
    },
    {
      id: 3,
      title: "20er Abo",
      description: "Ab CHF 146.50 pro Monat",
    }
  ];

  const installmentList = [
    {
      id: 1,
      title: "3 Monate",
      description: "Pro Monat: CHF 156.15 | Total: CHF 468.75",
    },
    {
      id: 2,
      title: "6 Monate",
      description: "Pro Monat: CHF 79.05 | Total: CHF 474.70",      
    },
    {
      id: 3,
      title: "12 Monate",
      description: "Pro Monat: CHF 41.20 | Total: CHF 494.50",
    }
  ];

  const handleTakePhoto = (video) => {
    if (photoCapturePopupOptions.id === 1) {
      setHasPhoto1(true);
    }

    if (photoCapturePopupOptions.id === 2) {
      setHasPhoto2(true);
    }

    let canvas = document.querySelector(`#c_photo${photoCapturePopupOptions.id}`);
    canvas.getContext('2d').drawImage(video, 0, 0, video.width, video.height);
  };

  return (
    <RatenzahlungWrapper>
      <Banner data={bannerData} />
      <RatenzahlungFormWrapper className="ratenzahlung-form">
        <div className="content">
          <h2 className="title">Wähle dein Paket</h2>
          <div className="package-list">
          {packageList.map((item: any, index: number) =>
            <div key={index} className="one">
              <div className="lt">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
              <div className="rt">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="0.5" y="0.5" width="35" height="35" rx="4.5" fill="white" stroke="#CACACA"/>
                  <path d="M26.9049 10.0588L15.8444 21.1193L11.7449 17.0197C10.8461 16.121 9.39708 16.121 8.4983 17.0197C7.59952 17.9185 7.59952 19.3675 8.4983 20.2663L14.2211 25.9892C14.6705 26.4386 15.2574 26.6586 15.8444 26.6586C16.4314 26.6586 17.0183 26.4386 17.4677 25.9892L30.1423 13.3054C31.0411 12.4067 31.0411 10.9576 30.1423 10.0588C29.2436 9.1692 27.7945 9.1692 26.9049 10.0588Z" fill="#84AF8C"/>
                </svg>
              </div>
            </div>
          )}
          </div>
          <h5>Anzahl Raten:</h5>
          <div className="installment-list">
          {installmentList.map((item: any, index: number) =>
            <div key={index} className="one">
              <div className="lt">
                <div className="radio"></div>
              </div>
              <div className="rt">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </div>
          )}
          </div>
          <div className="form">
            <div className="alert"></div>
            <div className="wrapper">
              <form>
                <input type="file" name="photo1" />
                <input type="file" name="photo2" />
                <div className="fields">
                  <div className="lt">
                    <h5>Deine Angaben</h5>
                    <fieldset>
                      <div className="rw">
                        <div className="form-group">
                          <input type="text" name="firstname" placeholder="Vorname" required />
                        </div>
                        <div className="form-group">
                          <input type="text" name="lastname" placeholder="Name" required />
                        </div>
                      </div>
                      <div className="rw">
                        <div className="form-group">
                          <input type="text" name="email" placeholder="E-Mail" required />
                        </div>
                        <div className="form-group">
                          <input type="text" name="phone" placeholder="Handynummer" required />
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="rt">
                    <h5>Alle Wohnadressen der letzten 24 Monate</h5>
                    <fieldset>
                      <div className="rw">
                        <div className="form-group">
                          <input type="text" name="street" placeholder="Strasse / Nr" required />
                        </div>
                        <div className="form-group">
                          <input type="text" name="city" placeholder="PLZ / Ort" required />
                        </div>
                        <button>
                          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" fill="#0D0D0D"/>
                          </svg>
                        </button>
                      </div>
                    </fieldset>
                    <div className="action">
                      <button type="button">+</button>
                      <label>Adresse hinzufügen</label>
                    </div>
                  </div>
                </div>
                <div className="capture">
                  <h5>Ausweiskopie</h5>
                  <div className="action">
                    <div className="wrapper2">
                      <button type="button" onClick={() => setPhotoCapturePopupOptions({ opened: true, id: 1 })}>
                        Vorderseite hochladen
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
                          <g clip-path="url(#clip0_4838_6385)">
                            <path d="M2.96633 20.368H23.0337C24.9833 20.368 26 19.3151 26 17.3756V5.63864C26 3.69915 24.9833 2.64931 23.0337 2.64931H19.7097C18.7921 2.64931 18.5674 2.59145 17.9847 1.93903L17.0244 0.849578C16.4341 0.197602 15.9914 0 14.9443 0H10.7803C9.72535 0 9.29057 0.197602 8.69234 0.849578L7.73207 1.93903C7.17308 2.5643 6.91366 2.64931 6.01502 2.64931H2.96633C1.02152 2.64931 0 3.69915 0 5.63864V17.3756C0 19.3151 1.02152 20.368 2.96633 20.368ZM13 17.5345C9.62357 17.5345 6.89996 14.7939 6.89996 11.3524C6.89996 7.91411 9.62357 5.17358 13 5.17358C16.4002 5.17358 19.1048 7.91411 19.1048 11.3524C19.1048 14.7939 16.3733 17.5345 13 17.5345ZM13 16.6924C15.9161 16.6924 18.2665 14.3129 18.2665 11.3524C18.2665 8.39524 15.9161 6.01252 13 6.01252C10.0918 6.01252 7.73827 8.39524 7.73827 11.3524C7.73827 14.3129 10.087 16.6924 13 16.6924ZM19.7951 7.32219C19.7951 6.64574 20.3924 6.03428 21.0999 6.03428C21.7646 6.03428 22.3588 6.64574 22.3588 7.32219C22.3588 8.02406 21.7646 8.62617 21.0999 8.60527C20.3924 8.58123 19.7951 8.0592 19.7951 7.32219Z" fill="black" fill-opacity="0.85"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_4838_6385">
                              <rect width="26" height="21" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                      <div className="photo-holder" style={{ display: hasPhoto1 ? "inline-block" : "none" }}>
                        <canvas id="c_photo1" width="320" height="240"></canvas>
                        <button type="button" className="close" onClick={() => setHasPhoto1(false)}>
                          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" fill="#0D0D0D"></path></svg>
                        </button>
                      </div>                    
                    </div>
                    <div className="wrapper2">
                      <button type="button" onClick={() => setPhotoCapturePopupOptions({ opened: true, id: 2 })}>
                        Rückseite hochladen
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
                          <g clip-path="url(#clip0_4838_6385)">
                            <path d="M2.96633 20.368H23.0337C24.9833 20.368 26 19.3151 26 17.3756V5.63864C26 3.69915 24.9833 2.64931 23.0337 2.64931H19.7097C18.7921 2.64931 18.5674 2.59145 17.9847 1.93903L17.0244 0.849578C16.4341 0.197602 15.9914 0 14.9443 0H10.7803C9.72535 0 9.29057 0.197602 8.69234 0.849578L7.73207 1.93903C7.17308 2.5643 6.91366 2.64931 6.01502 2.64931H2.96633C1.02152 2.64931 0 3.69915 0 5.63864V17.3756C0 19.3151 1.02152 20.368 2.96633 20.368ZM13 17.5345C9.62357 17.5345 6.89996 14.7939 6.89996 11.3524C6.89996 7.91411 9.62357 5.17358 13 5.17358C16.4002 5.17358 19.1048 7.91411 19.1048 11.3524C19.1048 14.7939 16.3733 17.5345 13 17.5345ZM13 16.6924C15.9161 16.6924 18.2665 14.3129 18.2665 11.3524C18.2665 8.39524 15.9161 6.01252 13 6.01252C10.0918 6.01252 7.73827 8.39524 7.73827 11.3524C7.73827 14.3129 10.087 16.6924 13 16.6924ZM19.7951 7.32219C19.7951 6.64574 20.3924 6.03428 21.0999 6.03428C21.7646 6.03428 22.3588 6.64574 22.3588 7.32219C22.3588 8.02406 21.7646 8.62617 21.0999 8.60527C20.3924 8.58123 19.7951 8.0592 19.7951 7.32219Z" fill="black" fill-opacity="0.85"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_4838_6385">
                              <rect width="26" height="21" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                      <div className="photo-holder" style={{ display: hasPhoto2 ? "inline-block" : "none" }}>
                        <canvas id="c_photo2" width="320" height="240"></canvas>
                        <button type="button" className="close" onClick={() => setHasPhoto2(false)}>
                          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" fill="#0D0D0D"></path></svg>
                        </button>
                      </div>    
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="check">
              <div className="check-wrapper">
                <label className="checkbox-wrapper">
                  Ich akzeptiere die <a href="#">allgemeinen Geschäftsbedingungen</a>. Die <a href="#">Datenschutzerklärung</a> habe ich gelesen und verstandn<br/>
                  <strong>Die Anfrage ist verbindlich und der Betrag wird nach erfolgreicher Prüfung in Rechnung gestellt.</strong>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div></div>
            </div>
            <div className="buttons">
              <button type="submit">Ratenzahlung beantragen</button>
            </div>
          </div>
        </div>
      </RatenzahlungFormWrapper>
      <ShapeBottom
        bgColor="#f4f4f4"
        fillColor="#fff"
        height={55}
      />
      <Contact />
      {photoCapturePopupOptions.opened&&
        <PhotoCapture
          opened={photoCapturePopupOptions.opened}
          onTakePhoto={(video: any) => handleTakePhoto(video)}
          onClose={() => setPhotoCapturePopupOptions({ opened: false, id: 0 })}
        />
      }
    </RatenzahlungWrapper>
  );
};

export default Ratenzahlung;