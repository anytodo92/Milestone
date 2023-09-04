import styled from "styled-components";

export const HomeWrapper = styled.div`
  .intro + .shape-bot > svg {
    @media (max-width: ${props => props.theme.breakpoints.desktop_lg}) {
      height: 68px;
    }
  }

  .reservation + .shape-bot > svg {
    @media (max-width: ${props => props.theme.breakpoints.desktop_lg}) {
      height: 40px;
    }
  }

  .recommend + .shape-bot > svg {
    @media (max-width: ${props => props.theme.breakpoints.desktop_lg}) {
      height: 40px;
    }
  }

  .team {
    padding-bottom: 20px;
    .slide {
      .list {
        .one {
          padding-top: 20px;
          .article {
            display: flex;
            flex-direction: column;
            align-items:center;
          }
        }
      }
    }
    @media (min-width: 1780px) {
      .slide {
        .list {
          margin-left: 0;
        }
      }
    }
  }
`;