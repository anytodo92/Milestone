import styled from "styled-components";

export const MotrradWrapper = styled.div`
  .reservation {
    @media(max-width: 1024px) {
      padding: 40px 0 20px;

      & + .shape-bot {
        > svg {
          height: 40px;
        }
      }
    }
  }
`