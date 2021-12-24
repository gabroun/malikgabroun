import Layout from "@components/Layout";
import React from "react";
import { ThemeProvider } from "styled-components";
import darkSetup from "../resources/setup-light.jpeg";
import lightSetup from "../resources/setup-dark.jpeg";
import styled from "styled-components";
import theme from "@components/styles/theme";

const Container = styled.div`
  .container {
    &-image {
      display: grid;
      justify-items: center;
      justify-content: center;
      grid-gap: 80px;
      margin-bottom: 40px;
      @media (min-width: 530px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 500px));
      }
    }
  }

  img {
    border-radius: 6px;
    margin-bottom: 0;
  }

  span {
    font-weight: 700;
    img {
      vertical-align: bottom;
    }
  }

  p {
    a {
      box-shadow: inset 0 -0.5rem 0 0 #f47c48;
      transition: box-shadow 0.2s, color 0.2s;
      &:hover {
        box-shadow: inset 0 -2.5rem 0 0 #f47c48;
        color: white;
      }
    }
  }
`;

const Uses = () => {
  const amazonLogo = require("@resources/amazonLogo.svg");
  return (
    <ThemeProvider theme={theme}>
      <Layout title="Uses | Malik Elgabroun's Website" pathSlug="/uses/">
        <Container>
          <div className="container-image">
            <div>
              <img src={lightSetup} alt="setup without LED background" />
              <span>Desk setup with LED</span>
            </div>
            <div>
              <img src={darkSetup} alt="setup with LED background" />
              <span>Desk setup without LED</span>
            </div>
          </div>
          <div className="container-content">
            <h2>Desk Setup</h2>
            <div>
              <ul>
                <li>
                  <p>
                    My main monitor is a{" "}
                    <span>
                      <a href="https://amzn.to/32y1NXb" target="blank">
                        27&quot; Samsung
                      </a>
                      <img src={amazonLogo} alt="amazon logo" />{" "}
                    </span>
                    curved LED monitor.
                  </p>
                </li>
                <li>
                  <p>
                    To my left I use a vertical{" "}
                    <span>
                      <a href="https://amzn.to/3yTGXNM" target="blank">
                        22&quot; Dell
                      </a>
                      <img src={amazonLogo} alt="amazon logo" />{" "}
                    </span>
                    monitor.
                  </p>
                </li>
                <li>
                  <p>
                    To my right I run a MacBook Pro 2015 as a work laptop nested
                    on a{" "}
                    <span>
                      <a href="https://amzn.to/3yWntbj" target="blank">
                        MOSISO Vertical Laptop Stand
                      </a>
                      <img src={amazonLogo} alt="amazon logo" />
                    </span>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    The keyboard ⌨️ I use is a bluetooth{" "}
                    <span>
                      <a href="https://amzn.to/3HodcYP" target="blank">
                        OMOTON
                      </a>
                      <img src={amazonLogo} alt="amazon logo" />{" "}
                    </span>
                    keyboard.
                  </p>
                </li>
                <li>
                  <p>
                    The mouse I use ia an{" "}
                    <span>
                      <a href="https://amzn.to/3sphSJA" target="blank">
                        Apple trackpad
                      </a>
                      <img src={amazonLogo} alt="amazon logo" />
                    </span>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    The keyboard and mouse rest pad I use is{" "}
                    <span>
                      <a href="https://amzn.to/3svqqi3" target="blank">
                        Silica Gel Wrist Rest
                      </a>
                      <img src={amazonLogo} alt="amazon logo" />{" "}
                    </span>
                    support cushion with memory foam.
                  </p>
                </li>
                <li>
                  <p>
                    For my main monitor I use{" "}
                    <span>
                      <a href="https://amzn.to/3GZ8kci" target="blank">
                        BONTEC Wood Monitor Stand Riser
                      </a>
                      <img src={amazonLogo} alt="amazon logo" />{" "}
                    </span>
                    which gives me a 2 tier shelfs with cable management on the
                    side.
                  </p>
                </li>
              </ul>
            </div>
            <h2>Other Gear</h2>
            <div>
              <ul>
                <li>
                  <p>
                    For backup I use{" "}
                    <span>
                      <a href="https://amzn.to/33TQOYJ" target="blank">
                        LaCie Rugged Mini
                      </a>
                      <img src={amazonLogo} alt="amazon logo" />{" "}
                    </span>
                    1 TB to backup my projects and files.
                  </p>
                </li>
                <li>
                  <p>
                    For the background light I use for my desk is
                    <span>
                      <a href="https://amzn.to/3stn6E5" target="blank">
                        Govee LED Strip Lights
                      </a>
                      <img src={amazonLogo} alt="amazon logo" />
                    </span>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    For time management ⏳ with pomodoro technique I use{" "}
                    <span>
                      <a href="https://amzn.to/3Jd66YE" target="blank">
                        Bellaware Hourglass Sand Timer
                      </a>
                      <img src={amazonLogo} alt="amazon logo" />{" "}
                    </span>
                    which gives me a 60 minutes interval.
                  </p>
                </li>
                <li>
                  <p>
                    As for cable management I use a combination of{" "}
                    <span>
                      <a href="https://amzn.to/3H7Gaff" target="blank">
                        Cable Clips
                      </a>
                      <img src={amazonLogo} alt="amazon logo" />{" "}
                    </span>
                    to manage cable on desk and{" "}
                    <span>
                      <a href="https://amzn.to/3svIZmk" target="blank">
                        D-Line Cable Tidy Box
                      </a>
                      <img src={amazonLogo} alt="amazon logo" />{" "}
                    </span>
                    to conceal cables under the desk.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default Uses;
