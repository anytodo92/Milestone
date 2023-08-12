import styled from "styled-components";

export const PriceWrapper = styled.div`
  padding-top: 70px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .list {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 30px;
    row-gap: 20px;

    .one {
      border-radius: 10px;
      background-color: ${props => props.theme.colors.gray_primary};
      padding: 20px;

      .desc {
        color: ${props => props.theme.colors.black_primary};
        font-size: 16px;
        font-weight: 600;
        line-height: 1.2;
      }

      .info {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        > h5 {
          color: ${props => props.theme.colors.black_primary};
          font-size: 18px;
          font-weight: 800;
          line-height: 1.2;
        }

        > p {
          color: ${props => props.theme.colors.black_primary};
          font-size: 16px;
          font-weight: 300;
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
    .title {
      > h2 {
        font-size: 45px;
      }
    }
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