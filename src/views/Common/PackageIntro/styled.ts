import styled from "styled-components";

export const PackageIntroWrapper = styled.section`
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .wrapper {
    background-color: ${props => props.theme.colors.gray_primary};
    border-radius: 25px 25px 0 0;

    display: flex;
    flex-direction: column;
    padding: 35px 35px 0 30px;
    row-gap: 10px;
  }

  .lt {
    flex-shrink: 0;
    h2.title {
      max-width: 270px;
    }

    .buttons {
      > a {
        display: inline-flex;
        align-items: center;
        height: 46px;
        border-radius: 46px;
        border: 0;
        outline: 0;
        background-color: ${props => props.theme.colors.green_primary};
        color: ${props => props.theme.colors.white};
        font-size: 12px;
        font-weight: 600;
        line-height: 1.2;
        padding: 0 23px;
        margin-top: 30px;
        cursor: pointer;
      }
    }
  }

  .rt {
    .desc {
      color: ${props => props.theme.colors.black_secondary};
      font-size: 14px;
      font-weight: 500;
      line-height: 1.2;
      margin-top: 10px;
    }

    h5 {
      color: ${props => props.theme.colors.black_secondary};
      font-size: 22px;
      font-weight: 700;
      line-height: 1.2;
      margin-top: 20px;
    }

    .detail {
      color: ${props => props.theme.colors.black_primary};
      font-size: 14px;
      font-weight: 300;
      line-height: 1.2;
      margin-top: 20px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    .lt {
      .buttons {
        > a {
          font-size: 16px;
        }
      }
    }

    .rt {
      .desc {
        font-size: 16px;
      }

      h5 {
        font-size: 22px;
      }

      .detail {
        font-size: 16px;
      }
    }
  }
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .wrapper {
      flex-direction: row;
    }
    
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      max-width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`;