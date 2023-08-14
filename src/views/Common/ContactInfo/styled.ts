import styled from "styled-components";

export const ContactInfoWrapper = styled.div`
  padding: 54px 0 58px;

  background-color: ${props => props.theme.colors.gray_primary};
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .list {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    column-gap: 45px;
    
    .one {
      flex: 1;
      background-color: ${props => props.theme.colors.white};
      border-radius: 30px;
      padding: 30px;

      .title {
        display: flex;
        align-items: center;
        column-gap: 10px;

        .icon {

        }
        > h3 {
          position: relative;
          color: ${props => props.theme.colors.green_primary};
          font-size: 25px;
          font-weight: 700;
          letter-spacing: 0.8px;
        }
      }

      > p {
        color: ${props => props.theme.colors.black};
        font-size: 14px;
        font-weight: 300;
        line-height: 28px;
        letter-spacing: -0.4px;
        margin-top: 10px;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_sm}) {
    .list {
      .one {
        .title {
          > h3 {
            font-size: 40px;
          }
        }

        > p {
          font-size: 16px;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      width: 1052px;
      margin: 0 auto;
    }
    
    .list {
      flex-direction: row;
    }
  }
` 