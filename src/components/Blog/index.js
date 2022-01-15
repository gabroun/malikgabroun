import * as S from "./styles";

import { Link } from "gatsby";
import React from "react";
import formatDate from "@utils/formatDate";
import { StaticImage } from "gatsby-plugin-image";

export const BlogPost = ({
  path,
  title,
  summary,
  image,
  date,
  tags,
  timeToRead,
  lastUpdated,
}) => {
  const url = require(`@resources/${image}`).default;

  return (
    <S.PostItem>
      <Link to={path}>
        <div className="imgs" style={{ backgroundImage: `url(${url})` }} />

        <S.PostPreview>
          <S.Tags>
            <StaticImage
              src="../../resources/images/icons/tag.svg"
              alt="tag icon"
              placeholder="blurred"
              objectFit="contain"
            />
            {tags.map((tag, index) => (
              <S.Tag className={tag} key={index}>
                #{tag}
              </S.Tag>
            ))}
          </S.Tags>

          <h2>{title}</h2>
          <p>{summary}</p>
          <S.PostFooter>
            <S.PostDate>
              <StaticImage
                src="../../resources/images/icons/calendar.svg"
                alt="calendar icon"
                placeholder="blurred"
                objectFit="contain"
              />

              <span> {formatDate(date)}</span>
            </S.PostDate>
            <S.TimeToRead>
              <StaticImage
                src="../../resources/images/icons/clock.svg"
                alt="clock icon"
                objectFit="contain"
                placeholder="blurred"
              />
              <span>{timeToRead} min read</span>
            </S.TimeToRead>
          </S.PostFooter>
        </S.PostPreview>
      </Link>
    </S.PostItem>
  );
};

export const Blog = ({ nodes }) => {
  return (
    <S.BlogList>
      {nodes.map(function (node) {
        const {
          path,
          title,
          summary,
          featured_image,
          date,
          tags,
          lastUpdated,
        } = node.frontmatter;
        const { timeToRead } = node;

        return (
          <BlogPost
            path={path}
            title={title}
            summary={summary}
            image={featured_image}
            timeToRead={timeToRead}
            date={formatDate(date)}
            tags={tags}
            key={path}
            lastUpdated={lastUpdated}
          />
        );
      })}
    </S.BlogList>
  );
};
