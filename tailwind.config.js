/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '2048px',
        '5xl': '2400px',
        '6xl': '2560px',
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'heffer' : '70% 30% 75% 25% / 50% 33% 67% 50%',
      'subheffer' : '13% 87% 54% 46% / 56% 76% 24% 44%' ,
      'boxheffer' : ' 100% 56% 48% 100% / 100% 100% 70% 68%;',
      'xl' : '12px',
      '2xl': '16px',
    },
    animation: {
      'pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    }
  },
  plugins: [require("daisyui")],
}
