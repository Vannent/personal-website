import { Button } from "@material-ui/core";
import React from "react";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/HeroBanner.module.scss";

const HeroBanner = () => {
  const { showTheme, homeRef } = useStateContext();
  return (
    <div className={showTheme ? styles.containerLight : styles.containerDark}>
      <div className={styles.content}>
        <h3 className={styles.greet}>Hello, my name is</h3>
        <h1 className={styles.name}>Roberto Cedeno</h1>
        <h2 className={styles.slogan}>and I build things for the web.</h2>
        <p className={styles.paragraph}>
          I am a software engineer based in{" "}
          <b className={styles.accent}>San Francisco, California.</b> I
          specialize in <b className={styles.accent}>front-end development.</b>{" "}
          I am currently focusing on growing my skills as a developer and{" "}
          <b className={styles.accent}>gathering experience.</b>
        </p>
        <Button variant="outlined">Learn More</Button>
      </div>
    </div>
  );
};

export default HeroBanner;
