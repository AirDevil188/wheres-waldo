import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import StartScreen from "../components/StartScreen";

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <StartScreen />,
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
