import styles from "./Experience.module.css";
import { experiences } from "@/lib/data";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <SectionLabel>Work experience</SectionLabel>
      {experiences.map((exp) => (
        <div key={`${exp.company}-${exp.date}`} className={styles.item}>
          <div className={styles.header}>
            <div>
              <div className={styles.title}>{exp.title}</div>
              <div className={styles.company}>{exp.company}</div>
            </div>
            <div className={styles.date}>{exp.date}</div>
          </div>
          <ul className={styles.duties}>
            {exp.duties.map((duty, i) => (
              <li key={i}>{duty}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
