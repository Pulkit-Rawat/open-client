import { useEffect, useState } from "react";

export const useThemeContext = () => {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    localStorage.setItem("theme", theme == "light" ? "dark" : "light");
    setTheme(theme == "light" ? "dark" : "light");
  };

  useEffect(() => {
    let mode = localStorage.getItem("theme");
    setTheme(mode);
  }, []);

  return {
    theme,
    toggleTheme,
  };
};
