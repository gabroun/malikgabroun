import React from 'react';
import { Link } from 'gatsby';

import * as S from './styles';

export const Portfolio = ({ title, path, image }) => {
  const imgUrl = require(`../../resources/${image}`);
  return (
    <S.PortfolioItem key={path}>
      <Link to={path}>
        <S.PortfolioImg src={imgUrl} alt={title} />
        <S.PortfolioTitle>{title}</S.PortfolioTitle>
      </Link>
    </S.PortfolioItem>
  );
};

export const PortfolioList = ({ edges }) => {
  return (
    <S.Portfolios>
      {edges.map(edge => {
        const { title, path, images } = edge.node.frontmatter;

        return (
          <Portfolio title={title} path={path} image={images} key={path} />
        );
      })}
    </S.Portfolios>
  );
};
