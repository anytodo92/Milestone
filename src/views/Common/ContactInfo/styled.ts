import styled from "styled-components";

export const ContactInfoWrapper = styled.div`
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .list {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    margin-top: 50px;

    .one {
      flex: 1;
      
      .title {
        display: flex;
        align-items: center;
        column-gap: 10px;

        .icon {

        }
        > h3 {
          position: relative;
          color: ${props => props.theme.colors.green_primary};
          font-size: 40px;
          font-weight: 700;
          letter-spacing: 0.8px;

          &::before {
            content: "";
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
            width: 70px;
            border-top: 4px solid ${props => props.theme.colors.green_primary};
          }
        }
      }

      > p {
        color: ${props => props.theme.colors.black};
        font-size: 20px;
        font-weight: 300;
        line-height: 28px;
        letter-spacing: -0.4px;
        margin-top: 30px;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      width: 990px;
      margin: 0 auto;
    }
    
    .list {
      flex-direction: row;
    }
  }
` 