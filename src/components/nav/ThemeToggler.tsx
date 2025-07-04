import { useState, useEffect } from "react";
type Theme = "light" | "dark";
const ThemeToggler = () => {
  const [theme, setTheme] = useState<Theme>((localStorage.getItem("theme") as Theme) || "light");
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      aria-label="Theme Toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="dark:bg-black absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static"
    >
      {theme === "dark" ? (
        <img src="/src/images/icon/icon-sun.svg" alt="Sun Icon" width={22} height={22} />
      ) : (
        <img src="/src/images/icon/icon-moon.svg" alt="Moon Icon" width={21} height={21} />
      )}
    </button>
  );
};

export default ThemeToggler;
