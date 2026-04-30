import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <main className={styles.port}>
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
