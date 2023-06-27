import styled from "styled-components";

export const IntroWrapper = styled.div`
  background-color: #f8f8f8;
  padding: 140px 0 25px;

  .content {
    margin: 0 ${props => props.theme.margins.primary};

    display: flex;
    flex-direction: column;
    row-gap: 50px;
    column-gap: 70px;

    .pic {
      position: relative;
      margin-top: 15px;
      .bg1, .bg2 {
        background-position: center center;
        background-repeat: no-repeat;
        border-radius: 10px;
      }
      .bg1 {
        width: 283px;
        height: 546px;
      }

      .bg2 {
        width: 375px;
        height: 546px;
        margin-top: -613px;
        margin-left: 120px;
      }
    }

    .article {
      > .title {
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
          transform: translate(50%);
        }
      }
      

      > p {
        margin-top: 60px;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.2;
        color: ${props => props.theme.colors.black_primary};
      }

      .list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 30px;
        column-gap: 30px;
        margin-top: 50px;
        .one {
          display: flex;
          column-gap: 20px;
          .icon {
            margin-top: 3px;
            > img {
              max-width: unset;
            }
          }

          > .contt {
            > h5 {
              font-size: 26px;
              font-weight: 700;
              font-family: ${props => props.theme.fonts.roboto_condensend};
              color: ${props => props.theme.colors.black_primary};
              line-height: 1.2;
            }

            > p {
              font-size: 18px;
              font-weight: 400;
              color: ${props => props.theme.colors.black_primary};
              line-height: 1.4;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      flex-direction: row;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`