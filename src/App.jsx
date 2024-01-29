import { Outlet } from "react-router-dom";
import "./App.css";
import Navber from "./components/Nav/Navber";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
