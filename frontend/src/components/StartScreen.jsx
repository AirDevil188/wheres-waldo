import styles from "./StartScreen.module.css";

const StartScreen = () => {
  return (
    <main>
      <section className={styles.startScreenSection}>
        <section className={styles.headingSection}>
          <h3>Choose a level: </h3>
        </section>
        <a href="game/1">
          <article className={styles.boxContainer}>
            <section className={styles.gameNameSection}>
              <p>EASY</p>
            </section>
          </article>
        </a>
        <a href="game/2">
          <article className={styles.boxContainer}>
            <section className={styles.gameNameSection}>
              <p>MEDIUM</p>
            </section>
          </article>
        </a>
        <a href="game/3">
          <article className={styles.boxContainer}>
            <section className={styles.gameNameSection}>
              <p>HARD</p>
            </section>
          </article>
        </a>
      </section>
    </main>
  );
};

export default StartScreen;
