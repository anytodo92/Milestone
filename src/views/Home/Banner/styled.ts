import styled from "styled-components";
import { Images } from "../../../utils/assets";
export const BannerWrapper = styled.div`
  
  background-color: ${props => props.theme.colors.green_primary};
  .bg {
    display: none;
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;

    .lt {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url(${Images.Bg_1});
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .rt {
      display: none;
      position: absolute;
      right: 0;
      top: 0;
      width: 35%;
      height: 100%;
      background-image: url(${Images.Bg_2});
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    position: relative;
    padding: 140px 0 30px;

  }

  .summary {  
    color: ${props => props.theme.colors.white};  
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .desc {
      font-size: 20px;
      font-family: ${props => props.theme.fonts.roboto_condensend};
      font-weight: 700;
      line-height: 1.2;
    }

    .title {
      position: relative;
      margin-top: 15px;
      > h1 {
        font-size: 35px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
        line-height: 1.2;
      }

      > svg {
        position: absolute;
        left: 90px;
        bottom: -10px;
      }
    } 

    .detail {
      font-size: 22px;
      font-weight: 300;
      line-height: 1.2;
      margin-top: 40px;
      max-width: 500px;
    }

    .icon {
      margin-top: 40px;
      display: flex;
      justify-content: center;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    .summary {
      .title {
        > h1 {
          font-size: 45px;
        }
        > svg {
          left: 120px;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 100vh;
    background-color: transparent;
    .content {
      height: 100vh;
      display: flex;
      align-items: center;
      padding: 0;
    }
    .bg {
      display: block;

      .lt {
        width: 65%;
      }
      .rt {
        display: block;
      }
    }

    .summary {
      width: 65%;
    }

  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }


  }
`