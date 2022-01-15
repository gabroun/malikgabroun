import React from "react";
import Layout from "@components/Layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const BookList = styled.div`
  display: flex;
  list-style: none;
  /* justify-content: space-around; */
  margin-left: 0;
  flex-wrap: wrap;
`;
const BookItem = styled.article`
  a {
    display: flex;
  }
  img {
    max-width: 150px;
    box-shadow: 0px 2px 6px #0003;
    border-radius: 4px;
    margin-right: 16px;
  }

  p {
    margin-top: 0;
    color: #f47c48;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    span {
      color: initial;
      font-weight: lighter;
    }
  }
`;

const BookNotes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          frontmatter: { type: { eq: "book-notes" }, publish: { eq: true } }
        }
      ) {
        nodes {
          frontmatter {
            bookTitle
            path
            date
            featured_image
            author
          }
          timeToRead
        }
      }
    }
  `);
  const {
    allMdx: { nodes },
  } = data;

  return (
    <Layout
      title="Book Notes | Malik Elgabroun's Website"
      pathSlug="/book-notes/"
    >
      <div>
        <BookList>
          {nodes.map((item) => {
            const {
              frontmatter: { path, bookTitle, date, featured_image, author },
            } = item;
            const imgUrl = require(`@resources/${featured_image}`).default;

            return (
              <BookItem key={path}>
                <Link to={path}>
                  <img src={imgUrl} alt={bookTitle} />

                  <div>
                    <p>
                      {bookTitle} ({author})<span>Book Summary and Notes</span>
                    </p>
                  </div>
                </Link>
              </BookItem>
            );
          })}
        </BookList>
      </div>
    </Layout>
  );
};

export default BookNotes;
