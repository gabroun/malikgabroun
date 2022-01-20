import * as S from "@styles/about";

import React, { Fragment } from "react";

import Carousel from "@components/Carousel";
import ContactForm from "@components/ContactForm";
import Layout from "@components/Layout";
import Socials from "@components/Socials";
import { ThemeProvider } from "styled-components";
import headImg from "../resources/headShot.png";
import theme from "@styles/theme";

class About extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout title="About | Malik Elgabroun's Website" pathSlug="/about/">
          <div className="main-content">
            <Fragment>
              <S.AboutMe className="about-me">
                <div className="intro">
                  <h3>About Me</h3>
                  <p>Hello, my name is Malik Elgabroun.</p>

                  <p>
                    I’m a Front end Developer based in London 🇬🇧. Currently
                    Working as a Front end Developer at Redbox Digital.
                  </p>

                  <p>
                    I enjoy writing software and building application, and
                    currently I get to develop using React, Vue, TypeScript and
                    many more.
                  </p>

                  <p>
                    My hobbies are doing sports from playing football, running
                    and cycling. Also I like travelling to new places when the
                    opportunity arises.
                  </p>
                </div>
                <img src={headImg} alt="drawn art" />
              </S.AboutMe>
              <Carousel />
              <S.ContactUs>
                <div className="social">
                  <h1>Get In Touch</h1>
                  <p>
                    Want to ask a question, have a chat or ask about work or
                    anything else? Send me a message! and I will try to
                    responsed as quickly as I can.
                  </p>
                  <Socials />
                </div>
                <div className="contact-form">
                  <ContactForm />
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
