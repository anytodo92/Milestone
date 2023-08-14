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
`;