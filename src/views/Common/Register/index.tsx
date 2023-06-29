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
      ]
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
      ]
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
      ]
    },
  ]
  return (
    <RegisterWrapper>
      <div className="content">
        <div className="title">
          <h1>Termine & Anmeldung</h1>
          <img src={Images.UnderlineGreen} alt="" />
        </div>
        <div className="filter">
          <div className="box">
            <div className="wrapper">
              <label>Kurstyp:</label>
              <span className="item">Abendkurse</span>
              <span className="item">Intensivkurse</span>
            </div>
            <div className="btn">
              <img src={Icons.ArrowDown} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="wrapper">
              <label>Ort:</label>
              <span className="item">Baden</span>
              <span className="item">Zürich</span>
            </div>
            <div className="btn">
              <img src={Icons.ArrowDown} alt="" />
            </div>
          </div>
        </div>
        <div className="list">
        {list.map((data, index) => 
          <div key={index} className="one">
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
                <p className="info1">{data.info1}</p>
                <p className="info2">{data.info2}</p>
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