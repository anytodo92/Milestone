import styled from "styled-components";

export const RatenzahlungWrapper = styled.div`
`;

export const RatenzahlungFormWrapper = styled.section`
  padding: 60px 0;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .package-list {
    display: flex;
    flex-direction: column;
    column-gap: 15px;
    row-gap: 15px;
    margin-top: 30px;

    .one {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px;
      background-color: ${props => props.theme.colors.gray_primary};
      border-radius: 20px;
      flex: 1;
      cursor: pointer;

      .lt {
        > h6 {
          color: ${props => props.theme.colors.black_primary};
          font-size: 18px;
          font-weight: 800;
          line-height: 1;
        }

        > p {
          color: ${props => props.theme.colors.black_primary};
          font-size: 16px;
          font-weight: 400;
          line-height: 1.2;
          margin-top: 15px;
        }
      }

      .rt {
        > svg {
          display: none;
        }
      }

      &.selected {
        background-color: ${props => props.theme.colors.green_primary};
        .lt {
          > h6, > p {
            color: ${props => props.theme.colors.white};
          }
        }
        .rt {
          > svg {
            display: block;
          }
        }
      }
    }
  }

  h5 {
    color: ${props => props.theme.colors.black_secondary};
    font-size: 18px;
    font-weight: 800;
    line-height: 1.2;
    margin-top: 40px;
  }

  .installment-list {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    column-gap: 15px;
    row-gap: 25px;

    .one {
      display: flex;
      align-items: center;
      column-gap: 15px;
      flex: 1;
      cursor: pointer;

      .lt {
        .radio {
          width: 30px;
          height: 30px;
          border-radius: 30px;
          border: 1px solid #d1d1d1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;

          &:before {
            display: none;
            width: 26px;
            height: 26px;
            border-radius: 26px;
            background-color: #565656;
            content: "";
          } 
        }
      }
      .rt {
        > h6 {
          color: ${props => props.theme.colors.black_primary};
          font-size: 18px;
          font-weight: 800;
          line-height: 1;
        }

        > p {
          color: ${props => props.theme.colors.black_primary};
          font-size: 16px;
          font-weight: 400;
          line-height: 1.2;
        }
      }

      &.selected {
        .lt {
          .radio {
            &:before {
              display: block;
            }
          }
        }
      }
    }
  }

  .form {
    margin-top: 50px;

    .alert {
      border: 0;
      border-radius: 10px;
      padding: 10px 15px;
      margin-bottom: 10px;

      &.alert-danger {
        color: #842029;
        background-color: #f8d7da;
      }

      &.alert-success {
        color: #50cd89;
        background-color: #e8fff3;
      }
    }
    .wrapper {
      background-color: ${props => props.theme.colors.gray_primary};
      border-radius: 20px;
      padding: 0 22px 22px;

      INPUT[type=file] {
        width: 0;
        height: 0;
        visibility: hidden;
      }

      .fields {
        display: flex;
        flex-direction: column;
        column-gap: 50px;
        row-gap: 15px;

        .lt, .rt {
          flex: 1;
          > h5 {
            margin-top: 0;
          }

          .rw {
            display: flex;
            align-items: center;
            column-gap: 15px;
            margin-top: 10px;

            .form-group {
              flex: 1;
              input {
                width: 100%;
                background-color: ${props => props.theme.colors.white};
                border: 1px solid #cacaca;
                color: ${props => props.theme.colors.black_primary};
                font-size: 16px;
                font-weight: 300;
                line-height: 1.5;
                padding: 10px 15px;
                border-radius: 10px;
                outline: 0;

                &:placeholder {
                  color: #a0a0a0;
                }
              }

              &.error {
                input {
                  border: 1px solid red;
                }
              }
            }
          }
        }

        .rt {
          > h5 {
            color: ${props => props.theme.colors.green_primary};
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
          }

          button {
            border: 0;
            outline: 0;
          }

          .action {
            display: flex;
            align-items: center;
            column-gap: 10px;
            margin-top:15px;

            > button {
              background-color: ${props => props.theme.colors.green_primary};
              color: ${props => props.theme.colors.white};
              border-radius: 10px;
              font-size: 30px;
              font-weight: 900;
              width: 43px;
              height: 43px;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;              
              border: 0;
              outline: 0;
            }

            > label {
              color: #A0A0A0;
              font-size: 16px;
              font-weight: 600;
              line-height: 1.5;
            }
          }
        }
      }
    }

    .capture {
      margin-top: 25px;

      h5 {
        margin-top: 0;
        color: ${props => props.theme.colors.green_primary};
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
      }

      .action {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        column-gap: 15px;
        row-gap: 15px;

        .wrapper2 {
          width: 100%;
          display: flex;
          flex-direction: column;
          &.error {
            > button {
              border-color: red;
            }
          }
          
          > button {
            display: inline-flex;
            width: 100%;
            height: 52px;
            outline: 0;
            border-radius: 15px;
            background-color: #d7d7d7;
            border: 1px solid #cacaca;
            align-items: center;
            justify-content: space-between;
            padding: 0 15px 0 25px;
            color: #202020;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            outline: 0;
          }

          .photo-holder {
            position: relative;
            margin-top: 30px;
            canvas {
              width: calc(100% - 10px);
            }
            .close {
              position: absolute;
              width: 30px;
              height: 30px;
              background-color: ${props => props.theme.colors.white};
              border-radius: 100%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              border: 0;
              outline: 0;
              top: -15px;
              right: 0px;
            }
          }
        }
      }
    }

    .check {
      margin-top: 15px;

      .checkbox-wrapper {
        color: ${props => props.theme.colors.black_secondary};
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4;

        a {
          font-weight: 700;
          color: ${props => props.theme.colors.green_primary};
        }

        .checkmark {
          top: 10px;
        }
      }

      .error {
        color: red;
        font-size: 14px;
        font-weight: 300;
      }
    }

    .buttons {
      margin-top: 20px;
      button {
        display: inline-flex;
        width: 100%;
        height: 45px;
        outline: 0;
        border-radius: 15px;
        background-color: ${props => props.theme.colors.green_primary};
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.white};
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
        border: 0;
        outline: 0;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .package-list {
      flex-direction: row;
    }

    .installment-list {
      flex-direction: row;
    }

    .form {
      .wrapper {
        .fields {
          flex-direction: row;
          
          .lt, .rt {
            flex: none;
            .rw {
              .form-group {
                flex: 0;
                input {
                  width: 200px;
                }
              }
            }
          }
        }
      }

      .capture {
        .action {
          flex-direction: row;
          column-gap: 15px;
          .wrapper2 {
            width: auto;
            button {
              width: 294px;
            }
            .photo-holder {
              width:294px;
            }
          }
          
        }
      }

      .buttons {
        button {
          width: 309px;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .form {
      .wrapper {
        .fields {
          .lt, .rt {
            .rw {
              .form-group {
                input {
                  width: 249px;
                }
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
`;