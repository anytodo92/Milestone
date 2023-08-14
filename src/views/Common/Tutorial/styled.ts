import styled from "styled-components";

export const TutorialWrapper = styled.div`
  padding: 65px 0 70px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    display: flex;
    flex-direction: column;
    column-gap: 80px;
    row-gap: 30px;
  }

  .article {
    .desc {
      padding-bottom: 30px;
      color: ${props => props.theme.colors.black_primary};
      font-size: 14px;
      font-weight: 300;
      line-height: 1.4;
      margin-top: 20px;

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
          color: ${props => props.theme.colors.black_primary};
          font-size: 14px;
          font-weight: 300;
          line-height: 1.2;
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

  .location {
    flex-shrink: 0;
    .map {
      .container {
        width: 100%;
        height: 446px;
        border-radius: 20px;
        overflow: hidden;
        max-width: unset;
      }
    }

    .info {
      margin-top: 20px;
      > h5 {
        color: ${props => props.theme.colors.black_primary};
        font-size: 22px;
        font-weight: 700;
        line-height: 1.2;
      }

      > p {
        &.mt-20 {
          margin-top: 20px;
        }
        
        color: ${props => props.theme.colors.black_primary};
        font-size: 14px;
        font-weight: 300;
        line-height: 1.4;

        > a {
          color: ${props => props.theme.colors.green_primary};
          font-weight: 600;
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
            font-size: 16px;
          }
        }
      }
    }
    .location {
      .info {
        > h5 {
          font-size: 24px;
        }
        > p {
          font-size: 16px;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      flex-direction: row;
    }

    .article {
      .title {
        > h2 {
          font-size: 45px;
        }
      }
    }

    .location {
      .map {
        .container {
          width: 388px;
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