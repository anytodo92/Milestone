import styled from "styled-components";

export const CourseOverviewWrapper = styled.div`
  .hero {
    .summary {
      padding-top: 215px;
      padding-bottom: 60px;
    }
    .bg {
      background-position: 0 0;
    }
  }
`

export const CourseListWrapper = styled.div`
  padding: 30px 0 ;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }
  .filter {
    margin-top: 60px;
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
              font-size: 18px;
              font-weight: 400;
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

    .check-options {
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      margin-top: 15px;

      .checkbox-wrapper {
        color: #838383;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
      }
    }
  }
  .no-list {
    background-color: ${props => props.theme.colors.gray_primary};
    padding: 28px;
    border-radius: 10px;
    font-family: ${props => props.theme.fonts.roboto_condensend};
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    color: ${props => props.theme.colors.black_primary};
    margin-top: 15px;
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

      &.opened {
        .mobile {
          .row1 {
            .btn-close {
              display: block;
            }
          }
          .row5 {
            .buttons {
              display: none;
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
              display: none;
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
        font-size: 18px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
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
        font-size: 18px;
        font-weight: 700;
        line-height: 1.4;
        text-align: right;

        &.red {
          color: red;
        }
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
            font-size: 22px;
            font-family: ${props => props.theme.fonts.roboto_condensend};
            font-weight: 700;
            line-height: 1.2;
          }
          .time {
            color: ${props => props.theme.colors.black_primary};
            font-size: 18px;
            font-weight: 300;
            line-height: 1.4;
          }
        }
      }

      .person-list {
        display: flex;
        flex-direction: column;
        margin-top: 15px;

        .one {
          display: grid;
          grid-template-columns: 1fr;
          border-bottom: 1px solid #ababab;
          padding: 15px 0px;
          column-gap: 10px;
          row-gap: 10px;

          .col {
            > p {
              color: ${props => props.theme.colors.black_primary};
              font-size: 18px;
              font-weight: 300;
              line-height: 1.4;
              &:nth-child(2) {
                margin-top: 5px;
              }
              &.bold {
                color: ${props => props.theme.colors.black_primary};
                font-family: ${props => props.theme.fonts.roboto_condensend};
                font-size: 22px;
                font-weight: 700;
                line-height: 1.2;
              }
            }

            &.buttons {
              margin-top: 0;
              display: flex;
              justify-content: flex-start;
            }
            > button {
              height: 46px;
              border-radius: 46px;
              color: ${props => props.theme.colors.green_primary};
              font-size: 18px;
              font-family: ${props => props.theme.fonts.roboto_condensend};
              font-weight: 700;
              line-height: 1.2;
              padding: 0 30px;
              cursor: pointer;
              margin-top: 0;
              border: 2px solid ${props => props.theme.colors.green_primary};
            }
          }
        }
      }

      .buttons {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        column-gap: 10px;
        margin-top: 30px;

        > button {
          height: 46px;
          border-radius: 46px;
          color: ${props => props.theme.colors.white};
          font-size: 18px;
          font-family: ${props => props.theme.fonts.roboto_condensend};
          font-weight: 700;
          line-height: 1.2;
          padding: 0 55px;
          cursor: pointer;
          border: 0;
          outline: 0;

          &.green {
            background-color: ${props => props.theme.colors.green_primary};
          }

          &.red {
            background-color: #b51d1d;
          }
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
          margin-top: 45px;

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
        margin-top: 50px;
        .title {
          font-size: 26px;
          font-family: ${props => props.theme.fonts.roboto_condensend};
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
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4;
          margin-top: 15px;

          > a {
            color: ${props => props.theme.colors.green_primary};
          }
        }
      }
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .title {
      > img {
        transform: translate(50%);
      }
    }
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
    .title {
      > h2 {
        font-size: 45px;
      }
    }
    .filter {
      flex-direction: row;

      .box {
        width: 527px;
      }
    }

    .list {
      > .one {
        .mobile {
          display: none;
        }
        .desktop {
          display: block;
        }

        .person-list {
          .one {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            .col {
              &.buttons {
                justify-content: flex-end;
              }
            }
          }
        }

        .buttons {
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }

    .yform {
      .form {
        row-gap: 10px;
        .row10 {
          grid-template-columns: 1fr 1fr 1fr;
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
`