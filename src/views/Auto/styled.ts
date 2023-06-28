import styled from "styled-components";

export const AutoWrapper = styled.div`
  .course {
    background-color: ${props => props.theme.colors.gray_primary};
    padding: 0;
  }

  .reservation {
    padding-bottom: 50px;
  }

  .carousel {
    background-color: ${props => props.theme.colors.gray_primary};
  }
`;