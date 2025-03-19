import { getLevel, getLevels, getPlayers } from "../utils/loaders";
import App from "../App";
import StartScreen from "../components/StartScreen";
import { createBrowserRouter, RouterProvider } from "react-router";
import Game, { handleSubmitTarget } from "../components/Game";
import HighScore from "../components/Highscore";

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <App />,
      path: "/",
      children: [
        {
          element: <StartScreen />,
          path: "/",
          loader: getLevels,
        },
        {
          element: <Game />,
          path: "/game/:id",
          loader: getLevel,
          action: handleSubmitTarget,
        },
        {
          element: <HighScore />,
          path: "/game/highscore",
          loader: getPlayers,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
