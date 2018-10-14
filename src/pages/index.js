import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import Navigation from '../components/Navigation/index';

class Index extends React.Component {
  render() {
    return (
      <div style={{ color: `purple` }} id="outer-container">
        {/* <Header /> */}
        <Navigation
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
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
