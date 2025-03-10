import { useLoaderData } from "react-router";
import styles from "./StartScreen.module.css";
import Button from "./Button";

const StartScreen = () => {
  const level = useLoaderData();

  return (
    <main className={styles.startScreenMainSection}>
      <section className={styles.startScreenSection}>
        <img
          src="https://res.cloudinary.com/ddxkbe6lh/image/upload/v1741620980/wheres_waldo/scvzsdovzhedjzwsrs91.svg"
          alt="logo"
          className={styles.logo}
        ></img>
        {level ? (
          <a href={`/game/${level.id}`}>
            <Button type="button" text={"Play"}></Button>
          </a>
        ) : null}
      </section>
    </main>
  );
};

export default StartScreen;
