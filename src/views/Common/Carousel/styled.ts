import styled from "styled-components";

export const CarouselWrapper = styled.div`
  padding: 68px 0;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .wrapper {
    position: relative;

    .indicator {
      display: flex;
      column-gap: 10px;
      justify-content: center;
      > li {
        width: 20px;
        height: 20px;
        border-radius: 20px;

        background-color: #d9d9d9;

        &.active {
          background-color: ${props => props.theme.colors.green_primary};
        }
      }
    }

    .navbtn {
      display: none;
      position: absolute;
      width: 100%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);

      .left, .right {
        position: absolute;
        cursor: pointer;
        margin-top: -30px;
      }

      .left {
        left: -10px;
      }

      .right {
        right: -10px;
      }
    }

    .slide {
      overflow: hidden;
      margin: 0px;

      .list {
        display: flex;

        .one {
          display: flex;
          flex-direction: column;
          align-items: center;
          column-gap: 50px;
          row-gap: 20px;
          padding: 0 5px 60px;

          .article {
            margin-top: 30px;

            .title {
              position: relative;              
              display: inline-block;

              > h1 {
                color: ${props => props.theme.colors.black_primary};
                font-size: 45px;
                font-family: ${props => props.theme.fonts.roboto_condensend};
                font-weight: 700;
                line-height: 1.2;
              }

              > img {
                position: absolute;
                right: 0;
                bottom: -30px;
              }
            }

            .contt {
              margin-top: 50px;
              border-radius: 10px;
              background-color: ${props => props.theme.colors.gray_primary};
              padding: 35px;

              > .detail {
                color: ${props => props.theme.colors.black_primary};
                font-size: 18px;
                line-height: 1.4;
                font-weight: 300;
              }

              > span {
                display: inline-block;
                color: ${props => props.theme.colors.black_primary};
                font-size: 20px;
                font-family: ${props => props.theme.fonts.roboto_condensend};
                font-weight: 700;
                line-height: 1.2;
                margin-top: 10px;
              }
            }
          }

          .pic {
            position: relative;
            background-color: ${props => props.theme.colors.green_primary};
            border-radius: 273px;
            width: 273px;
            height: 298px;
            flex-shrink: 0;

            > img {
              position: absolute;
              border-radius: 280px;
              width: 280px;
              height: 280px;
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

              > img {
                max-width: unset;
                position: absolute;
                left: -12px;
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_md}) {    
    .wrapper {
      .navbtn {
        display: block;
      }
      .slide {
        margin: 0 50px;
        .list {
          .one {
            .article {
              .title {
                > img {
                  transform: translate(50%);
                }
              }
            }
            
            .pic {
              width: 390px;
              height: 427px;
              border-radius: 390px;

              > img {
                border-radius: 400px;
                width: 400px;
                height: 400px;
              }
            }
          }
        }
      }
    }
  }


  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .wrapper {
      position: relative;

      .indicator {

      }

      .navbtn {

      }

      .slide {
        overflow: hidden;
        margin: 0 30px;
        .list {
          .one {
            flex-direction: row;
            .article {
              margin-top: 0px;
            }
          }
        }
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