import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

class About extends React.Component {
  render() {
    return (
      <div style={{ color: `red` }}>
        <Header />
        <h1>About Gatsby</h1>
        <p>Such wow. Very React.</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default About;
