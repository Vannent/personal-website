import Head from "next/head";
import React from "react";
import { Header, HeroBanner } from "../components";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Roberto Cedeno</title>
      </Head>
      <header>
        <Header />
      </header>
      <HeroBanner />
    </>
  );
};

export default Layout;
