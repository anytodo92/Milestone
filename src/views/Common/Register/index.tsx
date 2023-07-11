import { Images, Icons } from "../../../utils/assets";
import {
  RegisterWrapper
} from "./styled";

const Register = (): JSX.Element => {
  const list = [
    {
      id: 1,
      address: 'Badenerstrasse 3, 5400 Baden',
      info1: 'CHF 180.-',
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
      opened: false,
    },
    {
      id: 2,
      address: 'Badenerstrasse 3, 5400 Baden',
      info1: 'CHF 180.-',
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
      opened: false,
    },    
    {
      id: 3,
      address: 'Badenerstrasse 3, 5400 Baden',
      info1: 'CHF 180.-',
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
      opened: false,
    },
  ]
  return (
    <RegisterWrapper id="termine" className="register">
      <div className="content">
        <div className="title">
          <h1>Termine & Anmeldung</h1>
          <img src={Images.UnderlineGreen} alt="" />
        </div>
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
            <div className="selected-wrapper">
              <div className="tags">
                <label>Ort:</label>
                <span className="item">Baden</span>
                <span className="item">Zürich</span>
              </div>
              <div className="btn">
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="2.82843" y1="2" x2="14" y2="13.1716" stroke="#84AF8C" stroke-width="4" stroke-linecap="round"/>
                  <line x1="2" y1="-2" x2="17.799" y2="-2" transform="matrix(-0.707107 0.707107 0.707107 0.707107 28 2)" stroke="#84AF8C" stroke-width="4" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <div className="all-wrapper">
              
            </div>
          </div>
        </div>
        <div className="no-list">
          Zur Zeit sind keine Kurse verfügbar. Bitte schau später nochmals vorbei.
        </div>
        <div className="list">
        {list.map((data, index) => 
          <div key={index} className={`one ${index === 0 ? 'opened' : ''}`}>
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
                <button>Anmelden</button>
              </div>

            </div>
            <div className="row3">
              <div className="title">Anmeldung</div>
              <div className="yform">
                <form>
                  <div className="form">
                    <div className="col">
                      <div className="group">
                        <div className="entry-box">
                          <div className="form-group">
                            <label className="control-label"></label>
                            <input type="text" className="form-control" placeholder="Vorname" />
                          </div>
                        </div>
                      </div>
                      <div className="group">
                        <div className="entry-box">
                          <div className="form-group">
                            <label className="control-label"></label>
                            <input type="text" className="form-control" placeholder="Strasse / Nr." />
                          </div>
                        </div>
                      </div>
                      <div className="group">
                        <div className="entry-box">
                          <div className="form-group">
                            <label className="control-label"></label>
                            <input type="text" className="form-control" placeholder="E-Mail" />
                          </div>
                        </div>
                      </div>
                      <div className="group">
                        <div className="entry-box">
                          <div className="form-group">
                            <label className="control-label"></label>
                            <input type="text" className="form-control" placeholder="Geburtsdatum (TT.MM.JJJJ)" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="group">
                        <div className="entry-box">
                          <div className="form-group">
                            <label className="control-label"></label>
                            <input type="text" className="form-control" placeholder="Name" />
                          </div>
                        </div>
                      </div>
                      <div className="group">
                        <div className="entry-box">
                          <div className="form-group" style={{ width: "50%" }}>
                            <label className="control-label"></label>
                            <input type="text" className="form-control" placeholder="PLZ" />
                          </div>
                          <div className="form-group">
                            <label className="control-label"></label>
                            <input type="text" className="form-control" placeholder="Ort" />
                          </div>
                        </div>
                      </div>
                      <div className="group">
                        <div className="entry-box">
                          <div className="form-group">
                            <label className="control-label"></label>
                            <input type="text" className="form-control" placeholder="Handynummer" />
                          </div>
                        </div>
                      </div>
                      <div className="group">
                        <div className="entry-box">
                          <div className="form-group">
                            <label className="control-label"></label>
                            <input type="text" className="form-control" placeholder="Lernfahrausweisnummer" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">                      
                    </div>
                  </div>
                  <div className="check">
                    <div className="check-wrapper">
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <div className="txt">
                        Ich akzeptiere die <a href="#">allgemeinen Geschäftsbedingungen</a>. Die <a href="#">Datenschutzerklärung</a> habe ich gelesen und verstandn
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="submit">                    
                    <div>
                      <button>Verbindlich anmelden</button>
                    </div>                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        </div>
        <div className="more">
          <button>
            Weitere Kurse anzeigen
            <span className="icon">
              <img src={Icons.ArrowDown} alt="" />
            </span>
          </button>
        </div>
      </div>
    </RegisterWrapper>
  );
}

export default Register;