import * as S from "@components/styles/blog";

import { BlogPost } from "@components/Blog";
import Layout from "@components/Layout";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "@components/styles/theme";
import useSiteBlogdata from "@hooks/useSiteBlogdata";

const Blog = () => {
  const posts = useSiteBlogdata();
  return (
    <ThemeProvider theme={theme}>
      <Layout title="Blog | Malik Elgabroun's Website" pathSlug="/blog/">
        <S.BlogList>
          {posts.map((post) => {
            const { path, title, summary, images, date, tags } =
              post.frontmatter;
            const { timeToRead } = post;

            return (
              <BlogPost
                path={path}
                title={title}
                image={images}
                summary={summary}
                date={date}
                tags={tags}
                timeToRead={timeToRead}
                key={path}
              />
            );
          })}
        </S.BlogList>
      </Layout>
    </ThemeProvider>
  );
};

export default Blog;
