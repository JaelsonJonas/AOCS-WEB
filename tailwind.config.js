/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },colors: {
        'blue': "#4B5CF5",
        'blue-light': '#B8C4CB',
        'white': "#FFFFFF66",
        'dark-blue': '#151C59',
        'background': '#9FC2D5',
        'blue': '#4B5CF5',
        'title-color': '#151C59',
        'red': {
          '50': '#fff0f0',
          '100': '#ffdddd',
          '200': '#ffc1c1',
          '300': '#ff9595',
          '400': '#ff5959',
          '500': '#ff2525',
          '600': '#fd0c0c',
          '700': '#d50000',
          '800': '#b00404',
          '900': '#910b0b',
          '950': '#500000',
        },
        'vida-loca': {
          '50': '#f1fbea',
          '100': '#e0f7d0',
          '200': '#c3efa7',
          '300': '#9de274',
          '400': '#79d348',
          '500': '#5ab82a',
          '600': '#4ba421',
          '700': '#34701b',
          '800': '#2e591b',
          '900': '#284c1b',
          '950': '#12290a',
        },
        'placeHolder': '#8A8484',
        'link': '#2335DD',
        'white2': {
          '50': '#ffffff',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
        'blue-zodiac': {
          '50': '#ebf4ff',
          '100': '#dbeaff',
          '200': '#bed8ff',
          '300': '#97bcff',
          '400': '#6e95ff',
          '500': '#4d6eff',
          '600': '#2d44fe',
          '700': '#2132e1',
          '800': '#1e2eb5',
          '900': '#212f8e',
          '950': '#151c59',
        },
  
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}