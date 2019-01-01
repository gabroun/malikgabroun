import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import icon32 from '../../static/icons/favicon-32x32.png';
import icon16 from '../../static/icons/favicon-16x16.png';
import icon192 from '../../static/icons/favicon-192x192.png';

const query = graphql`
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
`;

const Seo = ({ meta, image, title, description, pathSlug }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { siteMetadata } = data.site;
        const metaDescription = description || siteMetadata.description;
        const url = pathSlug
          ? `${siteMetadata.siteUrl}${pathSlug}/`
          : `${siteMetadata.siteUrl}`;
        const metaImage = image ? `${siteMetadata.siteUrl}/${image}` : null;
        const metadata = meta || {};

        return (
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            {...(title
              ? {
                  titleTemplate: `%s - ${siteMetadata.title}`,
                  title,
                }
              : {
                  title: siteMetadata.title,
                })}
            meta={[
              {
                name: 'google-site-verification',
                content: 'rdHghgE19nXaz19_OXvkv_MuEOSHl8lQPesWUmp21oU',
              },
              {
                name: 'description',
                content: metaDescription,
              },
              {
                name: 'keywords',
                content: 'metaDescription',
              },
              {
                property: 'og:url',
                content: url,
              },
              {
                property: 'og:title',
                content: title || siteMetadata.title,
              },
              {
                name: 'og:description',
                content: metaDescription,
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: siteMetadata.twitter,
              },
              {
                name: 'twitter:title',
                content: title || siteMetadata.title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ]
              .concat(
                metaImage
                  ? [
                      { property: 'og:image', content: metaImage },
                      { name: 'twitter:image', content: metaImage },
                    ]
                  : []
              )
              .concat(metadata)}
            link={[
              {
                rel: 'icon',
                type: 'image/png',
                href: icon16,
                sizes: '16x16',
              },
              {
                rel: 'icon',
                type: 'image/png',
                href: icon32,
                sizes: '32x32',
              },
              {
                rel: 'apple-touch-icon',
                type: 'image/png',
                href: icon192,
                sizes: '192x192',
              },
            ]}
          />
        );
      }}
    />
  );
};

export default Seo;
