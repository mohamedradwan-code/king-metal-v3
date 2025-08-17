import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: "#1c1c1c",
        gold: "#d4af37"
      }
    },
  },
  plugins: [],
}
export default config
