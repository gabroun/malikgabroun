import styled from "styled-components";
import { fontFamilyBold } from "../components/shared/shared.style";

export const MainHeader = styled.h1`
  letter-spacing: 1px;
  font-size: 40px;
  font-family: ${fontFamilyBold};
  font-weight: 700;
  margin-top: 40px;
  text-align: center;
  line-height: 56px;
`;

export const MainSubHeader = styled.p`
  letter-spacing: 1px;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
`;
