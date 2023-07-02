import styled from "styled-components";
import { Images } from "../../../utils/assets";
export const BannerWrapper = styled.div`
  height: 100vh;
  .bg {
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
    display: flex;
    align-items: center;
    height: 100vh;
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
      margin-top: 15px;
      > h1 {
        font-size: 45px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
        line-height: 1.2;
      }
    } 

    .detail {
      font-size: 22px;
      font-weight: 400;
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

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .bg {
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