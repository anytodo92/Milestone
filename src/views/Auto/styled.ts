import styled from "styled-components";

export const AutoWrapper = styled.div`
  .hero {
    .content {
      display: flex;
      flex-direction: column;
      row-gap: 10%;
    }

    @media(min-width: ${props => props.theme.breakpoints.desktop}) {
      .content {
        flex-direction: row;
        align-items: center;
      }
    }
  }
  .tutorial {
    @media(max-width: ${props => props.theme.breakpoints.desktop}) {
      padding-bottom: 40px;

      & + .shape-bot {
        > svg {
          height: 40px;
        }
      }
    }
  }
  .course {
    background-color: ${props => props.theme.colors.gray_primary};
  }

  .reservation {
    background-color: ${props => props.theme.colors.gray_primary};
    padding: 50px 0 30px;

    .article {
      .panel {
        .contt {
          background-color: ${props => props.theme.colors.white};
        }
        > svg {
          > path {
            fill: ${props => props.theme.colors.white};
          }
        }
      }
    }

    @media(max-width: ${props => props.theme.breakpoints.desktop}) {
      padding-bottom: 20px;

      & + .shape-bot {
        > svg {
          height: 40px;
        }
      }
    }
  }

  .package-intro {
    background-color: ${props => props.theme.colors.gray_primary};

    .wrapper {
      background-color: ${props => props.theme.colors.white};
    }

    svg {
      path {
        fill: ${props => props.theme.colors.white};
      }
    }
  }

  .contact {
    background-color: ${props => props.theme.colors.white};
  }

  .carousel {
    background-color: ${props => props.theme.colors.gray_primary};
    .wrapper {
      .slide {
        .list {
          .one {
            .article {
              .contt {
                background-color: ${props => props.theme.colors.white};
              }
            }
          }
        }
      }
    }
  }
`;