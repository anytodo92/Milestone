import styled from "styled-components";
import { Images } from "../../../utils/assets";

export const CourseWrapper = styled.div`
  padding: 70px 0 50px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }         

  .desc {
    max-width: 1052px;
    font-size: 14px;
    font-weight: 300;
    line-height: 19px;
    color: ${props => props.theme.colors.black_primary};
    margin-top: 10px;
  }

  .list {
    display: grid;
    grid-template-columns: 1fr;

    .one {
      margin-top: 30px;
      .wrapper {
        background-color: #dbe8de;
        border-radius: 10px;
        
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;

        .bg {
          position: absolute;
          left: 0;
          top: 0;
          opacity: .4;

          &.reverse {
            right: 0;
            bottom: 0;


            transform: rotate(180deg)
          }
        }

        .pic {
          height: 200px;
          display: none;
        }
        .article {
          position: relative;
          padding: 35px 35px 130px;

          > h5 {
            font-size: 22px;
            font-weight: 800;
            line-height: 1.2;
            margin-top: 15px;
            color: ${props => props.theme.colors.black_primary};
          }

          .desc {
            font-size: 16px;
            font-weight: 700;
            line-height: 1.2;
            color: ${props => props.theme.colors.black_primary};
          }

          .detail {
            font-size: 14px;
            font-weight: 300;
            line-height: 1.4;
            margin-top: 80px;
            color: ${props => props.theme.colors.black_primary};

            > ul {
              list-style: disc;
              padding-left: 20px;
            }
          }

          > button {
            position: absolute;
            height: 46px;
            border: 0;
            outline: 0;
            border-radius: 46px;
            background-color: ${props => props.theme.colors.green_primary};
            color: ${props => props.theme.colors.white};
            font-size: 12px;
            font-weight: 600;
            line-height: 1.2;
            padding: 0 23px;
            margin-top: 35px;
            cursor: pointer;
          }
        }
        
      }

      &.spec {
        position: relative;
        z-index:1;
        .wrapper {
          flex-direction: column-reverse;
          
          background-color: transparent;
          .pic {
            height: 360px;
            border-radius: 0 0 10px 10px;
            overflow: hidden;
            position: relative;
            display: block;
            > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .mask {
              position: absolute;
              width: 100%;
              height: 100px;
              top: -5px;
              object-fit: unset;
            }
          }

          .article {
            padding: 60px 35px 0;
            background-color: ${props => props.theme.colors.green_primary};
            border-radius: 10px 10px 0 0;
            > h5, .detail, .desc {
              color: ${props => props.theme.colors.white};
            }

            > h5 {
              margin-top: 25px;
            }

            .detail {
              margin-top: 45px;
            }

            > button {
              margin-top: 290px;
              background-color: ${props => props.theme.colors.white};
              color: ${props => props.theme.colors.black_primary};
            }
          }
        }
      }
    }
  }

  .more {
    margin-top: 60px;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    color: ${props => props.theme.colors.black_primary};

    .link {
      color: ${props => props.theme.colors.green_primary};
      font-weight: 500;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    .desc {
      font-size: 16px;
    }

    .list {
      .one {
        .wrapper {
          .article {
            > h5 {
              font-size: 24px;
            }

            .desc {
              font-size: 18px;
            }

            .detail {
              font-size: 16px;
            }

            > button {
              font-size: 16px;
            }
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .list {
      grid-template-columns: 1fr 1fr 1fr;

      .one {
        .wrapper {
          margin-top: 50px;

          .pic {
            display: block;
          }

          .article {
            .detail {
              margin-top: 25px;
            }
          }
        }
        &.spec {
          .wrapper {
            position: absolute;
            width: 104%;
            height: 104%;
            margin-left: -2%;
            margin-top: 3%;

            .pic {
              .mask {
                object-fit: cover;
                object-position: 0 0;
                top: -5px;
              }
            }

            .article {
              padding: 60px 35px 50px;
              > button {
                margin-top: 40px;
              }
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