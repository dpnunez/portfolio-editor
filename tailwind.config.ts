import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        sidebar: "20rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "editor-divider": "var(--editor-divider)",
        "editor-text-primary": "var(--editor-text-primary)",
        "editor-text-secondary": "var(--editor-text-secondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
