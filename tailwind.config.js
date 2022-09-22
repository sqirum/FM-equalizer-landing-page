/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  purge: [
    './**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-mobile': "url('/assets/bg-main-mobile.png')",
        'bg-tablet': "url('/assets/bg-main-tablet.png')",
        'bg-desktop': "url('/assets/bg-main-desktop.png')",
        'bg-pattern-1': "url('/assets/bg-pattern-1.svg')",
        'bg-pattern-2': "url('/assets/bg-pattern-2.svg')"
      }
    },
  },
  plugins: [],
}
