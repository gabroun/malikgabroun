import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Layout from "@components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Seo from "@components/Seo";
import Signup from "@components/Signup";
import TableOfContents from "@components/TableOfContents";
import formatDate from "../utils/formatDate";
import { graphql } from "gatsby";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Fira Mono";
`;

const PostTemplate = styled.div`
  a {
    color: #f47c48;
    text-decoration: underline;
  }
`;

const PostWrapper = styled.article`
  @media (min-width: 1084px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: flex-start;
  }

  aside {
    flex: 0 100000 250px;
    position: sticky;
    top: 148px;
    max-height: calc(100vh - 148px);
    overflow: auto;
    padding-bottom: 16px;
    margin-left: auto;
    display: none;
    @media (min-width: 1084px) {
      display: block;
    }
  }

  @media (min-width: 1084px) {
    > div {
      flex: 1 1 800px;
      max-width: 800px;
      margin-right: 25px;
    }
  }

  img {
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%) !important;
    border-radius: 4px;
  }

  .gatsby-highlight {
    position: relative;
  }

  pre[class*="language-"] {
    &::before {
      color: #232129;
      font-size: 0.75rem;
      letter-spacing: 0.075em;
      position: absolute;
      right: 1.5rem;
      text-transform: uppercase;
      top: 10px;
      border-radius: 0px 0px 4px 4px;
      padding: 0.25rem 0.5rem;
    }
  }

  pre[class$="language-shell"] {
    &::before {
      content: "shell";
      background-color: #d9d7e0;
    }
  }
  pre[class$="language-jsx"] {
    &::before {
      content: "jsx";
      background-color: #61dafb;
    }
  }

  pre[class$="language-vue"] {
    &::before {
      content: "vue";
      background-color: #42b883;
    }
  }

  pre[class$="language-graphql"] {
    &::before {
      content: "GraphQL";
      color: #ffffff;
      background: rgb(225, 0, 152);
    }
  }

  pre[class$="language-js"],
  pre[class$="language-javascript"] {
    &::before {
      content: "js";
      background-color: #f7df1e;
    }
  }

  pre[class$="language-mdx"] {
    &::before {
      content: "mdx";
      background-color: #f9ac00;
    }
  }

  p,
  ul {
    a:not(.img-credit):not(.gatsby-resp-image-link) {
      box-shadow: inset 0 -0.5rem 0 0 #f47c48;
      transition: box-shadow 0.2s, color 0.2s;
      &:hover {
        box-shadow: inset 0 -2.5rem 0 0 #f47c48;
        color: white;
      }
    }
    > code {
      border-radius: 0.3em;
      background: #ffe56433;
      color: #1a1a1a;
      padding: 0.15em 0.2em 0.05em;
      white-space: normal;
    }
  }

  hr {
    margin-top: calc(1.5rem - 1px);
  }

  blockquote {
    padding-left: 1rem;
    padding-right: 1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    background-color: #f47c4821;
    border-left: 8px solid #f47c48;
    margin-left: 0;
    margin-right: 0;
    p {
      margin-top: 0;
    }
  }

  .gatsby-code-title {
    color: black;
    padding: 0.3em 0.5em;
    width: max-content;
    margin: 1em 0px -1.6em 1em;
    border-radius: 0.3em;
    position: relative;
    z-index: 1;
    font-size: 0.8em;
    line-height: initial;
    background-color: #f7df1e;
    top: 15px;
  }

  .gatsby-image-wrapper-constrained {
    display: block;
  }

  .active {
    color: #f47c48;
  }

  .toc-container {
    .toc-container {
      text-indent: 40px;
    }
  }

  .anchor {
    svg {
      opacity: 0;
      margin-right: 10px;
      transition: opacity 250ms ease 0s;
    }

    svg {
      &:hover {
        opacity: 1;
        fill: #f47c48;
      }
    }
  }
`;

const ImgCredit = styled.p`
  margin-bottom: 0;
  position: relative;
  top: -45px;
  text-align: center;
  a {
    color: #f47c48;
  }
`;

const PostHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 160px) 1fr;
  @media (max-width: 420px) {
    display: flex;
    flex-wrap: wrap;
  }
  .post-header {
    &__last-updated {
      justify-self: end;
      display: grid;
      grid-row: 1/3;
      span {
        &:nth-child(1) {
          justify-self: end;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 13px;
          color: #7a7a7a;
          @media (max-width: 400px) {
            justify-self: start;
          }
        }
      }

      .gatsby-image-wrapper-constrained {
        display: inline-block;
      }
    }

    &__time-toread,
    &__date {
      grid-row: 2/3;
    }

    &__time-toread,
    &__last-updated,
    &__date {
      img {
        box-shadow: none !important;
      }

      span {
        margin-left: 4px;
      }
    }
  }
`;

export const query = graphql`
  query ($pathSlug: String!, $image: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        path
        date
        summary
        featured_image
        imageAuthor
        imageAuthorID
        keywords
        tags
        lastUpdated
      }
      tableOfContents
      timeToRead
      body
    }
    file(relativePath: { eq: $image }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: TRACED_SVG
          layout: CONSTRAINED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;

const Post = ({ data: { mdx: post, file: imgFile } }) => {
  const {
    title,
    date,
    path,
    summary,
    imageAuthor,
    imageAuthorID,
    keywords,
    lastUpdated,
    tags,
  } = post.frontmatter;

  const { timeToRead, tableOfContents } = post;
  return (
    <div>
      <Layout title={title}>
        <Seo
          title={title}
          pathSlug={path}
          description={summary}
          image={imgFile.childImageSharp.gatsbyImageData}
          keywords={keywords}
          date={date}
          isBlogPost={true}
          dateModified={lastUpdated}
        />
        <PostWrapper className="post-wrapper">
          {tableOfContents?.items && (
            <TableOfContents items={tableOfContents.items} />
          )}

          <div>
            <header>
              <Title>{title}</Title>
              <PostHeader style={{ margin: "15px 0" }}>
                <div
                  className="post-header__date"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <StaticImage
                    src="../resources/images/icons/calendar.svg"
                    alt="calendar icon"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                  <span>{formatDate(date)}</span>
                </div>
                <div
                  className="post-header__time-toread"
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <StaticImage
                    src="../resources/images/icons/clock.svg"
                    alt="clock icon"
                    placeholder="blurred"
                    objectFit="contain"
                  />{" "}
                  <span>{timeToRead} min read</span>
                </div>
                {lastUpdated && (
                  <div className="post-header__last-updated">
                    <span>Last Updated</span>
                    <span>
                      <StaticImage
                        src="../resources/images/icons/calendar.svg"
                        alt="calendar icon"
                        placeholder="blurred"
                        objectFit="contain"
                      />
                      <span> {formatDate(lastUpdated)}</span>
                    </span>{" "}
                  </div>
                )}
              </PostHeader>

              <GatsbyImage
                image={imgFile.childImageSharp.gatsbyImageData}
                alt={title}
                style={{ maxHeight: "400px", marginBottom: "50px" }}
              />
              {imageAuthor && (
                <ImgCredit>
                  Photo by
                  <a
                    href={`https://unsplash.com/${imageAuthorID}`}
                    target="blank"
                    className="img-credit"
                  >
                    {" "}
                    {imageAuthor}
                  </a>
                </ImgCredit>
              )}
            </header>

            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        </PostWrapper>
        <Signup tags={tags} />
      </Layout>
    </div>
  );
};

export default Post;
