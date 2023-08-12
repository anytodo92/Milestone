import styled from "styled-components";

export const AutoWrapper = styled.div`
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