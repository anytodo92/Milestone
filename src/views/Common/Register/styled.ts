import styled from "styled-components";

export const RegisterWrapper = styled.div`
  padding: 30px 0 15px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .filter {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    column-gap: 20px;

    .box {
      
      .selected-wrapper {
        padding: 15px 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: ${props => props.theme.colors.gray_primary};
        border-radius: 10px;
        position: relative;
        .tags {
          display: flex;
          flex-wrap: wrap;
          column-gap: 15px;
          row-gap: 15px;

          > label {
            color: ${props => props.theme.colors.black_primary};
            font-size: 14px;
            font-weight: 600;
            line-height: 1.2;
            margin-top: 5px;
          }

          .item {
            padding: 7px 40px;
            border-radius: 10px;
            background-color: ${props => props.theme.colors.green_primary};
            color: ${props => props.theme.colors.white};
            font-size: 14px;
            font-weight: 600;
            line-height: 1.2;
          }
        }

        .btn {
          display: flex;
          align-items:center;
          cursor: pointer;
          > svg {
            transition: all 0.5s ease;
            > line {
              stroke: ${props => props.theme.colors.green_primary};
            }
          }
        }
      }

      .all-wrapper {
        display: none;
        background-color: ${props => props.theme.colors.gray_primary};
        padding: 30px 10px 3px;
        border-radius: 10px;
        margin-top: -15px;
        .list1 {
          max-height: 150px;
          overflow-y: auto;
          .one {
            > label {
              display: inline-flex;
              align-items: center;
              color: #838383;
              font-size: 14px;
              font-weight: 300;
              line-height: 1.5;
            }
          }
        }
      }

      &.opened {
        .selected-wrapper {
          background-color: ${props => props.theme.colors.green_primary};

          .tags {
            > label {
              color: ${props => props.theme.colors.white};
            }
            .item {
              background-color: ${props => props.theme.colors.white};
              color: ${props => props.theme.colors.green_primary};
            }
          }

          .btn {
            > svg {
              transform: rotate(180deg);
              > line {
                stroke: ${props => props.theme.colors.white};
              }
            }
          }
        }
        .all-wrapper {
          display: block;
        }
      }
    }
  }
  .no-list {
    background-color: ${props => props.theme.colors.gray_primary};
    padding: 28px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    color: ${props => props.theme.colors.black_primary};
    margin-top: 35px;
  }
  .list {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-top: 35px;
    
    overflow-x: auto;

    > .one {
      background-color: ${props => props.theme.colors.gray_primary};
      padding: 28px;
      border-radius: 10px;

      &.opened {
        .mobile {
          .row1 {
            .btn-close {
              display: block;
            }
          }
          .row5 {
            .buttons {
              > button {
                display: none;
              }
            }
          }
        }
        .desktop {
          .row1 {
            .btn-close {
              display: block;
            }
          }
          .row2 {
            .buttons {
              > button {
                display: none;
              }
            }
          }
        }

        .row3 {
          display: block;
        }
        
      }

      .mark {
        border-radius: 10px;
        background-color: ${props => props.theme.colors.green_primary};
        padding: 7px 30px;
        color: ${props => props.theme.colors.white};
        font-size: 14px;
        font-weight: 600;
        line-height: 1.2;
        display: inline-block;
      }

      .address {
        display: flex;
        align-items: center;
        column-gap: 10px;

        .icon {

        }

        .txt {
          color: ${props => props.theme.colors.green_primary};
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
        }
      }

      .info1 {
        color: ${props => props.theme.colors.black_primary};
        font-size: 16px;
        font-weight: 800;
        line-height: 1.2;
        text-align: right;
      }

      .info2 {
        color: ${props => props.theme.colors.black_primary};
        font-size: 12px;
        font-weight: 300;
        line-height: 1.4;
        text-align: right;
      }

      .hist {
        width: 70%;
        display: flex;
        flex-direction: column;
        row-gap: 10px;

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
            font-size: 16px;
            font-weight: 800;
            line-height: 1.2;
          }
          .time {
            color: ${props => props.theme.colors.black_primary};
            font-size: 14px;
            font-weight: 300;
            line-height: 1.4;
          }
        }
      }

      .buttons {
        > button {
          height: 46px;
          border-radius: 46px;
          background-color: ${props => props.theme.colors.green_primary};
          color: ${props => props.theme.colors.white};
          font-size: 14px;
          font-weight: 600;
          line-height: 1.2;
          padding: 0 40px;
          margin-top: 30px;
          cursor: pointer;
          border: 0;
          outline: 0;
        }
      }

      .mobile {
        .row1 {
          display: flex;
          justify-content: space-between;
          .btn-close {
            display: none;
            margin-top: -20px;
            margin-right: -10px;
            background: unset;
            opacity: 1;
          }
        }
        .row2 {
          margin-top: 15px;
          .hist {
            width: 100%;
            .one {
              flex-direction: column;
              row-gap: 10px;

              .col1, .col2 {
                width: 100%;
              }
            }
          }
        }
        .row3 {
          margin-top: 20px;
        }
        .row4 {
          margin-top: 20px;
          .info1, .info2 {
            text-align: left;
          }
        }
        .row5 {

        }
      }

      .desktop {
        display: none;
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
            display: flex;
            justify-content: flex-end;
            column-gap: 10px;
            align-items: center;
          }
          

          .btn-close {
            display: none;
            
            width: auto;
            height: auto;
            opacity: 1;
            background: unset;
            padding: 0;
            > img {
              max-width: unset;
            }
          }
        }

        .row2 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 35px;

          .buttons {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            width: 30%;
          }
        }
      }

      .row3 {
        display: none;
        margin-top: 35px;
        .title {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.2;
          color: ${props => props.theme.colors.green_primary};
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

      flex-direction: column;
      align-items: center;
      row-gap: 8px;

      height: 46px;
      border-radius: 46px;
      color: ${props => props.theme.colors.green_primary};
      font-size: 14px;
      font-weight: 600;
      line-height: 1.4;
      cursor: pointer;
      border: 0;
      outline: 0;

      .icon {

      }
    }
  }

  .yform {
    margin-top: 10px;
    .form {
      grid-template-columns: 1fr;
      row-gap: 0px;

      .row10 {
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 10px;
        row-gap: 10px;
      }
    }
    .submit {
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;

      button {
        padding: 0 35px;
      }
    }
    .check {
      display: grid;
      grid-template-columns: 1fr;

      .check-wrapper {
        display: flex;
        align-items: center;
        column-gap: 5px;
        
        .txt {
          color: ${props => props.theme.colors.black_primary};
          font-size: 14px;
          font-weight: 300;
          line-height: 1.4;
          margin-top: 15px;

          > a {
            color: ${props => props.theme.colors.green_primary};
            font-weight: 600;
          }
        }
      }
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    .filter {
      .box {
        .selected-wrapper {
          .tags {
            > label {
              font-size: 16px;
            }

            .item {
              font-size: 16px;
            }
          }
        }

        .all-wrapper {
          .list1 {
            .one {
              > label {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
    .no-list {
      font-size: 22px;
    }
    .list {
      > .one {
        .mark {
          font-size: 16px;
        }

        .address {
          .txt {
            font-size: 16px;
          }
        }

        .info1 {
          font-size: 18px;
        }

        .info2 {
          font-size: 14px;
        }

        .hist {
          > .one {
            .date {
              font-size: 18px;
            }
            .time {
              font-size: 16px;
            }
          }
        }

        .buttons {
          > button {
            font-size: 16px;
          }
        }

        .row3 {
          .title {
            font-size: 24px;
          }
        }
      }
    }

    .more {
      > button {
        font-size: 16px;
      }
    }

    .yform {
      .check {
        .check-wrapper {
          .txt {
            font-size: 16px;
          }
        }
      }
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .list {
      > .one {
        .mobile {
          .row2 {
            .hist {
              .one {
                flex-direction: row;
                .col1 {
                  width: 43%;
                }
                .col2 {
                  width: 57%;
                }
              }
            }
          }
        }
      }
    }
    .yform {
      .form {
        .row10 {
          grid-template-columns: 1fr 1fr;
        }
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

    .list {
      .one {
        .mobile {
          display: none;
        }
        .desktop {
          display: block;
        }
      }
    }

    .yform {
      .form {
        row-gap: 10px;
        .row10 {
          grid-template-columns: 0.8fr 0.8fr 1fr;
        }
      }
      .check {
        grid-template-columns: 2fr 1fr;
      }
      .submit {
        justify-content: flex-end;
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