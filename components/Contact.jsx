import React from "react";
import styles from "../styles/Contact.module.scss";
import { useStateContext } from "../context/StateContext";
import Link from "next/link";

const Contact = () => {
  const { showTheme, contactRef } = useStateContext();
  return (
    <div
      className={showTheme ? styles.containerLight : styles.containerDark}
      ref={contactRef}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.container}>
          <div className={styles.emailTitle}>Email</div>
          <div className={styles.email}>erobced@gmail.com</div>
          <div className={styles.emailTitle}>Socials</div>
          <Link href="https://www.linkedin.com/in/erobced/">
            <div className={styles.link}>LinkedIn</div>
          </Link>
          <Link href="https://github.com/Vannent">
            <div className={styles.link}>Github</div>
          </Link>
        </div>
        <div className={styles.name}>robced</div>
      </div>
    </div>
  );
};

export default Contact;
