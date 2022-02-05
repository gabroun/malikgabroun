import * as S from "@styles/index";

import { Link, graphql, useStaticQuery } from "gatsby";

import { Blog } from "@components/Blog";
import Layout from "@components/Layout";
import { PortfolioList } from "@components/Portfolio";
import React from "react";
import Signup from "@components/Signup";
import { ThemeProvider } from "styled-components";
import cv from "@static/Malik-Elgabroun_CV.pdf";
import theme from "@styles/theme";
import { StaticImage } from "gatsby-plugin-image";

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      post: allMdx(
        limit: 3
        sort: { order: DESC, fields: frontmatter___date }
        filter: { frontmatter: { type: { eq: "post" }, publish: { eq: true } } }
      ) {
        nodes {
          frontmatter {
            title
            path
            date
            summary
            featured_image
            tags
          }
          timeToRead
        }
      }
      siteMetaData: site {
        siteMetadata {
          title
        }
      }
      images: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
          absolutePath: { regex: "/images/thumbnails/" }
        }
      ) {
        edges {
          node {
            name
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
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Layout
          title="Malik Elgabroun - Front End Developer"
          keywords={["frontend dev", "javascript", "react"]}
          pathSlug="/"
        >
          <S.MainContent className="main-content">
            <div className="main-content__banner">
              <StaticImage
                src="../resources/programming.svg"
                alt="Man coding"
                placeholder="blurred"
                objectFit="contain"
                formats={["auto", "webp"]}
              />

              <div>
                <h1 className="intro-title">Hello My name is Malik</h1>
                <p className="intro-subtitle">
                  and I&apos;m a London-based Front end Developer
                </p>
                <S.ButtonContainer>
                  <Link to="/about/">
                    <S.Button>About me</S.Button>
                  </Link>
                  <a href={cv}>
                    <S.Button role="button">Resume</S.Button>
                  </a>
                </S.ButtonContainer>
              </div>
            </div>

            <S.LatestSection>
              <S.Header>Latest Posts</S.Header>

              <Blog nodes={data.post.nodes} images={data.images.edges} />
            </S.LatestSection>

            <S.LatestSection>
              <S.Header>Explore</S.Header>

              <S.Items>
                <Link to="/courses/">
                  <StaticImage
                    src="../resources/courses.svg"
                    alt="online course"
                    loading="lazy"
                    placeholder="blurred"
                    objectFit="contain"
                    formats={["auto", "webp"]}
                  />
                  <div>
                    <h2>My Online Courses</h2>
                    <p>Browse some of my current and upcoming courses</p>
                  </div>
                </Link>
                <Link to="/book-notes/">
                  <StaticImage
                    src="../resources/book-notes.svg"
                    alt="book notes and summary"
                    loading="lazy"
                    placeholder="blurred"
                    objectFit="contain"
                    formats={["auto", "webp"]}
                  />
                  <div>
                    <h2>Book Notes & Summaries</h2>
                    <p>Notes, summaries and reviews of my favourite books</p>
                  </div>
                </Link>
              </S.Items>
            </S.LatestSection>

            <Signup tags={["general", "software"]} />
          </S.MainContent>
        </Layout>
      </div>
    </ThemeProvider>
  );
};

export default Index;
