import styled from "styled-components";

export const IntroWrapper = styled.div`
  background-color: ${props => props.theme.colors.gray_primary};
  padding: 140px 0 25px;

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    display: flex;
    flex-direction: column-reverse;
    row-gap: 50px;
    column-gap: 70px;
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
      width: 141px;
      height: 273px;
    }

    .bg2 {
      width: 187px;
      height: 273px;
      margin-top: -313px;
      margin-left: 60px;
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
      }
    }

    > .desc {
      margin-top: 60px;
      font-weight: 300;
      font-size: 16px;
      line-height: 1.4;
      color: ${props => props.theme.colors.black_primary};
    }

    .list {
      display: grid;
      grid-template-columns: 1fr;
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

          > .desc {
            font-size: 16px;
            font-weight: 300;
            color: ${props => props.theme.colors.black_primary};
            line-height: 1.2;
            margin-top: 10px;
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .pic {
      position: relative;
      margin-top: 70px;
      
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
      .title {
        > img {
          transform: translate(50%);
        }
      }  
    }  
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    .article {
      .list {
        grid-template-columns: 1fr 1fr;
      }  
    }
  }
  
  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      flex-direction: row;
    }
    .pic {
      padding-bottom: 0;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`