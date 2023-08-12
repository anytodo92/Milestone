import styled from "styled-components";
import ModalLayout from "./ModalLayout";
import { Images, Icons } from "../../utils/assets";

const ResultWrapper = styled.div`
  width: 90%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 30px;
  z-index: 100;
  padding: 58px 43px;

  > .header{
    position: relative;
    .category {
      color: ${props => props.theme.colors.black_primary};
      font-size: 24px;
      font-weight: 800;
      line-height: 1.2;
    }

    .title {
      margin-top: 10px;
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

  .txt {
    color: ${props => props.theme.colors.black_primary};
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    margin-top: 50px;
  }

  > button {
    height: 46px;
    border: 0;
    outline: 0;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.green_primary};
    color: ${props => props.theme.colors.white};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    padding: 0 43px;
    margin-top: 30px;
    cursor: pointer;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    width: 1280px;
  }
`

type ResultProps = {
  opened: boolean,
  onClose: () => void,
}

const Result = ({ opened, onClose }: ResultProps): JSX.Element => {
  return (
    <ModalLayout opened={opened} onClose={onClose}>
      <ResultWrapper>
        <div className="header">
          <p className="category">Unverbindliche Anfrage</p>
          <h2 className="title">Vielen Dank für deine Anfrage</h2>
          <button className="btn-close" onClick={() => {
            (document.querySelector("body") as any).style.overflow = "unset";
            onClose();
          }}>
            <img src={Icons.Close_1} alt="" />
          </button>
        </div>
        <div className="txt">
          Wir haben deine Angaben erhalten und wir nehmen innert 5 Tagen mit dir Kontakt auf. 
        </div>
        <button>Schliessen</button>
      </ResultWrapper>
    </ModalLayout>
  );
}

export default Result;