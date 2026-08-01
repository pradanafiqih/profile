import type { Config } from "tailwindcss";

/**
 * Token terkunci. Jangan tambah warna atau ukuran font di luar daftar ini.
 * Sumber: .kiro/steering/design-system.md
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        paper: "var(--paper)",
        "paper-alt": "var(--paper-alt)",
        rule: "var(--rule)",
        accent: "var(--accent)",
      },
      fontFamily: {
        // Dua keluarga font, self-hosted via next/font (R9.5).
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Skala terkunci: 14 / 16 / 18 / 24 / 32 / 48 / 64
        xs: ["14px", { lineHeight: "1.6" }],
        sm: ["16px", { lineHeight: "1.6" }],
        base: ["18px", { lineHeight: "1.6" }],
        lg: ["24px", { lineHeight: "1.4" }],
        xl: ["32px", { lineHeight: "1.2" }],
        "2xl": ["48px", { lineHeight: "1.1" }],
        "3xl": ["64px", { lineHeight: "1.05" }],
      },
      maxWidth: {
        prose: "68ch",
        content: "1120px",
      },
      spacing: {
        section: "96px",
        "section-mobile": "56px",
      },
    },
  },
  plugins: [],
};

export default config;
