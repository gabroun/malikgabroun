import * as S from '../components/styles/about';

import { Event, Timeline } from '../components/Timeline';
import React, { Fragment } from 'react';

import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout';
import Socials from '../components/Socials'
import { ThemeProvider } from 'styled-components';
import le from '../../static/about/leicester.jpg';
import rb from '../../static/about/redbox.jpg';
import su from '../../static/about/surrey.png';
import theme from '../components/styles/theme';
import ur from '../../static/about/unirazak1.png';

class About extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout title="About">
          <div className="main-content">
            <Fragment>
              <Timeline>
                <Event
                  dates={'2016 – preset'}
                  title={'Front End Developer'}
                  subtitle={'Redbox Digital'}
                  logo={rb}
                  position="right"
                />
                <Event
                  dates={'2015 – 2016'}
                  title={'MSc Software Engineering'}
                  subtitle={'University of Leicester'}
                  position="left"
                  logo={le}
                />
                <Event
                  dates={'2014 – 2015'}
                  title={'MSc International Business Management'}
                  subtitle={'University of Surrey'}
                  position="right"
                  logo={su}
                />
                <Event
                  dates={'2010 – 2013'}
                  title={'BSc Information Technology'}
                  subtitle={'University Tun Abdul Razak'}
                  position="left"
                  logo={ur}
                />
              </Timeline>
              <S.ContactUs>
                <div className="social">
                  <h1>Get In Touch</h1>
                  <p>Want to ask a question, have a chat or ask about work or anything else? Send me a message! and I will try to responsed as quickly as I can.
                  </p>
                  <Socials/>
                </div>
                <div className="contact-form">
                <ContactForm/>
                </div>
              </S.ContactUs>
              
            </Fragment>
          </div>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default About;
