import styled from "styled-components";

export const AbgWrapper = styled.div`
  .hero {
    .summary {
      padding-top: 215px;
      padding-bottom: 60px;
    }
    .bg {
      background-position: 0 0;
    }
  }

  .rich-text {
    background-color: ${props => props.theme.colors.white};

    .content {
      margin: 0 ${props => props.theme.margins.primary}px;
      padding: 60px 0 200px;

      .txt {
        font-size: 16px;
        color: ${props => props.theme.colors.black_primary};
        font-weight: 300;
        line-height: 1.2;
        max-width: 1230px;
        strong {
          font-weight: 700;
        }
      }
    }

    @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
      .content {
        width: ${props => props.theme.maxWidth}px;
        margin: 0 auto;  
      }
    }
  }
`