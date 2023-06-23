import styled from "styled-components";
import { Images } from "../../../utils/assets";

export const BannerWrapper = styled.section`
  position: relative;
  overflow: hidden;
  height: 520px;

  &.startseite {
    height: 550px;
    .outline-ellipse {
      height: 1501px;
      top: -950px;
    }
    .inline-ellipse {
      height: 1505px;
      top: -968px;

      .wrapper {
        top: 420px;
      }
    }
    .content {
      .txt {
        margin-top: 200px;
        > p {
          font-size: 26px;
        }
      }
    }
  }
  &.kontakt {
    .content {
      .txt {
        margin-top: 230px;
      }
    }
  }
  &.unsere-dienste {
    .content {
      .txt {
        margin-top: 130px;
      }
    }
  }
  .outline-ellipse {
    position: absolute;

    width: 4582px;
    height: 1401px;
    left: -1653px;
    top: -888px;

    background-color: ${props => props.theme.colors.green_primary};
    transform: matrix(1, -0.04, 0.1, 0.99, 0, 0);
    border-radius: 100%;
  }

  .inline-ellipse {
    position: absolute;

    width: 4575px;
    height: 1405px;
    left: -1649px;
    top: -905px;

    background-color: #f1f1f1;
    transform: matrix(1, -0.06, 0.14, 0.99, 0, 0);
    border-radius: 100%;
    overflow: hidden;

    .wrapper {
      position: relative;
      right: 0;
      top: 355px;
      width: 100vw;
      height: 100%;
      left: 1580px;
      transform: matrix(1, 0.06, -0.14,  1, 0, 0);

      .bg {
        position: absolute;
        width: 3804px;
        height: 1636px;
        left: 0px;
        top: 0px;

        background: url(${Images.SquraresBgUrl}) -95px 0 repeat;
      }

      .thumb {
        position: absolute;
        width: 1178px;
        height: 578px;
        right: -175px;
        top: 650px;
        box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.06);
        border-radius: 360px 0px 360px 360px;
        transform: rotate(-2.74deg);
        background: url(${Images.EuropianGirlUrl}) 0 -55px no-repeat;
        background-size: contain;
        display: none;
      }
    }
  }

  .content {
    position: relative;
    margin: 0 ${props => props.theme.margins.primary}px;

    .txt {
      margin-top: 172px;
      position: relative;
      padding-left: 30px;
      > h1 {
        font-weight: 400;
        font-size: 60px;
        line-height: 60px;
        font-family: ${props => props.theme.fonts.dm_serif_text};
        
        > p {
          color: ${props => props.theme.colors.black_primary};
          > label {
            color: ${props => props.theme.colors.green_primary};
          }
        }
      }

      .line {
        border-left: 4px solid ${props => props.theme.colors.green_primary};
        height: 100px;
        position: absolute;
        left: 0;
        top: 11px;
      }

      > p {
        margin-top: 30px;
        font-family: ${props => props.theme.fonts.open_sans};
        font-weight: 300;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -2%;
        color: ${props => props.theme.colors.black_primary};
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.mobile_md}) {
    &.unsere-dienste {
      .content {
        .txt {
          margin-top: 172px;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .inline-ellipse {
      .wrapper {
        .thumb {
          display: block;
          right: -525px;
          background: url(${Images.EuropianGirlUrl}) -100px -55px no-repeat;
          background-size: contain;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .inline-ellipse {
      .wrapper {
        .thumb {
          right: -375px;
          background: url(${Images.EuropianGirlUrl}) -100px -55px no-repeat;
          background-size: contain;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_xl}) {
    .outline-ellipse {
      width: 225.05%;
      left: -81.18%;
      transform: matrix(1, -0.04, 0.1, 0.99, 0, 0);
    }

    .inline-ellipse {
      width: 223.88%;
      left: -80.99%;
      transform: matrix(1, -0.06, 0.14, 0.99, 0, 0);
      .wrapper {
        left: 33.6%;
        .bg {
          width: 186.83%;
        }
        .thumb {
          right: -175px;
          background: url(${Images.EuropianGirlUrl}) -20px -55px no-repeat;
          background-size: contain;
        }
      }
    }
  }

  @media (min-width: 2500px) {
    &.startseite {
      height: 580px;
    }

    height: 540px;
    .outline-ellipse {
      transform: matrix(1, -0.04, 0.14, 0.99, 0, 0);
    }
    .inline-ellipse {
      transform: matrix(1, -0.053, 0.14, 0.99, 0, 0);
    }
  }

  @media (min-width: 2800px) {
    &.startseite {
      height: 580px;
      .outline-ellipse {
        top: -955px;
      }
    }
    .outline-ellipse {
      top: -892px;
      transform: matrix(1, -0.03, 0.14, 0.99, 0, 0);
    }

    height: 540px;

    .inline-ellipse {
      transform: matrix(1, -0.038, 0.14, 0.99, 0, 0);
    }
  }
`;