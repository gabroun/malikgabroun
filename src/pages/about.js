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
                interval={'2016 – 2018'}
                title={'Lorem'}
                subtitle={'Ipsum'}
                position="right"
              >
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Event>
              <Event
                interval={'2015 – 2016'}
                title={'Lorem'}
                subtitle={'Ipsum'}
                position="left"
              >
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Event>
            </Timeline>
          </Fragment>
        </div>
      </div>
    );
  }
}

export default About;
