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
        column-gap: 25px;
        row-gap: 25px;
        .col {
          flex: unset;
          > p, a.link {
            font-size: 14px;
            font-weight: 300;
            line-height: 1.5;
            color: ${props => props.theme.colors.white};
          }

          > h5 {
            font-size: 20px;
            font-weight: 600;
            padding-bottom: 20px;
            color: ${props => props.theme.colors.white};
          }

          a.link {
            &:hover {
              color: ${props => props.theme.colors.white};
              text-decoration: none;
            }
          }

          &:last-child {
            flex:1;
            display: flex;
            justify-content: flex-start;
            column-gap: 25px;

            > a {
              text-decoration: none;

              img {
                width: 92px;
                height: 92px;

              }
            }
            
          }
        }
        
      }
    }

    &:last-child {
      background-color: #313131;
      
      .content {
        display: flex;
        height: 60px;
        font-size: 14px;
        font-weight: 300;
        line-height: 1.5;
        align-items: center;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    > section {
      &:first-child {
        .content {
          .col {
            > p, a.link {
              font-size: 16px;
            }

            > h5 {
              font-size: 22px;
            }
          }
        }
      }

      &:last-child {
        .content {
          font-size: 16px;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    > section {
      &:first-child {
        .content {
          flex-direction: row;
          .col {
            &:nth-child(3) {
              margin-left: 13px;
            }

            &:last-child {
              margin-right: 120px;
              justify-content: flex-end;
            }
          }
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