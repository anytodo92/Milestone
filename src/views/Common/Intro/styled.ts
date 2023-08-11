import styled from "styled-components";

export const IntroWrapper = styled.div`
  background-color: ${props => props.theme.colors.gray_primary};
  padding: 140px 0 0;

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

  }

  .wrapper {
    display: flex;
    flex-direction: column-reverse;
    row-gap: 10px;
    column-gap: 90px;
  }

  .pic {
    position: relative;
    margin-top: 70px;
    padding-bottom: 70px;

    .bg1, .bg2 {
      background-position: center center;
      background-repeat: no-repeat;
      border-radius: 30px;
      background-size: cover;
    }
    .bg1 {
      width: 209px;
      height: 303px;
    }

    .bg2 {
      width: 225px;
      height: 300px;
      margin-top: -335px;
      margin-left: 136px;
    }
  }

  .article {
    > .desc {
      margin-top: 20px;
      font-weight: 300;
      font-size: 16px;
      line-height: 1.2;
      max-width: 517px;
      color: ${props => props.theme.colors.black_primary};
    }

    .panel {
      margin-top: 25px;
      //max-width: 747px;
      .list {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 30px;
        column-gap: 30px;
        
        background-color: ${props => props.theme.colors.white};
        border-radius: 30px 30px 0 0;
        padding: 40px 50px 0;

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
              font-size: 24px;
              font-weight: 600;
              color: ${props => props.theme.colors.black_primary};
              line-height: 1.2;
            }

            > .desc {
              font-size: 16px;
              font-weight: 300;
              color: ${props => props.theme.colors.black_primary};
              line-height: 1.4;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .pic {
      position: relative;
      margin-top: 90px;
      
      .bg1 {
        width: 349px;
        height: 506px;
      }

      .bg2 {
        width: 375px;
        height: 500px;
        margin-top: -558px;
        margin-left: 227px;
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
      .panel {
        .list {
          grid-template-columns: 1fr 1fr;
        }  
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .article {
      > .title {
        > h2 {
          font-size: 45px;
        }
      }
    }
  }
  
  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .wrapper {
      flex-direction: row;
    }
    .pic {
      padding-bottom: 0;
    }
    .panel {      
      max-width: unset;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_xl}) {
    .wrapper {
      margin-left: -180px;
    }
  }
`