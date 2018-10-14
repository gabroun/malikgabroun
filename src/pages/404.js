import React from 'react';
import { Link } from 'gatsby';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Page not found</h1>
        <Link to="/">← Go Home</Link>
      </div>
    );
  }
}

export default NotFoundPage;
