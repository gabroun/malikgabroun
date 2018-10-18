import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

class Index extends React.Component {
  render() {
    return (
      <div style={{ color: `purple` }}>
        <Header />
        <div id="page-wrap">
          <Link to="/about">About</Link>
          <h1>Hello Gatsby!!!</h1>
          <p>What a world.</p>
        </div>
      </div>
    );
  }
}

export default Index;
