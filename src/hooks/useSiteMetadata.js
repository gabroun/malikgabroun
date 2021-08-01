import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          twitter
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
