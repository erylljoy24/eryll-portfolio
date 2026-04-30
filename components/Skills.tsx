import styles from "./Skills.module.css";
import { skills } from "@/lib/data";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <SectionLabel>Skills</SectionLabel>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill.name} className={`${styles.chip} ${skill.hot ? styles.hot : ""}`}>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}
