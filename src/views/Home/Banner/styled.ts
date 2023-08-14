import styled from "styled-components";
import { Images } from "../../../utils/assets";
export const BannerWrapper = styled.div`
  .bg {
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url(${Images.Bg_6});
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .lt {
      position: absolute;
      left: 0;
      top: 0;
      width: 85%;
      height: 100%;
      background-image: url(${Images.Bg_7});
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    position: relative;
    
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 0;
  }

  .summary {  
    color: ${props => props.theme.colors.white};  
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .desc {
      font-size: 20px;
      font-weight: 700;
      line-height: 1;
    }

    .title {
      position: relative;
      margin-top: 15px;
      > h1 {
        font-size: 25px;
        font-weight: 800;
        line-height: 1.2;
      }

      > svg {
        position: absolute;
        left: 85px;
        bottom: -10px;
      }
    } 

    .detail {
      font-size: 14px;
      font-weight: 300;
      line-height: 1.2;
      margin-top: 40px;
      max-width: 529px;
    }

    .icon {
      margin-top: 50px;
      display: flex;
      justify-content: center;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    .summary {
      .title {
        > h1 {
          font-size: 40px;
          line-height: 1;
        }

        > svg {
          left: 150px;
          bottom: -10px;
        }
      }

      .detail {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 100vh;
    background-color: transparent;
    
    .bg {
      display: block;

      .lt {
        width: 65%;
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