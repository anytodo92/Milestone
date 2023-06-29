import styled from "styled-components";

export const ContactWrapper = styled.div`
  padding: 75px 0;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    display: flex;
    flex-direction: column;
    row-gap: 30px;
    column-gap: 60px;
  }

  .pic {
    align-self: center;
    > img {
      margin-top: 10px;
    }
  }

  .article {

    .title {
      position: relative;
      display: inline-block;

      > h1 {
        color: ${props => props.theme.colors.black_primary};
        font-size: 45px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
        line-height: 1.2;
      }

      > img {
        position: absolute;
        right: 0;
        bottom: -30px;
      }
    }

    > .desc {
      color: ${props => props.theme.colors.black_primary};
      font-size: 18px;
      font-weight: 400;
      line-height: 1.2;
      margin-top: 60px;
    }

    > button {
      height: 46px;
      border-radius: 46px;
      background-color: ${props => props.theme.colors.green_primary};
      color: ${props => props.theme.colors.white};
      font-size: 18px;
      font-family: ${props => props.theme.fonts.roboto_condensend};
      font-weight: 700;
      line-height: 1.2;
      padding: 0 40px;
      margin-top: 30px;
      cursor: pointer;
      border: 0;
      outline: 0;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .article {
      .title {
        > img {
          transform: translate(20%);
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      flex-direction: row;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`