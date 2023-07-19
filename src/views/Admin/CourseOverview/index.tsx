import Banner from "../../Common/Banner";
import { Images, Icons } from "../../../utils/assets";
import {
  CourseOverviewWrapper,
  CourseListWrapper,
} from "./styled";

const CourseOverview = (): JSX.Element => {
  const bannerData = {
    title: 'Kursübersicht',
    description: 'Admin',
  }

  const list = [
    {
      id: 1,
      address: 'Badenerstrasse 3, 5400 Baden',
      info1: '4 /12',
      info2: 'Preis inkl. Material',
      mark: 'Intensivkurse',
      histories: [
        {
          date: 'Mittwoch, 19. Juli 2023',
          time: '18:00 - 20:00 Uhr & 20:00 - 22:00 Uhr',
        },
        {
          date: 'Donnerstag, 20. Juli 2023',
          time: '18:00 - 20:00 Uhr & 20:00 - 22:00 Uhr',
        },
      ],
      persons: [
        {
          name: 'Tobias Meier',
          email: 'tobias.meier@gmail.ch',
          address: 'Badenerstrasse 1, 5400 Baden',
          phone: '+41 79 398 34 95',
          birthdate: '29.07.1985',
          driver_cert_number: '12391010'
        },
        {
          name: 'Tobias Meier',
          email: 'tobias.meier@gmail.ch',
          address: 'Badenerstrasse 1, 5400 Baden',
          phone: '+41 79 398 34 95',
          birthdate: '29.07.1985',
          driver_cert_number: '12391010'
        },
      ],
      opened: false,
    },
    {
      id: 2,
      address: 'Badenerstrasse 3, 5400 Baden',
      info1: '4 / 12',
      info2: 'Preis inkl. Material',
      mark: 'Intensivkurse',
      histories: [
        {
          date: 'Mittwoch, 19. Juli 2023',
          time: '18:00 - 20:00 Uhr & 20:00 - 22:00 Uhr',
        },
        {
          date: 'Donnerstag, 20. Juli 2023',
          time: '18:00 - 20:00 Uhr & 20:00 - 22:00 Uhr',
        },
      ],
      persons: [],
      opened: false,
    },    
    {
      id: 3,
      address: 'Badenerstrasse 3, 5400 Baden',
      info1: '4 / 12',
      info2: 'Preis inkl. Material',
      mark: 'Abendkurs',
      histories: [
        {
          date: 'Monatag, 17. Juli 2023',
          time: '18:00 - 20:00 Uhr',
        },
        {
          date: 'Dienstag, 18. Juli 2023',
          time: '18:00 - 20:00 Uhr',
        },
        {
          date: 'Mittwoch, 19. Juli 2023',
          time: '18:00 - 20:00 Uhr',
        },
        {
          date: 'Donnerstag, 20. Juli 2023',
          time: '18:00 - 20:00 Uhr',
        },        
      ],
      persons: [],
      opened: false,
    },
  ]

  return (
    <CourseOverviewWrapper>
      <Banner data={bannerData} />
      <CourseListWrapper>
        <div className="content">
          <div className="filter">
            <div className="box opened">
              <div className="selected-wrapper">
                <div className="tags">
                  <label>Kurstyp:</label>
                  <span className="item">Abendkurse</span>
                  <span className="item">Intensivkurse</span>
                </div>
                <div className="btn">
                  <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.82843" y1="2" x2="14" y2="13.1716" stroke="#84AF8C" stroke-width="4" stroke-linecap="round"/>
                    <line x1="2" y1="-2" x2="17.799" y2="-2" transform="matrix(-0.707107 0.707107 0.707107 0.707107 28 2)" stroke="#84AF8C" stroke-width="4" stroke-linecap="round"/>
                  </svg>

                </div>
              </div>
              <div className="all-wrapper">
                <div className="list1">
                  <div className="one">
                    <label className="checkbox-wrapper">
                    Alle
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="check-options">
                <label className="checkbox-wrapper">
                  Aktiv
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-wrapper">
                  Storniert
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-wrapper">
                  Vergangene Kurse
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="no-list">
            Zur Zeit sind keine Kurse verfügbar. Bitte schau später nochmals vorbei.
          </div>
          <div className="list">
          {list.map((data, index) => 
            <div key={index} className={`one ${index === 0 ? 'opened' : ''}`}>
              <div className="mobile">
                <div className="row1">
                  <div className="mark">{data.mark}</div>
                  <button className="btn-close">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.235235 14.1809C0.553407 14.4898 1.08067 14.4898 1.38975 14.1809L7.20778 8.36648L13.0258 14.1809C13.3349 14.4898 13.8712 14.4988 14.1803 14.1809C14.4894 13.8629 14.4894 13.3451 14.1803 13.0362L8.36231 7.2127L14.1803 1.39832C14.4894 1.08943 14.4985 0.562508 14.1803 0.253618C13.8622 -0.0643558 13.3349 -0.0643558 13.0258 0.253618L7.20778 6.06799L1.38975 0.253618C1.08067 -0.0643558 0.544317 -0.0734408 0.235235 0.253618C-0.0738498 0.571592 -0.0738498 1.08943 0.235235 1.39832L6.05327 7.2127L0.235235 13.0362C-0.0738498 13.3451 -0.0829404 13.872 0.235235 14.1809Z" fill="#84AF8C" fill-opacity="0.85"/>
                    </svg>
                  </button>
                </div>
                <div className="row2">
                  <div className="hist">
                    {data.histories.map((data1, index1) =>
                      <div key={index1} className="one">
                        <div className="col1">
                          <div className="date">{data1.date}</div>
                        </div>
                        <div className="col2">
                          <div className="time">{data1.time}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="row3">
                  <div className="address">
                    <span className="icon">
                      <img src={Icons.MapMark} alt="" />
                    </span>
                    <span className="txt">{data.address}</span>
                  </div>
                </div>
                <div className="row4">
                  <p className="info1">{data.info1}</p>
                  <p className="info2">{data.info2}</p>
                </div>
                <div className="row5">
                  <div className="buttons">
                    <button className="green">Details</button>
                  </div>
                </div>
              </div>
              <div className="desktop">
                <div className="row1">
                  <div className="col1">
                    <div className="mark">{data.mark}</div>
                  </div>
                  <div className="col2">
                    <div className="address">
                      <span className="icon">
                        <img src={Icons.MapMark} alt="" />
                      </span>
                      <span className="txt">{data.address}</span>
                    </div>
                  </div>
                  <div className="col3">
                    <div className="info">
                      <p className="info1">{data.info1}</p>
                      <p className="info2">{data.info2}</p>
                    </div>
                    <button className="btn-close"><img src={Icons.Close} /></button>
                  </div>
                </div>
                <div className="row2">
                  <div className="hist">
                  {data.histories.map((data1, index1) =>
                    <div key={index1} className="one">
                      <div className="col1">
                        <div className="date">{data1.date}</div>
                      </div>
                      <div className="col2">
                        <div className="time">{data1.time}</div>
                      </div>
                    </div>
                  )}
                  </div>
                  <div className="buttons">
                    <button className="green">Details</button>
                  </div>
                </div>
              </div>
              <div className="row3">
                <div className="title">Personen</div>
                <div className="person-list">
                  {data.persons.map((data1, index1) =>
                    <div className="one">
                      <div className="col">
                        <p className="bold">{data1.name}</p>
                        <p>{data1.address}</p>
                      </div>
                      <div className="col">
                        <p>{data1.email}</p>
                        <p>{data1.phone}</p>
                      </div>
                      <div className="col">
                        <p>Geburtsdatuem: {data1.birthdate}</p>
                        <p>Lernfahrausweis: {data1.driver_cert_number}</p>
                      </div>
                      <div className="col buttons">
                        <button className="o-line">Teilnehmer entfernen</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="buttons">
                  <button className="green">Teilnehmerliste exportieren</button>
                  <button className="red">Kurs stornieren</button>
                </div>
              </div>
            </div>
          )}
          </div>
          {/*<div className="more">
            <button>
              Weitere Kurse anzeigen
              <span className="icon">
                <img src={Icons.ArrowDown} alt="" />
              </span>
            </button>
          </div>*/}
        </div>
      </CourseListWrapper>
    </CourseOverviewWrapper>
  );
}

export default CourseOverview;