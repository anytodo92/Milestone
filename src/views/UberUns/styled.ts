import styled from "styled-components";

export const UberUnsWrapper = styled.div`
  .intro {
    background-color: ${props => props.theme.colors.white};
    padding-bottom: 70px;

    .article {
      .panel {
        .list {
          background-color: ${props => props.theme.colors.gray_primary};
        }
        
        > svg {
          > path {
            fill: ${props => props.theme.colors.gray_primary};
          }
        }
      }
    }

    @media (max-width: 1024px) {
      padding: 60px 0 20px;
      & + .shape-bot {
        > svg {
          height: 60px;
        }
      }
    }
  }
  .team {
    padding: 50px 0;
    background-color: ${props => props.theme.colors.gray_primary};

    .list {
      .one {
        background-color: ${props => props.theme.colors.white};
        padding: 60px 0 30px;
        border-radius: 30px;
      }
    }

    @media (max-width: 1024px) {
      & + .shape-bot {
        > svg {
          height: 40px;
        }
      }
    }

    @media (min-width: 1780px) {
      .slide {
        width: 1740px;
        margin: 0 auto;
        .list {
          margin-left: 0;
        }
      }
    }
  }

  .contact {
    background-color: ${props => props.theme.colors.white};
  }
`