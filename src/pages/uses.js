import Layout from "@components/Layout";
import React from "react";
import { ThemeProvider } from "styled-components";

import styled from "styled-components";
import theme from "@styles/theme";
import { StaticImage } from "gatsby-plugin-image";

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

  div {
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
  return (
    <ThemeProvider theme={theme}>
      <Layout title="Uses | Malik Elgabroun's Website" pathSlug="/uses/">
        <Container>
          <div className="container-image">
            <div>
              <StaticImage
                src="../resources/setup-dark.jpeg"
                alt="setup with LED background"
                placeholder="blurred"
                objectFit="contain"
                formats={["auto", "webp"]}
              />

              <span>Desk setup with LED</span>
            </div>
            <div>
              <StaticImage
                src="../resources/setup-light.jpeg"
                alt="setup without LED background"
                placeholder="blurred"
                objectFit="contain"
                formats={["auto", "webp"]}
              />
              <span>Desk setup without LED</span>
            </div>
          </div>
          <div className="container-content">
            <h2>Desk Setup</h2>
            <div>
              <ul>
                <li>
                  <div>
                    My main monitor is a{" "}
                    <span>
                      <a href="https://amzn.to/32y1NXb" target="blank">
                        27&quot; Samsung
                      </a>
                      <StaticImage
                        src="../resources/amazonLogo.svg"
                        alt="amazon logo"
                        placeholder="blurred"
                        objectFit="contain"
                      />{" "}
                    </span>
                    curved LED monitor.
                  </div>
                </li>
                <li>
                  <div>
                    To my left I use a vertical{" "}
                    <span>
                      <a href="https://amzn.to/3yTGXNM" target="blank">
                        22&quot; Dell
                      </a>
                      <StaticImage
                        src="../resources/amazonLogo.svg"
                        alt="amazon logo"
                        placeholder="blurred"
                        objectFit="contain"
                      />{" "}
                    </span>
                    monitor.
                  </div>
                </li>
                <li>
                  <div>
                    To my right I run a MacBook Pro 2015 as a work laptop nested
                    on a{" "}
                    <span>
                      <a href="https://amzn.to/3yWntbj" target="blank">
                        MOSISO Vertical Laptop Stand
                      </a>
                      <StaticImage
                        src="../resources/amazonLogo.svg"
                        alt="amazon logo"
                        placeholder="blurred"
                        objectFit="contain"
                      />
                    </span>
                    .
                  </div>
                </li>
                <li>
                  <div>
                    The keyboard ⌨️ I use is a bluetooth{" "}
                    <span>
                      <a href="https://amzn.to/3HodcYP" target="blank">
                        OMOTON
                      </a>
                      <StaticImage
                        src="../resources/amazonLogo.svg"
                        alt="amazon logo"
                        placeholder="blurred"
                        objectFit="contain"
                      />{" "}
                    </span>
                    keyboard.
                  </div>
                </li>
                <li>
                  <div>
                    The mouse I use ia an{" "}
                    <span>
                      <a href="https://amzn.to/3sphSJA" target="blank">
                        Apple trackpad
                      </a>
                      <StaticImage
                        src="../resources/amazonLogo.svg"
                        alt="amazon logo"
                        placeholder="blurred"
                        objectFit="contain"
                      />
                    </span>
                    .
                  </div>
                </li>
                <li>
                  <div>
                    The keyboard and mouse rest pad I use is{" "}
                    <span>
                      <a href="https://amzn.to/3svqqi3" target="blank">
                        Silica Gel Wrist Rest
                      </a>
                      <StaticImage
                        src="../resources/amazonLogo.svg"
                        alt="amazon logo"
                        placeholder="blurred"
                        objectFit="contain"
                      />{" "}
                    </span>
                    support cushion with memory foam.
                  </div>
                </li>
                <li>
                  <div>
                    For my main monitor I use{" "}
                    <span>
                      <a href="https://amzn.to/3GZ8kci" target="blank">
                        BONTEC Wood Monitor Stand Riser
                      </a>
                      <StaticImage
                        src="../resources/amazonLogo.svg"
                        alt="amazon logo"
                        placeholder="blurred"
                        objectFit="contain"
                      />{" "}
                    </span>
                    which gives me a 2 tier shelfs with cable management on the
                    side.
                  </div>
                </li>
              </ul>
            </div>
            <h2>Other Gear</h2>
            <div>
              <ul>
                <li>
                  <div>
                    For backup I use{" "}
                    <span>
                      <a href="https://amzn.to/33TQOYJ" target="blank">
                        LaCie Rugged Mini
                      </a>
                      <StaticImage
                        src="../resources/amazonLogo.svg"
                        alt="amazon logo"
                        placeholder="blurred"
                        objectFit="contain"
                      />{" "}
                    </span>
                    1 TB to backup my projects and files.
                  </div>
                </li>
                <li>
                  <div>
                    For the background light I use for my desk is
                    <span>
                      <a href="https://amzn.to/3stn6E5" target="blank">
                        Govee LED Strip Lights
                      </a>
                      <StaticImage
                        src="../resources/amazonLogo.svg"
                        alt="amazon logo"
                        placeholder="blurred"
                        objectFit="contain"
                      />
                    </span>
                    .
                  </div>
                </li>
                <li>
                  <div>
                    For time management ⏳ with pomodoro technique I use{" "}
                    <span>
                      <a href="https://amzn.to/3Jd66YE" target="blank">
                        Bellaware Hourglass Sand Timer
                      </a>
                      <StaticImage
                        src="../resources/amazonLogo.svg"
                        alt="amazon logo"
                        placeholder="blurred"
                        objectFit="contain"
                      />{" "}
                    </span>
                    which gives me a 60 minutes interval.
                  </div>
                </li>
                <li>
                  <div>
                    As for cable management I use a combination of{" "}
                    <span>
                      <a href="https://amzn.to/3H7Gaff" target="blank">
                        Cable Clips
                      </a>
                      <StaticImage
                        src="../resources/amazonLogo.svg"
                        alt="amazon logo"
                        placeholder="blurred"
                        objectFit="contain"
                      />{" "}
                    </span>
                    to manage cable on desk and{" "}
                    <span>
                      <a href="https://amzn.to/3svIZmk" target="blank">
                        D-Line Cable Tidy Box
                      </a>
                      <StaticImage
                        src="../resources/amazonLogo.svg"
                        alt="amazon logo"
                        placeholder="blurred"
                        objectFit="contain"
                      />{" "}
                    </span>
                    to conceal cables under the desk.
                  </div>
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
