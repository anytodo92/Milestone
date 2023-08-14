import styled from "styled-components";

export const ReservationWrapper = styled.div`
  padding: 0px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    display: flex;
    flex-direction: column;
    column-gap: 90px;
    row-gap: 20px;
  }

  .pic {
    position: relative;
    margin-top: 30px;
    padding-bottom: 70px;

    .bg1, .bg2 {
      background-position: center center;
      background-repeat: no-repeat;
      border-radius: 30px;
      background-size: cover;
    }
    .bg1 {
      width: 182px;
      height: 265px;
    }

    .bg2 {
      width: 196px;
      height: 261px;
      margin-top: -294px;
      margin-left: 120px;
    }
  }
  .article {
    .panel {
      margin-top: 30px;
      .contt {
        background-color: ${props => props.theme.colors.gray_primary};
        border-radius: 30px 30px 0 0;
        padding: 35px 35px 0 35px;
        
        > h5 {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.2;
          margin-top: 30px;
        }
        .desc {
          font-size: 14px;
          font-weight: 600;        
          line-height: 1.2;
          margin-top: 20px;
        }
        .detail {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.4;
          margin-top: 15px;
        }
        > button {
          height: 46px;
          border-radius: 46px;
          border: 0;
          outline: 0;
          background-color: ${props => props.theme.colors.green_primary};
          color: ${props => props.theme.colors.white};
          font-size: 12px;
          font-weight: 600;
          line-height: 1.2;
          padding: 0 23px;
          margin-top: 30px;
          cursor: pointer;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    .article {
      .panel {
        .contt {
          > h5 {
            font-size: 24px;
          }
          .desc, detail {
            font-size: 16px;
          }

          > button {
            font-size: 16px;
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .pic {
      position: relative;
      margin-top: 40px;
      
      .bg1 {
        width: 304px;
        height: 442px;
      }

      .bg2 {
        width: 327px;
        height: 436px;
        margin-top: -490px;
        margin-left: 200px;
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
    padding: 57px 0 40px;
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

  @media (min-width: ${props => props.theme.breakpoints.desktop_xl}) {
    .pic {
      margin-right: -100px;
    }
  }
`