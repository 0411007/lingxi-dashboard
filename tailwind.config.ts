import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        // Lingxi Custom Colors
        lingxi: {
          purple: "rgb(var(--lingxi-purple) / <alpha-value>)",
          "purple-light": "rgb(var(--lingxi-purple-light) / <alpha-value>)",
          mint: "rgb(var(--lingxi-mint) / <alpha-value>)",
          lavender: "rgb(var(--lingxi-lavender) / <alpha-value>)",
          rose: "rgb(var(--lingxi-rose) / <alpha-value>)",
          "page-bg": "rgb(var(--lingxi-page-bg) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sc)", "var(--font-inter)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(124, 140, 255, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.04)",
        float: "0 10px 40px -10px rgba(124, 140, 255, 0.3)",
        card: "0 8px 30px -8px rgba(124, 140, 255, 0.12)",
        glow: "0 0 30px rgba(124, 140, 255, 0.2)",
      },
      animation: {
        "slide-up": "slideUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
