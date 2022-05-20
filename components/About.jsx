import Image from "next/image";
import React from "react";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/About.module.scss";
import photo from "../assets/image.jpg";

const About = () => {
  const { showTheme, aboutRef } = useStateContext();
  return (
    <div
      className={showTheme ? styles.containerLight : styles.containerDark}
      ref={aboutRef}
    >
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <h1 className={styles.title}>About</h1>
          <p className={styles.paragraph}>
            From the very moment I touched a computer, <b>I was hooked.</b> The
            possibility of learning anything was fascinating to my younger self.
            My innate curiosity to discover how things work has led me on quite
            the journey. I have always gravitated towards complicated concepts
            or ideas which initially brought me to Psychology but something was
            missing. In Software Engineering I found a thrilling feeling I had
            not felt before,{" "}
            <b>and that is when I knew that this was my passion.</b>
            <br></br>
            <br></br>
            <b>
              From the first {`"`}Hello, World!{`"`}
            </b>{" "}
            to now being able to create full-stack applications. What is even
            better is that I can use many of the skills I learned in Research
            and Psychology. Critical and analytical skills, innovation,
            adaptability, self-regulation, emotional intelligence, and
            open-mindedness.
          </p>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.imgContainer}>
            <Image src={photo} height="519" width="347" alt="photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
