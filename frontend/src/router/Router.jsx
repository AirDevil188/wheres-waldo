import { getLevels } from "../utils/loaders";
import App from "../App";
import StartScreen from "../components/StartScreen";
import { createBrowserRouter, RouterProvider } from "react-router";

const Router = () => {
  const router = createBrowserRouter(
    [
      {
        element: <App />,
        path: "/",
        children: [
          {
            element: <StartScreen />,
            path: "/",
            loader: getLevels,
          },
        ],
      },
    ],
    {}
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
