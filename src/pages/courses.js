import styled, { ThemeProvider } from "styled-components";

import Layout from "@components/Layout";
import { Link } from "gatsby";
import React from "react";
import theme from "@components/styles/theme";

const CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 600px));
  justify-content: center;
  grid-gap: 110px;
  .course-item {
    margin: 15px;
    border-radius: 6px;
    transition: all 0.4s ease 0.1s;
    border: 1px solid ${(props) => props.theme.lightGrey};
    box-shadow: 0 8px 16px 0 rgba(34, 50, 84, 0.06),
      inset 0 0 0 1px rgba(112, 123, 140, 0.15);
    &:hover {
      opacity: 0.7;
      transform: translateY(-5%);
      transition: all 0.4s ease 0.1s;
    }
  }

  img {
    margin: 0;
  }

  .course-content {
    text-align: center;
    margin: 0 15px 15px;
    p {
      max-width: 360px;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      font-size: 16px;
      letter-spacing: 1px;

      a {
        color: #3369e7;
      }
    }

    h3 {
      margin-bottom: 20px;
      letter-spacing: 1.5px;
    }

    span {
      margin-bottom: 10px;
    }
  }
`;

const Courses = () => {
  const imgPath = require(`@resources/algolia-course.png`);
  return (
    <ThemeProvider theme={theme}>
      <Layout title="Courses | Malik Elgabroun's Website" pathSlug="/courses/">
        <CourseList className="courses-list">
          <div className="course-item">
            <a
              href="https://www.educative.io/courses/start-algolia-api"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={imgPath}
                alt="Getting started with Algolia API course"
              />
            </a>
            <div className="course-content">
              <a
                href="https://www.educative.io/courses/start-algolia-api"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h3>Getting Started with Algolia API</h3>
              </a>
              <p>
                <span>
                  In this course, you will learn how the Algolia API works by
                  understanding its main components.
                </span>
                <span>
                  By the end of this course, you will have gained hands-on
                  experience by building a fully functional search experience
                  using Algolia.
                </span>
                <a
                  href="https://www.educative.io/courses/start-algolia-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get started with Algolia{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      points="57 18 60.5 21.5 57 25"
                      transform="translate(-56 -17)"
                    ></polyline>
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </CourseList>
      </Layout>
    </ThemeProvider>
  );
};

export default Courses;