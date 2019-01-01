import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Title from './styles/Title';
import BlogList from './styles/BlogList';

const PostItem = styled.div`
  flex-basis: 33%;
  margin: 15px;
  top: 0px;
  background-color: rgb(255, 255, 255);
  border-radius: 6px;
  transition: all 0.4s ease 0.1s;
  border: 1px solid #e5e5e5;

  &:hover {
    background: rgb(239, 239, 239);
    transform: translateY(-5%);
    transition: all 0.4s ease 0.1s;
  }

  a {
    text-decoration: none;
    color: black;
  }
  .imgs {
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 175px;
    img {
      margin-bottom: 0;
      padding: 0 1px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-basis: 50%;
  }
`;

const PostPreview = styled.div`
  padding: 10px;
  h2 {
    line-height: 1.2em;
    font-size: 20px;
    font-weight: 700;
    margin: 14px 0;

    a {
      color: black;
      text-decoration: none;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
`;

const Tag = styled.p`
  font-size: 14px;
  padding: 0 6px;
  margin-bottom: 0;

  &:nth-of-type(1) {
    padding-right: 0;
  }
`;

const TimeToRead = styled.p`
  font-size: 12px;
  margin: 10px 5px 0px;
  font-weight: bold;
  float: right;
`;

const PostDate = styled.p`
  display: inline-block;
  font-size: 12px;
  margin: 10px 0px 0px;
`;

export const BlogPost = ({
  path,
  title,
  summary,
  image,
  date,
  tags,
  timeToRead,
}) => {
  const url = require(`../resources/${image}`);
  return (
    <PostItem>
      <Link to={path}>
        <div className="imgs" style={{ backgroundImage: `url(${url})` }} />
        <PostPreview>
          <Tags>
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
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>

          <Title>{title}</Title>
          <p>{summary}</p>
          <PostDate>{date}</PostDate>
          <TimeToRead>{timeToRead} min read</TimeToRead>
        </PostPreview>
      </Link>
    </PostItem>
  );
};

export const Blog = ({ edges }) => {
  return (
    <BlogList>
      {edges.map(function(edge) {
        const {
          path,
          title,
          summary,
          images,
          date,
          tags,
        } = edge.node.frontmatter;
        const { timeToRead } = edge.node;

        return (
          <BlogPost
            path={path}
            title={title}
            summary={summary}
            image={images}
            timeToRead={timeToRead}
            date={date}
            tags={tags}
            key={path}
          />
        );
      })}
    </BlogList>
  );
};
