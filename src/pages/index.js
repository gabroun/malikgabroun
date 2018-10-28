import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout/index';
import Footer from '../components/Footer';
import bg from '../resources/images/bg.jpg';
import '../styles/styles.css';
class Index extends React.Component {
  render() {
    return (
      <div
        style={
          {
            /* backgroundImage: 'url(' + bg + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)',
          position: 'fixed',
          height: 'auto',
          width: '100%',
          minHeight: '100%', */
          }
        }
      >
        {/* <Header /> */}
        <Layout>
          <div className="main-content">
            <h1>Hello My name is Malik</h1>
            <p> and I'm a London-based Front end Developer</p>
          </div>
        </Layout>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Index;
