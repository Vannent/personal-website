import Head from "next/head";
import React from "react";
import {
  About,
  Contact,
  Header,
  HeroBanner,
  Navbar,
  Projects,
} from "../components";

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
      <About />
      <Projects />
      <Contact />
      <Navbar />
    </>
  );
};

export default Layout;
