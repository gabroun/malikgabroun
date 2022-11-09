import Layout from "../components/layout/Layout";
import {
  AboutContainer,
  AboutHeader,
  AboutMessage,
  HeadDrawnImage,
} from "./about.style";
import HeadShot from "../assets/headShot.png";

const About = () => {
  return (
    <Layout>
      <AboutContainer>
        <div>
          <AboutHeader>About Me</AboutHeader>
          <AboutMessage>Hello, my name is Malik Elgabroun.</AboutMessage>
          <AboutMessage>
            I&apos;m a Front end Developer based in London 🇬🇧. Currently Working
            as a Front end Developer at Policy Expert.
          </AboutMessage>
          <AboutMessage>
            I enjoy writing software and building application, and currently I
            get to develop using React, Vue, TypeScript and many more.
          </AboutMessage>
          <AboutMessage>
            My hobbies are doing sports from playing football, running and
            cycling. Also I like travelling to new places when the opportunity
            arises.
          </AboutMessage>
        </div>
        <HeadDrawnImage
          src={HeadShot}
          alt="drawn art"
          height={250}
          width={250}
        />
      </AboutContainer>
    </Layout>
  );
};

export default About;
