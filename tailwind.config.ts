import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bash-green': '#00ff00',
        'consolas': "#5271ff"
      },
      fontFamily: {
        'mono': ['Ubuntu Mono', 'monospace'],
      },
      fontSize: {
        'ascii-sm': '0.4rem'
      }
    },
  },
  plugins: [],
};
export default config;
