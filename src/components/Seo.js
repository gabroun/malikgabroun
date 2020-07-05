import Helmet from 'react-helmet';
import React from 'react';

import useSiteMetadata from '../hooks/useSiteMetadata';

import icon16 from '../../static/icons/favicon-16x16.png';
import icon192 from '../../static/icons/favicon-192x192.png';
import icon32 from '../../static/icons/favicon-32x32.png';
import icon512 from '../../static/icons/favicon-512x512.png';

const Seo = ({ meta, image, title, description, pathSlug, keywords }) => {
  const metaDescription = description || useSiteMetadata().description;
  const url = pathSlug
    ? `${useSiteMetadata().siteUrl}${pathSlug}/`
    : `${useSiteMetadata().siteUrl}`;
  const metaImage = image ? `${useSiteMetadata().siteUrl}/${image.src}` : null;

  const metadata = meta || {};

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      {...(title
        ? {
            titleTemplate: `%s - ${useSiteMetadata().title}`,
            title,
          }
        : {
            title: useSiteMetadata().title,
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
          content: keywords ? keywords.join() : 'metaDescription',
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:title',
          content: title || useSiteMetadata().title,
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
          content: useSiteMetadata().twitter,
        },
        {
          name: 'twitter:title',
          content: title || useSiteMetadata().title,
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
          rel: 'canonical',
          href: url,
        },
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
        {
          rel: 'apple-touch-startup-image',
          type: 'image/png',
          href: icon512,
          sizes: '512x512',
        },
      ]}
    />
  );
};

export default Seo;
