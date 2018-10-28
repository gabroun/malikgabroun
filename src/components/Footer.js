import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faTwitter, faLinkedin);

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <a className="" href="https://twitter.com/malroun1" target="blank">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{
                fill: 'currentcolor',
                height: '22px',
                width: '22px',
              }}
            />
          </a>
          <a className="" href="https://github.com/gabroun" target="blank">
            <FontAwesomeIcon
              icon={faGithub}
              style={{
                fill: 'currentcolor',
                height: '22px',
                width: '22px',
              }}
            />
          </a>
          <a
            className=""
            href="https://www.linkedin.com/in/malik-elgabroun/"
            target="blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                fill: 'currentcolor',
                height: '22px',
                width: '22px',
              }}
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
