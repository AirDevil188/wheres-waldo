import { getLevel, getLevels } from "../utils/loaders";
import App from "../App";
import StartScreen from "../components/StartScreen";
import { createBrowserRouter, RouterProvider } from "react-router";
import Game, { handleSubmitTarget } from "../components/Game";

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
