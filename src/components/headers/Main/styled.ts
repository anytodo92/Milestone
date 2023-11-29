import styled from "styled-components";

export const MainHeaderWrapper = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  height: 100px;
  overflow: hidden;
  
  z-index: ${props => props.theme.zIndexes.headerBar};
  background-color: transparent;
  
  &.normal-bar {
    animation: anim-normal-bar-show;
    animation-duration: .1s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .brand {
      display: flex;
      align-items: center;
      height: 100px;
      position: relative;
      img {
        max-width: none;

        &:nth-child(2) {
          display: block;          
        }

        &:nth-child(1),
        &:nth-child(3),
        &:nth-child(4) {
          display: none;
        }
      }
      .bold {
        font-weight: 700;
      }
      .admin-link-wrapper {
        position: absolute;
        left: 37px;
        bottom: 5px;
        display: inline-flex;
        align-items: center;
        column-gap: 20px;
        > a {
          width: 119px;
          height: 25px;
          border-radius: 15px;
          background-color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: ${props => props.theme.colors.green_primary};
        }
      }
    }

    .control {
      .menu {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        height: 100px;
        margin: 0;
        list-style: none;
        
        transition: margin-top .4s ease-in-out, opacity .2s ease-in-out;
  
        > li {
          position: relative;
          padding: 10px 0;

          .icon {
            display: none;
            position: absolute;
            max-width: unset;
            left: 50%;
            transform: translateX(-50%);
          }
          > a {
            text-decoration: none;
            color: ${props => props.theme.colors.white};
          }

          &.active {
            > a {
              color: ${props => props.theme.colors.green_primary};
            }
            .icon {
              display: block;
            }
          }

          &.bold {
            > a {
              font-weight: 600;
            }
          }
        }
      }
    }

    .toggle-btn  {
      cursor: pointer;
      position: absolute;
      right: 30px;
      top: 40px;
      > svg {
        > line {
          stroke: ${props => props.theme.colors.white};
        }
      }
    }
  }

  &.open {
    height: 100vh;
    background-color: ${props => props.theme.colors.white};

    .content {
      .brand {
        img {
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            display: none;
          }
          &:nth-child(1)
          {
            display: block;
          }
        }
      }

      .control {
        margin-top: 30px;
        .menu {
          > li {
            &.spec {
              margin-top: 30px;
            }
            .icon {
              left: 40px;
            }
            > a {
              color: ${props => props.theme.colors.black_primary}
            }

            &.active {
              > a {
                color: ${props => props.theme.colors.green_primary};
              }
              .icon {
                display: block;
              }
            }
          }
        }
      }

      .toggle-btn  {
        > svg {
          > line {
            stroke: ${props => props.theme.colors.green_primary};
          }
        } 
      }
    }
  }

  &.reverse {
    .content {
      .brand {
        img {
          &:nth-child(1) {
            display: block;
          }
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4)
          {
            display: none;
          }
        }
        .admin-link-wrapper {
          > a {
            background-color: ${props => props.theme.colors.green_primary};
            color: #fff;
          }
        }
      }

      .control {
        .menu {
          > li {
            > a {
              color: ${props => props.theme.colors.black_primary};
            }
          }
        } 
      }
      
      .toggle-btn  {
        > svg {
          > line {
            stroke: ${props => props.theme.colors.green_primary};
          }
        } 
      }  
    }
  }

  &.sticky-bar {
    position: sticky;
    background-color: ${props => props.theme.colors.white};
    margin-top: 0px;
    
    .content {
      .brand {
        height: 100px;
        img {
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            display: none;
          }
          &:nth-child(1)
          {
            display: block;
          }
        }
        .admin-link-wrapper {
          > a {
            background-color: ${props => props.theme.colors.green_primary};
            color: #fff;
          }
        }
      }
      .control {
        .menu {
          height: 100px;

          > li {
            > a {
              color: ${props => props.theme.colors.black_primary};
            }

            &.active {
              > a {
                color: ${props => props.theme.colors.green_primary};
              }
              .icon {
                display: block;
              }
            }
          }         
        }
      }

      .toggle-btn  {
        > svg {
          > line {
            stroke: ${props => props.theme.colors.green_primary};
          }
        } 
      }
    }
    animation: anim-sticky-bar-show;
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    .content {
      .brand {
        img {
          height: 60px;
        }
        .admin-link-wrapper {
          left: 70px;
        }
      }
    }

    &.normal-bar {
      .content {
        .brand {
          img {
            &:nth-child(4) {
              display: block;
            }
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3)
            {
              display: none;
            }
          }
        }
      }
    }

    &.open {
      .content {
        .brand {
          img {
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(4) {
              display: none;
            }
            &:nth-child(3)
            {
              display: block;
            }
          }
        }
      }
    }
    
    &.reverse {
      .content {
        .brand {
          img {
            &:nth-child(3) {
              display: block;
            }
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(4)
            {
              display: none;
            }
          }
        }
      }
    }

    &.sticky-bar {
      .content {
        .brand {
          img {
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(4) {
              display: none;
            }
            &:nth-child(3)
            {
              display: block;
            }
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 100px;

    &.normal-bar {
      animation: anim-normal-bar-show;
      animation-duration: .1s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      background-color: transparent;
    }

    .content {
      justify-content: space-between;
      flex-direction: row;
      .brand {
        height: 100px;
        img {
          height: 90px;
        }
        .admin-link-wrapper {
          left: 35%;
        }
      }
      .control {
        display: flex;
        align-items: center;
        
        .menu {
          display: flex;
          align-items: center;
          clear: both;
          height: 100px;
          > li {
            float: left;
            margin: 0px 15px;
            border-bottom: none;
            padding: 0;

            &:last-child {
              margin-right: 0;
            }
            
          }
        }
      }

      .toggle-btn {
        display: none;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      .control {
        .menu {
          > li {
            margin: 0px 28px;
            &.spec {
              margin-left: 70px;
            }
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
      .brand {
        img {
          width: unset;
        }
      }
      .control {        
        .menu {
          > li {
            margin: 0px 28px;
            &.spec {
              margin-left: 70px;
            }
          }
        }
      }
    }
  }


  @keyframes anim-normal-bar-show {
    from {
      margin-top: -10px;
    }
    to {
      margin-top: 0px;
    }
  }
  @keyframes anim-sticky-bar-show {
    from {
      top: -110px;
      display: none;
    }
    to {
      top: 0px;
      display: block;
    }
  }

  @keyframes anim-menu-item-show {
    from { margin-top: -110px; }
    to { margin-top: 0 }
  }
`;