import { useRef, useState } from "react";
import styles from "./Game.module.css";
const Game = () => {
  const [charMenu, setCharMenu] = useState(false);
  const ref = useRef(null);

  const handleCharMenu = (e) => {
    setCharMenu(!charMenu);
    ref.current.style.display = "block";
    ref.current.style.left = e.pageX + "px";
    ref.current.style.right = e.pageX + "px";
    ref.current.style.top = e.pageY + "px";
    ref.current.style.bottom = e.pageY + "px";
  };

  return (
    <>
      <section className={styles.gameSection} onClick={handleCharMenu}>
        <img src="../src/assets/artworks/artwork_bg.webp" alt="Game Artwork" />
      </section>
      <section className={styles.characterSelectMenu} ref={ref}>
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
