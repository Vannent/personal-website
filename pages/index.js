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
import { useStateContext } from "../context/StateContext";

const Layout = ({ children }) => {
  const { showTheme } = useStateContext();
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
      {showTheme ? (
        <style jsx global>{`
          html,
          body {
            background: #d2d3d3;
          }
        `}</style>
      ) : (
        <style jsx global>{`
          html,
          body {
            background: #2d3032;
          }
        `}</style>
      )}
    </>
  );
};

export default Layout;
