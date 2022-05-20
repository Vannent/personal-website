import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.scss";
import LogoLight from "../assets/logolightmode.png";
import LogoDark from "../assets/logodarkmode.png";
import { Button, IconButton } from "@material-ui/core";
import { Brightness1, WbSunny } from "@material-ui/icons";
import { useStateContext } from "../context/StateContext";

const Header = () => {
  const {
    showTheme,
    setShowTheme,
    handleAboutClick,
    handleHomeClick,
    handleContactClick,
    handleProjectsClick,
    homeRef,
  } = useStateContext();
  return (
    <div
      className={showTheme ? styles.containerLight : styles.containerDark}
      ref={homeRef}
    >
      <div className={styles.logoContainer}>
        {showTheme ? (
          <Image width={85} height={91} src={LogoLight} alt="logo" />
        ) : (
          <Image width={85} height={91} src={LogoDark} alt="logo" />
        )}
      </div>
      <div className={styles.leftContent}>
        <Button className={styles.link} onClick={handleHomeClick}>
          home
        </Button>
        <Button className={styles.link} onClick={handleAboutClick}>
          about
        </Button>
        <Button className={styles.link} onClick={handleProjectsClick}>
          projects
        </Button>
        <Button className={styles.link} onClick={handleContactClick}>
          contact
        </Button>
        <IconButton onClick={() => setShowTheme((prev) => !prev)}>
          {showTheme ? <Brightness1 /> : <WbSunny />}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
