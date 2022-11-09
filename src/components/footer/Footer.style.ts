import styled from "styled-components";
import { colors } from "../shared/shared.style";

export const FooterWrapper = styled.footer`
  z-index: 2;
  box-shadow: 0 0 1px 1px rgba(54, 54, 54, 0.15);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  position: relative;

  @media (max-width: 767px) {
    margin-bottom: 72px;
  }
`;

export const SocialIconsContainer = styled.div`
  a {
    border: none;
    width: 50px;
    min-width: 50px;
    height: 50px;
    border-radius: 25px;
    cursor: pointer;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: center;
    margin: 20px;
    background: ${colors.black};
    flex-direction: row;
    color: ${colors.white};
    text-decoration: none;
    transition: all 0.3s;

    &[aria-label="Twitter"]:hover {
      background: ${colors.blue02Twitter};
    }
    &[aria-label="Github"]:hover {
      background: ${colors.blue03Github};
    }
    &[aria-label="Linkedin"]:hover {
      background: ${colors.blue01Linkedin};
    }
  }
`;
