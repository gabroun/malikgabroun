import React, { useEffect } from "react";
import Layout from "@components/Layout";
import Seo from "@components/Seo";
import { graphql } from "gatsby";
import TableOfContents from "@components/TableOfContents";
import { GatsbyImage } from "gatsby-plugin-image";
import CalendarIcon from "@styles/icons/calendar";
import HourglassIcon from "@styles/icons/hourglass";
import Signup from "@components/Signup";
import formatDate from "../utils/formatDate";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import amazonLogo from "@resources/amazonLogo.svg";

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

  .post-header__img {
    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
  }

  header {
    img {
      object-fit: contain !important;
    }
  }

  .gatsby-highlight {
    position: relative;
  }

  p,
  ul {
    a:not(.img-credit):not(.gatsby-resp-image-link) {
      box-shadow: inset 0 -0.15rem 0 0 #f47c48;
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

  a {
    &.amazon {
      &:after {
        content: "";
        background-image: url(${amazonLogo});
        width: 15px;
        height: 15px;
        display: inline-block;
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
    }

    &__time-toread,
    &__date {
      grid-row: 2/3;
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
        bookTitle
        author
      }
      tableOfContents
      timeToRead
      body
    }
    file(relativePath: { eq: $image }) {
      childImageSharp {
        gatsbyImageData(
          width: 600
          placeholder: TRACED_SVG
          layout: CONSTRAINED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;

const BookNotes = ({ data: { mdx: bookNote, file: imgFile } }) => {
  const { title, date, keywords, summary, path, lastUpdated, tags } =
    bookNote.frontmatter;
  const { timeToRead, tableOfContents } = bookNote;

  const checkIfAmazonLink = () => {
    let links = document.querySelectorAll(`[title="amazon"]`);
    links.forEach((link) => {
      link.classList.add("amazon");
    });
  };

  useEffect(() => {
    checkIfAmazonLink();
  }, []);

  return (
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
            <h1>{title}</h1>
            <PostHeader style={{ margin: "15px 0" }}>
              <p
                className="post-header__date"
                style={{ display: "flex", alignItems: "center" }}
              >
                <CalendarIcon /> {formatDate(date)}
              </p>
              <p
                className="post-header__time-toread"
                style={{
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HourglassIcon /> {timeToRead} min read
              </p>
              {lastUpdated && (
                <p className="post-header__last-updated">
                  <span>Last Updated</span>
                  <span>
                    <CalendarIcon />
                    {formatDate(lastUpdated)}
                  </span>{" "}
                </p>
              )}
            </PostHeader>

            <GatsbyImage
              image={imgFile.childImageSharp.gatsbyImageData}
              className="post-header__img"
              alt={title}
              style={{
                maxHeight: "250px",
                marginBottom: "50px",
                maxWidth: "250px",
                margin: "0 auto 50px",
                borderRadius: "4px",
              }}
            />
          </header>
          <MDXRenderer>{bookNote.body}</MDXRenderer>
        </div>
      </PostWrapper>
      <Signup tags={tags} />
    </Layout>
  );
};

export default BookNotes;
