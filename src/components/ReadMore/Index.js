import React from "react";
import useSiteBlogdata from "@hooks/useSiteBlogdata";
import * as S from "./styles";
import { Link } from "gatsby";
import formatDate from "@utils/formatDate";
import { StaticImage } from "gatsby-plugin-image";
import { BlogPost } from "@components/Blog";

const ReadMore = ({ link1, link2 }) => {
  const posts = useSiteBlogdata();
  const filteredPosts = posts.filter((post) => {
    return post.frontmatter.path === link1 || post.frontmatter.path === link2;
  });

  return (
    <div className="test" style={{ marginTop: "50px" }}>
      <h2>If you found this article helpful</h2>
      <p>You will enjoy these other articles.</p>
      <S.List>
        {filteredPosts.map(({ frontmatter, timeToRead }) => {
          const {
            path,
            title,
            summary,
            featured_image,
            date,
            tags,
            lastUpdated,
          } = frontmatter;

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
      </S.List>
    </div>
  );
};

export default ReadMore;
