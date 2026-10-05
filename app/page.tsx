import Link from "next/link";

export default function Page() {
  return (
    <main style={styles.page}>

      {/* HEADER */}
      <header style={styles.header}>
        <div>
          <h1 style={styles.name}>
            <Link href="/" style={styles.nameLink}>
              MARINA IOSIFYAN
            </Link>
          </h1>

          <p style={styles.subtitle}>
            Cognitive & Social Psychology | Art and Aesthetics
          </p>
        </div>

        <nav style={styles.nav}>
          <a style={styles.link} href="/about">ABOUT</a>
          <a style={styles.link} href="/research">RESEARCH</a>
          <a style={styles.link} href="/publications">PUBLICATIONS</a>
          <a style={styles.link} href="/activities">ACTIVITIES</a>
        </nav>
      </header>

      {/* CONTENT */}
      <section style={styles.content}>

        <div style={styles.textBlock}>
          <p style={styles.text}>
            My research examines the interaction between social and cognitive psychology.
            I am interested in how the interpretation of the same information—about objects,
            people, and events—varies depending on the social context in which it is encountered.
          
          </p>

          <div style={styles.divider} />

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Dr. Marina Iosifyan</h2>

            <p>
              <a
                href="https://orcid.org/0000-0002-6617-5116"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                https://orcid.org/0000-0002-6617-5116
              </a>
            </p>

            <p>contact: marina.iosifyan@gmail.com</p>
          </div>
        </div>

        <div style={styles.imageBlock}>
          <img
            src="/papers-on-the-grass.jpeg"
            alt="papers on the grass"
            style={styles.image}
          />
        </div>

      </section>
    </main>
  );
}

/* STYLES */
const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    color: "#111",
    backgroundColor: "#fff",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "30px 60px",
    position: "relative",
    zIndex: 10,
  },

  name: {
    margin: 0,
    fontSize: "28px",
    letterSpacing: "1px",
  },

  nameLink: {
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
    display: "inline-block",
  },

  subtitle: {
    margin: "5px 0 0 0",
    fontSize: "18px",
    color: "#444",
  },

  nav: {
    display: "flex",
    gap: "20px",
  },

  link: {
    textDecoration: "none",
    color: "#111",
    fontWeight: 500,
    fontSize: "20px",
  },

  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "80px",
    padding: "40px 60px 40px 20px",
  },

  textBlock: {
    maxWidth: "420px",
    fontSize: "18px",
    lineHeight: 1.7,
  },

  text: {
    margin: 0,
  },

  divider: {
    height: "3px",
    backgroundColor: "#ccc",
    margin: "30px 0",
    width: "100%",
  },

  card: {
    marginTop: "10px",
  },

  cardTitle: {
    margin: "0 0 10px 0",
  },

  imageBlock: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  image: {
    width: "520px",
    maxWidth: "100%",
    objectFit: "cover",
  },
};