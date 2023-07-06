import styled from "styled-components";
import ModalLayout from "./ModalLayout";
import { Images, Icons } from "../../utils/assets";
const SubmitFormWrapper = styled.div`
  position: relative;
  z-index: 100;
  width: 90%;
  
  background-color: ${props => props.theme.colors.white};
  border-radius: 30px;
  padding: 58px 43px;

  > .header{
    position: relative;
    .category {
      color: ${props => props.theme.colors.black_primary};
      font-size: 20px;
      font-family: ${props => props.theme.fonts.roboto_condensend};
      font-weight: 700;
      line-height: 1.2;
    }

    .title {
      display: inline-block;
      position: relative;
      > h2 {
        color: ${props => props.theme.colors.black_primary};
        font-size: 45px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
        line-height: 1.2;
      }
      > img {
        position: absolute;
        right: -20px;
        bottom: -25px;
      }
    }
    .btn-close {
      position: absolute;
      cursor: pointer;
      top: -20px;
      right: -10px;

      width: auto;
      height: auto;
      opacity: 1;
      background: unset;
      padding: 0;
      > img {
        max-width: unset;
      }
    }
  }

  .help-text {
   margin-top: 50px;
    color: #333;
    font-size: 18px;
    font-family: ${props => props.theme.fonts.roboto_condensend};
    font-weight: 700;
    line-height: 1.5;

    > sup {
      color: #D70000;
    }
  }
  
  .yform {
    margin-top: 10px;

    max-height: 420px;
    overflow-y: auto;
    .form {
      .col {
        .row {
          display: flex;
          flex-direction: row;
          column-gap: 10px;

          .wrapper {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            flex: 1;
          }
        }
        
      }
      .group {
        width: 100%;
        > label {
          color: ${props => props.theme.colors.green_primary};
        }

        textarea {
          height: 200px;
        }
      }
    }

    .types {
      .cate {
        color: ${props => props.theme.colors.green_primary};
        font-size: 18px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
        line-height: 1.5;
      }

      .checkbox-wrapper {
        color: #838383;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.4;
      }

      .row {
        display: grid!important;
        grid-template-columns: 1fr 1fr 1fr;
      }
      
    }

    .error {
      font-size: 14px;
      margin-top: 15px;
      color: ${props => props.theme.colors.red_primary};
    }

    .submit {
      margin-top: 15px;
      > button {
        border-radius: 15px;
      }
    }

  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .yform {
      .form {
        grid-template-columns: 1fr 1fr;

        .col {
          
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    width: 1280px;
    min-height: 850px;
    .yform {
      max-height: unset;
      overflow-y: hidden;
    }
  }
`

type SubmitFormPrps = {
  opened: boolean,
  onClose: () => void,
  onSend: () => void,
}
const SubmitForm = ({ opened, onClose, onSend }: SubmitFormPrps): JSX.Element => {
  return (
    <ModalLayout opened={opened} onClose={onClose}>
      <SubmitFormWrapper>
        <div className="header">
          <p className="category">Unverbindliche Anfrage</p>
          <div className="title">
            <h2>Probelektion: CHF 55.-</h2>
            <img src={Images.UnderlineGreen} alt="" />
          </div>
          <button className="btn-close" onClick={() => {
            (document.querySelector("body") as any).style.overflow = "unset";
            onClose();
          }}>
            <img src={Icons.Close_1} alt="" />
          </button>
        </div>
        <p className="help-text"><sup>*</sup> Pflichtfelder</p>
        <div className="yform">
          <div className="form">
            <div className="col">
              <div className="row">
                <div className="wrapper">
                  <div className="group">
                    <label>Vorname / Nachname <sup>*</sup></label>
                    <div className="entry-box">
                      <div className="form-group">
                        <input type="text" />
                      </div>
                      <div className="form-group">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <label>Geburtsdatum <sup>*</sup></label>
                    <div className="entry-box">
                      <div className="form-group">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <label>Was möchtest du fahren?</label>
                    <div className="entry-box">
                      <div className="form-group">
                        <select>
                          <option></option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="group">
                    <label>E-Mail <sup>*</sup></label>
                    <div className="entry-box">
                      <div className="form-group">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <label>Telefon <sup>*</sup></label>
                    <div className="entry-box">
                      <div className="form-group">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <label>Kategorie <sup>*</sup></label>
                    <div className="entry-box">
                      <div className="form-group">
                        <select>
                          <option></option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="group">
                    <label>Nachricht</label>
                    <div className="entry-box">
                      <div className="form-group">
                        <textarea></textarea>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col types">
              <label className="cate">Verfügbare Tage</label>
              <div className="row">
                <label className="checkbox-wrapper">
                  Montag
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-wrapper">
                  Dienstag
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-wrapper">
                  Mittwoch
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="row">
                <label className="checkbox-wrapper">
                  Donnerstag
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-wrapper">
                  Freitag
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-wrapper">
                  Samsatg
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <label className="cate">Zeiten</label>
              <div className="row">
                <label className="checkbox-wrapper">
                  Donnerstag<br/>(08:00 - 12:00)
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-wrapper">
                  Nachmittag<br/>(12:00 - 17:00)
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-wrapper">
                  Abend<br/>(17:00 - 21:00)
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="error">
            Error
          </div>
          <div className="submit">
            <button type="button" onClick={onSend}>Jetzt anfragen</button>
          </div>
        </div>
      </SubmitFormWrapper>
    </ModalLayout>
  );
}

export default SubmitForm;