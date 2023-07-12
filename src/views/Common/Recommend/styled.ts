import styled from "styled-components";

export const RecommendWrapper = styled.div`
  padding: 0 0 120px;
  background-color: ${props => props.theme.colors.gray_primary};
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    > .desc {
      font-weight: 300;
      font-size: 18px;
      line-height: 1.4;
      color: ${props => props.theme.colors.black_primary};
      margin-top: 50px;
    }

  }

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

  
  .list {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    column-gap: 20px;
    row-gap: 20px;

    .one {
      border-radius: 10px;
      background: ${props => props.theme.colors.white};
      box-shadow: 0px 0px 8px 0px rgba(43, 43, 43, 0.19);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px;

      .pic {
        position: relative;
        border-radius: 217px;
        background-color: ${props => props.theme.colors.green_primary};
        width: 208px;
        height: 217px;
        > img {
          position: absolute;
          border-radius: 208px;
          width: 208px;
          height: 208px;
        }
        .icon {
          position: absolute;
          background-color: ${props => props.theme.colors.white};
          width: 87px;
          height: 87px;
          border-radius: 87px;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
          box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.10);
        }
      }

      .article {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        > h2 {
          position: relative;
          color: ${props => props.theme.colors.black_primary};
          font-size: 35px;
          font-family: ${props => props.theme.fonts.roboto_condensend};
          font-weight: 700;
          line-height: 1.5;
          text-align: center;
          display: inline-block;

          &::after {
            content: "";
            border-bottom: 4px solid ${props => props.theme.colors.black_primary};
            width: 69px;
            display: inline-block;
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }

        > .desc {
          color: #5E5E5E;
          text-align: center;
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4;
          margin-top: 10px;
        }

        .buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 10px;

          > a {
            display: inline-flex;
            height: 46px;
            border-radius: 46px;
            background-color: ${props => props.theme.colors.green_primary};
            color: ${props => props.theme.colors.white};
            font-size: 18px;
            font-family: ${props => props.theme.fonts.roboto_condensend};
            font-weight: 700;
            line-height: 1.2;
            padding: 0 23px;
            margin-top: 30px;
            cursor: pointer;
            text-decoration: none;
            align-items: center;
            justify-content: center;
            text-align: center;

            &.o-line {
              border: 2px solid ${props => props.theme.colors.green_primary};
              color: ${props => props.theme.colors.green_primary};
              background-color: ${props => props.theme.colors.white};
            }
          }
        }
        
      }
    }
    
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .title {
      > img {
        transform: translate(50%);
      }
    }
    .list {
      .one {
        .pic {
          border-radius: 310px;
          width: 297px;
          height: 310px;
          > img {
            position: absolute;
            border-radius: 297px;
            width: 297px;
            height: 297px;
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .list {
      flex-direction: row;
      flex-wrap: nowrap;
      .one {
        max-width: unset;
        flex: 1;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`