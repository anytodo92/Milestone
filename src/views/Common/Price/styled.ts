import styled from "styled-components";

export const PriceWrapper = styled.div`
  padding-top: 70px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

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
      max-width: unset;
    }
  }

  .list {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 20px;
    row-gap: 10px;

    .one {
      border-radius: 10px;
      background-color: ${props => props.theme.colors.gray_primary};
      padding: 20px;

      > h5 {
        color: ${props => props.theme.colors.black_primary};
        font-size: 20px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
        line-height: 1.2;
      }

      .info {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        > p {
          color: ${props => props.theme.colors.black_primary};
          font-size: 26px;
          font-family: ${props => props.theme.fonts.roboto_condensend};
          font-weight: 700;
          line-height: 1.2;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .title {
      > img {
        right: unset;
        left: 40px;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .list {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`