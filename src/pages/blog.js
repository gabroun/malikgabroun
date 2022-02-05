import * as S from "@styles/blog";

import { BlogPost } from "@components/Blog";
import Layout from "@components/Layout";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import useSiteBlogdata from "@hooks/useSiteBlogdata";

const Blog = () => {
  let { posts, images } = useSiteBlogdata();

  return (
    <ThemeProvider theme={theme}>
      <Layout title="Blog | Malik Elgabroun's Website" pathSlug="/blog/">
        <S.BlogList>
          {posts.map((post) => {
            const {
              path,
              title,
              summary,
              featured_image,
              date,
              tags,
              lastUpdated,
            } = post.frontmatter;
            const { timeToRead } = post;

            let img = images.filter((item) =>
              featured_image.includes(item.node.name)
            )[0].node;

            const newImg = { featured_image, img };

            return (
              <BlogPost
                path={path}
                title={title}
                image={newImg}
                summary={summary}
                date={date}
                tags={tags}
                timeToRead={timeToRead}
                key={path}
                lastUpdated={lastUpdated}
              />
            );
          })}
        </S.BlogList>
      </Layout>
    </ThemeProvider>
  );
};

export default Blog;
