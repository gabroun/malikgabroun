import styled from 'styled-components';

export const Footer = styled.footer`
  /* position: absolute;
   width: 100%; */

  /* max-width: 1280px;
  margin: 0 auto;
  padding: 25px;
  left: 0;
  right: 0; */
  /* @media (min-width: 1024px) { */
  /* position: fixed; */
  z-index: 2;
  box-shadow: 0 0 1px 1px rgba(54, 54, 54, 0.15);

  /* width: 85px;
    height: 100%; */
  align-items: center;
  justify-content: center;
  top: 160px;
  display: flex;
  flex-direction: row;
  position: relative;
  /* } */

  @media (max-width: 1023px) {
    /* display: none; */
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
