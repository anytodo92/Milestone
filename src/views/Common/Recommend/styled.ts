import styled from "styled-components";

export const RecommendWrapper = styled.div`
  padding: 40px 0 ;
  background-color: ${props => props.theme.colors.gray_primary};
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    > .desc {
      font-weight: 300;
      font-size: 14px;
      line-height: 1.2;
      color: ${props => props.theme.colors.black_primary};
      margin-top: 20px;
    }

  }

  .slide {
    overflow: hidden;
  }

  .list {
    margin-top: 45px;
    overflow-x: auto;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    .one {
      .wrapper {
        border-radius: 30px;
        background: ${props => props.theme.colors.white};
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px 25px 32px;
        min-width: 360px;
        position: relative;
        margin-right: ${props => props.theme.margins.primary}px;

        max-width: 430px;

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
            object-fit: cover;
          }
          .icon {
            position: absolute;
            background-color: ${props => props.theme.colors.white};
            width: 87px;
            height: 87px;
            border-radius: 87px;
            bottom: 20px;
            left: 50%;
            transform: translate(-50%, 50%);
            box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.10);
          }
        }

        .article {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;

          > h2 {
            position: relative;
            color: ${props => props.theme.colors.black_primary};
            font-size: 22px;
            font-weight: 700;
            line-height: 1.5;
            text-align: center;
            display: inline-block;

            &::after {
              content: "";
              background-color: ${props => props.theme.colors.black_primary};
              border-radius: 4px;
              width: 69px;
              height: 4px;
              display: inline-block;
              position: absolute;
              left: 0;
              bottom: 0;
            }
          }

          > .desc {
            color: #5E5E5E;
            text-align: center;
            font-size: 14px;
            font-weight: 300;
            line-height: 1.2;
            margin-top: 20px;
          }

          .buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 5px;

            > a {
              display: inline-flex;
              height: 46px;
              border-radius: 46px;
              background-color: ${props => props.theme.colors.green_primary};
              color: ${props => props.theme.colors.white};
              font-size: 12px;
              font-weight: 600;
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
    
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    .content {
      > .desc {
        font-size: 16px;
      }
    }
    .list {
      .wrapper {
        .one {
          .article {
            > h2 {
              font-size: 24px;
            }

            > .desc {
              font-size: 16px;
            }

            .buttons {
              > a {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .list {
      .wrapper {
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
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 40px 0 80px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .slide {
      margin: 0 ${props => props.theme.margins.primary}px;
    }

    .list {
      overflow: hidden;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content, .slide {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`