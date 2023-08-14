import styled from "styled-components";

export const PriceWrapper = styled.div`
  .hero {
    .summary {
      padding-bottom: 150px;
    }
  }

  .price {
    @media(max-width: 1024px) {
      & ~ .shape-bot {
        > svg {
          height: 40px;
        }
      }
    }
  }
`