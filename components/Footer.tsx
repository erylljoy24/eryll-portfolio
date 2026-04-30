import styles from "./Footer.module.css";
import { profile } from "@/lib/data";

export default function Footer() {
  const { contact } = profile;
  return (
    <footer className={styles.main}>
      <div className={styles.footer}>
        {contact.email} &nbsp;·&nbsp; {contact.location} &nbsp;·&nbsp; Available for opportunities
      </div>
    </footer>
  );
}
