import { Helmet } from "react-helmet";
import React, { memo } from "react";

interface SchemaOrgProps {
  author: string;
  canonicalUrl: string;
  datePublished: Date | boolean;
  defaultTitle: string;
  description: string;
  image: string | null;
  isBlogPost: boolean;
  baseUrl: string;
  organization?: string;
  title: string;
  url: string;
  dateModified: Date;
}

export default memo(
  ({
    author,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    isBlogPost,
    baseUrl,
    organization,
    title,
    url,
    dateModified,
  }: SchemaOrgProps) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url,
        name: title,
        alternateName: defaultTitle,
      },
    ];

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": url,
                  name: title,
                  image,
                },
              },
            ],
          },
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url,
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
              "@type": "ImageObject",
              url: image,
            },
            description,
            author: {
              "@type": "Person",
              name: author,
            },
            publisher: {
              "@type": "Organization",
              url: baseUrl,
              name: defaultTitle,
            },
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": baseUrl,
            },
            datePublished,

            ...(dateModified && {
              dateModified,
            }),
          },
        ]
      : baseSchema;

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    );
  }
);
