import styled from "styled-components";

export const UberUnsWrapper = styled.div`
  .intro {
    background-color: ${props => props.theme.colors.white};
    padding-bottom: 80px;
  }
  .team {
    padding-bottom: 140px;

    .title {
      > img {
        transform: translate(50%);
      }
    }
  }
`