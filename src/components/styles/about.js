import styled from 'styled-components';

export const ContactUs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 44px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  .social {
    h1,
    p {
      margin-bottom: 46px;
    }

    a[aria-label='Twitter'] {
      margin-left: 0;
    }
  }
`;

export const AboutMe = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  img {
    justify-self: center;
  }
`;
