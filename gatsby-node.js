const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  //create  page will return new promise due to the async nature of file creation
  return new Promise((resolve, reject) => {
    //to create the page we need access to the blog post template
    const postTemplate = path.resolve('src/templates/postTemplate.js');
    const projectTemplate = path.resolve('src/templates/projectTemplate.js');

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
                    type
                    images
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path;
          const image = node.frontmatter.images;
          if (node.frontmatter.type === 'portfolio') {
            createPage({
              path,
              component: projectTemplate,
              context: {
                pathSlug: path,
                image: `resources/${image}`,
              },
            });
            resolve();
          } else {
            createPage({
              path,
              component: postTemplate,
              context: {
                pathSlug: path,
                image: `resources/${image}`,
              },
            });
            resolve();
          }
        });
      })
    );
  });
};
