import styled from "styled-components";

export const ContactWrapper = styled.div`
  padding: 75px 0;
  background-color: ${props => props.theme.colors.gray_primary};

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    column-gap: 70px;
  }

  .article {
    display: flex;
    flex-direction: column;
    align-items: center;
    > .desc {
      color: ${props => props.theme.colors.black_primary};
      font-size: 14px;
      font-weight: 300;
      line-height: 1.2;
      margin-top: 30px;
    }

    > a {
      height: 46px;
      border-radius: 46px;
      background-color: ${props => props.theme.colors.green_primary};
      color: ${props => props.theme.colors.white};
      font-size: 14px;
      font-weight: 600;
      line-height: 1.2;
      padding: 0 40px;
      margin-top: 30px;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    .article {
      > .desc {
        font-size: 16px
      }

      > a {
        font-size: 16px;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      flex-direction: row;
    }
    .article {
      align-items: flex-start;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`