import styled from "styled-components";

export const RequirementWrapper = styled.div`
  background-color: ${props => props.theme.colors.gray_primary};
  padding: 35px 0 70px;
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
    margin-top: 20px;
    .desc {
      padding-bottom: 40px;
      color: ${props => props.theme.colors.black_primary};
      font-size: 14px;
      font-weight: 300;
      line-height: 1.4;
      margin-top: 25px;

      a {
        color: ${props => props.theme.colors.green_primary};
        text-decoration: none;
        font-weight: 600;
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
          padding: 15px 0;
          cursor: pointer;

          > h5 {
            color: ${props => props.theme.colors.green_primary};
            font-size: 18px;
            font-weight: 700;
            line-height: 1.2;
          }

          > span {
            transition: all .5s ease;
          }
        }

        .detail {
          padding: 0;
          height: 0;
          overflow: hidden;
          transition: all .5s ease;

          .text {
            color: ${props => props.theme.colors.black_primary};
            font-size: 14px;
            font-weight: 300;
            line-height: 1.2;
          }

          .thumb {
            margin-top: 37px;
            position: relative;
            > p {
              color: ${props => props.theme.colors.black_primary};
              font-size: 14px;
              font-weight: 700;
              line-height: 1.2;
            }
            > a {
              position: relative;
              text-decoration: none;

              > img {
                display: inline;
                margin-top: 10px;
                border-radius: 15px;
                width: 165px;
                max-width: unset;
              }
              > svg {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
              }
            }
          }
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

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    .article {
      .desc {
        font-size: 16px;
      }

      .accordion {
        .one {
          .subject {
            > h5 {
              font-size: 20px;
            }
          }
          .detail {
            .text, .thumb>p {
              font-size: 16px;
            }
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      flex-direction: row;
    }

    .article {
      margin-top: 0;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`