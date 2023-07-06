import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  color: ${props => props.theme.colors.white};
  z-index: ${props => props.theme.zIndexes.footer_layout};

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  > section {
    &:first-child {
      padding: 40px 0 20px;
      background-color: #4D4D4D;

      .content {
        display: flex;
        flex-direction: column;
        column-gap: 30px;
        row-gap: 30px;
        .col {
          flex: unset;
          > h5, > p, a.link {
            font-size: 16px;
            font-weight: 300;
            line-height: 1.4;
            color: ${props => props.theme.colors.white};
          }

          > h5 {
            font-size: 22px;
            font-weight: 500;
            padding-bottom: 17px;
          }

          a.link {
            &:hover {
              color: ${props => props.theme.colors.white};
              text-decoration: none;
            }
          }
        }
        
      }
    }

    &:last-child {
      background-color: #313131;
      
      .content {
        display: flex;
        height: 54px;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.4;
        align-items: center;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    > section {
      &:first-child {
        .content {
          flex-direction: row;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      margin: 0 auto;
      width: ${props => props.theme.maxWidth}px;
    }
  }
`