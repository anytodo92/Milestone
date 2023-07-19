import styled from "styled-components";

export const LoginWrapper = styled.section`
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

export const LoginFormWrapper = styled.div`
  padding: 65px 0;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .yform {
    max-width: 340px;
    margin-left: 0;
    .form {
      grid-template-columns: 1fr;
      .col {

      }
    }
    .submit {
      margin-top: 15px;
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop}) {
    .yform {
      margin-left: 100px;
      .form {
        grid-template-columns: 1fr;
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