import styled from "styled-components";

export const TeamWrapper = styled.div`
  padding: 78px 0 0;
  background-color: ${props => props.theme.colors.white};
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
    margin-top: 80px;
    overflow-x: auto;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    .one {
      flex: 1;
      .wrapper {
        min-width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        margin-right: ${props => props.theme.margins.primary}px;
        max-width: 430px;

        .pic {
          position: relative;
          margin-bottom: 15px;

          > img {
            position: relative;
            width: 240px;
            height: 240px;
            border-radius: 100%;
            border: 2px solid ${props => props.theme.colors.green_primary};
            background-color: #fff;
            max-width: unset;
          }

          .bg {
            position: absolute;
            top: -17px;
            left: 17px;
            width: 210px;
            height: 280px;
            border-radius: 210px;
            transform: rotate(45deg);
            background-color: ${props => props.theme.colors.green_primary};
          }
        }

        .article {
          margin: 0 30px;
          width: 80%;
          &.full {
            .detail {
              height: auto;
              margin-top: 15px;
            }
            
            > button {
              > svg {
                transform: rotate(180deg);
              }
            }
          }
          > h2 {
            position: relative;
            color: ${props => props.theme.colors.black_primary};
            font-size: 22px;
            font-weight: 700;
            line-height: 1.5;
            margin-top: 20px;

            &::after {
              position: absolute;
              width: 69px;
              height: 4px;
              background-color: ${props => props.theme.colors.black_primary};
              border-radius: 4px;
              content: '';
              left: 0;
              bottom: 0;
            }
          }

          > .desc {
            color: ${props => props.theme.colors.black_primary};
            font-size: 14px;
            font-weight: 300;
            line-height: 1.4;
            text-align: left;
            margin-top: 20px;
          }

          > .detail {
            color: ${props => props.theme.colors.black};
            font-size: 14px;
            font-weight: 300;
            line-height: 1.4;
            height: 0px;
            overflow: hidden;

            > ul {
              list-style: disc;
              margin-left: 20px;
            }
            
          }

          > .email {
            color: ${props => props.theme.colors.green_primary};
            font-size: 14px;
            font-weight: 600;
            line-height: 1.4;
            margin-top: 20px;
          }

          > .phone {
            color: ${props => props.theme.colors.green_primary};
            font-size: 14px;
            font-weight: 600;
            line-height: 1.4;
          }

          > button {
            color: ${props => props.theme.colors.green_primary};
            font-size: 12px;
            font-weight: 600;
            line-height: 1.4;
            display: flex;
            align-items: center;
            column-gap: 10px;
            margin-top: 30px;
            border: 0;
            outline: 0;
            cursor: pointer;

            > svg {
              transition: all .3s ease;
              margin-top: 3px;
            }
          }
        }
        
      }
    }
    
  }

  .buttons {
    display: flex;
    justify-content: center;
    > a {
      display: flex;
      align-items: center;
      height: 46px;
      border-radius: 46px;
      background-color: ${props => props.theme.colors.green_primary};
      color: ${props => props.theme.colors.white};
      font-size: 14px;
      font-weight: 600;
      line-height: 1.2;
      padding: 0 23px;
      margin-top: 60px;
      cursor: pointer;
      border: 0;
      outline: 0;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    .list {
      .one {
        .wrapper {
          .pic {
            > img {
              width: 298px;
              height: 298px;
            }
            .bg {
              top: -27px;
              left: 18px;
              width: 270px;
              height: 350px;
              border-radius: 270px;
            }
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    .content {
      .desc {
        font-size: 16px;
      }
    }
    .list {
      .one {
        .wrapper {
          > h2 {
            font-size: 24px;
          }

          > .desc, 
          > .detail,
          > .email,
          > .phone
          > button {
            font-size: 16px;
          }
        }
      }
    }
    .buttons {
      > a {
        font-size: 16px;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .list {

      .one {
        .wrapper {
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

          .article {
            > h2 {
              font-size: 25px;
            }
          }
        }
      }      
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .slide {
      width: auto;
      margin: 0 ${props => props.theme.margins.primary}px;
    }
  }


  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }

  @media (min-width: 1780px) {
    .slide {
      width: 1740px;
      margin: 0 auto;
    }

    .list {
      margin-left:160px;
    }      
  }
`