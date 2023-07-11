import styled from "styled-components";
import { Images } from "../../../utils/assets";

export const CourseWrapper = styled.div`
  padding: 70px 0 50px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }         

  .title {
    position: relative;
    display: inline-block;
    > h1 {
      font-size: 45px;
      font-weight: 700;
      font-family: ${props => props.theme.fonts.roboto_condensend};
      line-height: 1.2;

    }
    > img {
      position: absolute;
      right: 0;
      bottom: -40px;
    }
  }

  .list {
    display: grid;
    grid-template-columns: 1fr;

    .one {
      margin-top: 20px;
      .wrapper {
        margin-top: 50px;
        background-color: #dbe8de;
        border-radius: 10px;
        
        display: flex;
        flex-direction: column;
        .pic {
          height: 200px;
        }
        .article {
          padding: 35px 35px 130px;
          > h5 {
            font-size: 26px;
            font-family: ${props => props.theme.fonts.roboto_condensend};
            font-weight: 700;
            line-height: 1.2;
            margin-top: 25px;
            color: ${props => props.theme.colors.black_primary};
          }

          .desc {
            font-size: 20px;
            font-family: ${props => props.theme.fonts.roboto_condensend};
            font-weight: 700;
            line-height: 1.2;
            color: ${props => props.theme.colors.black_primary};
          }

          .detail {
            font-size: 18px;
            font-weight: 300;
            line-height: 1.4;
            margin-top: 25px;
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
            font-size: 18px;
            font-family: ${props => props.theme.fonts.roboto_condensend};
            font-weight: 700;
            line-height: 1.2;
            padding: 0 23px;
            margin-top: 30px;
            cursor: pointer;
          }
        }
        
      }

      &.spec {
        position: relative;
        .wrapper {
          flex-direction: column-reverse;
          
          background-color: transparent;
          .pic {
            height: 360px;
            border-radius: 0 0 10px 10px;
            overflow: hidden;
            position: relative;
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
            padding: 60px 35px 50px;
            background-color: ${props => props.theme.colors.green_primary};
            border-radius: 10px 10px 0 0;
            > h5, .detail, .desc {
              color: ${props => props.theme.colors.white};
            }

            > h5 {
              margin-top: 30px;
            }

            .detail {
              margin-top: 45px;
            }

            > button {
              margin-top: 40px;
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
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4;
    color: ${props => props.theme.colors.black_primary};

    .link {
      color: ${props => props.theme.colors.green_primary};
      font-weight: 500;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .list {
      grid-template-columns: 1fr 1fr 1fr;

      .one {
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