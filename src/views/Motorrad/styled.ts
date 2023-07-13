import styled from "styled-components";

export const MotrradWrapper = styled.div`
  .our-course {
    .article {
      .title {
        > img {
          transform: translate(-12%);
        }
      }
    }
  }

  .reservation {
    .article {
      .title {
        > img {
          bottom: -30px;
          @media (min-width: 660px) {
            bottom: -20px;
            transform: translate(40%);
          }
        }
      }
    }
  }

  .contact {
    padding-top: 0;
  }
`