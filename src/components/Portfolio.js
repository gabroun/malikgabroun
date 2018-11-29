import React from 'react';
import { Link } from 'gatsby';
import '../styles/portfolio.css';

const Portfolio = ({ title, path, image }) => {
  const imgUrl = require(`../resources/${image}`);
  return (
    <li
      className="portfolio__item"
      key={path}
      style={{
        position: 'relative',
        border: '1px solid #e5e5e5',
        overflow: 'hidden',
      }}
    >
      <Link to={path}>
        <img src={imgUrl} style={{ transition: 'all 0.3s' }} />
        <p
          style={{
            position: 'absolute',
            top: '95%',
            left: '5%',
            color: 'black',
            textDecoration: 'underline',
            transform: 'translate(-5%, -95%)',
          }}
        >
          {title}
        </p>
      </Link>
    </li>
  );
};

export default Portfolio;
