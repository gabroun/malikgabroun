import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout/index';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Layout>
          <h1>blog component</h1>
          <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
          <p>
            What do I like to do? Lots of course but definitely enjoy building
            websites.
          </p>
        </Layout>
      </div>
    );
  }
}

export default Blog;
