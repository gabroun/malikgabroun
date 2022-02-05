const config = require("./content/meta/config");
require("dotenv").config();

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://malikgabroun.com/",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const gatsbyRemarkPlugins = [
  "gatsby-remark-code-titles",
  {
    resolve: "gatsby-remark-images",
    options: {
      classPrefix: "language-",
      inlineCodeMarker: null,
      maxWidth: 590,
    },
  },
  "gatsby-remark-autolink-headers",
];

module.exports = {
  siteMetadata: {
    author: config.authorName,
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
    pathPrefix: config.pathPrefix,
    twitter: config.authorTwitterAccount,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/components/Layout/index.js"),
        },
        gatsbyRemarkPlugins,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `book-notes`,
        path: `${__dirname}/content/book-notes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/resources`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thumbnails`,
        path: `${__dirname}/src/resources/images/thumbnails`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/content/portfolio`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKINGID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icons: [
          {
            src: "/icons/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/icons/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/icons/favicon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/favicon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `tracedSVG`,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   query: `
    //   {
    //     site {
    //       siteMetadata {
    //           siteUrl
    //       }
    //     }
    //     allSitePage {
    //       edges {
    //         node {
    //           path
    //         }
    //       }
    //     }
    //   }
    //   `,
    //   serialize: ({ site, allSitePage }) => {
    //     allSitePage.edges.map(edge => {
    //       return {
    //         url: site.siteMetadata.siteUrl + edge.node.path,
    //         changefreq: `daily`,
    //         priority: 0.7,
    //       };
    //     });
    //   },
    // },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://malikgabroun.com/`,
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
        disable: true,
      },
    },
    `gatsby-plugin-mdx-embed`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fira Mono\:400,700`,
          `source sans pro\:400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
