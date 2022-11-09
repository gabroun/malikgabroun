import Image from "next/image";

import { LinkButton } from "../components/shared/button/Button";
import programming from "../assets/programming.svg";
import Layout from "../components/layout/Layout";
import { MainHeader, MainSubHeader } from "./index.style";
import Router from "../router/router";

const Home = () => {
  return (
    <Layout>
      <Image
        alt="Man coding"
        src={programming}
        width={600}
        height={600}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <MainHeader>Hello My name is Malik</MainHeader>
      <MainSubHeader>
        and I&apos;m a London-based Front end Developer
      </MainSubHeader>
      <LinkButton label="About me" link={Router.about.url} />
    </Layout>
  );
};

export default Home;
