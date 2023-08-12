import { Images } from "../../../utils/assets";
import {
  ContactFormWrapper
} from "./styled";

const ContactForm = (): JSX.Element => {
  return (
    <ContactFormWrapper>
      <div className="content">
        <h2 className="title">Sende uns eine<br/>Nachricht</h2>
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
                      <input type="text" className="form-control" placeholder="Name" />
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
                      <input type="text" className="form-control" placeholder="Handynummer" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="group">
                  <div className="form-group">
                    <label className="control-label"></label>
                    <textarea className="form-control" placeholder="Nachricht"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="submit">
              <button>Absenden</button>
            </div>
          </form>
        </div>
      </div>
    </ContactFormWrapper>
  );
}

export default ContactForm;