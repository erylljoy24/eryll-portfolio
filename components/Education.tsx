import styles from "./Education.module.css";
import { education } from "@/lib/data";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section className={styles.section} id="education">
      <SectionLabel>Education</SectionLabel>
      {education.map((edu) => (
        <div key={edu.school} className={styles.card}>
          <div>
            <div className={styles.school}>{edu.school}</div>
            <div className={styles.degree}>{edu.degree}</div>
          </div>
          <div className={styles.year}>{edu.year}</div>
        </div>
      ))}
    </section>
  );
}
