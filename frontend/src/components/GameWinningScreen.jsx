import styles from "./GameWinningScreen.module.css";
import Button from "./Button";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const GameWinningScreen = ({ gameScore, fetcher }) => {
  return (
    <dialog open className={styles.modalOpen}>
      <section className={styles.winningHeading}>
        <h3>You have won!</h3>
      </section>
      <section className={styles.scoreSection}>
        <h3>Your score is: {gameScore / 1000} seconds</h3>
      </section>
      <fetcher.Form method="post">
        <label htmlFor="username">Name: </label>
        <input type="text" id="username" name="username" required={true} />
        <input type="hidden" name="score" value={gameScore} id="score" />
        {fetcher.data?.errors
          ? fetcher.data.errors.map((error) => {
              return (
                <section className={styles.errorSection} key={uuidv4()}>
                  <p>{error.msg}</p>
                </section>
              );
            })
          : null}
        <Button
          name={"intent"}
          type="submit"
          text={"SUBMIT"}
          value={"won"}
        ></Button>
      </fetcher.Form>
    </dialog>
  );
};

GameWinningScreen.propTypes = {
  gameScore: PropTypes.number.isRequired,
  fetcher: PropTypes.object.isRequired,
};

export default GameWinningScreen;
