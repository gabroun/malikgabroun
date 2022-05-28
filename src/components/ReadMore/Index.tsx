import React from "react";
import useSiteBlogdata from "@hooks/useSiteBlogdata";
import * as S from "./styles";
import { Link } from "gatsby";
import formatDate from "@utils/formatDate";
import { StaticImage } from "gatsby-plugin-image";
import { BlogPost } from "@components/Blog";
import { Image, Post } from "@utils/BlogPostTypes";

interface ReadMoreProps {
  link1: string;
  link2: string;
}

const ReadMore = ({ link1, link2 }: ReadMoreProps) => {
  const { posts, images } = useSiteBlogdata();

  const filteredPosts = posts.filter((post: Post) => {
    return post.frontmatter.path === link1 || post.frontmatter.path === link2;
  });

  return (
    <div className="test" style={{ marginTop: "50px" }}>
      <h2>If you found this article helpful</h2>
      <p>You will enjoy these other articles.</p>
      <S.List>
        {filteredPosts.map(({ frontmatter, timeToRead }: Post) => {
          const {
            path,
            title,
            summary,
            featured_image,
            date,
            tags,
            lastUpdated,
          } = frontmatter;

          let img = images.filter((item: Image) =>
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
      </S.List>
    </div>
  );
};

export default ReadMore;
