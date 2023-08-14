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
        font-size: 14px;
        font-weight: 600;
        line-height: 1.2;
      }

      .info {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        > h5 {
          color: ${props => props.theme.colors.black_primary};
          font-size: 16px;
          font-weight: 800;
          line-height: 1.2;
        }

        > p {
          color: ${props => props.theme.colors.black_primary};
          font-size: 14px;
          font-weight: 300;
          line-height: 1.2;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    .list {
      .one {
        .desc {
          font-size: 16px;
        }

        .info {
          > h5 {
            font-size: 18px;
          }
          >p {
            font-size: 16px;
          }
        }
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