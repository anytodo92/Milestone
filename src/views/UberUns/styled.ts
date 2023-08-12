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
  }
  .team {
    padding: 50px 0;
    background-color: ${props => props.theme.colors.gray_primary};

    .list {
      column-gap: 30px;
      .one {
        background-color: ${props => props.theme.colors.white};
        padding: 60px 0 30px;
        border-radius: 30px;
      }
    }

    @media (min-width: 1780px) {
      .content1 {
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