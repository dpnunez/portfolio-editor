"use client";
import { useTheme } from "next-themes";

import "@/styles/baseThemes/dark.css";
import "@/styles/baseThemes/light.css";

import "@/styles/themes/github/dark.css";
import "@/styles/themes/github/light.css";

function ThemePicker() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => {
          console.log("dark");
          setTheme("github-dark");
        }}
      >
        Dark
      </button>
      <button onClick={() => setTheme("github-light")}>Light</button>
    </div>
  );
}

export { ThemePicker };
