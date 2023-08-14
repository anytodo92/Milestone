import styled from "styled-components";

export const OurCourseWrapper = styled.div`
  padding: 65px 0 30px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    display: flex;
    flex-direction: column;
    column-gap: 120px;
    row-gap: 30px;
  }

  .article {
    .desc {
      color: ${props => props.theme.colors.black_primary};
      font-size: 14px;
      font-weight: 300;
      line-height: 1.2;
      margin-top: 30px;
    }

    .list {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      row-gap: 25px;
      .one {
        > h5 {
          color: ${props => props.theme.colors.black_primary};
          font-size: 22px;
          font-family: ${props => props.theme.fonts.roboto_condensend};
          font-weight: 600;
          line-height: 120%;
        }

        > .detail {
          color: ${props => props.theme.colors.black};
          font-size: 14px;
          font-weight: 300;
          line-height: 1.4;
          margin-top: 10px;

          > ul {
            list-style: disc;
            margin-left: 20px;
          }
        }
      }
    }

    .txt {
      color: ${props => props.theme.colors.black_primary};
      font-size: 12px;
      font-weight: 300;
      line-height: 1.2;
      margin-top: 15px;
    }
  }

  .info {
    margin-top: 20px; 
    > h4 {
      color: ${props => props.theme.colors.black_primary};
      font-size: 22px;
      font-weight: 700;
      line-height: 1.2;
    }

    .wrapper {
      position: relative;
      
      .map {
        margin-top: 15px;
        .container {
          width: 100%;
          height: 352px;
          border-radius: 20px;
          overflow: hidden;
          max-width: unset;

          > img {
            width: 100%;
          }
        }
      }

      .control {
        position: absolute;
        left: 50%;
        bottom: 10px;
        width: 90%;
        height: 68px;
        display: flex;
        justify-content: space-between;
        background-color: ${props => props.theme.colors.white};
        border-radius: 10px;
        align-items: center;
        transform: translateX(-50%);
        padding: 0 20px;

        .left, .right {
          width: 14px;
          height: 28px;
          cursor: pointer;
        }

        > h5 {
          color: ${props => props.theme.colors.black_primary};
          text-align: center;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    .article {
      .desc {
        font-size: 16px;
      }

      .list {
        .one {
          > h5 {
            font-size: 24px;
          }

          > .detail {
            font-size: 16px;
          }
        }
      }

      .txt {
        font-size: 14px;
      }
    }

    .info {
      > h4 {
        font-size: 24px;
      }

      .wrapper {
        .control {
          > h5 {
            font-size: 16px;
          }
        }

      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      flex-direction: row;
    }

    .info {
      margin-top: 70px; 
      .wrapper {
        .map {
          .container {
            width: 547px;
            height: 352px;
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
