import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

import { Timeline, Event } from '../components/Timeline/index';

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-content">
          <Fragment>
            <Timeline>
              <Event
                dates={'2016 – preset'}
                title={'Front End Developer'}
                subtitle={'Redbox Digital'}
                position="right"
              >
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              </Event>
              <Event
                dates={'2015 – 2016'}
                title={'MSc Software Engineering'}
                subtitle={'Ipsum'}
                position="left"
              >
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              </Event>
              <Event
                dates={'2014 – 2015'}
                title={'MSc International Business Management'}
                subtitle={'Ipsum'}
                position="right"
              >
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              </Event>
              <Event
                dates={'2010 – 2013'}
                title={'BSc Information Technology'}
                subtitle={'Ipsum'}
                position="left"
              >
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              </Event>
            </Timeline>
          </Fragment>
        </div>
      </div>
    );
  }
}

export default About;
