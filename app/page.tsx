import Header from "./components/Header";

export default function Page() {
return <main style={styles.page}><Header /><section style={styles.content}><div style={styles.textBlock}><p style={styles.text}>My research examines the interaction between social and cognitive psychology. I am interested in how the interpretation of the same information—about objects, people, and events—varies depending on the social context in which it is encountered.</p><div style={styles.divider}></div><div style={styles.card}><h2 style={styles.cardTitle}>Dr. Marina Iosifyan</h2><p><a href="https://orcid.org/0000-0002-6617-5116" target="_blank" rel="noopener noreferrer" style={styles.link}>https://orcid.org/0000-0002-6617-5116</a></p><p>contact: [marina.iosifyan@gmail.com](mailto:marina.iosifyan@gmail.com)</p></div></div><div style={styles.imageBlock}><img src="/papers-on-the-grass.jpeg" alt="papers on the grass" style={styles.image} /></div></section></main>;
}

const styles: Record<string, React.CSSProperties> = {
page: { fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", color: "#111", backgroundColor: "#fff" },
content: { display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "80px", padding: "40px 60px 40px 20px" },
textBlock: { maxWidth: "420px", fontSize: "18px", lineHeight: 1.7 },
text: { margin: 0 },
divider: { height: "3px", backgroundColor: "#ccc", margin: "30px 0", width: "100%" },
card: { marginTop: "10px" },
cardTitle: { margin: "0 0 10px 0" },
link: { textDecoration: "none", color: "#111", fontWeight: 500 },
imageBlock: { display: "flex", alignItems: "flex-start", justifyContent: "center" },
image: { width: "520px", maxWidth: "100%", objectFit: "cover" },
};
