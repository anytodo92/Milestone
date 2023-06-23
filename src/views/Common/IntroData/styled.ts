import styled from "styled-components";

export const IntroDataWrapper = styled.section`
  padding: 76px 0 66px;
  &:nth-child(odd) {
    background-color: ${props => props.theme.colors.gray_primary};
  }
  &:nth-child(even) {
    background-color: ${props => props.theme.colors.white};
    
  }

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .intro {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    .art {
      flex: 1 1 auto;
    }
    .pic {
      flex: 1 0 auto;
      padding-left: 30px;
      > img {
        width: 448px;
        border-radius: 15px 0 15px 15px;
      }
    }

    .art {
      padding-left: 30px;
      position: relative;

      .line {
        position: absolute;
        left: 0;
        top: -3px;
        border-left: 4px solid ${props => props.theme.colors.green_primary};
        height: 105px;
      }

      > h1 {
        font-weight: 400;
        font-family: ${props => props.theme.fonts.dm_serif_text};
        font-size: 48px;
        line-height: 52px;
        column-gap: 10px;
        color: ${props => props.theme.colors.black_primary};
        margin-top: -7px;

        label {
          color: ${props => props.theme.colors.green_primary};
        }
      }

      > p {
        margin-top: 15px;
        font-weight: 300;
        font-family: ${props => props.theme.fonts.open_sans};
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -2%;
      }

      > a.btn {
        margin-top: 20px;
        width: 187px;
        height: 37px;
        background-color: ${props => props.theme.colors.green_primary};
        color: ${props => props.theme.colors.white};
        font-weight: 700;
        font-family: ${props => props.theme.fonts.open_sans};
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 37px;
        cursor: pointer;
      }
    }
  }

  &.unsere-dienste {
    .intro {
      .art {
        > h1 {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }

  .options {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 80px;
    margin-top: 40px;
    padding-left: 30px;
    row-gap: 15px;

    .one {
      display: flex;
      column-gap: 20px;

      .icon {
        flex: 0 0 auto;
        width: 19px;
        height: 19px;
        margin-top: 3px;
        background-color: ${props => props.theme.colors.green_primary};
        border-radius: 5px 0px 5px 5px;
      }

      .contt {
        flex: 1;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: ${props => props.theme.colors.black_primary};
        font-family: ${props => props.theme.fonts.open_sans};
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    &:nth-child(odd) {
      .intro {
        .pic {
          padding-left: 0;
        }
      }
    }
    &:nth-child(even) {
      .intro {
        flex-direction: row-reverse;
      }
    }
    .intro {
      flex-direction: row;
      column-gap: 50px;

      .art {
        > button {
          position: absolute;
          bottom: -20px;
        }
      }
    }

    .options {
      display: grid;
      grid-template-columns: 1fr 1fr;
      &.col {
        grid-template-columns: 1fr;
      }
    }

  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`