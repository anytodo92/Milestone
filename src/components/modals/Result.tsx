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
        bottom: -40px;
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

  .txt {
    color: ${props => props.theme.colors.black_primary};
    font-size: 18px;
    font-weight: 400;
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
    font-size: 18px;
    font-family: ${props => props.theme.fonts.roboto_condensend};
    font-weight: 700;
    line-height: 1.2;
    padding: 0 46px;
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
          <div className="title">
            <h2>Vielen Dank für deine Anfrage</h2>
            <img src={Images.UnderlineGreen} alt="" />
          </div>
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