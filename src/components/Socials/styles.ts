import styled from 'styled-components';

export const SocialIcons = styled.div`
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