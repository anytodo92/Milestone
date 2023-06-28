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
      font-size: 45px;
      font-family: ${props => props.theme.fonts.roboto_condensend};
      font-weight: 700;
      line-height: 1.2;
    }

    > p {
      color: ${props => props.theme.colors.black_primary};
      font-size: 22px;
      font-weight: 400;
      line-height: 1.2;
      margin-top: 40px;
    }

    > button {
      height: 46px;
      border-radius: 46px;
      background-color: ${props => props.theme.colors.green_primary};
      color: ${props => props.theme.colors.white};
      font-size: 18px;
      font-family: ${props => props.theme.fonts.roboto_condensend};
      font-weight: 700;
      line-height: 1.2;
      padding: 0 40px;
      margin-top: 40px;
      cursor: pointer;
      border: 0;
      outline: 0;
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`;