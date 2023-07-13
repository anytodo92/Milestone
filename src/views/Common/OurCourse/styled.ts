import styled from "styled-components";

export const OurCourseWrapper = styled.div`
  padding: 110px 0 30px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    display: flex;
    flex-direction: column;
    column-gap: 100px;
    row-gap: 30px;
  }

  .article {
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
        bottom: -40px;
      }
    }

    .desc {
      color: ${props => props.theme.colors.black_primary};
      font-size: 18px;
      font-weight: 300;
      line-height: 1.4;
      margin-top: 50px;
    }

    .list {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      .one {
        > h5 {
          color: ${props => props.theme.colors.black_primary};
          font-size: 26px;
          font-family: ${props => props.theme.fonts.roboto_condensend};
          font-weight: 700;
          line-height: 120%;
        }

        > .detail {
          color: ${props => props.theme.colors.black};
          font-size: 18px;
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
      font-size: 14px;
      font-weight: 300;
      line-height: 1.2;
      margin-top: 30px;
    }
  }

  .info {
    margin-top: 20px; 
    > h4 {
      color: ${props => props.theme.colors.black_primary};
      font-size: 26px;
      font-family: ${props => props.theme.fonts.roboto_condensend};
      font-weight: 700;
      line-height: 1.2;
    }

    .wrapper {
      position: relative;
      display: inline-block;
      
      .map {
        margin-top: 30px;
        .container {
          width: 273px;
          height: 176px;
          border-radius: 10px;
          overflow: hidden;
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
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    .info {
      .wrapper {
        .map {
          .container {
            width: 383px;
            height: 246px;
          }
        }
        .control {
          > h5 {
            font-size: 18px;
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .article {
      .title {
        > img {
          transform: translate(50%);
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      flex-direction: row;
    }

    .info {
      margin-top: 90px; 
      .wrapper {
        .map {
          width: 547px;
          height: 352px;
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
