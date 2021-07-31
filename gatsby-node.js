const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createRedirect } = actions;
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
            images
            type
            redirects
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts ', result.errors);
  }

  const pages = result.data.allMdx.nodes;

  pages.forEach((page) => {
    const { redirects } = page.frontmatter;
    if (redirects) {
      createRedirect({
        fromPath: redirects[0],
        toPath: redirects[1],
        redirectInBrowser: true,
        isPermanent: true,
      });
    }
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

exports.onCreateWebpackConfig = ({stage, actions }) => {

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@static": path.resolve(__dirname, "static"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@resources": path.resolve(__dirname, "src/resources")
      }
    }
  });

  if (stage === 'develop') {
		actions.setWebpackConfig({
			devtool: 'cheap-module-source-map'
		});
	}
}
