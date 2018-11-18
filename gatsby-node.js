const path = require('path');
// const { createFilePath } = require(`gatsby-source-filesystem`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  //create  page will return new promise dur to the async nature of file creation
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
          // console.log('node is : ', node.frontmatter.type);
          const path = node.frontmatter.path;
          if (node.frontmatter.type === 'portfolio') {
            createPage({
              path,
              component: projectTemplate,
              context: {
                pathSlug: path,
              },
            });
            resolve();
          } else {
            createPage({
              path,
              component: postTemplate,
              context: {
                pathSlug: path,
              },
            });
            resolve();
          }
        });
      })
    );
  });
};

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = createFilePath({ node, getNode, basePath: `pages` });
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     });
//     // console.log(createFilePath({ node, getNode, basePath: `pages` }));
//   }
// };
