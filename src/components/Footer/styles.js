import styled from 'styled-components';

export const Footer = styled.footer`
  z-index: 2;
  box-shadow: 0 0 1px 1px rgba(54, 54, 54, 0.15);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  position: relative;
  margin-left: -2rem;
  margin-right: -2rem;

  @media (max-width: 767px) {
    margin-bottom: 72px;
  }

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
    background: #000;
    flex-direction: row;
    color: white;
    text-decoration: none;
    transition: all 0.3s;

    &[aria-label='Twitter']:hover {
      background: #25a8e0;
    }
    &[aria-label='Github']:hover {
      background: #a9d9ed;
    }
    &[aria-label='Linkedin']:hover {
      background: #0d7bb7;
    }
  }
`;
