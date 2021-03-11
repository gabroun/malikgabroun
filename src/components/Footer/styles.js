import styled from 'styled-components';

export const Footer = styled.footer`
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
