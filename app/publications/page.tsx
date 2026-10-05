import Header from "../components/Header";
import "../publications.css";

const aestheticPapers = [
  {
    image: "/Irrelevance-eye.png",
    title: "Irrelevance Processing in Creativity and Aberrant Salience",
    link: null,
    note: "Paper currently under review, preprint will appear here soon",
  },
  {
    image: "/Distance-BSM.png",
    title: "Psychological Distance Shapes Bodily Sensation Patterns",
    link: null,
    note: "Paper currently under review, preprint will appear here soon",
  },
  {
    image: "/Indeterminant-art.png",
    title:
      "Art Context Effects on Social Meaning Attribution: The Role of AI Authorship, Human Authorship, and Divine Inspiration",
    link: null,
    note: "Paper currently under review, preprint will appear here soon",
  },
  {
    image: "/Poetry-Eye.png",
    title:
      "Sense and Sound: How Semantic, Phonological, and Visual Structure Characteristics Shape Eye Movements in Poetry",
    link: null,
    note: "Paper currently under review, preprint will appear here soon",
  },
  {
    image: "/Icons-and-lips.png",
    title:
      "Perceiving Mixed Emotions in Christian Icons: The Role of Mouth Depiction.",
    link: null,
    note: "Paper currently under review, preprint will appear here soon",
  },
  {
    image: "/BSM-and-art.png",
    title: "Ready-Made Bodily Sensations",
    link: "https://doi.org/10.1038/s41598-025-14061-5",
  },
  {
    image: "/iconmary.jpeg",
    title:
      "Icons and paintings: Differences in psychological distance, empathy, and the feeling of personal communication",
    link: "https://doi.org/10.1037/rel0000551",
  },
  {
    image: "/Art-Meaning.png",
    title:
      "Meaning Making in an Art Context Affects Semantic Distance: The Case of Semantic Inconsistencies in Written Language.",
    link: "https://doi.org/10.1016/j.tsc.2025.101788",
  },
  {
    image: "/Art-buffering.png",
    title:
      "Buffering effect of fiction on negative emotions: engagement with negatively valenced fiction decreases the intensity of negative emotions.",
    link: "https://doi.org/10.1080/02699931.2024.2314986",
  },
  {
    image: "/Noncongruent.png",
    title:
      "Perceived Meaningfulness of Semantically Noncongruent Stimuli Increases in Art Context",
    link: "https://doi.org/10.1163/22134913-bja10065",
  },
  {
    image: "/Ceci-ne-pas-une-pipe.png",
    title:
      "Everyday life vs art: Effects of framing on the mode of object interpretation.",
    link: "https://doi.org/10.1177/02762374231170259",
  },
  {
    image: "/Painting-Sound.png",
    title:
      "Cross-modal associations between paintings and sounds: Effects of embodiment",
    link: "https://doi.org/10.1177/03010066221126452",
  },
  {
    image: "/Theory-of-mind.png",
    title:
      "Theory of Mind Increases Aesthetic Appreciation in Visual Arts",
    link: "https://doi.org/10.1163/22134913-bja10011",
  },
  {
    image: "/Comic-and-tragic.png",
    title:
      "Crossmodal Associations between Cinema with Elements of Comic and Tragic and Texture Touch",
    link: "https://doi.org/10.1163/22134913-bja10004",
  },
  {
    image: "/Neural-mechanisms.png",
    title:
      "Neural Mechanisms of Theory of Mind in Autism and Schizophrenia: A Review of fMRI Studies.",
    link:
      "https://www.semanticscholar.org/paper/Neural-Mechanisms-of-Theory-of-Mind-in-Autism-and-A-Iosifyan-Mershina/5845456b97b8835d4ec309ec6b384f511b80640e",
  },
  {
    image: "/Flows-the-Don.png",
    title:
      "And Quiet Flows the Don: the Sholokhov-Kryukov authorship debate.",
    link: "https://doi.org/10.1093/llc/fqz017",
  },
  {
    image: "/Emotion-textures.png",
    title: "Emotions associated with different textures during touch.",
    link: "https://doi.org/10.1016/j.concog.2019.03.012",
  },
  {
    image: "/Multisensory.png",
    title:
      "Emotional and semantic associations between cinematographic aesthetics and haptic perception",
    link: "https://doi.org/10.1163/22134808-00002597",
  },
];

const socialHealthPapers = [
  {
    image: "/Values-and-Social-groups.jpg",
    title:
      "How personal and perceived values underpin prejudice against 24 social groups",
    link: null,
  },
  {
    image: "/Teenagers-attitudes.png",
    title:
      "How do Adults Think, Feel, and Behave Toward Teenagers? Measuring and Understanding Adults’ Attitudes Toward Teenagers.",
    link: "https://doi.org/10.1177/19485506251377502",
  },
  {
    image: "/Children-Environment.png",
    title:
      "What about the children? The effectiveness of including children in environmental appeals.",
    link: "https://doi.org/10.1016/j.jenvp.2023.102195",
  },
  {
    image: "/Attitudes-children.png",
    title: "Attitudes toward children: Distinguishing affection and stress",
    link: "https://doi.org/10.1111/jopy.12854",
  },
  {
    image: "/Values-and-threats.png",
    title: "Perceived value threats are related to fear of health impairments.",
    link: "https://doi.org/10.1080/00224545.2021.1979453",
  },
  {
    image: "/Beliefs-COVID.png",
    title:
      "Beliefs about COVID-19 as a threat to values are related to preventive behaviors and fear of COVID-19.",
    link: "https://doi.org/10.1177/13591053221142348",
  },
  {
    image: "/Child-salience.png",
    title: "The salience of children increases adult prosocial values.",
    link: "https://doi.org/10.1177/19485506211007605",
  },
  {
    image: "/NIV.png",
    title:
      "“I had the feeling that I was trapped”: a bedside qualitative study of cognitive and affective attitudes toward noninvasive ventilation in patients with acute respiratory failure",
    link: "https://doi.org/10.1186/s13613-019-0608-6",
  },
  {
    image: "/Cross-cultural.png",
    title:
      "Values, coping strategies, and psychopathological symptoms among adolescents with asthma: a Cross-cultural study.",
    link: "https://doi.org/10.1177/0022022116636686",
  },
];

function PaperCard({
  paper,
}: {
  paper: {
    image: string;
    title: string;
    link: string | null;
    note?: string;
  };
}) {
  const content = (
    <>
      <div className="image-container">
        <img src={paper.image} alt="" />
      </div>

      <h2>{paper.title}</h2>

      {paper.note && (
        <p className="paper-note">{paper.note}</p>
      )}
    </>
  );

  if (paper.link) {
    return (
      <a
        href={paper.link}
        target="_blank"
        rel="noopener noreferrer"
        className="paper-card clickable"
      >
        {content}
      </a>
    );
  }

  return <div className="paper-card">{content}</div>;
}

export default function Publications() {
  return (
    <main style={styles.page}>
      <Header />

      {/* PUBLICATIONS CONTENT */}
      <section className="publications-page">
        <h1>Publications</h1>

        <section>
          <h3>
            Papers in aesthetic cognition, arts and multi-sensory perception:
          </h3>

          <div className="papers-grid">
            {aestheticPapers.map((paper, index) => (
              <PaperCard key={index} paper={paper} />
            ))}
          </div>
        </section>

        <section className="second-section">
          <h3>Papers in Social and Health psychology:</h3>

          <div className="papers-grid">
            {socialHealthPapers.map((paper, index) => (
              <PaperCard key={index} paper={paper} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "Helvetica Neue, Arial, sans-serif",
    color: "#111",
    backgroundColor: "#fff",
  },
};