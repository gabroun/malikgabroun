import CalendarIcon from '@components/styles/icons/calendar';
import HourglassIcon from '@components/styles/icons/hourglass';
import Img from 'gatsby-image';
import Layout from '@components/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Seo from '@components/Seo';
import Signup from '@components/Signup';
import formatDate from '../utils/formatDate';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const Title = styled.h2`
  font-family: 'Rambla';
`;

const PostTemplate = styled.div`
  a {
    color: #f47c48;
    text-decoration: underline;
  }
`;

const PostWrapper = styled.article`
  max-width: 960px;
  margin: 0 auto;
  .gatsby-highlight {
    position: relative;
  }
  pre[class*='language-'] {
    &::before {
      color: #232129;
      font-size: 0.75rem;
      letter-spacing: 0.075em;
      position: absolute;
      right: 1.5rem;
      text-transform: uppercase;
      top: 0px;
      border-radius: 0px 0px 4px 4px;
      padding: 0.25rem 0.5rem;
    }
  }

  pre[class$='language-shell'] {
    &::before {
      content: 'shell';
      background-color: #d9d7e0;
    }
  }
  pre[class$='language-jsx'] {
    &::before {
      content: 'jsx';
      background-color: #61dafb;
    }
  }

  pre[class$='language-vue'] {
    &::before {
      content: 'vue';
      background-color: #42b883;
    }
  }

  pre[class$='language-graphql'] {
    &::before {
      content: 'GraphQL';
      color: #ffffff;
      background: rgb(225, 0, 152);
    }
  }

  pre[class$='language-js'],
  pre[class$='language-javascript'] {
    &::before {
      content: 'js';
      background-color: #f7df1e;
    }
  }

  pre[class$='language-mdx'] {
    &::before {
      content: 'mdx';
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
  grid-template-columns: repeat(2, 120px) 1fr;
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
  query($pathSlug: String!, $image: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        path
        date
        summary
        images
        imageAuthor
        imageAuthorID
        keywords
        tags
        lastUpdated
      }
      timeToRead
      body
    }
    file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
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

  const { timeToRead } = post;
  return (
    <div>
      <Layout title={title}>
        <Seo
          title={title}
          pathSlug={path}
          description={summary}
          image={imgFile.childImageSharp.fluid}
          keywords={keywords}
        />
        <PostWrapper
          className="post-wrapper"
          style={{ maxWidth: '960px', margin: '0 auto' }}
        >
          <header>
            <Title>{title}</Title>
            <PostHeader style={{ margin: '15px 0' }}>
              <p
                className="post-header__date"
                style={{ display: 'flex', alignItems: 'baseline' }}
              >
                <CalendarIcon /> {formatDate(date)}
              </p>
              <p
                className="post-header__time-toread"
                style={{
                  marginLeft: '10px',
                  display: 'flex',
                  alignItems: 'baseline',
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
                  </span>{' '}
                </p>
              )}
            </PostHeader>

            <Img
              fluid={imgFile.childImageSharp.fluid}
              style={{ maxHeight: '400px', marginBottom: '50px' }}
            />
            {imageAuthor && (
              <ImgCredit>
                Photo by
                <a
                  href={`https://unsplash.com/${imageAuthorID}`}
                  target="blank"
                  className="img-credit"
                >
                  {' '}
                  {imageAuthor}
                </a>
              </ImgCredit>
            )}
          </header>
          <div>
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        </PostWrapper>
        <Signup tags={tags} />
      </Layout>
    </div>
  );
};

export default Post;
