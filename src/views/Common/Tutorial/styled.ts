import styled from "styled-components";

export const TutorialWrapper = styled.div`
  padding: 90px 0 20px;
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
        bottom: -30px;
      }
    }

    .desc {
      padding-bottom: 40px;
      color: ${props => props.theme.colors.black_primary};
      font-size: 18px;
      font-weight: 400;
      line-height: 1.2;
      margin-top: 60px;

      strong {
        color: ${props => props.theme.colors.green_primary};
      }
      border-bottom: 1px solid #c5c5c5;
    }

    .accordion {
      
      .one {
        border-bottom: 1px solid #c5c5c5;

        .subject {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
          cursor: pointer;

          > h5 {
            color: ${props => props.theme.colors.green_primary};
            font-size: 26px;
            font-family: ${props => props.theme.fonts.roboto_condensend};
            font-weight: 700;
            line-height: 1.2;
          }

          > span {

          }
        }

        .detail {
          color: ${props => props.theme.colors.black_primary};
          font-size: 18px;
          font-weight: 400;
          line-height: 1.2;
          padding: 10px 0;
          display: none;
        }

        &.active {
          .detail {
            display: block;
          }
        }
      }
    }
  }

  .location {
    .map {
      width: 388px;
      height: 446px;

    }

    .info {
      margin-top: 30px;
      > h5 {
        color: ${props => props.theme.colors.black_primary};
        font-size: 26px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
        line-height: 1.2;
      }

      > p {
        &.mt-20 {
          margin-top: 20px;
        }
        
        color: ${props => props.theme.colors.black_primary};
        font-size: 18px;
        font-weight: 400;
        line-height: 1.4;

        > a {
          color: ${props => props.theme.colors.green_primary};
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