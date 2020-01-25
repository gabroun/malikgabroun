import React from 'react';
import { Link } from 'gatsby';
import { Highlight } from 'react-instantsearch-dom';
import formatDate from '../../utils/formatDate';

import * as S from './styles';
const PostPreview = ({ hit }) => {
  const { path, title, images, summary, date, tags } = hit.node.frontmatter;
  const { timeToRead } = hit.node;
  const url = require(`../../resources/${images}`);
  return (
    <S.PostItem>
      <Link to={path}>
        <div className="imgs" style={{ backgroundImage: `url(${url})` }} />
        <S.PostPreview>
          <S.Tags>
            <svg
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              height="14px"
              width="14px"
              viewBox="0 0 40 40"
            >
              <g>
                <path d="m9.5 10.5q0-1.2-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.8-1.9z m22.7 12.2q0 1.1-0.8 1.9l-10.4 10.5q-0.8 0.8-2 0.8-1.1 0-1.9-0.8l-15.2-15.2q-0.8-0.8-1.3-2.2t-0.6-2.5v-8.8q0-1.1 0.8-1.9t1.9-0.8h8.9q1.1 0 2.5 0.5t2.1 1.4l15.2 15.2q0.8 0.8 0.8 1.9z m8.2 0q0 1.1-0.8 1.9l-10.5 10.5q-0.8 0.8-1.9 0.8-0.8 0-1.2-0.3t-1.2-1l10-10q0.8-0.8 0.8-1.9 0-1.1-0.8-1.9l-15.2-15.2q-0.8-0.8-2.1-1.4t-2.5-0.5h4.7q1.2 0 2.5 0.5t2.2 1.4l15.2 15.2q0.8 0.8 0.8 1.9z" />
              </g>
            </svg>
            {tags.map((tag, index) => (
              <S.Tag key={index}>{tag}</S.Tag>
            ))}
          </S.Tags>

          <h2>{title}</h2>
          <p>{summary}</p>
          <S.PostDate>{formatDate(date)}</S.PostDate>
          <S.TimeToRead>{timeToRead} min read</S.TimeToRead>
        </S.PostPreview>
      </Link>
      <p className="highlight">
        <Highlight hit={hit} attribute="excerpt" tagName="mark" />
      </p>
    </S.PostItem>
  );
};

export default PostPreview;
