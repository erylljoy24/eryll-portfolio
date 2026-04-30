import styles from "./Stats.module.css";
import { stats } from "@/lib/data";
import SectionLabel from "./SectionLabel";

export default function Stats() {
  return (
    <section className={styles.section}>
      <SectionLabel>At a glance</SectionLabel>
      <div className={styles.grid}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.value}>{s.value}</div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
