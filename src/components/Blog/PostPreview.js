import React from 'react';
import { Link } from 'gatsby';

const PostPreview = ({ hit: { node: post } }) => {
  console.log(post);
  const { title, date, path } = post.frontmatter;
  return (
    <div>
      <h3>
        <Link style={{ boxShadow: `none` }} to={path}>
          {title}
        </Link>
      </h3>
      <small>{date}</small>
      {/* <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        /> */}
    </div>
  );
};

export default PostPreview;
