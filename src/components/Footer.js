import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faTwitter, faLinkedin);

const FooterSection = styled.footer`
  position: absolute;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 25px;
  left: 0;
  right: 0;

  a {
    border: none;
    width: 50px;
    min-width: 50px;
    height: 50px;
    border-radius: 25px;
    cursor: pointer;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: center;
    margin: 5px;
    background: #000;
    flex-direction: row;
    color: white;
    text-decoration: none;
    transition: all 0.3s;

    &[aria-label*='Twitter']:hover {
      background: #25a8e0;
    }
    &[aria-label*='Github']:hover {
      background: #a9d9ed;
    }
    &[aria-label*='Linkedin']:hover {
      background: #0d7bb7;
    }
  }
`;
class Footer extends React.Component {
  render() {
    return (
      <FooterSection>
        <div>
          <a
            href="https://twitter.com/malroun1"
            target="blank"
            aria-label="Twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              style={{
                fill: 'currentcolor',
                height: '22px',
                width: '22px',
              }}
            />
          </a>
          <a
            href="https://github.com/gabroun"
            target="blank"
            aria-label="Github"
          >
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
            href="https://www.linkedin.com/in/malik-elgabroun/"
            target="blank"
            aria-label="Linkedin"
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
      </FooterSection>
    );
  }
}

export default Footer;
