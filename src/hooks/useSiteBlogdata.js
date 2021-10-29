import { graphql, useStaticQuery } from "gatsby";

const useSiteBlogdata = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
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
            lastUpdated
          }
          timeToRead
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default useSiteBlogdata;
