import { createContext, useState } from "react";
export const AppContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("Dark"); 

  const toggleTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}
export default ThemeContextProvider;
