/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      black: {
        base: "#282828",
        active: "#928374"
      },
      red: {
        base: "#cc241d",
        active: "#fb4934"
      },
      green: {
        base: "#98971a",
        active: "#b8bb26"
      },
      yellow: {
        base: "#d79921",
        active: "#fabd2f"
      },
      blue: {
        base: "#458588",
        active: "#83a598"
      },
      purple: {
        base: "#b16286",
        active: "#d3869b"
      },
      aqua: {
        base: "#689d6a",
        active: "#8ec07c"
      },
      gray: {
        base: "#a89984",
        active: "#ebdbb2"
      }
    },
    fontFamily: {
      'mono': ['"Press Start 2P"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
    }
  },
  plugins: [],
}
