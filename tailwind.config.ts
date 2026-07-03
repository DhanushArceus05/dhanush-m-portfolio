import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0B1120",
        glass: "rgba(255,255,255,0.06)",
        primary: "#6C63FF",
        secondary: "#00F5FF",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        foreground: "#FFFFFF",
        "muted-foreground": "#94A3B8",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
      },
    },
  },
  plugins: [],
} satisfies Config;
