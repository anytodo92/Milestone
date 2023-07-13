import styled from "styled-components";

export const ReservationWrapper = styled.div`
  padding: 57px 0 73px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    display: flex;
    flex-direction: column;
    column-gap: 100px;
    row-gap: 50px;
  }

  .pic {
    position: relative;
    margin-top: 70px;
    padding-bottom: 70px;

    .bg1, .bg2 {
      background-position: center center;
      background-repeat: no-repeat;
      border-radius: 10px;
      background-size: cover;
    }
    .bg1 {
      width: 149px;
      height: 288px;
    }

    .bg2 {
      width: 197px;
      height: 263px;
      margin-top: -320px;
      margin-left: 60px;
    }
  }
  .article {
    .title {
      position: relative;
      display: inline-block;
      > h1 {
        font-weight: 700;
        font-size: 45px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        line-height: 1.2;
        color: ${props => props.theme.colors.black_primary};
      }

      > img {
        position: absolute;
        right: 0;
        bottom: -30px;
      }
    }

    .contt {
      background-color: ${props => props.theme.colors.gray_primary};
      border-radius: 10px;
      padding: 35px;
      margin-top: 55px;
      > h5 {
        font-size: 26px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
        line-height: 1.2;
        margin-top: 20px;
      }
      .desc {
        font-size: 20px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
        line-height: 1.2;
        margin-top: 20px;
      }
      .detail {
        font-size: 18px;
        font-weight: 300;
        line-height: 1.4;
        margin-top: 20px;
      }
      > button {
        height: 46px;
        border-radius: 46px;
        border: 0;
        outline: 0;
        background-color: ${props => props.theme.colors.green_primary};
        color: ${props => props.theme.colors.white};
        font-size: 18px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
        line-height: 1.2;
        padding: 0 23px;
        margin-top: 30px;
        cursor: pointer;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .pic {
      position: relative;
      margin-top: 70px;
      
      .bg1 {
        width: 249px;
        height: 480px;
      }

      .bg2 {
        width: 329px;
        height: 439px;
        margin-top: -533px;
        margin-left: 120px;
      }
    }

    .article {
      .title {
        > img {
          transform: translate(30%);
        }
      }

      .contt {

      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      flex-direction: row;
    }

    .article {
      flex: 1;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`