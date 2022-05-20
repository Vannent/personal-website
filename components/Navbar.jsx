import React from "react";
import styles from "../styles/Navbar.module.scss";
import { useStateContext } from "../context/StateContext";
import { Button, IconButton } from "@material-ui/core";

const Navbar = () => {
  const {
    handleAboutClick,
    handleHomeClick,
    handleContactClick,
    handleProjectsClick,
  } = useStateContext();
  return (
    <div className={styles.container}>
      <IconButton className={styles.circle} onClick={handleHomeClick} />
      <IconButton className={styles.circle} onClick={handleAboutClick} />
      <IconButton className={styles.circle} onClick={handleProjectsClick} />
      <IconButton className={styles.circle} onClick={handleContactClick} />
    </div>
  );
};

export default Navbar;
