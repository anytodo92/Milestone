import styled from "styled-components";

export const UberUnsWrapper = styled.div`
  .intro {
    background-color: ${props => props.theme.colors.white};
    padding-bottom: 80px;
  }
  .team {
    padding-bottom: 140px;

    .title {
      > img {
        transform: translate(50%);
      }
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      .list {
        grid-template-columns: 1fr 1fr 1fr 1fr;

        .one {
          .pic {
            > img {
              width: 216px;
              height: 216px;
            }

            .bg {
              top: -18px;
              left: 18px;
              width: 189px;
              height: 252px;
              border-radius: 189px;
            }
          }
          .wrapper {
            max-width: 220px;
            > h2 {
              font-size: 30px;
            }
          }
        }
      }
    }

    @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
      .list {
        .one {
          .pic {
            > img {
              width: 240px;
              height: 240px;
            }

            .bg {
              top: -20px;
              left: 20px;
              width: 210px;
              height: 280px;
              border-radius: 210px;
            }
          }
          .wrapper {
            max-width: 260px;
            > h2 {
              font-size: 35px;
            }
          }
        }
      }
    }


    @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
      .content1 {
        width: auto;
        margin: 0 ${props => props.theme.margins.primary}px;
      }

      .list {
        .one {
          .pic {            
            > img {
              width: 308px;
              height: 308px;
            }

            .bg {
              top: -27px;
              left: 18px;
              width: 270px;
              height: 360px;
              border-radius: 270px;
            }
          }
          .wrapper {
            max-width: 324px;
          }
        }
      }
    }

    @media (min-width: 1780px) {
      .content1 {
        width: 1740px;
        margin: 0 auto;
      }

      .list {
        .one {
          .pic {            
            > img {
              width: 343px;
              height: 343px;
            }

            .bg {
              top: -30px;
              left: 20px;
              width: 300px;
              height: 400px;
              border-radius: 300px;
            }
          }
          .wrapper {
            max-width: 360px;
          }
        }
      }      
    }
  }
`