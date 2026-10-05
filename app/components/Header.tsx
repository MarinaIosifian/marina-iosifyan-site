import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.name}>
          <Link href="/" className={styles.nameLink}>
            MARINA IOSIFYAN
          </Link>
        </h1>

        <p className={styles.subtitle}>
          Cognitive & Social Psychology | Art and Aesthetics
        </p>
      </div>

      <nav className={styles.nav}>
        <Link href="/about" className={styles.link}>
          ABOUT
        </Link>

        <div className={styles.researchMenu}>
          <span className={styles.researchLabel}>
            RESEARCH
          </span>

          <div className={styles.researchDropdown}>
            <Link href="/research/art-aesthetic-cognition">
              Art, Aesthetic Cognition & Creativity
            </Link>

            <Link href="/research/values-social-cognition">
              Values, Social Cognition & Decision-Making
            </Link>
          </div>
        </div>

        <Link href="/publications" className={styles.link}>
          PUBLICATIONS
        </Link>

        <Link href="/activities" className={styles.link}>
          ACTIVITIES
        </Link>
      </nav>
    </header>
  );
}