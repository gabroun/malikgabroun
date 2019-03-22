import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const Portfolios = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  column-gap: 10px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    margin: 0;
  }
`;

const PortfolioItem = styled.li`
  position: relative;
  border: solid 1px ${props => props.theme.lightGrey};
  overflow: hidden;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const PortfolioImg = styled.img`
  transition: all 0.3s;
  margin-bottom: 0;
  padding: 30px;
`;

const PortfolioTitle = styled.p`
  position: absolute;
  top: 95%;
  left: 5%;
  color: black;
  text-decoration: underline;
  transform: translate(-5%, -95%);
`;
export const Portfolio = ({ title, path, image }) => {
  const imgUrl = require(`../resources/${image}`);
  return (
    <PortfolioItem key={path}>
      <Link to={path}>
        <PortfolioImg src={imgUrl} alt={title} />
        <PortfolioTitle>{title}</PortfolioTitle>
      </Link>
    </PortfolioItem>
  );
};

export const PortfolioList = ({ edges }) => {
  return (
    <Portfolios>
      {edges.map(edge => {
        const { title, path, images } = edge.node.frontmatter;

        return (
          <Portfolio title={title} path={path} image={images} key={path} />
        );
      })}
    </Portfolios>
  );
};
