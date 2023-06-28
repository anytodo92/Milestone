import styled from "styled-components";

export const RegisterWrapper = styled.div`
  padding: 30px 0 ;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

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

  .filter {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    column-gap: 20px;

    .box {
      max-width: 527px;
      padding: 15px 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: ${props => props.theme.colors.gray_primary};
      border-radius: 10px;

      .wrapper {
        display: flex;
        flex-wrap: wrap;
        column-gap: 10px;
        row-gap: 10px;

        > label {
          color: ${props => props.theme.colors.black_primary};
          font-size: 20px;
          font-family: ${props => props.theme.fonts.roboto_condensend};
          font-weight: 700;
          line-height: 1.2;
          margin-top: 5px;
        }

        .item {
          padding: 7px 40px;
          border-radius: 10px;
          background-color: ${props => props.theme.colors.green_primary};
          color: ${props => props.theme.colors.white};
          font-size: 18px;
          font-family: ${props => props.theme.fonts.roboto_condensend};
          font-weight: 700;
          line-height: 1.2;
        }
      }

      .btn {
        margin-top: 10px;
        cursor: pointer;
      }
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-top: 15px;
    
    overflow-x: auto;

    > .one {
      background-color: ${props => props.theme.colors.gray_primary};
      padding: 28px;
      border-radius: 10px;
      min-width: 1024px;

      .row1 {
        display: flex;

        .col1 {
          width: 30%;
        }
        .col2 {
          width: 40%;
        }
        .col3 {
          width: 30%;
        }
        .mark {
          border-radius: 10px;
          background-color: ${props => props.theme.colors.green_primary};
          padding: 7px 30px;
          color: ${props => props.theme.colors.white};
          font-size: 18px;
          font-family: ${props => props.theme.fonts.roboto_condensend};
          font-weight: 700;
          line-height: 1.2;
          display: inline-block;
        }

        .address {
          display: flex;
          align-items: center;
          column-gap: 20px;

          .icon {

          }

          .txt {
            color: ${props => props.theme.colors.green_primary};
            font-size: 18px;
            font-weight: 700;
            line-height: 1.4;
          }
        }

        .info1 {
          color: ${props => props.theme.colors.black_primary};
          font-size: 22px;
          font-family: ${props => props.theme.fonts.roboto_condensend};
          font-weight: 700;
          line-height: 1.2;
          text-align: right;
        }

        .info2 {
          color: ${props => props.theme.colors.black_primary};
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          text-align: right;
        }
      }

      .row2 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 45px;

        .hist {
          width: 70%;
          display: flex;
          flex-direction: column;
          row-gap: 20px;

          > .one {
            display: flex;

            .col1 {
              width: 43%;
            }
            .col2 {
              width: 57%;
            }
            .date {
              color: ${props => props.theme.colors.black_primary};
              font-size: 22px;
              font-family: ${props => props.theme.fonts.roboto_condensend};
              font-weight: 700;
              line-height: 1.2;
            }
            .time {
              color: ${props => props.theme.colors.black_primary};
              font-size: 18px;
              font-weight: 400;
              line-height: 1.4;
            }
          }
        }

        .buttons {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          width: 30%;
          
          > button {
            height: 46px;
            border-radius: 46px;
            background-color: ${props => props.theme.colors.green_primary};
            color: ${props => props.theme.colors.white};
            font-size: 18px;
            font-family: ${props => props.theme.fonts.roboto_condensend};
            font-weight: 700;
            line-height: 1.2;
            padding: 0 60px;
            margin-top: 30px;
            cursor: pointer;
            border: 0;
            outline: 0;
          }
        }
      }
      
    }
  }

  .more {
    display: flex;
    justify-content: center;
    margin-top: 25px;

    > button {
      display: inline-flex;
      column-gap: 10px;
      align-items: center;
      height: 46px;
      border-radius: 46px;
      color: ${props => props.theme.colors.green_primary};
      font-size: 22px;
      font-weight: 700;
      line-height: 1.4;
      cursor: pointer;
      border: 0;
      outline: 0;

      .icon {

      }
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .title {
      > img {
        transform: translate(50%);
      }
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop}) {
    .filter {
      flex-direction: row;

      .box {
        width: 527px;
      }
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`;