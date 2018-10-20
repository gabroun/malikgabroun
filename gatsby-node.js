const path = require('path');
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  //create  page will return new promise dur to the async nature of file creation
  return new Promise((resolve, reject) => {
    //to create the page we need access to the blog post template
    const postTemplate = path.resolve('src/templates/postTemplate.js');

    //resolve the promise with a call to the graphql and pass the query
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: postTemplate,
            context: {
              pathSlug: path,
            },
          });
          resolve();
        });
      })
    );
  });
};
