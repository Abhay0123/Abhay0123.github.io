import "./styles.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import { useContext } from "react";

import { AppContext } from "./Theme/ThemeContextProvider";
const style = {
  Light: {
    color: "black",
    backgroundColor: "white"
  },
  Dark: {
    color: "white",

    backgroundColor: "rgba(0, 0, 0, 0.929)"
  }
};
export default function App() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className="App" style={theme === "Dark" ? style.Dark : style.Light}>
      <Navbar />
      <AllRoutes />
    </div>
  );
}
