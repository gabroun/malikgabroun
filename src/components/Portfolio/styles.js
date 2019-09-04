import styled from 'styled-components';

export const Portfolios = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  justify-content: center;
  column-gap: 10px;
  margin: 0;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    margin: 0;
  }
`;

export const PortfolioItem = styled.li`
  position: relative;
  border: solid 1px ${props => props.theme.lightGrey};
  overflow: hidden;
  box-shadow: 0 8px 16px 0 rgba(34, 50, 84, 0.06),
    inset 0 0 0 1px rgba(112, 123, 140, 0.15);
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const PortfolioImg = styled.img`
  transition: all 0.3s;
  margin-bottom: 0;
  padding: 30px;
`;

export const PortfolioTitle = styled.p`
  position: absolute;
  top: 95%;
  left: 5%;
  color: black;
  text-decoration: underline;
  transform: translate(-5%, -95%);
`;
