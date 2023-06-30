import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  padding: 60px 0 70px;
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
      bottom: -30px;
    }
  }

  .yform {
    margin-top: 50px;
    .form {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 27px;
      row-gap: 10px;

      .col {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        
        > .group {
          > label {
            font-size: 18px;
            font-weight: 700;
            line-height: 27px;
            color: ${props => props.theme.colors.black_primary};

            > sup {
              font-weight: 700;
              color: ${props => props.theme.colors.red_primary};
            }
          }

          .entry-box {
            display: flex;
            column-gap: 10px;
            width: 100%;

            .form-group {
              width: 100%;
            }
          }

          input, select, textarea {
            outline: 0;
            border: 1px solid #cacaca;
            border-radius: 15px;
            width: 100%;
            height: 52px;
            background-color: ${props => props.theme.colors.white};
            padding: 0 12px;
            color: #777;
            margin-top: 5px;
          }

          textarea {
            height: 187px;
            padding: 15px;
          }

          select {
            -webkit-appearance: none;
          }
        }
      }
    }

    .submit {
      margin-top: 10px;
      button {
        height: 46px;
        border-radius: 46px;
        background-color: ${props => props.theme.colors.green_primary};
        color: ${props => props.theme.colors.white};
        font-size: 18px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
        line-height: 1.2;
        padding: 0 80px;
        cursor: pointer;
        border: 0;
        outline: 0;
      }
      
    }

    .desc {
      color: #646464;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      margin-top: 20px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .title {
      > img {
        transform: translate(53%);
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .yform {
      .form {
        grid-template-columns: 1fr 1fr 1fr;
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