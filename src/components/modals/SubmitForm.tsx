import styled from "styled-components";
import ModalLayout from "./ModalLayout";
import { Images, Icons } from "../../utils/assets";
const SubmitFormWrapper = styled.div`
  position: relative;
  z-index: 100;
  width: 90%;
  
  background-color: ${props => props.theme.colors.white};
  border-radius: 30px;
  padding: 36px 43px;

  > .header{
    position: relative;
    .category {
      color: ${props => props.theme.colors.black_primary};
      font-size: 22px;
      font-weight: 800;
      line-height: 1.2;
    }

    .title {
      margin-top: 10px;
    }

    .btn-close {
      position: absolute;
      cursor: pointer;
      top: 0px;
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
    font-weight: 700;
    line-height: 1.5;

    > sup {
      color: #D70000;
    }
  }
  
  .yform {
    margin-top: 30px;

    max-height: 420px;
    overflow-y: auto;
    .form {
      .col {
        .row1 {
          display: flex;
          flex-direction: column;
          column-gap: 10px;
          row-gap: 10px;
          margin: 0;

          select {
            color: #999;
          }
          .wrapper {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            flex: 1;
            padding: 0;
          }
        }
        
      }
      .group {
        width: 100%;
        padding: 0;

        .entry-box {
          flex-direction: column;
        }
        
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
        font-size: 16px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
        line-height: 1.5;
      }

      .checkbox-wrapper {
        color: #838383;
        font-size: 14px;
        font-weight: 300;
        line-height: 1.5;
      }

      .row1 {
        display: grid!important;
        grid-template-columns: 1fr 1fr;
        row-gap: 15px;
      }
      
    }

    .error {
      font-size: 12px;
      margin-top: 15px;
      color: ${props => props.theme.colors.red_primary};
    }

    .submit {
      margin-top: 15px;
      > button {
        border-radius: 15px;
        font-size: 14px;
        font-weight: 600;
        padding: 0 43px;
      }
    }

  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    > .header {
      .category {
        font-size: 24px;
      }
    }
    .yform {
      .types {
        .cate {
          font-size: 16px;
        }
      }

      .error {
        font-size: 14px;
      }

      .submit {
        > button {
          font-size: 16px;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .yform {
      .form {
        grid-template-columns: 1fr 1fr;

        .col {
          .row1 {
            flex-direction: row;
          }
        }
      }

      .types {
        .row1 {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    width: 1280px;
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
          <h2 className="title">Probelektion: CHF 55.-</h2>
          <button className="btn-close" onClick={() => {
            (document.querySelector("body") as any).style.overflow = "unset";
            onClose();
          }}>
            <img src={Icons.Close_1} alt="" />
          </button>
        </div>
        <div className="yform">
          <div className="form">
            <div className="col">
              <div className="row1">
                <div className="group">
                  <div className="entry-box">
                    <div className="form-group">
                      <input type="text" placeholder="Vorname" />
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="entry-box">
                    <div className="form-group">
                      <input type="text" placeholder="Name" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row1">
                <div className="group">
                  <div className="entry-box">
                    <div className="form-group">
                      <input type="text" placeholder="Strasse / Nr" />
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="entry-box">
                    <div className="form-group">
                      <input type="text" placeholder="PLZ / Ort" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row1">
                <div className="group">
                  <div className="entry-box">
                    <div className="form-group">
                      <input type="text" placeholder="E-Mail" />
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="entry-box">
                    <div className="form-group">
                      <input type="text" placeholder="Handynummer" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row1">
                <div className="group">
                  <div className="entry-box">
                    <div className="form-group">
                      <select>
                        <option value="" disabled selected>Categorie</option>
                        <option></option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="group"></div>
              </div>
            </div>
            <div className="col types">
              <label className="cate">Verfügbare Tage</label>
              <div className="row1">
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
              <div className="row1">
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
            <div className="col">
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