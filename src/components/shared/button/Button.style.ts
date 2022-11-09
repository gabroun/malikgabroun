import styled from "styled-components";
import { colors } from "../shared.style";

export const PrimaryButton = styled.button`
  border: 1px solid ${colors.orange01};
  padding: 15px;
  cursor: pointer;
  width: 150px;
  box-sizing: border-box;
  background-color: ${colors.white};
  border-radius: 40px;
  font-size: 16px;
  &:hover {
    background-color: ${colors.orange01};
    transition: all 0.4s ease 0.1s;
    color: ${colors.white};
  }
`;
