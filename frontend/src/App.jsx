import { Outlet } from "react-router";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
