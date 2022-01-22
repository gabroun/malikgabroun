const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createRedirect } = actions;
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
            featured_image
            type
            redirects
            publish
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create posts ", result.errors);
  }

  const pages = result.data.allMdx.nodes;

  pages.forEach((page) => {
    const { redirects, publish } = page.frontmatter;

    // if (redirects) {
    //   createRedirect({
    //     fromPath: redirects[0],
    //     toPath: redirects[1],
    //     redirectInBrowser: true,
    //     isPermanent: true,
    //   });
    // }
    if (publish) {
      if (page.frontmatter.type === "portfolio") {
        actions.createPage({
          path: page.frontmatter.path,
          component: require.resolve("./src/templates/projectTemplate.js"),
          context: {
            pathSlug: page.frontmatter.path,
            image: `resources/${page.frontmatter.featured_image}`,
          },
        });
      } else if (page.frontmatter.type === "book-notes") {
        actions.createPage({
          path: page.frontmatter.path,
          component: require.resolve("./src/templates/bookTemplate.js"),
          context: {
            pathSlug: page.frontmatter.path,
            image: `resources/${page.frontmatter.featured_image}`,
          },
        });
      } else {
        actions.createPage({
          path: page.frontmatter.path,
          component: require.resolve("./src/templates/postTemplate.js"),
          context: {
            pathSlug: page.frontmatter.path,
            image: `resources/${page.frontmatter.featured_image}`,
          },
        });
      }
    }
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@static": path.resolve(__dirname, "static"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@resources": path.resolve(__dirname, "src/resources"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
      // modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });

  if (stage === "develop") {
    actions.setWebpackConfig({
      devtool: "cheap-module-source-map",
    });
  }
};
