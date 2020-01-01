exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
            images
            type
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts ', result.errors);
  }

  const pages = result.data.allMdx.nodes;

  pages.forEach(page => {
    if (page.frontmatter.type === 'portfolio') {
      actions.createPage({
        path: page.frontmatter.path,
        component: require.resolve('./src/templates/projectTemplate.js'),
        context: {
          pathSlug: page.frontmatter.path,
          image: `resources/${page.frontmatter.images}`,
        },
      });
    } else {
      actions.createPage({
        path: page.frontmatter.path,
        component: require.resolve('./src/templates/postTemplate.js'),
        context: {
          pathSlug: page.frontmatter.path,
          image: `resources/${page.frontmatter.images}`,
        },
      });
    }
  });
};
