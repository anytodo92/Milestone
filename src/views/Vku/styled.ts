import styled from "styled-components";

export const VkuWrapper = styled.div`
  .contact {
    background-color: ${props => props.theme.colors.white};
  }

  .register,
  .requirement {
    @media(max-width: 1024px) {
      & + .shape-bot {
        > svg {
          height: 40px;
        }
      }
    }
  }
`