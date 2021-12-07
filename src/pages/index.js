import * as S from "@components/styles/index";

import { Link, graphql, useStaticQuery } from "gatsby";

import { Blog } from "@components/Blog";
import Layout from "@components/Layout";
import { PortfolioList } from "@components/Portfolio";
import React from "react";
import Signup from "@components/Signup";
import { ThemeProvider } from "styled-components";
import cv from "@static/Malik-Elgabroun_CV.pdf";
import theme from "@components/styles/theme";

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
            images
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
      portfolio: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { type: { eq: "portfolio" } } }
      ) {
        nodes {
          frontmatter {
            title
            path
            date
            summary
            images
            tags
          }
          timeToRead
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
              <img
                src={require("../resources/programming.svg")}
                alt="Man coding"
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

              <Blog nodes={data.post.nodes} />
            </S.LatestSection>

            <S.LatestSection>
              <S.Header>Explore</S.Header>

              <S.Items>
                <Link to="/courses/">
                  <img
                    src={require("../resources/courses.svg")}
                    alt="online course"
                  />
                  <div>
                    <h2>My Online Courses</h2>
                    <p>Browse some of my current and upcoming courses</p>
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
