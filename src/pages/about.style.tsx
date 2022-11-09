import styled from "styled-components";
import Image from "next/image";

export const AboutHeader = styled.h2`
  font-size: 22px;
  letter-spacing: 1px;
`;

export const AboutMessage = styled.p`
  margin-top: 15px;
  letter-spacing: 1px;
`;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const HeadDrawnImage = styled(Image)`
  justify-self: center;
`;
