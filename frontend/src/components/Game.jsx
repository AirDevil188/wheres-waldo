import { useEffect, useRef, useState } from "react";
import styles from "./Game.module.css";
import { redirect, useFetcher, useLoaderData, useParams } from "react-router";
import { handleFetch } from "../utils/handleFetch";
import { TiTick } from "react-icons/ti";
import Stopwatch from "../components/Stopwatch";
import { getCoordinates } from "../utils/coordinates";
import GameWinningScreen from "./GameWinningScreen";

const Game = () => {
  const game = useLoaderData();
  const fetcher = useFetcher();
  const params = useParams();

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [charMenu, setCharMenu] = useState(false);
  const [targets, setTargets] = useState(game ? game.characters : null);
  const [gameStatus, setGameStatus] = useState("playing");

  const ref = useRef(null);
  const coordinates = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (fetcher.data) {
      const foundTarget = targets.map((target) => {
        if (target.id === fetcher.data.id) {
          setScore(score + 1);
          return {
            ...target,
            found: true,
          };
        } else return target;
      });
      setTargets(foundTarget);
    }

    setCharMenu(false);
    ref.current.style.display = "none";
  }, [fetcher.data]);

  useEffect(() => {
    if (score === targets.length) {
      setGameStatus("finished");
    }
  });

  const handleCharMenu = (e) => {
    setCharMenu(!charMenu);
    ref.current.style.display = "block";
    ref.current.style.left = e.pageX + "px";
    ref.current.style.right = e.pageX + "px";
    ref.current.style.top = e.pageY + "px";
    ref.current.style.bottom = e.pageY + "px";

    const coords = getCoordinates(e);

    coordinates.current = {
      x: coords.x,
      y: coords.y,
    };
    console.log(coords);
  };

  const handleSubmit = async () => {};

  return (
    <main>
      <section className={styles.gameStatus}>
        <h3>
          Targets Found: {score} / {targets.length}
        </h3>
        <Stopwatch gameStatus={gameStatus} setTime={setTime}></Stopwatch>
      </section>
      <section className={styles.targetCharactersSection}>
        {targets
          ? targets.map((character) => {
              if (character.found) {
                return (
                  <figure className={styles.character} key={character.id}>
                    <section>
                      <p>{character.name}</p>
                    </section>
                    <section className={styles.iconBoxSection}>
                      <img src={character.image} alt={character.name} />
                      <TiTick
                        size={70}
                        style={{
                          position: "absolute",
                          alignSelf: "center",
                          fill: "green",
                        }}
                      ></TiTick>
                    </section>
                  </figure>
                );
              }
              return (
                <figure className={styles.character} key={character.id}>
                  <section>
                    <p>{character.name}</p>
                  </section>
                  <section>
                    <img src={character.image} alt={character.name} />
                  </section>
                </figure>
              );
            })
          : null}
      </section>
      <section
        className={styles.gameSection}
        onClick={gameStatus === "playing" ? handleCharMenu : null}
      >
        {gameStatus === "playing" ? (
          <img src={game.level.imageUrl} alt="Game Artwork" />
        ) : null}
      </section>
      <section className={styles.characterSelectMenu} ref={ref}>
        <fetcher.Form
          method="post"
          onSubmit={handleSubmit}
          action={`/game/${params}`}
        >
          <input type="hidden" name="cordX" value={coordinates.current.x} />
          <input type="hidden" name="cordY" value={coordinates.current.y} />
          {targets
            ? targets.map((character) => {
                if (character.found) {
                  return (
                    <div key={character.id}>
                      <input
                        type="submit"
                        value={character.name}
                        id={character.id}
                        disabled={true}
                      />
                    </div>
                  );
                }
                return (
                  <div key={character.id}>
                    <input
                      type="submit"
                      value={character.name}
                      id={character.id}
                      name={"intent"}
                    />
                  </div>
                );
              })
            : null}
        </fetcher.Form>
      </section>

      <>
        {gameStatus !== "playing" ? (
          <GameWinningScreen gameScore={time} fetcher={fetcher} />
        ) : null}
      </>
    </main>
  );
};

export default Game;

export const handleSubmitTarget = async ({ request, params }) => {
  const { id } = params;
  const formData = await request.formData();
  const button = formData.get("intent");
  const submission = {
    target: formData.get("intent"),
    cordX: formData.get("cordX"),
    cordY: formData.get("cordY"),
  };
  const winnerSubmission = {
    username: formData.get("username"),
    score: Number(formData.get("score")),
  };
  switch (true) {
    case button == "won":
      (
        await handleFetch(`/game/${id}/winner`, winnerSubmission, "post")
      ).json();
      return redirect("/game/highscore");
    case button !== "won":
      return (await handleFetch(`/game/${id}`, submission, "post")).json();
  }
};
