import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Luxury Fintech Pink palette
        "luxury-pink": "hsl(330, 100%, 60%)",
        "deep-rose": "hsl(330, 80%, 35%)",
        "matte-black": "hsl(260, 10%, 6%)",
        "charcoal": "hsl(260, 15%, 10%)",
        "soft-white": "hsl(240, 6%, 97%)",
        "pink-glow": "hsla(330, 100%, 60%, 0.6)",
        "paygo-purple": "#FF4FA3",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        'glow': '0 0 30px hsla(330, 100%, 60%, 0.3)',
        'glow-lg': '0 0 50px hsla(330, 100%, 60%, 0.4)',
        'glow-sm': '0 0 15px hsla(330, 100%, 60%, 0.2)',
        'card': '0 8px 32px hsla(0, 0%, 0%, 0.4)',
        'button': '0 4px 20px hsla(330, 100%, 60%, 0.4)',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, hsl(260, 10%, 6%) 0%, hsl(260, 15%, 10%) 50%, hsl(330, 80%, 15%) 100%)',
        'gradient-pink': 'linear-gradient(135deg, hsl(330, 100%, 60%) 0%, hsl(330, 80%, 35%) 100%)',
        'gradient-dark': 'linear-gradient(180deg, hsl(260, 10%, 6%) 0%, hsl(260, 15%, 10%) 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, hsla(330, 100%, 60%, 0.15) 0%, transparent 70%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsla(330, 100%, 60%, 0.3)" },
          "50%": { boxShadow: "0 0 40px hsla(330, 100%, 60%, 0.5)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.3s ease-out forwards",
        "slide-in": "slide-in 0.4s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "count-up": "count-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
