import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  padding: 40px 0 10px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .yform {
    margin-top: 25px;
    max-width: 1046px;
    .form {
      .col {
        > .group {
          .control-label {
            display: inline;
          }
          textarea {
            height: 248px;
            padding: 15px;
          }
        }
      }
    }

    .submit {
      margin-top: 15px;
    }

    .desc {
      color: #646464;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      margin-top: 20px;
    }
  }
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .yform {
      .form {
        grid-template-columns: 1fr 2fr;
      }
    }

    .title {
      > h2 {
        font-size: 45px;
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