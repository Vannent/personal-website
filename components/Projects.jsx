import React from "react";
import TinderCard from "react-tinder-card";
import { useStateContext } from "../context/StateContext";
import styles from "../styles/Projects.module.scss";
import chatter from "../assets/chatter.png";
import chatter2 from "../assets/chatter2.png";
import bookerei from "../assets/bookerei.png";
import bookerei2 from "../assets/bookerei2.png";
import searchio from "../assets/searchio.png";
import searchio2 from "../assets/searchio2.png";
import Image from "next/image";

const Projects = () => {
  const { showTheme, projectsRef } = useStateContext();
  return (
    <div
      className={showTheme ? styles.containerLight : styles.containerDark}
      ref={projectsRef}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>Projects</h1>
        <h3 className={styles.featured}>Featured Projects</h3>
        <div className={styles.blink}>Swipe</div>
        <TinderCard
          className={styles.project}
          preventSwipe={["up", "down", "left", "right"]}
        >
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>Chatter</h3>
            <p className={styles.projectParagraph}>
              A real-time chatting application that utilizes Stream Chat API to
              handle messages with the ability to create channels.
            </p>
            <div className={styles.languages}>
              <div>Node.js</div>
              <div>React.js</div>
              <div>Express.js</div>
            </div>
          </div>
          <div className={styles.projectImageWrapper}>
            <div className={styles.firstImg}>
              <Image src={chatter} layout={"intrinsic"} alt="project image" />
            </div>
            <div className={styles.secondImg}>
              <Image src={chatter} layout={"intrinsic"} alt="project image" />
            </div>
          </div>
        </TinderCard>
        <TinderCard className={styles.project} preventSwipe={["up", "down"]}>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>Bookerei</h3>
            <p className={styles.projectParagraph}>
              An e-commerce application that allows purchases with Stripe
              implementation, using Sanity for the database of books.
            </p>
            <div className={styles.languages}>
              <div>Next.js</div>
              <div>React.js</div>
              <div>SCSS</div>
            </div>
          </div>
          <div className={styles.projectImageWrapper}>
            <div className={styles.firstImg}>
              <Image src={bookerei} layout={"intrinsic"} alt="project image" />
            </div>
            <div className={styles.secondImg}>
              <Image src={bookerei2} layout={"intrinsic"} alt="project image" />
            </div>
          </div>
        </TinderCard>
        <TinderCard className={styles.project} preventSwipe={["up", "down"]}>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>Searchio</h3>
            <p className={styles.projectParagraph}>
              A minimal search engine that utilizes Google{"'"}s API to render
              searches for images and sites. Along with widgets that display
              time and the weather.
            </p>
            <div className={styles.languages}>
              <div>Next.js</div>
              <div>React.js</div>
              <div>SCSS</div>
            </div>
          </div>
          <div className={styles.projectImageWrapper}>
            <div className={styles.firstImg}>
              <Image src={searchio} layout={"intrinsic"} alt="project image" />
            </div>
            <div className={styles.secondImg}>
              <Image src={searchio2} layout={"intrinsic"} alt="project image" />
            </div>
          </div>
        </TinderCard>
      </div>
    </div>
  );
};

export default Projects;
