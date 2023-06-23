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
      padding: 48px 0 35px;
      background-color: ${props => props.theme.colors.green_secondary};

      .content {
        
        > h5, > p, a.link {
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          font-family: ${props => props.theme.fonts.open_sans};
          color: ${props => props.theme.colors.white};
        }

        a.link {
          &:hover {
            color: ${props => props.theme.colors.white};
            text-decoration: none;
          }
        }
      }
    }

    &:last-child {
      background-color: ${props => props.theme.colors.green_primary};
      
      .content {
        display: flex;
        height: 76px;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        justify-content: space-between;
        align-items: center;
        font-family: ${props => props.theme.fonts.roboto};

        .policy {
          display: flex;
          column-gap: 30px;
          a.link {
            &:hover {
              color: ${props => props.theme.colors.white};
              text-decoration: none;
            }
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      margin: 0 auto;
      width: ${props => props.theme.maxWidth}px;
    }
  }
`