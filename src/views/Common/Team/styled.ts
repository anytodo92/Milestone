import styled from "styled-components";

export const TeamWrapper = styled.div`
  padding: 40px 0 0;
  background-color: ${props => props.theme.colors.gray_primary};
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .title {
    position: relative;
    display: inline-block;
    > h1 {
      font-weight: 700;
      font-size: 45px;
      font-family: ${props => props.theme.fonts.roboto_condensend};
      line-height: 1.2;
      color: ${props => props.theme.colors.black_primary};
    }

    > img {
      position: absolute;
      right: 0;
      bottom: -30px;
    }
  }

  .desc {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.2;
    color: ${props => props.theme.colors.black_primary};
    margin-top: 80px;
  }

  .list {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 80px;
    .one {
      display: flex;
      flex-direction: column;
      align-items: center;
      .pic {
        position: relative;
        
        > img {
          position: relative;
          width: 343px;
          height: 343px;
          border-radius: 100%;
          border: 2px solid ${props => props.theme.colors.green_primary};
          background-color: #fff;
        }

        .bg {
          position: absolute;
          top: -30px;
          left: 20px;
          width: 300px;
          height: 400px;
          border-radius: 300px;
          transform: rotate(45deg);
          background-color: ${props => props.theme.colors.green_primary};
        }
      }

      > h1 {
        position: relative;
        color: ${props => props.theme.colors.black_primary};
        font-size: 35px;
        font-family: ${props => props.theme.fonts.roboto_condensend};
        font-weight: 700;
        line-height: 1.5;
        text-align: center;
        margin-top: 50px;

        &::after {
          position: absolute;
          width: 69px;
          border-bottom: 4px solid ${props => props.theme.colors.black_primary};
          content: '';
          left: 0;
          bottom: 0;
        }
      }
    }
    
  }

  .buttons {
    display: flex;
    justify-content: center;
    > button {
      height: 46px;
      border-radius: 46px;
      background-color: ${props => props.theme.colors.green_primary};
      color: ${props => props.theme.colors.white};
      font-size: 18px;
      font-family: ${props => props.theme.fonts.roboto_condensend};
      font-weight: 700;
      line-height: 1.2;
      padding: 0 23px;
      margin-top: 30px;
      cursor: pointer;
      border: 0;
      outline: 0;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .list {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`