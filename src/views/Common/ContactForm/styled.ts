import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  padding: 60px 0 70px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .title {
    position: relative;
    display: inline-block;

    > h2 {
      color: ${props => props.theme.colors.black_primary};
      font-size: 35px;
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