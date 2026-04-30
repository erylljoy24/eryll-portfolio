import styles from "./Hero.module.css";
import { profile } from "@/lib/data";

export default function Hero() {
  const { firstName, lastName, tag, roles, summary, contact } = profile;

  return (
    <header className={styles.hero} id="about">
      <main className={styles.main}>
        <span className={styles.tag}>{tag}</span>
        <h1 className={styles.name}>
          {firstName}
          <br />
          <em>{lastName}</em>
        </h1>
        <div className={styles.role}>{roles.join(" · ")}</div>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.contactRow}>
          <span className={styles.ctag}>{contact.email}</span>
          <span className={styles.ctag}>{contact.phone}</span>
          <span className={styles.ctag}>{contact.location}</span>
          <span className={styles.ctag}>{contact.languages}</span>
        </div>
      </main>
    </header>
  );
}
