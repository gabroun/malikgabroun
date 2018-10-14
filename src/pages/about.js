import React from 'react';
import { Link } from 'gatsby';

class About extends React.Component {
  render() {
    return (
      <div style={{ color: `red` }}>
        <h1>About Gatsby</h1>
        <p>Such wow. Very React.</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default About;
