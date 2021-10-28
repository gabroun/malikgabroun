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
                    <a href="https://amzn.to/2MMmTcG">27&quot; Samsung</a>{" "}
                    curved LED monitor.
                  </p>
                </li>
                <li>
                  <p>
                    To my left I use a vertical{" "}
                    <a href="https://amzn.to/30dA0qr">22&quot; Dell</a> monitor.
                  </p>
                </li>
                <li>
                  <p>
                    To my right I run a MacBook Pro 2015 as a work laptop nested
                    on a{" "}
                    <a href="https://amzn.to/3qdBV8V">
                      MOSISO Vertical Laptop Stand
                    </a>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    The keyboard I use is a bluetooth{" "}
                    <a href="https://amzn.to/30dyHb3">OMOTON</a> keyboard.
                  </p>
                </li>
                <li>
                  <p>
                    The mouse I use ia an
                    <a href="https://amzn.to/3kJTo85">Apple trackpad</a>.
                  </p>
                </li>
                <li>
                  <p>
                    The keyboard and mouse rest pad I use is{" "}
                    <a href="https://amzn.to/3beE9kj">Silica Gel Wrist Rest</a>{" "}
                    support cushion with memory foam.
                  </p>
                </li>
                <li>
                  <p>
                    For my main monitor I use{" "}
                    <a href="https://amzn.to/3rhmC0k">
                      BONTEC Wood Monitor Stand Riser
                    </a>{" "}
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
                    <a href="https://amzn.to/3bimgRO">LaCie Rugged Mini</a> 1 TB
                    to backup my projects and files.
                  </p>
                </li>
                <li>
                  <p>
                    I listen to
                    <a href="https://amzn.to/30aBeTk">
                      TaoTronics Bluetooth
                    </a>{" "}
                    headphones all day which come with active noise cancelling
                    feature.
                  </p>
                </li>
                <li>
                  <p>
                    For the background light I use for my desk is
                    <a href="https://amzn.to/2Ppf11F">Govee LED Strip Lights</a>
                  </p>
                </li>
                <li>
                  <p>
                    For time management with pomodoro technique I use{" "}
                    <a href="https://amzn.to/2OoZU89">
                      Bellaware Hourglass Sand Timer
                    </a>{" "}
                    which gives me a 45 minutes interval.
                  </p>
                </li>
                <li>
                  <p>
                    As for cable management I use a combination of{" "}
                    <a href="https://amzn.to/30dBIIp">Cable Clips </a> to manage
                    cable on desk and{" "}
                    <a href="https://amzn.to/3rhCakU">D-Line Cable Tidy Box</a>{" "}
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
