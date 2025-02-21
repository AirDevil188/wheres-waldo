import { useLoaderData } from "react-router";
import styles from "./StartScreen.module.css";

const StartScreen = () => {
  const levels = useLoaderData();

  return (
    <main>
      <section className={styles.startScreenSection}>
        {levels
          ? levels.map((level) => {
              return (
                <a href={`game/${level.id}`} key={level.id}>
                  <article className={styles.boxContainer}>
                    <section className={styles.gameNameSection}>
                      <p>{level.level}</p>
                    </section>
                  </article>
                </a>
              );
            })
          : null}
      </section>
    </main>
  );
};

export default StartScreen;
