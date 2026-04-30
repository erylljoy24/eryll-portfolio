"use client";

import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Eryll.dev</div>

      {/* Desktop Menu */}
      <ul className={styles.menu}>
        <li><a href="#about" onClick={() => scrollTo("about")}>About</a></li>
        <li><a href="#experience" onClick={() => scrollTo("experience")}>Experience</a></li>
        <li><a href="#projects" onClick={() => scrollTo("projects")}>Projects</a></li>
        <li><a href="#skills" onClick={() => scrollTo("skills")}>Skills</a></li>
        <li><a href="#education" onClick={() => scrollTo("education")}>Education</a></li>
      </ul>

      {/* Hamburger */}
      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span className={`${styles.bar} ${isOpen ? styles.bar1Open : ""}`} />
        <span className={`${styles.bar} ${isOpen ? styles.barHide : ""}`} />
        <span className={`${styles.bar} ${isOpen ? styles.bar3Open : ""}`} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className={styles.mobileMenu}>
          <li><a href="#about" onClick={() => scrollTo("about")}>About</a></li>
          <li><a href="#experience" onClick={() => scrollTo("experience")}>Experience</a></li>
          <li><a href="#projects" onClick={() => scrollTo("projects")}>Projects</a></li>
          <li><a href="#skills" onClick={() => scrollTo("skills")}>Skills</a></li>
          <li><a href="#education" onClick={() => scrollTo("education")}>Education</a></li>
        </ul>
      )}
    </nav>
  );
}