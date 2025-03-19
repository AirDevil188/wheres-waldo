import { useLoaderData } from "react-router";
import styles from "./Highscore.module.css";

const HighScore = () => {
  const players = useLoaderData();
  return (
    <main>
      <section className={styles.titleSection}>
        <h3>High Scores</h3>
      </section>

      <section className={styles.highScoreSection}>
        {players ? (
          <table>
            <thead>
              <tr>
                <th scope="col">Player</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {players
                ? players.map((player) => {
                    return (
                      <tr key={player.id}>
                        <th scope="row">{player.username}</th>
                        <td>{player.score / 1000} seconds</td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        ) : (
          <section className={styles.titleSection}>
            <h3>There are no High Scores!</h3>
          </section>
        )}
      </section>
    </main>
  );
};

export default HighScore;
