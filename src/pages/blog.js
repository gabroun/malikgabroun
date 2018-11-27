import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/index';
import Post from '../components/Blog/index';

const BlogList = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1280px;
  margin: 0 auto;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;

    return (
      <div>
        <Layout title="Blog - Malik Elgabroun">
          <BlogList className="blogpost__list">
            {edges.map(function(edge) {
              const {
                path,
                title,
                summary,
                images,
                date,
                tags,
              } = edge.node.frontmatter;
              const { timeToRead } = edge.node;

              return (
                <Post
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
          </BlogList>
        </Layout>
      </div>
    );
  }
}

export default Blog;
export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { ne: "portfolio" } } }
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            path
            date
            summary
            images
            tags
          }
        }
      }
    }
    allSitePage {
      edges {
        node {
          id
        }
      }
    }
  }
`;
