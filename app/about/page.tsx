import React from "react";
import AboutHero from "../components/AboutHero/AboutHero";
import Works from "../components/Works/Works";

import styles from "./about.module.scss";
import GetInTouch from "../components/GetInTouch/GetInTouch";
const About = () => {
  return (
    <div className={styles.about}>
      <AboutHero />
      <Works />
      <GetInTouch />
    </div>
  );
};

export default About;
