import styled from "styled-components";

export const TeamWrapper = styled.div`
  padding: 40px 0 0;
  background-color: ${props => props.theme.colors.gray_primary};
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    > .desc {
      font-weight: 300;
      font-size: 18px;
      line-height: 1.4;
      color: ${props => props.theme.colors.black_primary};
      margin-top: 80px;
    }
  }

  .content1 {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .title {
    position: relative;
    display: inline-block;
    > h2 {
      font-weight: 700;
      font-size: 35px;
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
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 80px;
    row-gap: 50px;
    .one {
      display: flex;
      flex-direction: column;
      align-items: center;
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
          top: -20px;
          left: 20px;
          width: 210px;
          height: 280px;
          border-radius: 210px;
          transform: rotate(45deg);
          background-color: ${props => props.theme.colors.green_primary};
        }
      }

      .wrapper {
        max-width: 360px;
        &.full {
          .detail {
            height: auto;
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
          font-size: 35px;
          font-family: ${props => props.theme.fonts.roboto_condensend};
          font-weight: 700;
          line-height: 1.5;
          margin-top: 20px;

          &::after {
            position: absolute;
            width: 69px;
            border-bottom: 4px solid ${props => props.theme.colors.black_primary};
            content: '';
            left: 0;
            bottom: 0;
          }
        }

        > .desc {
          color: ${props => props.theme.colors.black_primary};
          font-size: 18px;
          font-weight: 400;
          line-height: 25px;
          text-align: left;
        }

        > .detail {
          color: ${props => props.theme.colors.black};
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4;
          margin-top: 15px;
          height: 96px;
          overflow: hidden;

          > ul {
            list-style: disc;
            margin-left: 20px;
          }

          
        }

        > .email {
          color: ${props => props.theme.colors.green_primary};
          font-size: 18px;
          font-weight: 700;
          line-height: 1.4;
          margin-top: 5px;
        }

        > .phone {
          color: ${props => props.theme.colors.green_primary};
          font-size: 18px;
          font-weight: 700;
          line-height: 1.4;
        }

        > button {
          color: ${props => props.theme.colors.green_primary};
          font-size: 18px;
          font-weight: 500;
          line-height: 1.4;
          display: flex;
          align-items: center;
          column-gap: 10px;
          margin-top: 15px;
          border: 0;
          ouline: 0;
          cursor: pointer;

          > svg {
            transition: all .3s ease;
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
      font-size: 18px;
      font-family: ${props => props.theme.fonts.roboto_condensend};
      font-weight: 700;
      line-height: 1.2;
      padding: 0 23px;
      margin-top: 30px;
      cursor: pointer;
      border: 0;
      outline: 0;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
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
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .title {
      > h2 {
        font-size: 45px;
      }
    }
    .list {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .list {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }


  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content, .content1 {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`