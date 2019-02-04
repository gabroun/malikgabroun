import React, { Fragment } from 'react';
import rb from '../../static/about/redbox.jpg';
import le from '../../static/about/leicester.jpg';
import ur from '../../static/about/unirazak1.png';
import su from '../../static/about/surrey.png';
import Layout from '../components/Layout';
import { Timeline, Event } from '../components/Timeline';
import { ThemeProvider } from 'styled-components';
import theme from '../components/styles/theme';

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
                  >
                    HTML, CSS (Less/SASS), Javascript (jQuery, Knockout) PHP
                    (Magento), XML, MySQL, Docker
                  </Event>
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
              </Fragment>
            </div>

        </Layout>
      </ThemeProvider>
    );
  }
}

export default About;
