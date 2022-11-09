import React from "react";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import image404 from "../assets/404.svg";
import Link from "next/link";
import Router from "../router/router";

const custom$04 = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <Image
        alt="Vercel logo"
        src={image404}
        width={1000}
        height={1000}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <p>
        You can return to homepage by clicking
        <Link href={Router.home.url}> here</Link>
      </p>
    </Layout>
  );
};

export default custom$04;
