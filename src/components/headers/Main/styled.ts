import styled from "styled-components";

export const MainHeaderWrapper = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  height: 100px;
  overflow: hidden;
  
  z-index: ${props => props.theme.zIndexes.headerBar};
  background-color: ${props => props.theme.colors.white};
  transition: height .5s ease-in-out;

  &.open {
    height: 420px;
  }
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
      justify-content: center;
      height: 100px;
      img {
        max-width: none;
        &:nth-child(1) {
          display: block;
          height: 90px;
        }
        &:nth-child(2),
        &:nth-child(3) {
          height: 90px;
          display: none;
        }
      }
      .bold {
        font-weight: 600;
      }
    }

    .control {
      .menu {
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        height: 100px;
        margin: 0;
        list-style: none;
        
        transition: margin-top .4s ease-in-out, opacity .2s ease-in-out;
  
        > li {
          position: relative;
          padding: 10px 0;
          border-bottom: 1px solid #eaeaea;
          .icon {
            display: none;
            position: absolute;
            max-width: unset;
            left: 50%;
            transform: translateX(-50%);
          }
          > a {
            text-decoration: none;
            color: ${props => props.theme.colors.black_primary};
          }

          &.active {
            > a {
              color: ${props => props.theme.colors.green_primary};
            }
            .icon {
              display: none;
            }
          }

          &.bold {
            > a {
              font-weight: 700;
            }
          }
        }
      }
    }

    .toggle-btn  {
      cursor: pointer;
      width: 30px;
      height: 30px;
      position: absolute;
      left: 30px;
      top: 30px;
      color: #999;
      > i {
        font-size: 30px;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {

  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 100px;
    &.normal-bar {
      animation: anim-normal-bar-show;
      animation-duration: .1s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      background-color: transparent;
      
      .content {
        .brand {
          img {
            &:nth-child(3) {
              display: block;
            }
            &:nth-child(1),
            &:nth-child(2)
            {
              display: none;
            }
          }
        }   
      }

      &.reverse {
        .content {
          .brand {
            img {
              &:nth-child(2) {
                display: block;
              }
              &:nth-child(1),
              &:nth-child(3)
              {
                display: none;
              }
            }
          }

          .menu {
            > li {
              > a {
                color: ${props => props.theme.colors.black_primary};
              }
            }
          }   
        }
      }
    }


    &.sticky-bar {
      position: fixed;
      background-color: ${props => props.theme.colors.white};
      margin-top: 0px;
      
      .content {
        .brand {
          height: 100px;
          img {
            &:nth-child(1),
            &:nth-child(3) {
              display: none;
            }
            &:nth-child(2)
            {
              display: block;
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
          .toggle-btn  {
            > span {
              background-color: ${props => props.theme.colors.black_primary};
            }   
          }
        }
      }
      animation: anim-sticky-bar-show;
      animation-duration: 0.3s;
      animation-timing-function: ease-out;
    }

    .content {
      justify-content: space-between;
      flex-direction: row;
      .brand {
        height: 100px;
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
            
            > a {
              color: ${props => props.theme.colors.white}
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