import styles from "./Game.module.css";
const Game = () => {
  return (
    <>
      <section className={styles.gameSection}>
        <img src="../src/assets/artworks/artwork_bg.webp" alt="" />
      </section>
      <section className={styles.characterSelectMenu}>
        <form action="" method="post">
          <button>Example</button>
          <button>Example</button>
          <button>Example</button>
        </form>
      </section>
    </>
  );
};

export default Game;
