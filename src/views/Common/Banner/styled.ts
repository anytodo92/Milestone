import styled from "styled-components";
import { Images } from "../../../utils/assets";

export const BannerWrapper = styled.section`
  position: relative;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    position: relative;
    z-index: 1;
  }

  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Images.Bg_3});
    background-position: 0 bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .summary {
    padding-top: 250px;
    padding-bottom: 70px;
    max-width: 877px;
    > h1 {
      color: ${props => props.theme.colors.black_primary};
      font-size: 40px;
      font-weight: 800;
      line-height: 1.2;
    }

    > .desc {
      color: ${props => props.theme.colors.black_primary};
      font-size: 20px;
      font-weight: 700;
      line-height: 1.2;
    }

    > .detail {
      color: ${props => props.theme.colors.black_primary};
      font-size: 16px;
      font-weight: 300;
      line-height: 1.2;
      margin-top: 35px;

      > p {
        > a {
          font-weight: 500;
          color: ${props => props.theme.colors.green_primary};
          text-decoration: none;        
        }
      }
      
    }

    > a {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      height: 46px;
      border-radius: 46px;
      background-color: ${props => props.theme.colors.green_primary};
      color: ${props => props.theme.colors.white};
      font-size: 16px;
      font-weight: 600;
      line-height: 1.2;
      padding: 0 40px;
      margin-top: 35px;
      cursor: pointer;
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop}) {
    .summary {
      margin-left: 100px;
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`;