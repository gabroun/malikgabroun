import styled from "styled-components";
import { colors } from "../shared/shared.style";

export const LogoContainer = styled.div``;

export const SiteHeader = styled.header`
  box-shadow: 0 0 3px 0px rgba(54, 54, 54, 0.15);
`;

export const DesktopHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  z-index: 2;
  background-color: ${colors.lightGrey};
  max-width: 1300px;
  margin: 0 auto;
`;

export const StyledLink = styled.div<{ active: boolean }>`
  a {
    text-decoration: none;
    font-weight: 400;
    color: ${colors.black01};
    padding: 1rem;
    display: flex;
    align-items: center;
    position: relative;

    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;

    @media (min-width: 768px) {
      font-weight: 900;
      text-transform: uppercase;
    }

    ${({ active }) =>
      active &&
      `    
        @media (min-width: 768px) {
            color: ${colors.orange01};
            background-color: ${colors.black10};
            border-radius: 8px;
        }

        @media (max-width: 767px) {
            svg {
                fill: ${colors.orange01};
            }

        }
    `}

    &:after {
      height: 3px;
      background: ${colors.orange01};
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
`;

export const MobileHeader = styled.div``;

export const MobileMenu = styled.div`
  position: fixed;
  z-index: 3;
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  left: 0rem;
  right: 0rem;
  display: none;
  background-color: ${colors.lightGrey};
  box-shadow: 0 0 3px 0px ${colors.greyShadow};
  @media (max-width: 767px) {
    display: flex;
  }
  a {
    flex-direction: column;
    flex-shrink: 1;
    font-size: 0.875rem;
    line-height: 1;
    justify-content: center;
    position: relative;
    text-align: center;
    width: 4rem;
    height: 4rem;
    border-radius: 2px;
  }
`;

export const DesktopLinks = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-end;
`;

export const LinksContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
