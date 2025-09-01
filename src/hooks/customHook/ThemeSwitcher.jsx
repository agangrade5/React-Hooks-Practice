import React from "react";
import useLocalStorage from "./useLocalStorage";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    console.log(theme + " "+ setTheme);
    return (
        <div>
            <h2>Current Theme: {theme}</h2>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>
        </div>
    );
};

export default ThemeSwitcher;
