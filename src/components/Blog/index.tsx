import * as S from "./styles";

import { Link } from "gatsby";
import React from "react";
import formatDate from "@utils/formatDate";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";

type Image = {
  node: {
    [key: string]: any;
    name: string;
  };
};

interface BlogPostProps {
  path: string;
  title: string;
  summary: string;
  image: {
    [key: string]: any;
    featured_image: string;
  };
  date: Date;
  tags: string[];
  timeToRead: number;
  lastUpdated?: Date;
}

interface BlogProps {
  images: Image[];
  nodes: {
    frontmatter: {
      path: string;
      title: string;
      tags: string[];
      summary: string;
      date: Date;
      lastUpdated?: Date;
      featured_image: string;
    };
    timeToRead: number;
  }[];
}

export const BlogPost = ({
  path,
  title,
  summary,
  image,
  date,
  tags,
  timeToRead,
  lastUpdated,
}: BlogPostProps) => {
  return (
    <S.PostItem>
      <Link to={path}>
        <GatsbyImage
          className="imgs"
          image={image.img.childImageSharp.gatsbyImageData}
          alt={title}
        />

        <S.PostPreview className="postPreview">
          <S.Tags className="tags">
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

export const Blog = ({ nodes, images }: BlogProps) => {
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
        let img = images.filter((item) =>
          featured_image.includes(item.node.name)
        )[0].node;

        const newImg = { featured_image, img };

        return (
          <BlogPost
            path={path}
            title={title}
            summary={summary}
            image={newImg}
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
