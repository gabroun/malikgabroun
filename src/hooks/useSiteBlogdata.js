import { graphql, useStaticQuery } from "gatsby";

const useSiteBlogdata = () => {
  const data = useStaticQuery(graphql`
    query {
      posts: allMdx(
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
            lastUpdated
          }
          timeToRead
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

  return { posts: data.posts.nodes, images: data.images.edges };
};

export default useSiteBlogdata;
