import styled from 'styled-components';

export const BlogList = styled.div`
  justify-content: space-around;
  max-width: 1280px;
  margin: 0 auto;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
`;
