import styles from "./Projects.module.css";
import { projects } from "@/lib/data";
import SectionLabel from "./SectionLabel";

const badgeLabels = {
  inprogress: "In Progress",
  done: "Done",
  placeholder: "Placeholder",
};

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <SectionLabel>Personal projects</SectionLabel>
      {projects.map((proj, i) => (
        <div
          key={i}
          className={`${styles.item} ${proj.status === "placeholder" ? styles.placeholder : ""}`}
        >
          <div className={styles.header}>
            <div>
              <div className={styles.name}>{proj.name}</div>
              <div className={styles.stack}>{proj.stack}</div>
            </div>
            <span className={`${styles.badge} ${styles[proj.status]}`}>
              {badgeLabels[proj.status]}
            </span>
          </div>
          <div className={styles.desc}>{proj.description}</div>
          <div className={styles.links}>
            {proj.liveUrl && (
              <a href={proj.liveUrl} className={`${styles.link} ${styles.live}`}>
                Live: your-project.vercel.app
              </a>
            )}
            {proj.githubUrl && (
              <a href={proj.githubUrl} className={styles.link}>
                GitHub: github.com/eryllsalamanes/project-name
              </a>
            )}
          </div>
        </div>
      ))}
      <p className={styles.note}>— replace placeholders with your real projects —</p>
    </section>
  );
}
