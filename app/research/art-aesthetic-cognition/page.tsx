import Header from "../../components/Header";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.content}>
        <h1 className={styles.title}>
          Art, Aesthetic Cognition & Creativity
        </h1>

        <p>
          My research examines the cognitive effects of art, including its
          effects on creative thinking, attention, interpretation, and
          meaning-making. I study how presenting an object, image, text, or
          sound as art changes the way people interpret and experience it.
        </p>

        <p>
          This research was inspired by the tradition of readymade art,
          including works by artists such as Maurizio Cattelan, who often
          transforms everyday objects into artworks. Such works can appear
          provocative, but they also reveal how strongly context shapes
          perception and interpretation. They raise a fundamental question:
          what happens when an everyday object is presented as art, or when an
          artwork is presented as an ordinary object? In my research, I use
          similar manipulations experimentally, presenting visual and
          linguistic stimuli in either an art or an everyday context.
        </p>

        <p>
          My findings show that an art context changes how people make sense of
          information. It increases the tendency to move beyond literal
          interpretations and attribute symbolic or broader meanings to
          objects and texts. It can also increase the perceived meaningfulness
          of seemingly meaningless information, and enhance the ability to
          connect elements that are only remotely related. This provides a
          link between aesthetic cognition and creative thinking, as creativity
          often involves finding connections between seemingly unrelated ideas
          or objects.
        </p>

        <div className={styles.imageBlock}>
          <img
            src="/Noncongruent.png"
            alt="Art context and meaning-making"
            className={styles.firstImage}
          />
        </div>

        <p>
          Art, however, is not only a matter of context. I also study how
          artistic techniques shape viewers’ attention, emotional experience,
          empathy, and interpretation. In visual art, I study iconography, an
          ancient tradition that has had a major influence on the development
          of visual arts. I study how techniques used by iconographers,
          including the representation of faces and the organisation of visual
          composition, influence emotional engagement, empathy, and experience
          of psychological distance. In literary arts, I investigate poetic
          techniques that are uncommon or absent in everyday language, such as
          metre, rhyme, and lineation, and how they influence attention and the
          interpretation of language.
        </p>

        <p>
          My approach to aesthetic cognition is fundamentally interdisciplinary
          because understanding art requires bringing together perspectives
          from psychology, cognitive science, neuroscience, philosophy, the
          arts, and other fields. To foster this approach, I co-organised the
          multidisciplinary Art in Conversation seminar series, which brought
          together artists, practitioners, and academics from different
          disciplines to discuss fundamental topics including the sublime,
          embodied cognition and imagination. It also featured a special
          series dedicated to synaesthesia to reflect the importance of
          multisensory experiences in art and creativity.
        </p>

        <div className={styles.imageBlock}>
          <img
            src="/Synaesthesia.png"
            alt="Synaesthesia and multisensory experiences"
            className={styles.image}
          />
        </div>

        <h2 className={styles.secondTitle}>
          Multisensory Perception & Embodied Cognition
        </h2>

        <p>
          While a significant amount of psychological research focuses on
          vision, our experience of the world is fundamentally multisensory.
          My research examines how information from different sensory
          modalities becomes connected. To do this, I investigate cross-modal
          associations between simple sensory experiences and complex
          aesthetic concepts. For example, how simple sensations of touch can
          become associated with categories such as the comic and the tragic,
          or the beautiful and the ugly. I further try to understand why these
          associations occur. My research examines semantic and emotional
          mechanisms that may connect experiences across sensory modalities.
          For example, sensory experiences may become associated because they
          share emotional or semantic properties, such as happiness and
          sadness, or bravery and cowardice.
        </p>

        <p>
          More recently, I have investigated embodiment as another mechanism
          underlying cross-modal associations. This work examines how
          associations with bodily experience can explain connections between
          sensory modalities.
        </p>
      </section>
    </main>
  );
}