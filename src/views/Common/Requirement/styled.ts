import styled from "styled-components";

export const RequirementWrapper = styled.div`
  background-color: ${props => props.theme.colors.gray_primary};
  padding: 30px 0 70px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    display: flex;
    flex-direction: column;
    column-gap: 100px;
    row-gap: 30px;
  }

  .pic {
    position: relative;
    border-radius: 310px;
    background-color: ${props => props.theme.colors.green_primary};
    width: 297px;
    height: 310px;
    flex-shrink: 0;

    > img {
      position: absolute;
      border-radius: 297px;
      width: 297px;
      height: 297px;
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
    }
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
      font-weight: 300;
      line-height: 1.4;
      margin-top: 60px;

      a {
        color: ${props => props.theme.colors.green_primary};
        text-decoration: none;
        font-weight: 500;
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
            font-size: 20px;
            font-family: ${props => props.theme.fonts.roboto_condensend};
            font-weight: 700;
            line-height: 1.2;
          }

          > span {
            transition: all .5s ease;
          }
        }

        .detail {
          color: ${props => props.theme.colors.black_primary};
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4;
          padding: 0;
          height: 0;
          overflow: hidden;
          transition: all .5s ease;
        }

        &.active {
          .subject {
            > span {
              transform: rotate(180deg);
            }
          }
          .detail {
            padding: 10px 0 25px;
            height: auto;
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
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`