import styled from 'styled-components';

export const Header = styled.header`
  box-shadow: 0 0 3px 0px rgba(54, 54, 54, 0.15);
  @media (max-width: 1023px) {
    .menu-icon {
      justify-self: end;
      align-self: center;
    }
    .burger-menu.active {
      footer {
        display: block;
        left: 25px;
        position: fixed;
        z-index: 1;
        top: 85%;
        transition-delay: 6.4s;
        transition: transform 0.3s ease-out;
      }
    }
  }
  .desktop-header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    z-index: 2;
    background-color: #fefefe;
    max-width: 1300px;
    margin: 0 auto;
    @media (max-width: 767px) {
      display: none;
    }

    .nav-menu {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  .mobile-header {
    display: none;
    @media (max-width: 767px) {
      display: grid;
      grid-template-columns: 1fr 2fr;
      width: 100%;
      z-index: 2;
      background-color: rgb(254, 254, 254);
      box-shadow: rgba(54, 54, 54, 0.15) 0px 0px 3px 0px;
      padding: 0px 25px;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1023px) {
    width: 100%;
    flex-basis: 80%;
  }
`;

export const MobileMenu = styled.div`
  @media (max-width: 1023px) {
    &.active {
      .nav-menu {
        transform: translateX(14rem);
        z-index: 1;
      }
      &:after {
        position: fixed;
        width: calc(100% - 14rem);
        height: 100%;
        color: #fff;
        content: '';
        background: rgba(0, 0, 0, 0.45);
        right: 0;
        top: 0;
        transition: transform 0.3s ease-in;
        z-index: 1;
      }
    }
    .nav-menu {
      position: fixed;
      top: 0;
      bottom: 0;
      left: -14rem;
      width: 14rem;
      background-color: white;
      transition: transform 0.3s ease-out;
      border: solid 1px;
    }
  }
`;
